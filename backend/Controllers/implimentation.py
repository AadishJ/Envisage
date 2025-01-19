import sys
from web3 import Web3
from solcx import compile_standard
import json
from solcx import install_solc

install_solc("0.8.19")

# Connect to Ganache
ganache_url = "http://127.0.0.1:7545"  # Ganache RPC URL
web3 = Web3(Web3.HTTPProvider(ganache_url))

# Verify connection
if not web3.is_connected():
    print("Failed to connect to the blockchain!")
    exit()

print(f"Connected to blockchain. Block Number: {web3.eth.block_number}")

# Your account and private key (for signing transactions)
deployer_address = "0x0D7fD77467793f080D0Ff5D9fEF6b33701250dD2"
private_key = "0x5fc4f7615e7a55ad43868dc58cd7e276171995a86cbb3aa863d7b438d336ac40"

# Read the smart contract code
with open(
    "D:/Aadi/Coding/Web Development/Hackathon/Envisage/backend/Controllers/MyContract.sol",
    "r",
) as file:
    contract_source_code = file.read()

# Argument passed from Node.js
arg = sys.argv[1] if len(sys.argv) > 1 else "Hello, Blockchain!"

# Compile the contract
compiled_sol = compile_standard(
    {
        "language": "Solidity",
        "sources": {"MyContract.sol": {"content": contract_source_code}},
        "settings": {
            "outputSelection": {
                "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
            }
        },
    },
    solc_version="0.8.19",
)

# Save compiled contract for reference
with open("compiled_code.json", "w") as file:
    json.dump(compiled_sol, file)

# Extract ABI and bytecode
abi = compiled_sol["contracts"]["MyContract.sol"]["MyContract"]["abi"]
bytecode = compiled_sol["contracts"]["MyContract.sol"]["MyContract"]["evm"]["bytecode"][
    "object"
]

print("ABI and Bytecode fetched successfully.")

# Create a contract instance
MyContract = web3.eth.contract(abi=abi, bytecode=bytecode)

# Build the transaction
transaction = MyContract.constructor(arg).build_transaction(
    {
        "from": deployer_address,
        "nonce": web3.eth.get_transaction_count(deployer_address),
        "gas": 6000000,  # Increase gas limit
        "gasPrice": web3.to_wei("50", "gwei"),
    }
)

# Sign the transaction
signed_txn = web3.eth.account.sign_transaction(transaction, private_key)

# Send the transaction
try:
    tx_hash = web3.eth.send_raw_transaction(signed_txn.raw_transaction)
    print(f"Transaction Hash: {tx_hash}")
except Exception as e:
    print(f"Error sending transaction: {e}")
    exit()

# Wait for the transaction receipt
try:
    tx_receipt = web3.eth.wait_for_transaction_receipt(tx_hash, timeout=120)
    print(f"Transaction Receipt: {tx_receipt}")
except Exception as e:
    print(f"Error waiting for transaction receipt: {e}")
    exit()

# Display the contract address
print(f"Contract deployed at address: {tx_receipt.contractAddress}")

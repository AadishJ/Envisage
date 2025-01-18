import { spawn } from 'child_process';

const pythonProcess = spawn('python', ['implimentation.py']);

pythonProcess.stdout.on('data', (data) => {
    console.log(`Output: ${data}`);
});

pythonProcess.stdin.write('Hello from JS\n');

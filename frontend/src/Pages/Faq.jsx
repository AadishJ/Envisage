import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [
    {
        question: " What is this platform about?",
        answer: "This platform enables individuals to report incidents of corruption using blockchain technology. It ensures transparency, immutability, and anonymity while maintaining the authenticity of complaints.",
    },
    {
        question: "How is my privacy protected?",
        answer: "Our platform uses blockchain technology, which ensures that your complaint is stored securely and cannot be tampered with. Sensitive personal details are not made public.",
    },
    {
        question: "Why do I need to provide my Aadhaar number?",
        answer: "Your Aadhaar number is required to verify the authenticity of the complaint and prevent misuse of the platform. We ensure your personal data is securely handled.",
    },
    {
        question: "Can I submit a complaint anonymously?",
        answer: "Yes, while your Aadhaar is used for verification, your identity is not displayed publicly. Only the details of the complaint are visible.",
    },
    {
        question: "What kind of complaints can I register?",
        answer: "You can report any instance of corruption or malpractice you have faced, such as bribery, embezzlement, or misuse of public funds.",
    },
    {
        question: "How does blockchain technology help in fighting corruption?",
        answer: "Blockchain ensures that all complaints are recorded in an immutable ledger, which means they cannot be altered or deleted. This transparency discourages corruption and ensures accountability.",
    },
    {
        question: "Who can view the complaints?",
        answer: "All registered complaints are publicly accessible to promote transparency. However, personal details like your Aadhaar number or identity are never shared.",
    },
]
const Faq = () => {
    return (
        <div>
            {data.map((item, index) => (
                <Accordion key={index} style={{background: "#1f2937", color: "white", margin: 10}} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }}/>}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default Faq

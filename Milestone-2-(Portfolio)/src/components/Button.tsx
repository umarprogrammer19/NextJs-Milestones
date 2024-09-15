import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void; 
    href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, href }) => {
    return href ? (
        <a
            href={href}
            className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700"
        >
            {text}
        </a>
    ) : (
        <button
            onClick={onClick}
            className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700"
        >
            {text}
        </button>
    );
};

export default Button;

import React from 'react';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, type = 'button', onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg transition-all focus:outline-none ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

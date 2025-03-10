import React from 'react';

interface ButtonProps {
  label: string;
  onClick:() =>void;
}

const Button: React.FC<ButtonProps> = ({ label,onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center justify-center px-16 py-2 border-0 rounded-md bg-[#008BEC]">
      <h3 className="text-lg font-bold text-white">{label}</h3>
    </div>
  );
}

export default Button;

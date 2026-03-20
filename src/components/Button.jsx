import React from 'react';

const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-bold font-poppins text-base md:text-[17px] shadow-md transition-all hover:scale-[1.03]";
    
    const variants = {
        primary: "bg-brand-blue text-white hover:bg-brand-dark-blue",
        white: "bg-white text-brand-blue hover:bg-[#F4F6F9]",
        outline: "bg-transparent border-[1.5px] border-brand-blue text-brand-blue hover:bg-[#F4F6F9]",
        outlineWhite: "bg-transparent border-[1.5px] border-white text-white hover:bg-white/10"
    };

    return (
        <button 
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

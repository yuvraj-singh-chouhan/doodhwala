import React from 'react';

function SectionHeading({ children, className = '' }) {
    return (
        <h1 className={`font-[Ruksha] text-[38px] md:text-[40px] lg:text-[48px] text-brand-blue uppercase leading-none  mb-3 md:mb-5 drop-shadow-sm ${className}`}>
            {children}
        </h1>
    );
}

export default SectionHeading;

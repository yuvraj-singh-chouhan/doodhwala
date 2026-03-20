import React from 'react';

function Marquee() {
    // Array large enough to cover the screen 
    // We duplicate the text array twice within the flex container to seamlessly loop.
    const textItems = Array(12).fill("START YOUR FREE MORNING DELIVERY");

    return (
        <div className="w-full bg-[#EAF2FB] overflow-hidden py-[18px] md:py-[22px] flex relative z-10 border-y border-[#DCE8F7]">
            {/* The animated wrapper */}
            {/* -50% translation via animate-marquee causes the first half of the children to smoothly transition out, being perfectly replaced by the 2nd half. */}
            <div className="flex w-max shrink-0 animate-marquee">
                {/* First Segment */}
                {textItems.map((item, index) => (
                    <span key={`first-${index}`} className="font-poppins font-bold text-[#5773A0] text-[15px] md:text-[17px] tracking-[0.15em] px-8 md:px-12 whitespace-nowrap">
                        {item}
                    </span>
                ))}
                {/* Second Segment (Identical Clone for Seamless Loop) */}
                {textItems.map((item, index) => (
                    <span key={`second-${index}`} className="font-poppins font-bold text-[#5773A0] text-[15px] md:text-[17px] tracking-[0.15em] px-8 md:px-12 whitespace-nowrap">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Marquee;

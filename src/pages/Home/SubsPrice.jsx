import React from 'react';

function SubsPrice() {
    return (
        <section className="container mx-auto px-3 md:px-16 py-12 md:py-24 overflow-hidden bg-white">

            {/* Desktop View */}
            <div className="hidden md:flex relative w-full mx-auto bg-[#EAF2FB] rounded-[30px] md:rounded-[40px] flex-col md:flex-row items-center justify-center p-10 md:p-0 md:h-[180px] lg:h-[310px] border border-blue-50 shadow-sm mt-8 mb-16">

                {/* Left Cow Character */}
                <img
                    src="/SubsPrice/subs-price-cow1.png"
                    alt="Cow Character"
                    className="absolute md:-bottom-1 md:-left-[5%] lg:-left-[8%] h-[180px] md:h-[220px] lg:h-[280px] w-auto object-contain z-10 mb-8 md:mb-0"
                />

                {/* Center Content Group */}
                <div className="h-full flex flex-col md:flex-row items-center justify-center w-full z-20 md:px-[140px] lg:px-[180px]">

                    {/* Cow Milk Price Group */}
                    <div className="flex flex-col items-center flex-1 w-full flex-shrink-0 md:w-auto">
                        <h3 className="font-[Ruksha] text-[34px] md:text-[36px] lg:text-[44px] font-bold text-[#45628a] uppercase leading-none tracking-wide text-center drop-shadow-sm">
                            Cow Milk:
                        </h3>
                        <p className="font-[Ruksha] text-[22px] md:text-[22px] lg:text-[26px] font-bold text-[#45628a] uppercase tracking-wide mt-2 md:mt-1 opacity-95 text-center drop-shadow-sm">
                            Rs.90 per litre
                        </p>
                    </div>

                    {/* Decorative Milk Divider */}
                    <div className="max-h-[310px] overflow-hidden my-8 md:my-0 flex-shrink-0 flex justify-center items-center w-[80px] md:w-[230px]">
                        <img
                            src="/SubsPrice/subs-price-milk.png"
                            alt="Milk Splash Split"
                            className="h-[320px] md:h-[380px] lg:h-[350px] w-auto object-contain rotate-[85deg] md:rotate-0"
                        />
                    </div>

                    {/* Buffalo Milk Price Group */}
                    <div className="flex flex-col items-center flex-1 w-full flex-shrink-0 md:w-auto">
                        <h3 className="font-[Ruksha] text-[34px] md:text-[36px] lg:text-[44px] font-bold text-[#45628a] uppercase leading-none tracking-wide text-center drop-shadow-sm">
                            Buffalo Milk:
                        </h3>
                        <p className="font-[Ruksha] text-[22px] md:text-[22px] lg:text-[26px] font-bold text-[#45628a] uppercase tracking-wide mt-2 md:mt-1 opacity-95 text-center drop-shadow-sm">
                            Rs.99 per litre
                        </p>
                    </div>

                </div>

                {/* Right Buffalo Character */}
                <img
                    src="/SubsPrice/subs-price-cow2.png"
                    alt="Buffalo Character"
                    className="absolute md:-bottom-1 md:-right-[2%] lg:-right-[5%] h-[180px] md:h-[220px] lg:h-[280px] w-auto object-contain z-10 mt-8 md:mt-0"
                />

            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-[20px] mb-12 px-2 max-w-[450px] mx-auto">

                {/* Top Card: Buffalo */}
                <div className="relative w-full bg-[#EAF2FB] rounded-[24px] p-3 pt-8 pb-8 flex items-center h-[160px] shadow-sm">
                    <div className="flex flex-col z-20 w-[60%] pl-2">
                        <h3 className="font-[Ruksha] text-[24px] font-black text-[#45628a] uppercase leading-none tracking-wide text-left drop-shadow-sm">
                            Buffalo Milk:
                        </h3>
                        <p className="font-[Ruksha] text-[16px] font-bold text-[#45628a] uppercase tracking-wide mt-2 opacity-95 text-left drop-shadow-sm">
                            Rs.99 per litre
                        </p>
                    </div>
                    <img
                        src="/SubsPrice/subs-price-cow2.png"
                        alt="Buffalo Character"
                        className="absolute right-[-40px] bottom-0 h-[200px] w-auto object-contain z-10"
                    />
                </div>

                {/* Bottom Card: Cow */}
                <div className="relative w-full bg-[#EAF2FB] rounded-[24px] p-6 pt-8 pb-8 flex items-center justify-end h-[160px] shadow-sm">
                    <img
                        src="/SubsPrice/subs-price-cow1.png"
                        alt="Cow Character"
                        className="absolute left-[-20px] bottom-[-0px] h-[180px] w-auto object-contain z-10"
                    />
                    <div className="flex flex-col z-20 w-[55%] items-start pl-2">
                        <h3 className="font-[Ruksha] text-[24px] font-black text-[#45628a] uppercase leading-none tracking-wide text-left drop-shadow-sm">
                            Cow Milk:
                        </h3>
                        <p className="font-[Ruksha] text-[16px] font-bold text-[#45628a] uppercase tracking-wide mt-2 opacity-95 text-left drop-shadow-sm">
                            Rs.90 per litre
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default SubsPrice;
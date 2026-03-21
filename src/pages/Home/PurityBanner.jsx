import React from 'react';

function PurityBanner() {
    return (
        <section className="w-full h-full bg-[#5b7a9d] relative font-poppins text-white overflow-hidden">
            {/* Content Container */}
            <div className="container mx-auto px-6 md:px-16 pt-12 pb-[160px] md:py-16 flex flex-col z-10 relative md:min-h-[420px] justify-center h-full">

                {/* Text Layout */}
                <div className="w-full md:w-[65%] lg:w-[55%] flex flex-col z-20">

                    {/* Desktop Title */}
                    <h1 className="hidden md:block font-[Ruksha] text-[48px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-wide mb-5 text-white uppercase drop-shadow-sm">
                        The Purity Journey<br /> Continues...
                    </h1>
                    {/* Mobile Title */}
                    <h1 className="md:hidden font-[Ruksha] text-[52px] sm:text-[60px] leading-[1.0] tracking-wide mb-6 text-white uppercase drop-shadow-sm">
                        The Purity <br /> Journey <br /> Continues...
                    </h1>

                    {/* Desktop Subtitle & Products */}
                    <div className="hidden md:block">
                        <p className="text-[18px] lg:text-[20px] mb-2 font-medium drop-shadow-sm">
                            More Farm-Fresh Goodness, Coming Soon!
                        </p>
                        <p className="text-[18px] lg:text-[20px] mb-4 font-bold drop-shadow-sm">
                            Premium Bilona Ghee | Fresh Butter | Soft Paneer | &amp; More
                        </p>
                    </div>

                    {/* Mobile Subtitle & Products */}
                    <div className="md:hidden">
                        <p className="text-[17px] mb-2 font-medium drop-shadow-sm">
                            More Farm-Fresh Goodness, <br /> Coming Soon!
                        </p>
                        <p className="text-[17px] mb-4 font-bold drop-shadow-sm">
                            Premium Bilona Ghee | Fresh <br /> Butter | Soft Paneer | &amp; More
                        </p>
                    </div>

                    {/* Desktop Description */}
                    <p className="hidden md:block text-[15px] lg:text-[16px] mb-8 font-normal text-white/95 leading-[1.7]">
                        We are crafting your favorite dairy products with the exact same BTech Doodhwala <br />
                        promise: 100% Pure, Unadulterated, and Farm-Fresh.
                    </p>

                    {/* Mobile Description */}
                    <p className="md:hidden text-[13px] sm:text-[14px] mb-8 font-normal text-white/95 leading-[1.6]">
                        We are crafting your favorite dairy products <br />
                        with the exact same BTech Doodhwala <br />
                        promise: 100% Pure, Unadulterated, and <br />
                        Farm-Fresh.
                    </p>

                    {/* Desktop Button */}
                    <button className="hidden md:block bg-white text-[#5b7a9d] font-bold px-8 py-[14px] lg:px-10 lg:py-[16px] rounded-full w-fit hover:bg-gray-100 transition shadow-sm text-[16px]">
                        Notify Me When It Launches
                    </button>

                    {/* Mobile Button */}
                    <button className="md:hidden bg-white text-[#5b7a9d] font-bold px-10 py-[14px] rounded-full w-fit hover:bg-[#EEF1F6] transition shadow-sm text-[15px]">
                        NOTIFY ME
                    </button>

                </div>
            </div>

            {/* Desktop Absolute Image */}
            <div className="hidden md:block absolute right-[-8%] lg:right-[0%] bottom-[-5%] h-[120%] lg:h-[100%] z-0 pointer-events-none">
                <img
                    src="/common/purityBanner.png"
                    alt="Purity Dairy Products"
                    className="h-full w-auto object-contain object-bottom origin-bottom-right"
                />
            </div>

            {/* Mobile Absolute Image */}
            <div className="md:hidden absolute right-[-10%] sm:right-[-2%] bottom-[0%] h-[240px] sm:h-[280px] z-0 pointer-events-none">
                <img
                    src="/common/purityBanner.png"
                    alt="Purity Dairy Products"
                    className="h-full w-auto object-contain object-bottom scale-110 origin-bottom-right"
                />
            </div>

        </section>
    );
}

export default PurityBanner;
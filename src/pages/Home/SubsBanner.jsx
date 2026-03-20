import React from 'react';
import Button from '../../components/Button';

function SubsBanner() {
    return (
        <section className="relative bg-[#5773A0] overflow-hidden flex flex-col items-center justify-center min-h-[600px] lg:min-h-[450px] pt-[200px] pb-[320px] lg:py-20 px-4 md:px-12 w-full mt-10 md:mt-20">

            {/* Top/Left Splash Image */}
            <div className="absolute top-[-5%] md:top-[-10%] left-1/2 -translate-x-1/2 lg:top-0 lg:bottom-0 lg:left-[-15%] xl:left-[-10%] lg:translate-x-0 w-[120%] sm:w-[100%] lg:w-auto lg:h-full flex justify-center lg:justify-start pointer-events-none z-0">
                <img
                    src="/common/MILK.png"
                    alt="Milk Splash"
                    className="w-full md:max-w-[600px] lg:max-w-none lg:h-full lg:w-auto object-cover md:object-contain lg:object-cover drop-shadow-md lg:drop-shadow-xl md:rotate-320"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[900px] mx-auto mt-8 lg:mt-0 px-1 sm:px-6">
                <h1 className="font-[Ruksha] text-[36px] sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[65px] text-white uppercase leading-[1.05] tracking-wide drop-shadow-sm mb-4 md:mb-6 max-w-[95%]">
                    Purity You Can Trust, Health Your Family Deserves
                </h1>

                <p className="text-[14px] sm:text-[15px] md:text-[18px] lg:text-[19px] font-poppins text-white leading-[1.6] md:leading-relaxed font-light max-w-[700px] mx-auto mb-8 md:mb-10 opacity-95 px-2">
                    Say goodbye to adulterated milk and harmful plastic packets. Join hundreds of families who trust BTech Doodhwala for their daily nutrition. Start your hassle-free subscription today and wake up to farm-fresh purity every morning!
                </p>

                <Button variant="white" className="rounded-full px-8 py-3.5 text-[#5773A0] font-bold text-[16px] md:text-[18px] shadow-lg hover:shadow-xl transition-shadow z-20 relative">
                    Start Your Subscription
                </Button>

                {/* Optional dots for desktop styling */}
                <div className="hidden lg:flex gap-[12px] mt-12 mb-4 justify-center items-center">
                    <span className="w-2 h-2 rounded-full bg-[#3e4f63]"></span>
                    <span className="w-2.5 h-2.5 rounded-full border-[1.5px] border-white/60"></span>
                </div>
            </div>

            {/* Bottom/Right Bottles Image */}
            <div className="absolute bottom-[-10%] md:bottom-[-15%] lg:bottom-[-12%] xl:bottom-[-15%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[0%] xl:right-[2%] flex justify-center lg:justify-end pointer-events-none z-0 w-[110%] sm:w-[90%] lg:w-auto">
                <img
                    src="/common/milk-bottle.png"
                    alt="Milk Bottles"
                    className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[450px] lg:max-w-[380px] xl:max-w-[420px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] lg:-translate-x-6"
                />
            </div>

        </section>
    );
}

export default SubsBanner;
import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import "./Hero.css"

const Pearl = ({ className, size }) => (
    <div
        className={`absolute rounded-full shadow-[inset_-4px_-6px_12px_rgba(255,255,255,0.4),_0_8px_18px_rgba(30,50,80,0.2)] z-0 ${className}`}
        style={{
            width: size,
            height: size,
            background: 'radial-gradient(circle at 35% 35%, #ffffff 0%, #ebf0f5 40%, #bacddf 80%, #8fa8c2 100%)'
        }}
    />
);

function Hero() {
    return (
        <>
            <section className="min-h-screen relative w-full z-0 bg-brand-blue lg:min-h-[900px] pt-[100px] md:pt-[120px] lg:pt-[140px]  overflow-hidden">

                {/* ━━━ Background Curve layer wrapper ━━━ */}
                {/* 100% absolute width layer acting as background */}
                <div className="absolute bg-brand-blue top-0 left-0 w-full h-full -z-20"></div>

                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    {/* Top Milk Drip (Hidden on mobile based on design) */}
                    <img
                        src="/common/floating-milk.png"
                        alt="Dripping Milk"
                        className="hidden md:block absolute top-[30%] lg:top-0 left-1/2 -translate-x-1/2 w-[350px] lg:w-[480px] object-contain drop-shadow-xl opacity-95"
                    />

                    <Pearl size="80px" className="top-[55%] lg:top-[42%] left-[4%] lg:left-[12%]" />
                    <Pearl size="30px" className="top-[35%] lg:top-[30%] left-[12%] lg:left-[22%]" />
                    <Pearl size="70px" className="top-[40%] lg:top-[42%] right-[2%] lg:right-[15%]" />
                    <Pearl size="32px" className="top-[25%] lg:top-[22%] right-[10%] lg:right-[20%] hidden lg:block opacity-60" />

                    <Pearl size="32px" className="top-[65%] lg:top-[22%] right-[10%] lg:right-[20%] lg:block opacity-60" />

                    {/* Scattered White Dots */}
                    <div className="absolute top-[70%] left-[28%] w-[6px] h-[6px] bg-white rounded-full opacity-80" />
                    <div className="absolute top-[66%] left-[50%] w-[6px] h-[6px] bg-white rounded-full opacity-80" />
                    <div className="absolute top-[40%] left-[22%] w-[4px] h-[4px] bg-white rounded-full opacity-80" />
                    <div className="absolute top-[35%] right-[24%] w-[5px] h-[5px] bg-white rounded-full opacity-80" />
                    {/* <div className="absolute top-[46%] right-[60%] w-[6px] h-[6px] bg-white rounded-full opacity-80" /> */}
                </div>

                {/* ━━━ Foreground Real Content ━━━ */}
                <div className="container mx-auto px-4 md:px-6 relative z-10 md:text-center flex flex-col items-center">

                    {/* Typographic Headings */}
                    <h1 className="font-[Ruksha] text-[38px] md:text-[40px] lg:text-[75px] leading-[1.05] text-white uppercase mb-4 md:tracking-wide max-w-[1050px] drop-shadow-sm px-2">
                        ENJOY NATURE IN <br className="lg:hidden" /> ITS PUREST FORM.
                    </h1>

                    <p className="font-poppins text-[20px] md:text-[20px] lg:text-[20px] text-white max-w-[820px] leading-[1.6] mb-8 font-light drop-shadow-sm px-2 opacity-95">
                        Premium Quality, 100% Pure Pasteurised Cow & Buffalo Milk. Delivered fresh from our local farmers directly to your doorstep in reusable glass bottles.
                    </p>

                    {/* Feature Quality Metrics */}
                    <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-[12px] font-poppins text-[16px] md:text-[20px] text-white font-medium mb-10 lg:mb-14">
                        <div className="flex items-center gap-[8px]">
                            <FaRegCheckCircle className="text-[20px] font-light" />
                            <span className="tracking-wide text-white">No Adulterants</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <FaRegCheckCircle className="text-[20px] font-light" />
                            <span className="tracking-wide text-white">No Preservative</span>
                        </div>
                        <div className="flex items-center gap-[8px] w-full md:w-auto justify-center mt-1 md:mt-0">
                            <FaRegCheckCircle className="text-[20px] font-light" />
                            <span className="tracking-wide text-white">No Plastic</span>
                        </div>
                    </div>

                    {/* Desktop CTA Buttons Layout (Hidden entirely on mobile screens) */}
                    <div className="hidden lg:flex justify-center gap-[20px] relative z-20 mb-[-12px]">
                        <button className="bg-white text-[#5773A0] px-[36px] py-[16px] rounded-full font-bold font-poppins text-[16px] shadow-[0_6px_15px_rgba(0,0,0,0.1)] hover:bg-[#F8F9FB] transition-colors">
                            Start Your Free Delivery
                        </button>
                        <button className="bg-transparent border-[1.5px] border-white text-white px-[44px] py-[16px] rounded-full font-bold font-poppins text-[16px] hover:bg-white/10 transition-colors">
                            Why Choose Us?
                        </button>
                    </div>

                    {/* Milk Splash Graphic Extruding Container Bound */}
                    <div className="relative w-full max-w-[420px] md:max-w-[550px] lg:max-w-[750px] mt-6 md:mt-12 flex justify-center items-end h-[300px] md:h-[400px] lg:h-[450px] pointer-events-none">

                        <img
                            src="/common/ellipsebg.png"
                            alt="Shadow Backdrop"
                            className="absolute bottom-[-10%] md:-bottom-[15%] lg:-bottom-[20%] w-[130%] md:w-[110%] max-w-[850px] z-0 opacity-100 object-contain drop-shadow-2xl"
                        />

                        <img
                            src="/milk-splash.png"
                            alt="Pure Milk Splash Action"
                            className="w-[120%] md:w-[100%] lg:w-[110%] max-w-[800px] h-auto object-bottom drop-shadow-xl relative z-10 origin-bottom translate-y-[2%] md:translate-y-[8%]"
                        />

                    </div>
                </div>
            </section >
        </>
    );
}

export default Hero;
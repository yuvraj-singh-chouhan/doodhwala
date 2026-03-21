import React, { useState, useEffect } from 'react';
import SubsBanner from '../pages/Home/SubsBanner';

function EffortLessBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));

    return (
        <div className="relative w-full overflow-hidden group my-10 md:my-20">
            <div
                className="flex transition-transform duration-700 ease-in-out items-stretch"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {/* SLIDE 1: Effortless Banner */}
                <div className="w-full flex-shrink-0 flex items-stretch">
                    <section className="w-full bg-[#5A779D] flex flex-col md:flex-row h-full">
                        {/* Left Curved Image */}
                        <div className="w-full md:w-[40%] lg:w-[35%] xl:w-[40%] h-[280px] md:h-auto min-h-[350px] lg:min-h-[420px] rounded-b-full md:rounded-b-none md:rounded-r-[350px] md:rounded-br-[350px] overflow-hidden flex-shrink-0 relative bg-white md:bg-transparent shadow-[10px_0_20px_rgba(0,0,0,0.1)]">
                            <img
                                src="/ourprocess/bannerimg.png"
                                alt="Mother and Child Drinking Milk"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Text Content Area */}
                        <div className="w-full md:w-[60%] lg:w-[65%] xl:w-[60%] flex flex-col items-center justify-center py-16 md:py-20 px-6 md:px-10 lg:px-16 md:text-center text-white z-10">
                            <h2 className="font-[Ruksha] text-[38px] md:text-[45px] lg:text-[52px] xl:text-[60px] uppercase leading-tight md:leading-[1.05] tracking-wide mb-4 md:mb-5 drop-shadow-sm">
                                EFFORTLESS MORNINGS, <br className="hidden lg:block" /> FREE FRESHNESS.
                            </h2>

                            <p className="font-poppins text-[20px] md:text-[16px] lg:text-[18px] opacity-95 leading-[1.6] md:leading-relaxed max-w-[750px] mb-8 md:mb-10 font-light">
                                Skip the market and last-minute runs. Get 100% farm-fresh, pasteurized milk in eco-friendly glass bottles, delivered straight to your doorstep—at zero extra cost. Flexible morning slots (6am-10am) available.
                            </p>

                            <button className="bg-white text-[#5A779D] px-12 md:px-10 py-5 md:py-4 rounded-full font-bold font-poppins text-[18px] md:text-[16px] uppercase tracking-wide shadow-lg hover:bg-gray-50 hover:scale-105 transition-all">
                                Start Free Delivery
                            </button>
                        </div>
                    </section>
                </div>

                {/* SLIDE 2: Purity Banner */}
                <div className="w-full flex-shrink-0 flex items-stretch">
                    {/* <PurityBanner /> */}
                    <SubsBanner />
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                <button
                    onClick={() => setCurrentSlide(0)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 drop-shadow-md border border-white/20 ${currentSlide === 0 ? 'bg-white scale-125' : 'bg-gray-400/80 hover:bg-white/80'}`}
                    aria-label="Go to slide 1"
                />
                <button
                    onClick={() => setCurrentSlide(1)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 drop-shadow-md border border-white/20 ${currentSlide === 1 ? 'bg-white scale-125' : 'bg-gray-400/80 hover:bg-white/80'}`}
                    aria-label="Go to slide 2"
                />
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full  hover:bg-black/40 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white backdrop-blur-sm z-30"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full  hover:bg-black/40 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white backdrop-blur-sm z-30"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}

export default EffortLessBanner;
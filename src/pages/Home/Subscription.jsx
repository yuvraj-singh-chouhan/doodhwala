function Subscription() {
    return (
        <section className="overflow-hidden relative w-full overflow-hidden pb-12 pt-16 lg:pt-24 bg-white z-0 mb-12">
            {/* Background Decorative Rings */}
            <div className="absolute -right-[20%] top-[10%] w-[800px] h-[800px] rounded-full border-[70px] border-[#F4F6F9] -z-10 hidden lg:block pointer-events-none" />

            {/* Main Content Container */}
            <div className="bg-brand-blue md:bg-white w-[100%] md:w-[90%] pt-24 mx-auto px-8 md:px-12 lg:px-[100px] relative z-20">

                {/* Header Section */}
                <div className="md:text-center mb-10 md:mb-14">
                    <h1 className="font-[Ruksha] text-[40px] md:text-[50px] lg:text-[60px] text-white md:text-brand-blue uppercase leading-[1.1] mb-3 tracking-wide max-w-[800px] mx-auto">
                        FLEXIBLE SUBSCRIPTION<br className="hidden md:block" /> MADE SIMPLE
                    </h1>
                    <p className="text-[20px] md:text-[24px] lg:text-[24px] font-poppins text-white md:text-gray-600">
                        Flexible Subscription Made Simple
                    </p>
                </div>

                {/* Subscription Blue Box */}
                <div className="overflow-hidden md:bg-brand-blue rounded-[24px] md:p-12 lg:p-14 relative md:shadow-md flex flex-col lg:flex-row min-h-[460px] overflow-hidden lg:overflow-hidden">

                    {/* Background Desktop Image (Bottles + Milk Splash) */}
                    <div className="hidden overflow-hidden lg:flex absolute lg:-bottom-0 right-0 h-[70.5%] w-[50%] z-0 pointer-events-none justify-end">
                        <img src="/common/milk-bottle-full.png" alt="Subscription Milk Details" className="h-[100%] w-auto object-cover object-right-top -mr-[2px]" />
                    </div>

                    {/* Columns Wrapper */}
                    <div className="w-full lg:w-[68%] flex flex-col md:flex-row md:align-center md:justify-center gap-3 md:gap-8 lg:gap-16 relative z-10 font-poppins py-4">

                        {/* 1st Column: Features */}
                        <div className="flex text-white flex flex-col md:px-5 md:p-9">
                            <h2 className="font-poppins text-[30px] font-semibold md:text-[42px] lg:text-5xl font-bold mb-6 ">Subscription Features:</h2>

                            <ul className="space-y-[18px] font-semibold">
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[20px] md:text-2xl leading-snug">1 Litre Glass Bottle System</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[20px] md:text-2xl leading-snug">Custom Delivery Options</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[18px] md:text-2xl leading-snug">Easy Online Modifications as<br className="hidden md:block" /> per needs (Via WhatsApp)</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[18px] md:text-2xl leading-snug">Browse Transactional History<br className="hidden md:block" /> 24/7 (Via WhatsApp Support)</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[18px] md:text-2xl leading-snug">Pay Online 24/7 (UPI/Direct Transfer)</p>
                                </li>
                            </ul>

                            <div className="hidden md:block mt-10 lg:mt-12">
                                <button className="bg-white text-brand-blue font-poppins font-bold text-[15px] md:text-[16px] px-8 py-[14px] rounded-full shadow-sm hover:bg-[#EEF1F6] hover:scale-105 transition-all">
                                    Start Your Subscription
                                </button>
                            </div>
                        </div>

                        {/* 2nd Column: Delivery Slots */}
                        <div className="flex-1 text-white flex flex-col lg:pr-10 mt-3 md:mt-0 md:p-9">
                            <h2 className="font-poppins text-[30px] font-semibold md:text-[42px] lg:text-5xl font-bold mb-6">Flexible Delivery Slots:</h2>

                            <ul className="space-y-[18px] font-semibold">
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[20px] md:text-2xl leading-snug">6:00 AM – 8:00 AM</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[18px] md:text-2xl leading-snug">8:00 AM – 10:00 AM</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[18px] md:text-2xl leading-snug">Anytime During The Day</p>
                                </li>
                            </ul>

                            <div className="mt-8 lg:mt-12 max-w-[280px]">
                                <p className="font-poppins text-[15px] md:text-[16px] leading-relaxed">
                                    <span className="font-bold">Note:</span> Order till 10:00 PM for next morning delivery.
                                </p>
                            </div>

                            <div className="md:hidden mt-10 lg:mt-12 sm:mx-auto">
                                <button className="bg-white text-brand-blue font-poppins font-bold text-[18px] md:text-[16px] px-6 py-[14px] rounded-full shadow-sm hover:bg-[#EEF1F6] hover:scale-105 transition-all">
                                    Start Your Subscription
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Subscription;
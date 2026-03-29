import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";

function Subscription() {
    return (
        <section className="overflow-hidden relative w-full overflow-hidden pb-12 pt-16 lg:pt-16 z-0 mb-6">
            {/* Background Decorative Rings */}
            <div className="absolute -right-[20%] top-[10%] w-[800px] h-[800px] rounded-full border-[70px] border-[#F4F6F9] -z-10 hidden lg:block pointer-events-none" />


            {/* Main Content Container */}
            <div className="bg-brand-blue md:bg-transparent w-[100%] md:w-[80%] md:pt-24 mx-auto px-8 md:px-12 lg:px-[100px] relative z-20">

                {/* Mobile Floating Milk Image */}
                <div className="md:hidden flex justify-center w-[100%] mx-auto relative z-0 -mt-8 md:-mt-12 pointer-events-none">
                    <img src="/common/floating-milk.png" alt="Floating Milk" className="w-[85%] max-w-[280px] h-auto object-contain" />
                </div>
                {/* Header Section */}
                <div className="md:text-center mb-10 md:mb-12">
                    <SectionHeading className="text-white md:text-brand-blue">
                        FLEXIBLE SUBSCRIPTION<br className="hidden md:block" /> MADE SIMPLE
                    </SectionHeading>
                    <p className="text-[20px] md:text-[24px] lg:text-[24px] font-poppins text-white md:text-gray-600">
                        Flexible Subscription Made Simple
                    </p>
                </div>

                {/* Subscription Blue Box */}
                <div className="md:bg-brand-blue rounded-[24px] relative md:shadow-md flex flex-col lg:flex-row lg:min-h-[456px] overflow-hidden md:px-12 ">

                    {/* Background Desktop Image (Bottles + Milk Splash) */}
                    <div className="hidden lg:flex flex-col justify-between absolute lg:-bottom-0 right-0 h-[100%] z-0 pointer-events-none justify-end items-end overflow-hidden">
                        <img src="/common/milk-bottle-full.png" alt="Subscription Milk Details" className="h-[70.5%]  w-auto object-contain object-right-bottom -mr-[2px]" />
                        <img src="/common/floating-milk.png" alt="Floating Milk" className="absolute top-[0%] right-[15%] w-[55%] max-w-[350px] h-auto object-contain z-10" />
                    </div>

                    {/* Columns Wrapper */}
                    <div className="w-full lg:w-[80%] flex flex-col md:flex-row md:align-center md:justify-start justify-center gap-3 md:gap-8 lg:gap-16 relative z-10 font-poppins py-4">

                        {/* 1st Column: Features */}
                        <div className="flex text-white flex flex-col md:px-5 md:p-9">
                            <h2 className="font-poppins text-[26px] font-semibold md:text-[34px] lg:text-[38px] font-bold mb-6 ">Subscription Features:</h2>

                            <ul className="space-y-[8px]">
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[16px] md:text-[18px] leading-snug">1 Litre Glass Bottle System</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[16px] md:text-[18px] leading-snug">Custom Delivery Options</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[16px] md:text-[18px] leading-snug">Easy Online Modifications as<br className="hidden md:block" /> per needs (Via WhatsApp)</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[16px] md:text-[18px] leading-snug">Browse Transactional History<br className="hidden md:block" /> 24/7 (Via WhatsApp Support)</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[16px] md:text-[18px] leading-snug">Pay Online 24/7 (UPI/Direct Transfer)</p>
                                </li>
                            </ul>

                            <div className="hidden md:block mt-10 lg:mt-12">
                                <Link to={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`} target="_blank">
                                    <button className="bg-white text-brand-blue font-poppins font-bold text-[15px] md:text-[16px] px-8 py-[14px] rounded-full shadow-sm hover:bg-[#EEF1F6] hover:scale-105 1 Litre Glass Bottle System

transition-all">
                                        Start Your Subscription
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* 2nd Column: Delivery Slots */}
                        <div className="flex text-white flex flex-col lg:pr-10 mt-3 md:mt-0 md:py-9">
                            <h2 className="font-poppins text-[26px] font-semibold md:text-[34px] lg:text-[38px] font-bold mb-6">Flexible Delivery Slots:</h2>

                            <ul className="space-y-[8px]">
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[16px] md:text-[18px]  leading-snug">6:00 AM – 8:00 AM</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[16px] md:text-[18px] leading-snug">8:00 AM – 10:00 AM</p>
                                </li>
                                <li className="flex items-start gap-[14px]">
                                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[10px] flex-shrink-0"></span>
                                    <p className="font-poppins text-[16px] md:text-[18px]  leading-snug">Anytime During The Day</p>
                                </li>
                            </ul>

                            <div className="mt-8 lg:mt-12 max-w-[280px]">
                                <p className="font-poppins text-[15px] md:text-[16px] leading-relaxed">
                                    <span className="font-bold">Note:</span> Order till 10:00 PM for next morning delivery.
                                </p>
                            </div>

                            <div className="md:hidden mt-10 lg:mt-12 sm:mx-auto">
                                <Link to={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`} target="_blank">
                                    <button className="bg-white text-brand-blue font-poppins font-bold text-[18px] md:text-[16px] px-6 py-[14px] rounded-full shadow-sm hover:bg-[#EEF1F6] hover:scale-105 transition-all">
                                        Start Your Subscription
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Subscription;
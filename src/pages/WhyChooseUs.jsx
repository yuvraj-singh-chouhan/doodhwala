import React from 'react';
import Subscription from './Home/Subscription';
import SectionHeading from '../components/SectionHeading';

const chooseUsData = [
    {
        image: "/WCU/WCU1.png",
        title: "100% Pure Pasteurised Milk:",
        description: "Completely safe and healthy"
    },
    {
        image: "/WCU/WCU2.png",
        title: "Zero Adulteration:",
        description: "We guarantee absolute purity in every drop."
    },
    {
        image: "/WCU/WCU3.png",
        title: "Strict Quality Testing:",
        description: "Every batch is tested in our In-House Lab. Milk is also tested on arrival from local vendors."
    },
    {
        image: "/WCU/WCU4.png",
        title: "Eco-Friendly Packaging:",
        description: "Packed safely in reusable glass bottles. 100% plastic-free!"
    },
    {
        image: "/WCU/WCU5.png",
        title: "Ultra-Hygienic Cleaning:",
        description: "Bottles are washed with RO water using Hi-tech machineries."
    },
    {
        image: "/WCU/WCU6.png",
        title: "Cold Chain Maintained:",
        description: "Freshness locked in from the farm to your fridge."
    },
    {
        image: "/WCU/WCU7.png",
        title: "Delivered Fresh To Your Doorstep",
        description: "Wake up to healthy milk every morning."
    },
    {
        image: "/WCU/WCU8.png",
        title: "Supporting Local Farmers:",
        description: "Empowering our farming community with ethical sourcing."
    },
];

function FeatureItem({ title, description, image }) {
    return (
        <div className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 mt-1 flex items-center justify-center">
                <img src={image} alt={title} className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div className="flex flex-col pt-0 flex-1">
                <p className="font-poppins text-[18px] md:text-[20px] font-bold text-[#45628A] mb-1 leading-tight">{title}</p>
                <p className="font-poppins text-[14px] md:text-[15px] text-[#7A848D] leading-relaxed opacity-90">{description}</p>
            </div>
        </div>
    );
}

function WhyChooseUs() {
    return (
        <div className="w-full bg-white relative pb-10 pt-6">
            <div className="container mx-auto px-6 md:px-12 lg:px-[100px]">

                {/* Header Section */}
                <div className="mb-4 text-left">
                    <SectionHeading>
                        WHY CHOOSE US
                    </SectionHeading>
                    <p className="font-poppins text-[18px] md:text-[22px] lg:text-[24px] font-bold text-[#45628A] mb-3 leading-tight">
                        Why BTech Doodhwala is the Best Choice for Your Family?
                    </p>
                    <p className="font-poppins text-lg md:text-[18px] lg:text-[20px] text-[#A3A3A3] font-light">
                        We don't just deliver milk; we deliver health, purity, and trust
                    </p>
                </div>

                {/* Top Split Section */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-20 mb-8 lg:mb-8 items-center lg:items-stretch">
                    {/* Placeholder Image */}
                    <div className="w-full lg:w-1/2 md:aspect-[4/3] bg-[#EAEAEA] rounded-[24px] shadow-inner flex flex-col items-center justify-center relative overflow-hidden group flex-shrink-0">
                        <img
                            src="WCU/why-choose-us.png"
                            alt="Fresh Dairy Farms"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Text block */}
                    <div className="w-full lg:w-1/2 flex items-center pt-2 lg:pt-0">
                        <p className="font-poppins text-[16px] md:text-[24px] lg:text-[26px] text-[#7A848D] leading-[1.8] lg:leading-[1.7] font-light text-justify">
                            Welcome to BTech Doodhwala, where we believe your family deserves nothing less than absolute purity. In a market filled with preservatives and artificial processing, we are on a mission to bring you <strong className="font-medium text-[#45628a]">100% pure, farm-fresh milk</strong> exactly as nature intended. By bridging the gap between ethical local dairy farming and modern quality control, we ensure that every drop you drink is <strong className="font-medium text-[#45628a]">strictly lab-tested, completely unadulterated, and safely delivered in eco-friendly glass bottles.</strong> We don't just deliver milk; we deliver health, trust, and peace of mind straight to your doorstep every morning.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 xl:gap-x-28 gap-y-10 lg:gap-y-12 mx-auto mb-12 px-2 lg:px-8">
                    {chooseUsData.map((item, index) => (
                        <FeatureItem key={index} title={item.title} description={item.description} image={item.image} />
                    ))}
                </div>
            </div>

            {/* Bottom Subscription Component */}
            <div className="w-full relative z-20 bg-white">
                <Subscription />
            </div>

        </div>
    );
}

export default WhyChooseUs;

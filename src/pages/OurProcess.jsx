import React from 'react';
import { Link } from 'react-router-dom';

function OurProcess() {
    const steps = [
        {
            title: "Hygienic Milking Process",
            description: "We take special care of the cows and buffaloes at our partner local farms. The entire milking process is done manually in a traditional, stress-free environment while maintaining the highest hygiene standards. This ensures the milk retains its natural purity and absolute goodness.",
            img: "DPpage/dp1.png"
        },
        {
            title: "Safe & Chilled Transportation",
            description: "To lock in the freshness right from the farm, the milk is immediately transferred to a chilled environment. Through our strict “Cold Chain” process, the milk is safely and rapidly transported to our processing plant, preventing any bacterial growth along the way.",
            img: "DPpage/dp2.png"
        },
        {
            title: "Strict Adulteration Testing",
            description: "As soon as the milk arrives at our plant, every single batch undergoes rigorous quality checks in our In-House lab. We deeply test for water, harmful chemicals, or preservatives. Only when the milk is proven to be 100% pure does it move forward to the next stage",
            img: "DPpage/dp3.png"
        },
        {
            title: "Gentle Milk Pasteurisation",
            description: "The milk is scientifically pasteurised at a specific temperature. This essential step completely eliminates any harmful bacteria while perfectly preserving the vital nutrients, calcium, and rich natural taste—making it completely safe and healthy for your family.",
            img: "DPpage/dp4.png"
        },
        {
            title: "Eco-Friendly Bottle Packing",
            description: "We say a strict NO to harmful plastic packets. The milk is securely packed in premium, reusable glass bottles. Before filling, every single bottle is thoroughly washed and sterilized with RO water using high-tech machinery to ensure ultra-hygienic packaging.",
            img: "DPpage/dp5.png"
        },
        {
            title: "Free Morning Home Delivery",
            description: "Once securely packed, our dedicated delivery team springs into action. Your fresh, chilled milk is delivered straight to your doorstep every morning with absolutely zero delivery charges, giving your day the healthiest start possible!",
            img: "DPpage/dp6.png"
        }
    ];

    return (
        <>
            <div className="w-full bg-white relative overflow-hidden pb-32">

                {/* Background Decor */}
                <div className="absolute top-[25%] -right-[15%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full border-[60px] md:border-[80px] border-[#F4F6F9] pointer-events-none -z-10" />

                {/* Header */}
                <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-12 z-10 relative">
                    <h1 className="font-[Ruksha] text-[36px] md:text-[42px] lg:text-[50px] text-[#494949] uppercase leading-none tracking-wide mb-2 drop-shadow-sm">
                        OUR MILK DELIVERY PROCESS
                    </h1>
                    <p className="font-poppins text-lg md:text-[20px] text-[#7A848D]">
                        FROM FARM TO YOUR DOOR - Total transparency in every step.
                    </p>
                </div>

                {/* Steps Timeline */}
                <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-12 md:gap-8 lg:gap-0 z-10 relative mt-4">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-24 lg:my-[20px]`}
                            >
                                {/* Image Placeholder */}
                                <div className="w-[100%] max-w-[380px] aspect-square bg-[#D9D9D9] rounded-[16px] flex items-center justify-center flex-shrink-0 z-10 shadow-sm relative overflow-hidden group">
                                    {step.img ? (
                                        <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="font-poppins text-[#7B96BC] text-2xl md:text-3xl font-bold italic rotate-[-25deg] opacity-70 group-hover:scale-105 transition-transform duration-500">
                                            farm image
                                        </span>
                                    )}
                                </div>

                                {/* Text Content */}
                                <div className={`flex flex-col max-w-[700px] ${isEven ? 'lg:pr-8' : 'lg:pl-8'} lg:text-left z-10`}>
                                    <h3 className="font-poppins text-[30px] md:text-[30px] font-bold text-[#45628A] mb-3 md:mb-4 font-semibold">
                                        {step.title}
                                    </h3>
                                    <p className="font-poppins text-[24px] md:text-[26px] text-[#7A848D] leading-[1.65] text-jusitfy">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <section className="w-full my-20 bg-[#5A779D] flex flex-col md:flex-row mt-0 mb-12">
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

                    <Link to={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`} target="_blank">
                        <button className="bg-white text-[#5A779D] px-12 md:px-10 py-5 md:py-4 rounded-full font-bold font-poppins text-[18px] md:text-[16px] uppercase tracking-wide shadow-lg hover:bg-gray-50 hover:scale-105 transition-all">
                            Start Free Delivery
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default OurProcess;

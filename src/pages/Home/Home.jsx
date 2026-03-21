import Hero from "../../components/Hero";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DeliveryProcess from "./DeliveryProcess";
import Subscription from "./Subscription";
import SubsBanner from "./SubsBanner";
import SubsPrice from "./SubsPrice";
import Marquee from "../../components/Marquee";
import PurityBanner from "./PurityBanner";
import EffortLessBanner from "../../components/EffortLessBanner";

function ChooseUS({ title, subTitle, imgSrc, index }) {
    const isIndented = index % 2 !== 0;
    return (
        <div className={`flex items-start gap-4 md:gap-5 ${isIndented ? 'lg:ml-[15%]' : ''}`}>
            <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 mt-1 flex items-center justify-center">
                <img src={imgSrc} alt={title} className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div className="flex flex-col pt-1">
                <p className="font-poppins text-[19px] md:text-[22px] font-bold text-[#45628A] mb-1 leading-tight">{title}</p>
                <p className="font-poppins text-[15px] md:text-[16px] text-[#7A848D] leading-relaxed max-w-[420px]">{subTitle}</p>
            </div>
        </div>
    )
}

function Home() {
    const chooseUs = [
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
    ]

    return (
        <>
            <Hero />
            <div className="md:hidden">
                <Marquee />
            </div>

            <section className="relative w-full overflow-hidden pb-24 pt-10">
                <div className="container mx-auto px-6 md:px-12 lg:px-[120px] relative z-10">

                    {/* Header Section */}
                    <div className="md:text-center mb-16 lg:mb-20">
                        <h1 className="font-[Ruksha] text-[40px] md:text-[65px] lg:text-[75px] text-[#45628A] uppercase leading-none mb-4 tracking-wider">
                            Why Choose Us
                        </h1>
                        <p className="text-[20px] md:text-[26px] lg:text-[28px] font-semibold font-poppins text-[#45628A] mb-3 leading-snug">
                            Why BTech Doodhwala is the Best Choice for Your Family?
                        </p>
                        <p className="text-[18px] md:text-[22px] font-poppins text-[#A3A3A3]">
                            We don't just deliver milk; we deliver health, purity, and trust
                        </p>
                    </div>

                    {/* Main Content Section */}
                    <div className="flex flex-col lg:flex-row relative z-10">

                        {/* Left Column (Items) */}
                        <div className="w-full lg:w-[55%] flex flex-col gap-y-7 md:gap-y-8 mt-4">
                            {chooseUs.map((item, index) => (
                                <ChooseUS key={index} index={index} title={item.title} subTitle={item.description} imgSrc={item.image} />
                            ))}
                        </div>

                        {/* Right Column (Cow + Button) */}
                        <div className="w-full lg:w-[45%] mt-20 lg:mt-0 flex flex-col items-center lg:items-end justify-end relative">

                            {/* Graphic Container */}
                            <div className="relative w-full max-w-[500px] lg:max-w-[100%] xl:max-w-[110%] flex flex-col items-center lg:items-end lg:mr-[-8%]">
                                <img src="/WCU/WCUCOW.png" alt="Happy Cow" className="w-[95%] lg:w-[100%] max-w-[700px] object-contain relative z-10 translate-x-[2%] lg:translate-x-[5%] pb-[20px]" />
                            </div>

                            {/* Button */}
                            <div className="mt-8 lg:mt-12 lg:mr-[10%] z-20 relative self-end lg:self-auto pr-4 lg:pr-0">
                                <Link to="/why-choose-us" className="flex items-center gap-2 bg-[#5A779D] hover:bg-[#45628A] text-white py-5 px-9 font-semibold rounded-full font-poppins font-medium transition-all shadow-md">
                                    <FaArrowRightLong />
                                    Know More
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <SubsBanner />
            <DeliveryProcess />

            <div className="hidden md:block">
                <Marquee />
            </div>

            <Subscription />
            <SubsPrice />
            {/* <PurityBanner /> */}
            <EffortLessBanner />
        </>
    )
}

export default Home;
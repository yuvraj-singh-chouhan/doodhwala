import { Link } from 'react-router-dom';

function DeliveryProcess() {
    const DeliveryProcessInfo = [
        {
            title: "Milking",
            subTitle: "Manual milking in the most hygienic way.",
            img: "/DP/DP1.png"
        },
        {
            title: "Milk Transportation",
            subTitle: "Safe transport from FARM to our plant.",
            img: "/DP/DP2.png"
        },
        {
            title: "Adulteration Testing",
            subTitle: "Milk QUALITY TESTED in our In-House lab.",
            img: "/DP/DP3.png"
        },
        {
            title: "Milk Pasteurisation",
            subTitle: "Milk pasteurised to KILL harmful bacteria.",
            img: "/DP/DP6.png"
        },
        {
            title: "Bottle Packing",
            subTitle: "Packed securely in REUSEABLE glass bottles.",
            img: "/DP/DP5.png"
        },
        {
            title: "Home Delivery",
            subTitle: "Free delivery at your DOOR.",
            img: "/DP/DP4.png"
        }
    ];

    return (
        <section className="relative w-full overflow-hidden pb-16 pt-24 bg-white z-0">
            {/* Header Content */}
            <div className="container mx-auto px-4 md:px-8 lg:px-[120px] relative z-20">
                <div className="md:text-center mb-10">
                    <h1 className="font-[Ruksha] text-[35px] md:text-[55px] lg:text-[65px] text-[#45628A] uppercase leading-none mb-3 md:tracking-wide">
                        OUR MILK DELIVERY PROCESS
                    </h1>
                    <p className="text-[17px] md:text-[20px] lg:text-[22px] font-poppins text-[#7A848D]">
                        FROM FARM TO YOUR DOOR - TOTAL transparency in every step.
                    </p>
                </div>
            </div>

            {/* Desktop Circular Layout (hidden on mobile, visible on lg) */}
            <div className="hidden lg:flex relative w-full max-w-[1100px] mx-auto h-[600px] items-center justify-center mt-6 mb-12 z-10">


                {/* Central Bottles Image */}
                <div className="absolute z-0 w-[410px] pointer-events-none drop-shadow-md">
                    <img src="/DP/process.png" alt="Milk Delivery Process" className="w-full object-contain" />
                </div>

                {/* ===== Circle Items ===== */}

                {/* --- Left Column Elements --- */}
                {/* 0. Milking (Top Left: angle 140) */}
                <div className="absolute left-1/2 top-1/2 z-20 transition-transform hover:scale-105" style={{ transform: "translate(calc(-50% - 180px), calc(-50% - 151px))" }}>
                    <img src={DeliveryProcessInfo[0].img} className="w-[85px] h-[85px] object-contain" alt={DeliveryProcessInfo[3].title} />
                    <div className="absolute top-1/2 -translate-y-1/2 right-[100%] mr-[45px] w-max max-w-[280px] text-right">
                        <p className="font-poppins  text-[26px] font-bold text-[#45628A] mb-[2px]">{DeliveryProcessInfo[0].title}</p>
                        <p className="font-poppins text-[18px] text-[#7A848D]">{DeliveryProcessInfo[0].subTitle}</p>
                    </div>
                </div>

                {/* 1. Milk Transportation (Middle Left: angle 180) */}
                <div className="absolute left-1/2 top-1/2 z-20 transition-transform hover:scale-105" style={{ transform: "translate(calc(-50% - 235px), calc(-50% - 0px))" }}>
                    <img src={DeliveryProcessInfo[1].img} className="w-[85px] h-[85px] object-contain" alt={DeliveryProcessInfo[3].title} />
                    <div className="absolute top-1/2 -translate-y-1/2 right-[100%] mr-[45px] w-max max-w-[280px] text-right">
                        <p className="font-poppins  text-[26px] font-bold text-[#45628A] mb-[2px]">{DeliveryProcessInfo[1].title}</p>
                        <p className="font-poppins text-[18px] text-[#7A848D]">{DeliveryProcessInfo[1].subTitle}</p>
                    </div>
                </div>

                {/* 2. Adulteration Testing (Bottom Left: angle 220) */}
                <div className="absolute left-1/2 top-1/2 z-20 transition-transform hover:scale-105" style={{ transform: "translate(calc(-50% - 180px), calc(-50% + 151px))" }}>
                    <img src={DeliveryProcessInfo[2].img} className="w-[85px] h-[85px] object-contain" alt={DeliveryProcessInfo[3].title} />
                    <div className="absolute top-1/2 -translate-y-1/2 right-[100%] mr-[45px] w-max max-w-[280px] text-right">
                        <p className="font-poppins  text-[26px] font-bold text-[#45628A] mb-[2px]">{DeliveryProcessInfo[2].title}</p>
                        <p className="font-poppins text-[18px] text-[#7A848D]">{DeliveryProcessInfo[2].subTitle}</p>
                    </div>
                </div>


                {/* --- Right Column Elements --- */}
                {/* 3. Home Delivery (Top Right: angle +40) */}
                <div className="absolute left-1/2 top-1/2 z-20 transition-transform hover:scale-105" style={{ transform: "translate(calc(-50% + 180px), calc(-50% - 151px))" }}>
                    <img src={DeliveryProcessInfo[5].img} className="w-[85px] h-[85px] object-contain" alt={DeliveryProcessInfo[3].title} />
                    <div className="absolute top-1/2 -translate-y-1/2 left-[100%] ml-[45px] w-max max-w-[280px] text-left">
                        <p className="font-poppins  text-[26px] font-bold text-[#45628A] mb-[2px]">{DeliveryProcessInfo[3].title}</p>
                        <p className="font-poppins text-[18px] text-[#7A848D]">{DeliveryProcessInfo[3].subTitle}</p>
                    </div>
                </div>

                {/* 4. Bottle Packing (Middle Right: angle +0) */}
                <div className="absolute left-1/2 top-1/2 z-20 transition-transform hover:scale-105" style={{ transform: "translate(calc(-50% + 235px), calc(-50% + 0px))" }}>
                    <img src={DeliveryProcessInfo[4].img} className="w-[85px] h-[85px] object-contain" alt={DeliveryProcessInfo[3].title} />
                    <div className="absolute top-1/2 -translate-y-1/2 left-[100%] ml-[45px] w-max max-w-[280px] text-left">
                        <p className="font-poppins  text-[26px] font-bold text-[#45628A] mb-[2px]">{DeliveryProcessInfo[4].title}</p>
                        <p className="font-poppins text-[18px] text-[#7A848D]">{DeliveryProcessInfo[4].subTitle}</p>
                    </div>
                </div>

                {/* 5. Milk Pasteurisation (Bottom Right: angle -40) */}
                <div className="absolute left-1/2 top-1/2 z-20 transition-transform hover:scale-105" style={{ transform: "translate(calc(-50% + 180px), calc(-50% + 151px))" }}>
                    <img src={DeliveryProcessInfo[3].img} className="w-[85px] h-[85px] object-contain" alt={DeliveryProcessInfo[3].title} />
                    <div className="absolute top-1/2 -translate-y-1/2 left-[100%] ml-[45px] w-max max-w-[280px] text-left">
                        <p className="font-poppins text-[26px] font-bold text-[#45628A] mb-[2px]">{DeliveryProcessInfo[5].title}</p>
                        <p className="font-poppins text-[18px] text-[#7A848D]">{DeliveryProcessInfo[5].subTitle}</p>
                    </div>
                </div>

            </div>

            {/* Mobile Layout (Visible only under LG breakpoints) */}
            <div className="flex lg:hidden flex-col gap-2 w-full px-2 mt-12 mb-6 z-10 max-w-[450px] mx-auto">
                {DeliveryProcessInfo.map((item, idx) => (
                    <div className="flex items-center gap-2 bg-white p-4 rounded-xl border border-gray-50" key={idx}>
                        <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                            <img src={`/DP/DP${idx + 1}.png`} className="w-full h-full object-contain drop-shadow-sm" alt={item.title} />
                        </div>
                        <div>
                            <p className="font-poppins text-[18px] font-bold text-[#45628A] leading-tight mb-1">{item.title}</p>
                            <p className="font-poppins text-[14px] text-[#7A848D] leading-snug">{item.subTitle}</p>
                        </div>
                        <div className='w-[10px] text-md h-[10x] ml-auto rounded rounded-full bg-brand-blue text-white flex items-center justify-center md:hidden py-2 px-5 font-bold'>{idx + 1}</div>
                    </div>
                ))}
                <img src="/DP/DP7.jpg" className=" object-contain" alt={DeliveryProcessInfo[3].title} />
            </div>

            {/* Final Action Button */}
            <div className="w-full flex justify-center mt-14 mb-8 relative z-20">
                <Link to="/our-process" className="bg-[#59789E] hover:bg-[#45628A] text-white font-poppins px-8 py-[20px] font-semibold text-lg rounded-full shadow-md transition-all">
                    See Our Complete 6-Step Process
                </Link>
            </div>
        </section>
    );
};

export default DeliveryProcess;
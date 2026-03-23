import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#D8E4F6] font-['Poppins',sans-serif] pt-12 relative w-full overflow-hidden">
            {/* Main Content */}
            <div className="container font-poppins mx-auto px-6 md:px-12 lg:px-[120px] relative z-10 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left Column */}
                    <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start text-[14px]">
                        <Link to="/">
                            <img src="/logo.png" alt="BTech Doodhwala" className="h-20 mb-4" />
                        </Link>
                        <p className="text-gray-700 mb-8 leading-relaxed text-[16px] max-w-[400px]">
                            We are committed to delivering 100% pure, lab-tested, and farm-fresh milk in eco-friendly glass bottles directly to your doorstep.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-[16px] text-gray-700">
                                <FaMapMarkerAlt className="text-gray-800 text-lg flex-shrink-0" />
                                <span>Location</span>
                            </li>
                            <li className="flex items-center gap-3 text-[16px] text-gray-700">
                                <FaPhoneAlt className="text-gray-800 text-lg flex-shrink-0" />
                                <span>+91 7880089284</span>
                            </li>
                            <li className="flex items-center gap-3 text-[16px] text-gray-700">
                                <FaEnvelope className="text-gray-800 text-lg flex-shrink-0" />
                                <span>info@btechdoodhwala.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-[16px] text-gray-700">
                                <BsShieldFillCheck className="text-gray-800 text-lg flex-shrink-0" />
                                <span>FSSAI No: 12826019000216</span>
                            </li>
                        </ul>
                    </div>

                    {/* Explore Column */}
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col mt-4 md:mt-2">
                        <h3 className="text-lg text-gray-800 font-bold mb-4">Explore</h3>
                        <ul className="space-y-3">
                            <li><Link to="/why-choose-us" className="text-[16px] text-gray-700 hover:text-gray-900 transition-colors font-medium">Why Choose Us</Link></li>
                            <li><Link to="/our-process" className="text-[16px] text-gray-700 hover:text-gray-900 transition-colors font-medium">Our Process</Link></li>
                            <li><Link to="/subscription" className="text-[16px] text-gray-700 hover:text-gray-900 transition-colors font-medium">Subscription</Link></li>
                            <li><Link to="/terms-and-conditions" className="text-[16px] text-gray-700 hover:text-gray-900 transition-colors font-medium">Terms & Conditions</Link></li>
                            <li><Link to="/privacy-policy" className="text-[16px] text-gray-700 hover:text-gray-900 transition-colors font-medium">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Social Icons Column */}
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col md:items-start lg:items-start pt-2 md:pt-[44px]">
                        <div className="flex gap-3">
                            <a href="#" className="text-gray-800 hover:opacity-80 transition-opacity">
                                <div className="h-[30px] w-[30px] bg-[#222] text-white rounded-full flex items-center justify-center">
                                    <FaFacebookF size={14} />
                                </div>
                            </a>
                            <a href="#" className="text-gray-800 hover:opacity-80 transition-opacity">
                                <div className="h-[30px] w-[30px] bg-[#222] text-white rounded-full flex items-center justify-center">
                                    <FaInstagram size={14} />
                                </div>
                            </a>
                            <a href="#" className="text-gray-800 hover:opacity-80 transition-opacity">
                                <div className="h-[30px] w-[30px] bg-[#222] text-white rounded-full flex items-center justify-center">
                                    <FaWhatsapp size={14} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlapping Bottles */}
            <div className="absolute bottom-0 right-0 md:right-0% lg:right-0 w-[250px] md:w-[350px] lg:w-[450px] z-20 pointer-events-none origin-bottom hidden md:flex justify-end">
                <img src="common/milk-bottle.png" alt="Milk Bottles" className=" w-[120%] lg:w-[450px] h-auto object-contain object-bottom translate-y-[2px]" />
            </div>

            {/* Divider & Copyright Wrapper */}
            <div className="w-full border-t border-gray-300 relative z-10 bg-[#D8E4F6]">
                <div className="container  mx-auto px-6 md:px-12 lg:px-[120px] py-6">
                    <p className="text-[13px] text-center md:text-start  text-gray-600 font-medium tracking-wide">
                        © 2026 BTech Doodhwala. All Rights Reserved. | Delivering Health Everyday.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
import { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 left-0 w-full z-[100] bg-white shadow-sm transition-all duration-300">
            <nav className="container mx-auto px-6 md:px-24 py-4 font-poppins flex items-center justify-between relative">
                {/* Mobile Hamburger Menu */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden flex items-center justify-center w-[55px] h-[55px] rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                    <FaBars className="text-[22px] font-light" />
                </button>

                {/* Logo */}
                <Link to="/" className="hidden md:flex items-center">
                    <img src="/logo.png" alt="BTech Doodhwala" className="h-20 md:h-24" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 lg:space-x-12 font-bold text-lg tracking-wide">
                    <Link to="/why-choose-us" className="hover:text-brand-blue transition-colors">Why Choose Us</Link>
                    <Link to="/our-process" className="hover:text-brand-blue transition-colors">Our Process</Link>
                    {/* <Link to="/" className="hover:text-brand-blue transition-colors">Subscription</Link>
                    <Link to="/" className="hover:text-brand-blue transition-colors">Contact</Link> */}
                </div>

                {/* Desktop WhatsApp Button */}
                <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 md:px-5 px-3 py-3 border-[1.5px] border-brand-dark-blue rounded-full font-bold text-lg hover:bg-[#5774a0] hover:text-white transition-all">
                    <FaWhatsapp className="text-lg" />
                    <span className="">Message on WhatsApp</span>
                </a>

                {/* Mobile WhatsApp Button */}
                <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="md:hidden flex items-center justify-center w-[55px] h-[55px] rounded-full border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors flex-shrink-0">
                    <FaWhatsapp className="text-[26px]" />
                </a>

                {/* Mobile Menu Backdrop */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}

                {/* Mobile Sidebar Navigation */}
                <div className={`fixed top-0 left-0 w-[80%] max-w-[300px] h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <Link onClick={() => setIsMenuOpen(false)} to="/" className="md:flex items-center">
                            <img src="/logo.png" alt="BTech Doodhwala" className="h-14" />
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-400 hover:text-gray-800 transition-colors p-2"
                        >
                            <FaTimes className="text-2xl" />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="flex flex-col pt-8 px-8 gap-8 font-bold text-[18px] text-[#494949]">
                        <Link to="/why-choose-us" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue transition-colors">Why Choose Us</Link>
                        <Link to="/our-process" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue transition-colors">Our Process</Link>
                        {/* <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue transition-colors">Subscription</Link>
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-blue transition-colors">Contact</Link> */}
                    </div>

                    {/* Mobile Menu Footer Support Button */}
                    <div className="mt-auto p-6 border-t border-gray-100">
                        <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center gap-2 py-3.5 bg-[#5A779D] text-white rounded-full font-bold text-[17px] hover:bg-[#45628A] transition-all shadow-md">
                            <FaWhatsapp className="text-xl" />
                            <span>Message Us</span>
                        </a>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;
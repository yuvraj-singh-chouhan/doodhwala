import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsShieldFillCheck } from 'react-icons/bs';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        enquiryType: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        alert("Thank you for your enquiry. We will get back to you soon!");
        setFormData({
            fullName: '',
            mobileNumber: '',
            enquiryType: '',
            message: ''
        });
    };

    return (
        <div className="bg-[#FAFBFD] pt-12 font-poppins">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Header Section */}
                <div className="md:text-center max-w-3xl mx-auto mb-8 px-2">
                    <h1 className="text-[30px] md:text-5xl font-[900] text-brand-blue font-[Ruksha] leading-[1.05] tracking-[-0.02em] uppercase mb-4">
                        We'd Love To Hear<br className="block md:hidden" /> From You!
                    </h1>
                    <p className="text-[#666666] font-poppins text-[15px] md:text-[17px] leading-[1.6] max-w-[90%] mx-auto">
                        Have a question about our pure milk, or ready to start your daily morning delivery? Reach out to us instantly.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 h-[80%] py-6 px-5 lg:flex gap-8 lg:gap-2 md:w-full justify-center  mx-auto">

                    {/* Left Column: Contact Cards */}
                    <div className="flex flex-col gap-4">

                        {/* WhatsApp Support Card */}
                        <div className="bg-white rounded-[16px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-6 md:p-8 flex flex-col items-center md:items-start border border-gray-100/80">
                            <div className="flex items-center gap-4 mb-6 w-full justify-center md:justify-start">
                                <div className="w-[52px] h-[52px] rounded-full bg-[#E5F7ED] flex items-center justify-center flex-shrink-0">
                                    <FaWhatsapp className="text-[#25D366] text-[34px]" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-[#333333] text-[18px] mb-0.5">WhatsApp Support</h3>
                                    <p className="text-green-500 text-[12px] md:text-[12px] font-semibold tracking-wide">Preferred for Instant Response</p>
                                </div>
                            </div>
                            <p className="text-[#333333] font-semibold text-[20px] mb-6 tracking-wide text-center md:text-left w-full ml-12">+91 7980089284</p>
                            <a
                                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '917980089284'}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 md:py-3 px-8 rounded-full flex justify-center items-center gap-2 transition-all shadow-sm text-[15px] ml-12"
                            >
                                <FaWhatsapp className="text-[20px]" />
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Email Support Card */}
                        <div className="bg-white rounded-[16px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-6 md:p-8 flex flex-col items-center md:items-start border border-gray-100/80">
                            <div className="flex items-center gap-4 w-full justify-center md:justify-start">
                                <div className="w-[52px] h-[52px] rounded-full bg-[#E6F0FF] flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-[#4D90FE] text-[22px]" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <h3 className="font-bold text-[#333333] text-[18px] mb-0.5">Email Support</h3>
                                    <a href="mailto:info@btechdoodhwala.com" className="text-[#4D90FE] font-medium text-[13px] hover:underline">
                                        info@btechdoodhwala.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Two Small Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Headquarters */}
                            <div className="bg-white rounded-[16px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-5 px-6 flex items-center gap-5 border border-gray-100/80">
                                <div className="w-[42px] h-[42px] rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-[#1A1A1A] text-[18px] md:text-[24px]" />
                                </div>
                                <div className='p-4'>
                                    <h4 className="text-[10px]md:text-[18px] text-gray-500 uppercase font-bold tracking-widest mb-1">Headquarters</h4>
                                    <p className="font-bold text-[#333333] text-[13px] md:text-[16px] leading-tight">Indore, Madhya Pradesh</p>
                                </div>
                            </div>

                            {/* FSSAI */}
                            <div className="bg-white rounded-[16px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-5 px-6 flex items-center gap-5 border border-gray-100/80">
                                <div className="w-[42px] h-[42px] rounded-full bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                                    <BsShieldFillCheck className="text-[#1A1A1A] text-[18px] md:text-[24px]" />
                                </div>
                                <div className='p4'>
                                    <h4 className="text-[13px]   md:text-[18px] font-bold text-[#333333] mb-0.5">FSSAI Certified Purity</h4>
                                    <p className="text-[11px]  md:text-[16px]  text-gray-500 font-semibold tracking-wide">12826019000216</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Enquiry Form */}
                    <div className="bg-white  flex-1 rounded-[16px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] p-6 md:p-8 border border-gray-100/80">
                        <h3 className="font-bold text-brand-blue text-[26px] font-poppins mb-6">Send an Enquiry</h3>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Full Name */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="fullName" className="text-[16px] md:text-[20px] font-bold text-brand-blue">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-[#FCFDFE] border border-[#BFBFBF] rounded-lg px-4 py-4 text-[14px] text-gray-800 outline-none transition-all"
                                    required
                                />
                            </div>

                            {/* Mobile Number */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="mobileNumber" className="text-[12px] md:text-[20px] font-bold text-[#444444]">Mobile Number</label>
                                <input
                                    type="tel"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    className="w-full bg-[#FCFDFE] border border-[#BFBFBF] rounded-lg px-4 py-4 text-[14px] text-gray-800 outline-none transition-all"
                                    required
                                />
                            </div>

                            {/* Enquiry Type */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="enquiryType" className="text-[12px] md:text-[20px] font-bold text-[#444444]">Enquiry Type</label>
                                <select
                                    id="enquiryType"
                                    name="enquiryType"
                                    value={formData.enquiryType}
                                    onChange={handleChange}
                                    className="w-full bg-[#FCFDFE] border border-[#BFBFBF] rounded-lg px-4 py-4 text-[14px] text-[#888888] outline-none transition-all appearance-none"
                                    required
                                >
                                    <option value="" disabled>Select option</option>
                                    <option value="New Subscription">New Subscription</option>
                                    <option value="Product Delivery">Product Delivery</option>
                                    <option value="Billing/Payment">Billing/Payment</option>
                                    <option value="Quality Concern">Quality Concern</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-[12px] md:text-[20px] font-bold text-[#444444]">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can i help you ?"
                                    rows="3"
                                    className="w-full bg-[#FCFDFE] border border-[#BFBFBF] rounded-[6px] px-4 py-3 text-[14px] text-gray-800 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none placeholder-[#AAAAAA]"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-3 w-full bg-brand-blue hover:bg-brand-blue/80 text-white font-bold py-[14px] rounded-full transition-all shadow-md flex justify-center items-center text-[15px]"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;

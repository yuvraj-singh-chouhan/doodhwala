import React from 'react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
    return (
        <div className="w-full bg-[#f8f9fa] pt-16 pb-16 min-h-[80vh] font-poppins text-gray-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-[120px]">
                <div className=" p-8 md:p-12 mb-8 mt-4 md:mt-12">
                    <h1 className="font-[Ruksha] text-[40px] md:text-[50px] text-[#45628A] uppercase leading-tight mb-2 drop-shadow-sm text-center">
                        Terms and Conditions
                    </h1>
                    <p className="text-center text-gray-500 mb-10 text-[15px]">
                        Last Updated: March 2026
                    </p>

                    <div className="space-y-8 text-[15px] md:text-[16px] leading-[1.8] text-gray-700">
                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">1. Introduction</h2>
                            <p>
                                Welcome to BTech Doodhwala. By accessing and using our website, application, and milk delivery subscription services, you agree to comply with and be bound by the following Terms and Conditions. Please review these terms carefully. If you do not agree with any part of these terms, you should not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">2. Service Overview & Quality Promise</h2>
                            <p>
                                BTech Doodhwala provides fresh, unadulterated, and pasteurized A2 cow and buffalo milk delivered directly to your doorstep. We guarantee 100% purity and conduct strict quality tests in our in-house lab. Our milk is packaged in eco-friendly, reusable glass bottles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">3. Subscriptions & Payments</h2>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Subscriptions can be managed via your registered account.</li>
                                <li>All subscription fees must be paid in advance via our secure online payment portal.</li>
                                <li>Pricing is subject to change. Any price changes will be communicated to you at least 7 days prior to implementation.</li>
                                <li>If payment fails, deliveries may be paused until the outstanding balance is cleared.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">4. Delivery Policy & Scheduling</h2>
                            <p>
                                Deliveries occur daily between 6:00 AM and 10:00 AM based on your selected flexible slot. We currently operate exclusively in specific service areas. If your location is outside our range, you will be notified at the time of sign-up.
                            </p>
                            <p className="mt-2">
                                Customers are responsible for providing accurate delivery addresses and instructions. Ensure that the delivery personnel has safe and unrestricted access to drop off the milk and collect empty glass bottles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">5. Order Pauses, Cancellations & Refunds</h2>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>Pausing Delivery:</strong> You can pause your subscription up to 10:00 PM the night before the scheduled delivery. The missed days will be automatically credited to your wallet or extended in your billing cycle.</li>
                                <li><strong>Cancellations:</strong> Subscriptions can be canceled at any time. A pro-rated refund will be processed within 5-7 business days for any undelivered milk.</li>
                                <li><strong>Returns/Replacements:</strong> If you receive an unsatisfactory or damaged bottle, please report it to our customer support on the same day. We will replace the product or issue a full refund at our sole discretion.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">6. Eco-Friendly Glass Bottle Returns</h2>
                            <p>
                                To maintain our zero-plastic promise, we deliver milk in premium glass bottles. You are required to rinse the empty bottle and leave it out for collection the next morning. A nominal deposit or penalty may be charged for continuously lost or broken bottles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">7. Privacy & Data Use</h2>
                            <p>
                                Your privacy is critically important to us. Any personal information submitted through our platform, including contact details and delivery addresses, will only be used to fulfill orders and improve our service. We do not sell or share customer data with third-party marketing entities.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">8. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these Terms and Conditions at any time. Changes will take effect immediately upon posting to this page. Continued use of the service signifies your acceptance of the updated terms.
                            </p>
                        </section>

                        <section className="bg-[#EAF2FB] p-6 rounded-xl border border-blue-50 mt-10">
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-2">9. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions or require support regarding these Terms and Conditions, please reach out to us:
                            </p>
                            <ul className="space-y-1 font-medium text-[#45628A]">
                                <li><strong>Email:</strong> info@btechdoodhwala.com</li>
                                <li><strong>Phone:</strong> +91 7880089284</li>
                                <li><strong>FSSAI No:</strong> 12826019000216</li>
                            </ul>
                        </section>

                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/" className="inline-block px-8 py-3 bg-[#45628A] text-white font-bold rounded-full hover:bg-[#344b6b] transition shadow-md">
                            Return to Homepage
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TermsAndConditions;

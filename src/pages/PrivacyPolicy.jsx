import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
    return (
        <div className="w-full bg-[#f8f9fa] pt-16 pb-16 min-h-[80vh] font-poppins text-gray-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-[120px]">
                <div className="p-8 md:p-12  mb-8 mt-4 md:mt-12">
                    <h1 className="font-[Ruksha] text-[40px] md:text-[50px] text-[#45628A] uppercase leading-tight mb-2 drop-shadow-sm text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-center text-gray-500 mb-10 text-[15px]">
                        Last Updated: March 2026
                    </p>

                    <div className="space-y-8 text-[15px] md:text-[16px] leading-[1.8] text-gray-700">
                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">1. Introduction</h2>
                            <p>
                                Welcome to BTech Doodhwala. We are deeply committed to protecting your privacy and ensuring that your personal data is handled securely and responsibly. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when accessing our website, mobile applications, or milk delivery services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">2. Information We Collect</h2>
                            <p>
                                To provide you with seamless farm-fresh dairy delivery, we may collect the following types of information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>Personal Identification Data:</strong> Your name, email address, phone number, and physical delivery address.</li>
                                <li><strong>Account & Payment Data:</strong> Subscription preferences, transaction history, and encrypted payment details processed securely via third-party gateways.</li>
                                <li><strong>Technical Data:</strong> Information such as your IP address, browser type, and device details collected automatically when you browse our platform.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">3. How We Use Your Information</h2>
                            <p>
                                The data we collect is utilized strictly to enhance your experience and fulfill our delivery commitment. Specifically, we use it to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Process your subscription orders and coordinate daily morning deliveries.</li>
                                <li>Communicate important updates like delivery delays, payment confirmations, and account modifications.</li>
                                <li>Improve our website functionality, customer service, and overall user experience.</li>
                                <li>Comply with legal obligations, including FSSAI regulations and tax requirements.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">4. Data Sharing & Security</h2>
                            <p>
                                We guarantee that we <strong>never</strong> sell, rent, or trade your personal information to third-party marketing entities. We only share necessary data with trusted third-party service providers (such as payment processors and delivery routing software) who assist us in operating our business. These partners are legally bound to keep your information confidential.
                            </p>
                            <p className="mt-2">
                                We employ industry-standard encryption protocols and secure servers to protect against unauthorized access, alteration, or data destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">5. Cookies and Tracking Technologies</h2>
                            <p>
                                Our platform uses functional and analytical "cookies" to recognize your browser, remember your login preferences, and analyze site traffic. You can choose to disable cookies through your browser settings; however, doing so may limit your ability to use certain features of the BTech Doodhwala platform effectively.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">6. Your Rights & Choices</h2>
                            <p>
                                You have the right to access, update, or permanently delete the personal information we hold about you. You can manage your account settings directly through the application profile dashboard or contact our support team to request data removal.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-3">7. Policy Modifications</h2>
                            <p>
                                We may periodically update this Privacy Policy to reflect changes in legal regulations or operational practices. When material updates are made, we will notify all active subscribers via email or platform notifications. Continued use of our service signifies consent to the revised terms.
                            </p>
                        </section>

                        <section className="bg-[#EAF2FB] p-6 rounded-xl border border-blue-50 mt-10">
                            <h2 className="text-[22px] font-bold text-[#45628A] mb-2">8. Connect With Our Privacy Team</h2>
                            <p className="mb-4">
                                If you have concerns, inquiries, or feedback regarding our privacy practices, please contact us at:
                            </p>
                            <ul className="space-y-1 font-medium text-[#45628A]">
                                <li><strong>Data Protection Email:</strong> secure@btechdoodhwala.com</li>
                                <li><strong>General Support:</strong> info@btechdoodhwala.com</li>
                                <li><strong>Phone:</strong> +91 7880089284</li>
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

export default PrivacyPolicy;

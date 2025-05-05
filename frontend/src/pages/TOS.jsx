import React from "react";

const TOS = () => {
    return (
        <div className="p-5 max-w-6xl mx-auto prose">
            <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing or using the Strategos demo trading platform
                    ("Strategos"), you agree to be bound by these Terms of Service
                    ("Terms"). If you disagree with any part, you may not access the
                    Platform.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    2. Demo Platform Disclaimer
                </h2>
                <p className="mb-4">
                    The Platform provides simulated trading with virtual funds only. No
                    real money or financial instruments are being traded. Market
                    conditions shown may differ from actual markets. Past performance is
                    not indicative of future results.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    3. User Responsibilities
                </h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Maintain confidentiality of your account credentials</li>
                    <li>Not engage in any illegal or abusive activities</li>
                    <li>Not attempt to reverse engineer or hack the Platform</li>
                    <li>Comply with all applicable laws and regulations</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Account Terms</h2>
                <div className="space-y-2">
                    <p>a. Users must be at least 18 years old to register</p>
                    <p>b. Accounts may be terminated at our discretion</p>
                    <p>c. We reserve the right to modify or reset demo accounts</p>
                    <p>d. Multiple accounts may be prohibited</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Risk Disclosure</h2>
                <p className="mb-4">
                    While this is a demo platform, trading real financial instruments
                    involves substantial risk. The Platform does not provide investment
                    advice. You are solely responsible for any investment decisions you
                    might make.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    6. Intellectual Property
                </h2>
                <p className="mb-4">
                    All content on the Platform, including software, text, and graphics,
                    is our property or licensed to us and protected by intellectual
                    property laws.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    7. Limitation of Liability
                </h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Technical interruptions or platform downtime</li>
                    <li>Accuracy of market data or simulations</li>
                    <li>Any indirect, incidental, or consequential damages</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                <p className="mb-4">
                    We may terminate or suspend access to the Platform immediately,
                    without prior notice, for any reason whatsoever, including without
                    limitation if you breach the Terms.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Modifications</h2>
                <p className="mb-4">
                    We reserve the right to modify these Terms at any time. Continued use
                    after changes constitutes acceptance of the modified Terms.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                <p className="mb-4">
                    These Terms shall be governed by the laws of [Jurisdiction] without
                    regard to its conflict of law provisions.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="mb-4">
                    For questions about these Terms, contact us at
                    enquiries@strategos.com.
                    <br />
                    <br />
                    <span className="font-bold">Effective Date:</span> 2025
                </p>
            </section>
        </div>
    );
};

export default TOS;

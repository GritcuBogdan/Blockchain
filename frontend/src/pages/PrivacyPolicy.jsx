import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="p-5 max-w-6xl mx-auto prose">
            <h1 className="text-3xl font-bold text-center mb-8">
                Strategos Demo Trading Platform Privacy Policy
            </h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                    Strategos ("we", "our", or "us") operates the Strategos demo trading
                    platform (the "Platform"). This Privacy Policy explains how we
                    collect, use, and protect your information in connection with your use
                    of our demo trading services.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    2. Information We Collect
                </h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Account information (name, email, username)</li>
                    <li>Technical data (IP address, browser type, device information)</li>
                    <li>
                        Usage data (trading activity, session duration, features used)
                    </li>
                    <li>Cookies and similar tracking technologies</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Use of Information</h2>
                <p className="mb-4">We use collected information to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Provide and maintain the demo trading platform</li>
                    <li>Improve user experience and platform functionality</li>
                    <li>Monitor platform usage and performance</li>
                    <li>Communicate important service updates</li>
                    <li>Prevent fraudulent activity and ensure security</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Data Protection</h2>
                <p className="mb-4">We implement security measures including:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Regular security audits</li>
                    <li>Access controls and authentication protocols</li>
                    <li>Secure server infrastructure</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
                <p className="mb-4">
                    We do not sell user data. Limited sharing may occur with:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Service providers (analytics, hosting, support)</li>
                    <li>Legal authorities when required by law</li>
                    <li>Affiliates for platform maintenance purposes</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
                <p className="mb-4">We use cookies to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Maintain user sessions</li>
                    <li>Analyze platform traffic</li>
                    <li>Remember preferences</li>
                </ul>
                <p className="mt-4">
                    Users can manage cookies through browser settings.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. User Rights</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Access your personal data</li>
                    <li>Request data correction</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt-out of communications</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
                <p className="mb-4">
                    We retain data for 12 months after account deletion for:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Legal compliance</li>
                    <li>Fraud prevention</li>
                    <li>Service improvement</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services</h2>
                <p className="mb-4">The Platform may integrate with:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Analytics providers (Google Analytics)</li>
                    <li>Cloud service providers (AWS, Firebase)</li>
                    <li>Support platforms (Zendesk, Intercom)</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
                <p className="mb-4">
                    The Platform is not intended for users under 18. We do not knowingly
                    collect data from children under 13.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    11. International Transfers
                </h2>
                <p className="mb-4">
                    Data may be transferred to and processed in countries outside your
                    residence. We ensure adequate protection through GDPR-compliant
                    measures where applicable.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. Policy Updates</h2>
                <p className="mb-4">
                    We may update this policy periodically. Continued use after changes
                    constitutes acceptance of the revised policy.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                    For privacy-related inquiries:
                    <br />
                    Email: privacy@strategos.demo
                    <br />
                    <br />
                    <strong>Effective Date:</strong> October 1, 2023
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;

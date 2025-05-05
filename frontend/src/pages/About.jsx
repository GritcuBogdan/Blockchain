import React from "react";

const About = () => {
    return (
        <div className="p-5 max-w-6xl mx-auto prose">
            <h1 className="text-3xl font-bold text-center mb-8">About Strategos</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-4">
                    At Strategos, we empower traders to learn cryptocurrency markets
                    risk-free. Our platform combines real-world trading dynamics with
                    educational resources to create the ultimate sandbox for developing
                    trading skills.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Platform Features</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Real-time crypto market simulations</li>
                    <li>$100,000 virtual starting balance</li>
                    <li>Historical market scenarios</li>
                    <li>Advanced charting tools</li>
                    <li>Risk management tutorials</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <div className="space-y-2">
                    <p>1. Create a free demo account</p>
                    <p>2. Access virtual trading capital</p>
                    <p>3. Practice with real market data</p>
                    <p>4. Analyze your performance</p>
                    <p>5. Improve your strategies</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <p className="mb-4">
                    Strategos stands out through our commitment to realistic simulations:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Liquidity-adjusted pricing models</li>
                    <li>Slippage simulation</li>
                    <li>Exchange fee structures</li>
                    <li>Market volatility scenarios</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <p className="mb-4">
                    Founded by veteran traders and software engineers, our team brings
                    together decades of experience in:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Cryptocurrency markets</li>
                    <li>Financial education</li>
                    <li>Platform security</li>
                    <li>Market data analysis</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Security Commitment</h2>
                <div className="space-y-2">
                    <p>• AES-256 encryption</p>
                    <p>• Regular penetration testing</p>
                    <p>• GDPR-compliant data handling</p>
                    <p>• Two-factor authentication support</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                    Have questions? Reach our team at support@strategos.com
                    <br />
                    <br />
                    <span className="font-bold">Founded:</span> 2025
                </p>
            </section>
        </div>
    );
};

export default About;

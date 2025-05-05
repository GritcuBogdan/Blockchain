import React from "react";

const FAQ = () => {
    return (
        <div className="p-5 max-w-6xl mx-auto prose">
            <h1 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
            </h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. What is Strategos?</h2>
                <p className="mb-4">
                    Strategos is a risk-free simulation platform where you can practice
                    cryptocurrency trading using virtual funds. It mimics real market
                    conditions without any financial risk.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    2. Is real money involved in trading?
                </h2>
                <p className="mb-4">
                    No. All trades are executed with virtual funds. There's no deposit
                    required and no real money changes hands on our demo platform.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    3. How do I create an account?
                </h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Click the 'Sign Up' button</li>
                    <li>Provide your email address</li>
                    <li>Create a password</li>
                    <li>Verify your email</li>
                    <li>Start trading immediately with virtual funds</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    4. Can I reset my virtual balance?
                </h2>
                <p className="mb-4">
                    Yes. You can reset your virtual balance to the initial amount once
                    every 24 hours through your account dashboard.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    5. How real-time is the market data?
                </h2>
                <p className="mb-4">
                    Our platform uses delayed market data from major cryptocurrency
                    exchanges. Prices are simulated for educational purposes and may
                    differ from actual market prices.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    6. What cryptocurrencies are available?
                </h2>
                <div className="space-y-2">
                    <p>We support simulations for major cryptocurrencies including:</p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Bitcoin (BTC)</li>
                        <li>Ethereum (ETH)</li>
                        <li>Litecoin (LTC)</li>
                        <li>Ripple (XRP)</li>
                        <li>And other top 50 cryptocurrencies</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    7. Can I practice different order types?
                </h2>
                <p className="mb-4">
                    Yes. Our platform supports various order types including market
                    orders, limit orders, stop-loss orders, and take-profit orders.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    8. Is my personal data secure?
                </h2>
                <p className="mb-4">
                    We use bank-grade security measures including SSL encryption and
                    regular security audits. No financial information is stored as no real
                    money transactions occur.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    9. How does this differ from real trading?
                </h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>No financial risk</li>
                    <li>Emotional pressure might differ</li>
                    <li>Order execution times are simulated</li>
                    <li>Market impact of large orders isn't reflected</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                    10. Can I upgrade to real trading?
                </h2>
                <p className="mb-4">
                    Strategos currently only offers demo trading. We may introduce real
                    trading features in the future - subscribe to our newsletter for
                    updates.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
                <p className="mb-4">
                    Contact our support team at support@strategos.com
                    <br />
                    <br />
                    <span className="font-bold">Last Updated:</span> 2025
                </p>
            </section>
        </div>
    );
};

export default FAQ;

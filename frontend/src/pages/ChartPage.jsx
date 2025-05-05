import { ChartColumnDecreasing, ChartColumnIncreasing } from "lucide-react";
import React, { useEffect, useRef, memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";
import usdt from "../images/usdt.png";

function ChartPage({ user }) {
    const container = useRef(null);
    const navigate = useNavigate();
    const { ticker } = useParams();
    const [tradeAmount, setTradeAmount] = useState();
    const [leverage, setLeverage] = useState(1);
    const [tradeDirection, setTradeDirection] = useState("long");
    const [tpPercentage, setTpPercentage] = useState("");
    const [slPercentage, setSlPercentage] = useState("");
    const [balance, setBalance] = useState(user?.totalBalance || 10000);

    const [showOrderPopup, setShowOrderPopup] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const timeoutRef = useRef(null);
    const [popupVisible, setPopupVisible] = useState(false);
    const popupRef = useRef(null);

    const activeBets = [
        {
            PAIR: "BTCUSDT",
            CURRENCY: "USD",
            WAGER: 524.5,
            ENTRY_PRICE: 1053.24,
            BUST_PRICE: 1174.43,
            MULTIPLIER: 10.0,
            FUNDING_HOUR: "-",
            PnL: 0.234234,
            ROI: "+8.34%",
        },
        {
            PAIR: "ETHUSDT",
            CURRENCY: "USD",
            WAGER: 300.0,
            ENTRY_PRICE: 2034.12,
            BUST_PRICE: 1890.5,
            MULTIPLIER: 5.0,
            FUNDING_HOUR: "2h",
            PnL: -12.34,
            ROI: "-4.11%",
        },
        {
            PAIR: "XRPUSDT",
            CURRENCY: "USD",
            WAGER: 150.75,
            ENTRY_PRICE: 0.523,
            BUST_PRICE: 0.6,
            MULTIPLIER: 20.0,
            FUNDING_HOUR: "-",
            PnL: 7.85,
            ROI: "+5.21%",
        },
        {
            PAIR: "SOLUSDT",
            CURRENCY: "USD",
            WAGER: 220.0,
            ENTRY_PRICE: 98.42,
            BUST_PRICE: 87.5,
            MULTIPLIER: 8.0,
            FUNDING_HOUR: "4h",
            PnL: -5.67,
            ROI: "-2.57%",
        },
        {
            PAIR: "DOGEUSDT",
            CURRENCY: "USD",
            WAGER: 75.5,
            ENTRY_PRICE: 0.075,
            BUST_PRICE: 0.08,
            MULTIPLIER: 15.0,
            FUNDING_HOUR: "-",
            PnL: 3.25,
            ROI: "+4.31%",
        },
        {
            PAIR: "ADAUSDT",
            CURRENCY: "USD",
            WAGER: 180.0,
            ENTRY_PRICE: 0.379,
            BUST_PRICE: 0.4,
            MULTIPLIER: 10.0,
            FUNDING_HOUR: "1h",
            PnL: 6.12,
            ROI: "+3.45%",
        },
        {
            PAIR: "BNBUSDT",
            CURRENCY: "USD",
            WAGER: 410.0,
            ENTRY_PRICE: 323.14,
            BUST_PRICE: 340.0,
            MULTIPLIER: 6.0,
            FUNDING_HOUR: "-",
            PnL: 15.78,
            ROI: "+6.12%",
        },
    ];

    useEffect(() => {
        let timer1, timer2;
        if (showOrderPopup) {
            setPopupVisible(true);

            timer1 = setTimeout(() => {
                setPopupVisible(false);
                timer2 = setTimeout(() => setShowOrderPopup(false), 300);
            }, 2700);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
            };
        }
    }, [showOrderPopup]);

    useEffect(() => {
        if (showOrderPopup) {
            const timer = setTimeout(() => {
                setIsClosing(true);
                setTimeout(() => setShowOrderPopup(false), 300);
            }, 2700);

            return () => clearTimeout(timer);
        }
    }, [showOrderPopup]);

    useEffect(() => {
        if (!container.current) return;

        container.current.innerHTML = "";

        const script = document.createElement("script");
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${ticker}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

        container.current.appendChild(script);
    }, [ticker]);

    const handleTradeAmount = (value) => {
        const amount = Math.max(0, Number(value));
        setTradeAmount(amount);
    };

    const adjustTradeAmount = (multiplier) => {
        setTradeAmount((prev) => Math.max(0, prev * multiplier));
    };

    const calculatePotentialPNL = () => {
        if (!tradeAmount || !leverage) return 0;
        const priceChangePercentage = 10;
        const pnl =
            tradeDirection === "long"
                ? tradeAmount * leverage * (priceChangePercentage / 100)
                : tradeAmount * leverage * (-priceChangePercentage / 100);

        return pnl.toFixed(2);
    };

    const validateOrder = () => {
        if (!tradeDirection) {
            alert("Please select trade direction");
            return false;
        }
        if (tradeAmount <= 0) {
            alert("Please enter a valid trade amount");
            return false;
        }
        if (leverage <= 0) {
            alert("Please select valid leverage");
            return false;
        }
        const marginRequired = tradeAmount / leverage;
        if (marginRequired > balance) {
            alert("Insufficient balance");
            return false;
        }
        return true;
    };

    const handlePlaceOrder = () => {
        if (!validateOrder()) return;

        const margin = tradeAmount / leverage;
        setBalance((prev) => prev - margin);

        const orderDetails = {
            pair: ticker,
            direction: tradeDirection,
            amount: tradeAmount,
            leverage,
            margin,
            tp: tpPercentage,
            sl: slPercentage,
            timestamp: new Date().toISOString(),
        };

        setOrderDetails(orderDetails);
        setShowOrderPopup(true);

        setTradeAmount("");
        setTpPercentage("");
        setSlPercentage("");
    };

    return (
        <div className="flex flex-col h-screen w-screen p-4 items-center justify-center">
            <main className="flex flex-col items-center w-full h-full gap-5">
                <div className="flex items-center w-full h-2/3 gap-5">
                    <div
                        ref={container}
                        className="w-2/3 h-full flex items-center justify-center"
                    >
                        <div className="tradingview-widget-container__widget w-full h-full rounded-lg bg-transparent"></div>
                    </div>

                    <div className="flex flex-col items-center bg-[#1e1e1e] w-1/3 h-full rounded-lg p-5 gap-4">
                        <div className="w-full flex justify-between items-center">
                            <h3 className="text-xl font-bold">Trade {ticker}</h3>
                            <div className="flex items-center gap-4">
                                <div className="text-sm text-gray-400">
                                    Balance: {balance.toFixed(2)} USDT
                                </div>
                                <button
                                    onClick={() => (window.location.href = "/market")}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors cursor-pointer"
                                >
                                    Market
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full">
                            <button
                                onClick={() => setTradeDirection("long")}
                                className={`w-1/2 py-3 cursor-pointer rounded-lg transition-colors ${
                                    tradeDirection === "long"
                                        ? "bg-green-600 hover:bg-green-700"
                                        : "bg-green-500/20 hover:bg-green-500/30"
                                }`}
                            >
                                ▲ Long
                            </button>
                            <button
                                onClick={() => setTradeDirection("short")}
                                className={`w-1/2 py-3 cursor-pointer rounded-lg transition-colors ${
                                    tradeDirection === "short"
                                        ? "bg-red-600 hover:bg-red-700"
                                        : "bg-red-500/20 hover:bg-red-500/30"
                                }`}
                            >
                                ▼ Short
                            </button>
                        </div>

                        <div className="w-full space-y-4">
                            <div className="relative">
                                <input
                                    type="number"
                                    className="w-full h-12 pl-12 pr-4 rounded-lg bg-[#2e2e2e]"
                                    placeholder="Enter amount"
                                    value={tradeAmount}
                                    onChange={(e) => handleTradeAmount(e.target.value)}
                                    min="0"
                                    step="0.01"
                                />
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                    <img src={usdt} className="w-6 h-6" />
                                </div>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                                    <button
                                        onClick={() => adjustTradeAmount(0.5)}
                                        className="px-3 py-1 bg-[#3a3a3a] rounded-md text-sm cursor-pointer"
                                    >
                                        ½
                                    </button>
                                    <button
                                        onClick={() => adjustTradeAmount(2)}
                                        className="px-3 py-1 bg-[#3a3a3a] rounded-md text-sm cursor-pointer"
                                    >
                                        2×
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm text-gray-400">Leverage</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {[1, 5, 10, 25].map((lev) => (
                                        <button
                                            key={lev}
                                            onClick={() => setLeverage(lev)}
                                            className={`py-2 cursor-pointer rounded-md ${
                                                leverage === lev
                                                    ? "bg-blue-600"
                                                    : "bg-[#3a3a3a] hover:bg-[#4a4a4a]"
                                            }`}
                                        >
                                            {lev}×
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Take Profit</span>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            className="w-20 px-2 py-1 bg-[#3a3a3a] rounded-md"
                                            placeholder="TP %"
                                            value={tpPercentage}
                                            onChange={(e) => setTpPercentage(e.target.value)}
                                            min="0"
                                        />
                                        <span className="text-gray-400">%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-400">Stop Loss</span>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            className="w-20 px-2 py-1 bg-[#3a3a3a] rounded-md"
                                            placeholder="SL %"
                                            value={slPercentage}
                                            onChange={(e) => setSlPercentage(e.target.value)}
                                            min="0"
                                        />
                                        <span className="text-gray-400">%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-auto space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Margin Required:</span>
                                <span className="text-blue-500">
                  {isNaN(tradeAmount / leverage) ||
                  tradeAmount / leverage === Infinity
                      ? "0"
                      : (tradeAmount / leverage).toFixed(2)}{" "}
                                    USDT
                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Potential PNL:</span>
                                <span
                                    className={
                                        tradeDirection === "long"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }
                                >
                  {calculatePotentialPNL()} USDT
                </span>
                            </div>
                            <button
                                className="w-full py-3 cursor-pointer rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                                onClick={handlePlaceOrder}
                            >
                                {tradeDirection === "long"
                                    ? "Open Long Position"
                                    : "Open Short Position"}
                            </button>
                            <p className="text-center text-xs text-gray-400">
                                Demo trading - No real funds are being used
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center h-1/3 w-full bg-[#1e1e1e] rounded-lg justify-center p-2">
                    <table className="w-full ">
                        <tr className="text-sm text-gray-400 text-left">
                            <th>PAIR</th>
                            <th>CURRENCY</th>
                            <th>WAGER</th>
                            <th>ENTRY PRICE</th>
                            <th>BUST PRICE</th>
                            <th>MULTIPLIER</th>
                            <th>FUNDING/HOUR</th>
                            <th>P&L</th>
                            <th>ROI</th>
                            <th></th>
                        </tr>
                        {activeBets.map((bet, index) => (
                            <tr key={index}>
                                <td
                                    onClick={() => navigate(`/chart/${bet.PAIR}`)}
                                    className="cursor-pointer"
                                >
                                    {bet.PAIR}
                                </td>
                                <td>{bet.CURRENCY}</td>
                                <td>{bet.WAGER}</td>
                                <td>{bet.ENTRY_PRICE}</td>
                                <td>{bet.BUST_PRICE}</td>
                                <td>{bet.MULTIPLIER}</td>
                                <td>{bet.FUNDING_HOUR}</td>
                                <td>{bet.PnL}</td>
                                <td>{bet.ROI}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </main>
            {showOrderPopup && (
                <div className="fixed inset-0 flex items-start justify-end z-50">
                    <div
                        ref={popupRef}
                        className={`popup-transition bg-[#1e1e1e] rounded-lg p-6 w-96 mt-4 mr-4 ${
                            popupVisible ? "popup-visible" : ""
                        }`}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Order Executed</h3>
                        </div>

                        <div className="space-y-3 text-sm">
                            <p className="text-sm">
                <span
                    className={
                        orderDetails.direction === "long"
                            ? "text-green-500"
                            : "text-red-500"
                    }
                >
                  ▲ {orderDetails.direction.toUpperCase()}
                </span>{" "}
                                position opened on{" "}
                                <span className="text-white">{orderDetails.pair}</span> with{" "}
                                <span className="text-white">{orderDetails.amount} USDT</span>{" "}
                                at{" "}
                                <span className="text-white">
                  {new Date(orderDetails.timestamp).toLocaleTimeString()}
                </span>
                            </p>
                        </div>

                        <button
                            className="w-full mt-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                            onClick={() => setShowOrderPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(ChartPage);

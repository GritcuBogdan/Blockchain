import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const Profile = () => {
    const navigate = useNavigate();
    const [activeTimeframe, setActiveTimeframe] = useState("7D");
    const [showRequestPopup, setShowRequestPopup] = useState(false);
    const [requestAmount, setRequestAmount] = useState("");
    const [requestMessage, setRequestMessage] = useState("");

    const timeFrameData = {
        "1D": [
            { time: "9:00 AM", value: 41200 },
            { time: "10:00 AM", value: 42200 },
            { time: "11:00 AM", value: 42850 },
            { time: "12:00 PM", value: 41900 },
            { time: "1:00 PM", value: 42500 },
            { time: "2:00 PM", value: 41700 },
            { time: "3:00 PM", value: 43100 },
            { time: "4:00 PM", value: 42350 },
        ],

        "7D": [
            { day: "Mon", value: 39500 },
            { day: "Tue", value: 41500 },
            { day: "Wed", value: 40800 },
            { day: "Thu", value: 42200 },
            { day: "Fri", value: 43500 },
            { day: "Sat", value: 42800 },
            { day: "Sun", value: 42069 },
        ],

        "30D": [
            { date: "1", value: 37500 },
            { date: "4", value: 38500 },
            { date: "7", value: 37800 },
            { date: "10", value: 40200 },
            { date: "13", value: 39500 },
            { date: "16", value: 41500 },
            { date: "19", value: 42500 },
            { date: "22", value: 41800 },
            { date: "25", value: 43200 },
            { date: "28", value: 42700 },
            { date: "31", value: 42069 },
        ],

        "All Time": [
            { month: "Jan", value: 35000 },
            { month: "Feb", value: 38500 },
            { month: "Mar", value: 36500 },
            { month: "Apr", value: 40000 },
            { month: "May", value: 39500 },
            { month: "Jun", value: 41500 },
            { month: "Jul", value: 43000 },
            { month: "Aug", value: 42500 },
            { month: "Sep", value: 44000 },
            { month: "Oct", value: 45500 },
            { month: "Nov", value: 44200 },
            { month: "Dec", value: 42069 },
        ],
    };

    const getXAxisKey = () => {
        switch (activeTimeframe) {
            case "1D":
                return "time";
            case "7D":
                return "day";
            case "30D":
                return "date";
            default:
                return "month";
        }
    };

    const data = [
        { name: "Bitcoin (BTC)", value: 75000 },
        { name: "Ethereum (ETH)", value: 30000 },
        { name: "Binance Coin (BNB)", value: 10000 },
        { name: "Cardano (ADA)", value: 5000 },
        { name: "Solana (SOL)", value: 3000 },
        { name: "Dogecoin (DOGE)", value: 2000 },
    ];

    const COLORS = [
        "#8884d8",
        "#6C63FF",
        "#A5A4FF",
        "#4A47A3",
        "#C7C4FF",
        "#6361C2",
    ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
                                       cx,
                                       cy,
                                       midAngle,
                                       innerRadius,
                                       outerRadius,
                                       percent,
                                       index,
                                   }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const handleRequestSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Request submitted:", { requestAmount, requestMessage });
        setShowRequestPopup(false);
        setRequestAmount("");
        setRequestMessage("");
    };

    const RequestPopup = () => (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowRequestPopup(false)}
        >
            <div
                className="bg-[#1e1e1e] p-6 rounded-xl w-96"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl mb-4">Request More Funds</h2>
                <form onSubmit={handleRequestSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Amount (USD)</label>
                        <input
                            type="number"
                            value={requestAmount}
                            onChange={(e) => setRequestAmount(e.target.value)}
                            className="w-full bg-[#2e2e2e] rounded-lg p-2 text-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Message</label>
                        <textarea
                            value={requestMessage}
                            onChange={(e) => setRequestMessage(e.target.value)}
                            className="w-full bg-[#2e2e2e] rounded-lg p-2 text-white h-24"
                            required
                        />
                    </div>
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex-1"
                        >
                            Submit Request
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowRequestPopup(false)}
                            className="bg-gray-600 text-white px-4 py-2 rounded-lg flex-1"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen w-screen p-5">
            {showRequestPopup && <RequestPopup />}
            <div className="flex items-center w-full h-full gap-5">
                <div className="flex flex-col w-3/4 h-full items-center justify-center gap-5 ">
                    <div className="flex flex-col items-centers justify-between h-1/4 w-full px-3 py-6 bg-[#1e1e1e] rounded-xl">
                        <div className="flex justify-between items-center w-full">
                            <h1 className="text-3xl">Overall Portfolio</h1>
                            <button
                                onClick={() => setShowRequestPopup(true)}
                                className="border border-white bg-transparent rounded-xl text-white cursor-pointer px-3 py-2"
                            >
                                Request More
                            </button>
                        </div>
                        <div className="flex justify-between items-center w-full gap-8">
                            <div className="w-1/4 flex flex-col items-center">
                                <div className="flex items-center justify-between w-full">
                                    <h3>Balance</h3>
                                    <span className="text-green-600">+24%</span>
                                </div>
                                <h1 className="text-4xl">$42,069.00</h1>
                            </div>
                            <div className="w-1/4 flex flex-col items-center">
                                <div className="flex items-center justify-between w-full">
                                    <h3>Investment</h3>
                                    <span className="text-green-600">+28%</span>
                                </div>
                                <h1 className="text-4xl">$20,619.00</h1>
                            </div>
                            <div className="w-1/4 flex flex-col items-center">
                                <div className="flex items-center justify-between w-full">
                                    <h3>Total Gain</h3>
                                    <span className="text-green-600">+22%</span>
                                </div>
                                <h1 className="text-4xl">$8,664.00</h1>
                            </div>
                            <div className="w-1/4 flex flex-col items-center">
                                <div className="flex items-center justify-between w-full">
                                    <h3>Total Loss</h3>
                                    <span className="text-red-600">-20%</span>
                                </div>
                                <h1 className="text-4xl">$1,212.00</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-3/4 w-full p-3 bg-[#1e1e1e] gap-3 rounded-xl">
                        <div className="flex items-center justify-between min-h-[10%] w-full">
                            <h1 className="text-2xl text-left">Overview Statistics</h1>
                            <div className="flex items-center justify-center gap-5">
                                {["1D", "7D", "30D", "All Time"].map((timeframe) => (
                                    <button
                                        key={timeframe}
                                        onClick={() => setActiveTimeframe(timeframe)}
                                        className={`cursor-pointer px-3 py-1 rounded-lg ${
                                            activeTimeframe === timeframe
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-800 text-gray-400"
                                        }`}
                                    >
                                        {timeframe}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="min-h-[90%] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={timeFrameData[activeTimeframe]}
                                    margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#2e2e2e" />
                                    <XAxis
                                        dataKey={getXAxisKey()}
                                        tick={{ fill: "#fff" }}
                                        label={{ value: "Time", position: "bottom", fill: "#fff" }}
                                    />
                                    <YAxis
                                        tick={{ fill: "#fff" }}
                                        domain={["auto", "auto"]}
                                        allowDataOverflow={true}
                                        label={{
                                            angle: -90,
                                            position: "insideLeft",
                                            fill: "#fff",
                                        }}
                                        tickFormatter={(value) => `$${value.toLocaleString()}`}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#1e1e1e",
                                            border: "none",
                                            borderRadius: "5px",
                                        }}
                                        formatter={(value) => [
                                            `$${value.toLocaleString()}`,
                                            "Value",
                                        ]}
                                    />
                                    <Legend wrapperStyle={{ paddingTop: 20 }} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#8884d8"
                                        strokeWidth={2}
                                        dot={false}
                                        activeDot={{ r: 8 }}
                                        baseline={null}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between h-full w-1/4 bg-[#1e1e1e] rounded-xl p-4">
                    <div className="flex flex-col items-center justify-start w-full">
                        <h2 className="text-2xl mb-4">Portfolio Distribution</h2>
                        <div className="h-80 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={150}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="w-full flex flex-col gap-2 mt-4 px-6">
                            {data.map((coin, index) => (
                                <div
                                    key={coin.name}
                                    className="flex items-center gap-2 text-sm"
                                >
                  <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index] }}
                  />
                                    <span className="text-xl">{coin.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => navigate("/market")}
                        className="bg-transparent border border-white w-full rounded-xl text-white cursor-pointer px-3 py-3"
                    >
                        Market
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;

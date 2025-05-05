import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const CryptoTable = () => {
    const navigate = useNavigate();
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalMarketCap, setTotalMarketCap] = useState(0);
    const [marketCapHistory, setMarketCapHistory] = useState([]);
    const [totalVolume, setTotalVolume] = useState(0);
    const [volumeHistory, setVolumeHistory] = useState([]);

    const fetchTop100Coins = async () => {
        try {
            const exchangeInfoRes = await axios.get(
                "https://api.binance.com/api/v3/exchangeInfo"
            );
            const symbolsData = exchangeInfoRes.data.symbols;
            const tickerRes = await axios.get(
                "https://api.binance.com/api/v3/ticker/24hr"
            );
            const tickerData = tickerRes.data;
            const usdtPairs = tickerData.filter((item) =>
                item.symbol.endsWith("USDT")
            );

            const baseAssetToSymbol = {};
            symbolsData.forEach((symbol) => {
                if (symbol.quoteAsset === "USDT") {
                    baseAssetToSymbol[symbol.baseAsset] = symbol.symbol;
                }
            });

            const processedData = usdtPairs.map((coin) => {
                const lastPrice = parseFloat(coin.lastPrice) || 0;
                const volume = parseFloat(coin.volume) || 0;
                const marketCap = lastPrice * volume;

                return {
                    symbol: coin.symbol,
                    lastPrice,
                    volume,
                    marketCap,
                    openPrice: parseFloat(coin.openPrice) || 0,
                    highPrice: parseFloat(coin.highPrice) || 0,
                    lowPrice: parseFloat(coin.lowPrice) || 0,
                    priceChangePercent: parseFloat(coin.priceChangePercent) || 0,
                };
            });

            const top100Coins = processedData
                .sort((a, b) => b.marketCap - a.marketCap)
                .slice(0, 100);

            setCoins(top100Coins);

            const totalMarketCapValue = top100Coins.reduce(
                (acc, coin) => acc + coin.marketCap,
                0
            );

            const totalVolume = top100Coins.reduce(
                (acc, coin) => acc + coin.volume,
                0
            );

            setTotalMarketCap(totalMarketCapValue);
            setTotalVolume(totalVolume);

            setMarketCapHistory((prev) => [
                ...prev.slice(-9),
                { time: new Date().toLocaleTimeString(), value: totalMarketCapValue },
            ]);

            setVolumeHistory((prev) => [
                ...prev.slice(-9),
                { time: new Date().toLocaleTimeString(), value: totalVolume },
            ]);

            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Error fetching data");
            setLoading(false);
        }
    };

    const getTopGainers = (coins) => {
        return [...coins]
            .sort((a, b) => b.priceChangePercent - a.priceChangePercent)
            .slice(0, 4);
    };

    const getTopLosers = (coins) => {
        return [...coins]
            .sort((a, b) => a.priceChangePercent - b.priceChangePercent)
            .slice(0, 4);
    };

    const topGainers = getTopGainers(coins);
    const topLosers = getTopLosers(coins);

    useEffect(() => {
        fetchTop100Coins();
        const interval = setInterval(fetchTop100Coins, 30000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="flex flex-col container mx-auto px-[50px] items-center justify-center mb-10">
            <div className="w-[90%]">
                <div className="mb-3">
                    <h2 className="text-left text-4xl font-bold mt-4">
                        Top 100 Crypto Coins by Market Cap
                    </h2>
                    <p className="text-left mt-2 text-[#666666]">
                        This is a chart of all of the top 100 cryptocurrencies by market cap
                        that we currently support on our website
                    </p>
                </div>

                <div className="flex justify-between h-[200px] gap-3">
                    <div className="flex flex-col w-1/3 gap-3 h-full">
                        <div className="flex h-1/2 bg-[#2a2a2a] rounded-lg p-3 justify-between items-center gap-2">
                            <div className="flex flex-col justify-center items-left text-left w-1/2">
                                <h1 className="text-xl">Total Market Cap</h1>
                                <h2 className="text-md">${totalMarketCap.toLocaleString()}</h2>
                            </div>

                            <div className="h-full w-1/2 flex items-center">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={marketCapHistory}>
                                        <XAxis dataKey="time" hide={true} />
                                        <YAxis hide={true} domain={["dataMin", "dataMax"]} />
                                        <Line
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#98fb98"
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="flex h-1/2 bg-[#2a2a2a] rounded-lg p-3 justify-between items-center gap-2">
                            <div className="flex flex-col justify-center items-left text-left w-1/2">
                                <h1 className="text-xl">Volume (24H)</h1>
                                <h2 className="text-md">${totalVolume.toLocaleString()}</h2>
                            </div>

                            <div className="h-full w-1/2 flex items-center">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={volumeHistory}>
                                        <XAxis dataKey="time" hide={true} />
                                        <YAxis hide={true} domain={["dataMin", "dataMax"]} />
                                        <Line
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#98fb98"
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 bg-[#2a2a2a] rounded-lg p-3">
                        <h1 className="text-2xl font-bold mb-2">Top Gainers</h1>
                        {topGainers.map((coin) => (
                            <div
                                key={coin.symbol}
                                onClick={() => navigate(`/chart/${coin.symbol}`)}
                                className="flex justify-between items-center mt-2 cursor-pointer"
                            >
                                <p>{coin.symbol}</p>
                                <div className="flex gap-2">
                                    <span>{coin.openPrice.toFixed(2)}</span>
                                    <span className="text-green-600">
                    {coin.priceChangePercent.toFixed(2) > 0 ? "↑" : "↓"}{" "}
                                        {coin.priceChangePercent.toFixed(2)}%
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-1/3 bg-[#2a2a2a] rounded-lg p-3">
                        <h1 className="text-2xl font-bold">Top Losers</h1>
                        {topLosers.map((coin) => (
                            <div
                                key={coin.symbol}
                                onClick={() => navigate(`/chart/${coin.symbol}`)}
                                className="flex justify-between items-center mt-2 cursor-pointer"
                            >
                                <p>{coin.symbol}</p>
                                <div className="flex gap-2">
                                    <span> {coin.openPrice.toFixed(2)}</span>
                                    <span className="text-red-600">
                    {coin.priceChangePercent.toFixed(2) > 0 ? "↑" : "↓"}{" "}
                                        {coin.priceChangePercent.toFixed(2)}%
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <table border="1" className="w-full">
                        <thead>
                        <tr className="border-y border-[#444444] text-left hover:">
                            <th className="py-1">Symbol</th>
                            <th>Open Price</th>
                            <th>High Price</th>
                            <th>Low Price</th>
                            <th>Last Price</th>
                            <th>24h Change (%)</th>
                            <th>24h Volume</th>
                            <th>Market Cap</th>
                        </tr>
                        </thead>
                        <tbody>
                        {coins.map((coin) => (
                            <tr
                                key={coin.symbol}
                                className="border-b border-[#444444] hover:bg-[#333333]"
                            >
                                <td
                                    className="py-4 cursor-pointer"
                                    onClick={() => navigate(`/chart/${coin.symbol}`)}
                                >
                                    {coin.symbol}
                                </td>
                                <td>{coin.openPrice.toFixed(2)}</td>
                                <td>{coin.highPrice.toFixed(2)}</td>
                                <td>{coin.lowPrice.toFixed(2)}</td>
                                <td>{coin.lastPrice.toFixed(2)}</td>
                                <td
                                    className={`${
                                        coin.priceChangePercent.toFixed(2) > 0
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {coin.priceChangePercent.toFixed(2) > 0 ? "↑" : "↓"}{" "}
                                    {coin.priceChangePercent.toFixed(2)}%
                                </td>
                                <td>{coin.volume.toFixed(2)}</td>
                                <td>${coin.marketCap.toLocaleString()}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CryptoTable;

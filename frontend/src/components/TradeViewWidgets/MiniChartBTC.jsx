import React, { useEffect } from "react";

const MiniChartETH = () => {
  useEffect(() => {
    // Dynamically inject the TradingView script into the DOM
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "COINBASE:BTCUSDT",
      width: 400,
      height: 300,
      locale: "en",
      dateRange: "12M",
      colorTheme: "dark",
      isTransparent: false,
      autosize: false,
      largeChartUrl: "",
      chartOnly: false,
    });

    // Append the script to the widget container
    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    container.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default MiniChartETH;

import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  console.log(coinData);
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <div className="1-h">
            <div className="low-high">
              <h2 className="low">
                Low 24h <span>${coin.low_24h}</span>
              </h2>
              <h2 className="high">
                {" "}
                High 24h <span>${coin.high_24h}</span>
              </h2>
            </div>
            <h2>
              Current Price{" "}
              <span className="current">${coin.current_price}</span>
            </h2>
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;

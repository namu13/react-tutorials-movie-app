import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currentCoin, setCurrentCoin] = useState({});
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const coinData = await (
        await fetch("https://api.coinpaprika.com/v1/tickers")
      ).json();
      setLoading(false);
      setCoins(coinData);
      console.log(coinData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>The Coin converter {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select
          onChange={(event) => {
            console.log(event.target.dataset);
            setCurrentCoin(event.target);
          }}
        >
          <option>------Select coin------</option>
          {coins.map((coin) => (
            <option key={coin.id} data-currentcoin={coin}>
              {coin.name} ({coin.symbol})
            </option>
          ))}
        </select>
      )}
      <hr></hr>
      <input
        type="number"
        name="usd"
        id="usd"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      ></input>
      <label htmlFor="usd"> USD</label>
      <input
        type="number"
        name={currentCoin.symbol}
        id={currentCoin.symbol}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      ></input>
      <label htmlFor={currentCoin.symbol}> {currentCoin.symbol}</label>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { isXCoins } from "./isXCoins";

/**
 * @type {number[]}
 * @description Japanese yen coins
 */
const coins = [1, 5, 10, 50, 100, 500];

/**
 * @type {number}
 * @description Default count of coins
 */
const defaultCount = 3;

/**
 * @type {number}
 * @description Default price
 */
const defaultPrice = 300;

function App() {
  const [count, setCount] = useState(defaultCount);
  const [price, setPrice] = useState(defaultPrice);

  return (
    <>
      <h1>
        is{count}COINS = {isXCoins(price, count, coins) ? "True" : "False"}
      </h1>
      <div>
        <label htmlFor="input">
          Count of coins:&nbsp;
          <input
            inputMode="numeric"
            pattern="\d*"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label htmlFor="input">
          Price of check:&nbsp;
          <input
            inputMode="numeric"
            pattern="\d*"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <button
          onClick={() => {
            setCount(defaultCount);
            setPrice(defaultPrice);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;

/**
 * @param {number} price
 * @param {number} count
 * @returns {boolean}
 * @description Check if the price can be just paid with the count of coins
 */
export function isXCoins(
  price: number,
  count: number,
  coins: number[],
): boolean {
  const coin = coins[0];
  const max = Math.min(Math.floor(price / coin), count);
  for (let i = max; i >= 0; i--) {
    const remaining = price - coin * i;
    if (remaining === 0 && i === count) {
      return true;
    }
    if (coins.length > 1) {
      const rest = coins.slice(1);
      if (isXCoins(remaining, count - i, rest)) {
        return true;
      }
    }
  }

  return false;
}

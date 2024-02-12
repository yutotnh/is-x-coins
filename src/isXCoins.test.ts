import { describe, expect, it } from "vitest";
import { isXCoins } from "./isXCoins";

const coins = [1, 5, 10, 50, 100, 500];

describe("isXCoins", () => {
  it("0", () => {
    expect(isXCoins(0, 0, coins)).toBe(true);

    expect(isXCoins(0, 1, coins)).toBe(false);
    expect(isXCoins(1, 0, coins)).toBe(false);
  });

  // Single coin is required
  it("300", () => {
    expect(isXCoins(300, 3, coins)).toBe(true);
  });

  // Multiple coins are required
  it("620", () => {
    expect(isXCoins(620, 4, coins)).toBe(true);
  });

  // Exist multiple ways to pay
  // 50 + 50 + 10 or 100 + 5 + 5
  it("110", () => {
    expect(isXCoins(110, 3, coins)).toBe(true);
  });
});

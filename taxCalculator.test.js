const { computeTax } = require("./taxCalculator");

const firstTierAnnual = 40000000; //40m
const secondTierAnnual = 200000000; //200m
const thirdTierAnnual = 400000000; // 400m
const maxTierAnnual = 750000000; //750m

describe("Calculation according to income brackets", () => {
  describe("Error handling", () => {
    it("should return error if input is not a number", () => {
      expect(() => computeTax("animal")).toThrow(
        "Error, please enter valid number"
      );
    });
    it("should return error if input is less than zero", () => {
      expect(() => computeTax(-15)).toThrow("Error, income must be positive");
    });
    it("should return error if input is empty", () => {
      expect(() => computeTax()).toThrow("Error, please enter valid number");
    });
  });
  describe("Calculations", () => {
    it("should return 0 if input income is 0", () => {
      expect(computeTax(0)).toBe(0);
    });
    it("should return correct tax for first tier", () => {
      expect(computeTax(firstTierAnnual)).toBe(2000000);
    });
    it("should return correct tax for second tier", () => {
      expect(computeTax(secondTierAnnual)).toBe(25000000);
    });
  });
});

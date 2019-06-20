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
    it("should return 0 for income of 0", () => {
      expect(computeTax(0)).toBe(0);
    });
    it("should return 2m tax for income of 40m (first tier)", () => {
      expect(computeTax(firstTierAnnual)).toBe(2000000);
    });
    it("should return 25m tax for income of 200m (second tier)", () => {
      expect(computeTax(secondTierAnnual)).toBe(25000000);
    });
    it("should return 70m tax for income of 400m (third tier)", () => {
      expect(computeTax(thirdTierAnnual)).toBe(70000000);
    });
    it("should return 170m tax for income of 750m (max tier)", () => {
      expect(computeTax(maxTierAnnual)).toBe(170000000);
    });
    it("should return 45m tax for income of 300m (third tier/given example)", () => {
      expect(computeTax(300000000)).toBe(45000000);
    });
  });
});

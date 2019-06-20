const { computeTax } = require("./taxCalculator");

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
});

const tierOneRate = 0.05;
const tierTwoRate = 0.15;
const tierThreeRate = 0.25;
const tierFourRate = 0.3;

const bracketOne = 50000000;
const bracketTwo = 250000000;
const bracketThree = 500000000;

const bracketOneMaxTax = tierOneRate * bracketOne;
const bracketTwoMaxTax =
  bracketOneMaxTax + tierTwoRate * (bracketTwo - bracketOne);
const bracketThreeMaxTax =
  bracketTwoMaxTax + tierThreeRate * (bracketThree - bracketTwo);

const computeTax = income => {
  //error handling
  if (typeof income !== "number")
    throw new Error("Error, please enter valid number");
  if (income < 0) throw new Error("Error, income must be positive");
  // actual calculations
  if (income <= bracketOne) return income * tierOneRate;
  if (income > bracketOne && income <= bracketTwo)
    return bracketOneMaxTax + tierTwoRate * (income - bracketOne);
};

module.exports = { computeTax };

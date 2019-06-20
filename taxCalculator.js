const computeTax = income => {
  //error handling
  if (typeof income !== "number")
    throw new Error("Error, please enter valid number");
  if (income < 0) throw new Error("Error, income must be positive");
};

module.exports = { computeTax };

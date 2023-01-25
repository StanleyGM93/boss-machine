const checkMillionDollarIdea = (numWeeks, weeklyRevenue) => {
	const expectedReturn = numWeeks * weeklyRevenue;
	const oneMillionDollars = 1000000;
	return expectedReturn >= oneMillionDollars;
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

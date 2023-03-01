type creditCardNumber = {
	cardNumber: string;
};

type creditCardDate = {
	cardDate: string;
};

// we can define a new type based on the combination of existing types
type creditCardDetails = creditCardNumber &
	creditCardDate & {
		cardCVV: number;
	};

let myCard: creditCardDetails = {
	cardNumber: "786",
	cardDate: "",
	cardCVV: 980,
};

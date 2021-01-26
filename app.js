const login__submit = document.querySelector('#login__submit');
const spinner = document.querySelector('#spinner');

//___________ Common function's_____________
// Spinner Function
const spinnerShow = () => {
	spinner.classList.remove('d-none');
	spinner.classList.add('d-flex');
	setTimeout(() => {
		spinner.classList.remove('d-flex');
		spinner.classList.add('d-none');
	}, 1000);
	return true;
};
// String to number & Rest Input Section
const stringToNumber = (numberID) => {
	let number = parseFloat(document.querySelector(numberID).value);
	if (!isNaN(number)) {
		document.querySelector(numberID).value = '';
		return number;
	} else {
		console.log("Your Number Can't be Zero");
		return 0;
	}
};

// Reset Input Section {id need }
const resetInput = (inputID) => {
	document.querySelector(inputID).value = '';
};
// Amount show function
const amountShow = (show, amount) => {
	const showPlace = document.querySelector(show);
	showPlace.innerText = amount;
};

// initial Load Amount Balance
window.addEventListener('load', () => {
	amountShow('#deposit__show', deposit);
	amountShow('#balance__show', balance);
});

// ______________________________!__________________________________//
// Login part end
login__submit.addEventListener('click', () => {
	const login__section = document.querySelector('#login__section');
	const account__section = document.querySelector('.account__section');
	spinnerShow();
	setTimeout(() => {
		login__section.classList.add('d-none');
		account__section.classList.remove('d-none');
		account__section.classList.add('d-block');
	}, 1000);
});

// Deposit and Balance

// Initial Amount
let deposit = 500;
let withdraw = 0;
let balance = 500;
const deposit__btn = document.querySelector('#deposit__btn');

deposit__btn.addEventListener('click', () => {
	const depositAmount = stringToNumber('#deposit__amount');
	deposit = deposit + depositAmount;
	balance = balance + depositAmount;
	amountShow('#deposit__show', deposit);
	amountShow('#balance__show', balance);
});

// Withdraw and Balance
const withdraw__btn = document.querySelector('#withdraw__btn');

withdraw__btn.addEventListener('click', () => {
	const withdrawAmount = stringToNumber('#withdraw__amount');
	if (balance > withdrawAmount) {
		withdraw = withdraw + withdrawAmount;
		balance = balance - withdrawAmount;
		amountShow('#withdraw__show', withdraw);
		amountShow('#balance__show', balance);
	} else {
		console.log('you have not enough balance');
	}
});

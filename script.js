const numInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const firstDigit = (input) => {

	let result = "";

	if (input <= 3) {
		while (input > 0) {
			input--;
			result += "I";
		}
	} else if (input == 4) {
		result = "IV"
	} else if (input >= 5 && input < 9) {
		result = "V";
		while (input > 5) {
			input--;
			result += "I"
		}
	} else if (input == 9) {
		result = "IX";
	}
	return result;
};

const secondDigit = (input) => {

	let result = "";

	if (input <= 3) {
		while (input > 0) {
			input--;
			result += "X";
		}
	} else if (input == 4) {
		result = "XL";
	} else if (input >= 5 && input < 9) {
		result = "L";
		while (input > 5) {
			input--;
			result += "X";
		}
	} else if (input == 9) {
		result = "XC";
	}
	return result;
};

const thirdDigit = (input) => {

	let result = ""

	if (input <= 3) {
		while (input > 0) {
			input--;
			result += "C";
		}
	} else if (input == 4) {
		result = "CD";
	} else if (input >= 5 && input < 9) {
		result = "D";
		while (input > 5) {
			input--;
			result += "C";
		}
	} else if (input == 9) {
		result = "CM";
	}
	return result;
};

const fourtDigit = (input) => {

	let result = "";

	if (input <= 3) {
		while (input > 0) {
			input--;
			result += "M";
		}
	};
	return result;
};

const converter = (input) => {
	if (!input) {
		return "Please enter a valid number";
	} else if (input <= 0) {
		return "Please enter a number greater than or equal to 1"
	} else if (input >= 4000) {
		return "Please enter a number less than or equal to 3999"
	} else {
		return fourtDigit(input[input.length - 4]) + thirdDigit(input[input.length - 3]) + secondDigit(input[input.length - 2]) + firstDigit(input[input.length - 1]);
	}
};

const displayResult = (input) => {
	output.classList.remove("hidden");
	output.innerHTML = `<p id="result-p">${converter(input)}</p>`;
};

convertBtn.addEventListener("click", () => {
	displayResult(numInput.value);
});
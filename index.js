function formatCardNo(evt) {
	// Digit only
	if (evt.which < 48 || evt.which > 57)
	{
			evt.preventDefault();
	}

	var x = document.getElementById("number");
	var index = x.value.lastIndexOf(' ');
	var test = x.value.substr(index + 1);
	if (test.length === 4 && x.value.length < 16)
			x.value = x.value + ' ';
}

function populateCardNo(object){
	document.getElementById('sampleCardNo').innerHTML = object.value || '0000 0000 0000 0000';
}

function populateCardName(object){
	document.getElementById('sampleCardName').innerHTML = object.value || 'JANE APPLESEED';
}

function formatMonthYear(object){
	if (object.value.length > 2) {
			object.value = object.value.slice(0,2); 
	}

	const type = object.id;
	const sampleCardExp = document.getElementById('sampleCardExp');
	let expString = sampleCardExp.innerHTML;
	if(object.id === 'expMonth') {
		expString = (object.value || '00') + expString.substring(expString.indexOf('/'));
	}else {
		expString = expString.substring(0,expString.indexOf('/') + 1) + (object.value || '00');
	}
	sampleCardExp.innerHTML = expString;
}

function validateForm() {
	const form = document.forms["card-form"];

	validateInput(form, "name", "nameError");
	validateInput(form, "number", "numberError");
	validateInput(form, "exp-date-month", "monthError");
	validateInput(form, "exp-date-year", "yearError");
	validateInput(form, "cvc", "cvcError");

	if(form.checkValidity()){
		switchToComplete();
	}
	return false;
}

function validateInput(form, inputName, errorDivName){
	const inputElement = form[inputName];
	const errorDiv = document.getElementById(errorDivName);
	if(inputElement.validity.valid){
		errorDiv.innerHTML = ``;
		errorDiv.style.display = "none";
	}else{
		errorDiv.style.display = "inline-block";
		if(inputElement.validity.valueMissing){
			errorDiv.innerHTML = `Can't be blank`;
		}else{
			errorDiv.innerHTML = `Invalid input`;
		}
	}
}

function switchToForm() {
	var form = document.getElementById("cardForm");
	var completeSection = document.getElementById("completeSection");

	form.reset();
	document.getElementById('sampleCardNo').innerHTML = '0000 0000 0000 0000';
	document.getElementById('sampleCardName').innerHTML = 'JANE APPLESEED';
	document.getElementById('sampleCardExp').innerHTML = '00/00';

	form.style.display = 'flex';
	completeSection.style.display = 'none';
}

function switchToComplete(){
	var form = document.getElementById("cardForm");
	var completeSection = document.getElementById("completeSection");

	form.style.display = 'none';
	completeSection.style.display = 'flex';
}
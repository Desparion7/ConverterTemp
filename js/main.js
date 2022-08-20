const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');


const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F';
		two.textContent = '°C';
		result.textContent = '';
	} else {
		one.textContent = '°C';
		two.textContent = '°F';
		result.textContent = '';
	}
};

const change = () => {
	if (converter.value !== '' && one.textContent === '°F') {
		let far = converter.value * 1.8 + 32;
		result.textContent = `${converter.value}°F = ${far.toFixed(1)}°C`;
		converter.value = '';
	} else if (converter.value !== '' && one.textContent === '°C') {
		let cel = (converter.value - 32) / 1.8;
		result.textContent = `${converter.value}°C = ${cel.toFixed(1)}°F`;
		converter.value = '';
	} else {
		result.textContent = 'Wprowadz temperaturę';
	}
};

const resetAll = () => {
	converter.value = '';
	result.textContent = '';
};

changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', change);
resetBtn.addEventListener('click', resetAll);

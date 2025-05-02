const error = document.querySelector(".error");
const result = document.querySelector(".result");
const h1 = document.querySelector(".result h1");
const button = document.querySelector("button");
const input = document.querySelector("input");

function isValidInput(value) {
    const numValue = parseInt(value);

    if (isNaN(numValue)) return false;
    if (value == '') return false;
    if (numValue % 100 != 0) return false;
    if (numValue <= 0) return false;

    return true;
}

function calculate() {
    const value = input.value.trim();
    const numValue = parseInt(value);

    if (isValidInput(value)) {
        const displayValue = numValue / 100;
        const convertToKg = numValue >= 1000;
        const kgValue = numValue / 1000;

        result.style.display = "flex";
        result.style.opacity = "1";
        error.style.display = "none";

        if (convertToKg == true) {
            h1.innerHTML = kgValue + " kg";
        } else {
            h1.innerHTML = displayValue + " g";
        }
    } else {
        result.style.display = "none";
        error.style.display = "block";
    }
}

button.addEventListener('click', calculate);

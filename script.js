function percentage() {

const amount = document.querySelector(".amount").value;
const percent = document.querySelector('.range').value;

let result = (amount / 100) * percent;
let value = result.toFixed(2);

let output = document.querySelector(".output")
output.innerHTML = value;

let newResult = document.querySelector(".percentage");
newResult.innerHTML = percent + "%";

}
const container = document.querySelector(".main-container");
container.addEventListener("input", percentage);
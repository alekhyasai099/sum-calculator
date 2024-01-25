
let total = 0
let totalEl = document.getElementById("total-el")
let saveEl = document.getElementById("save-el")

function sum() {
let number1 = parseFloat(document.getElementById("text-el-one").value)
let number2 = parseFloat(document.getElementById("text-el-two").value)
    total = number1 + number2;
    totalEl.textContent = total;
}
console.log(total)

function save() {
let totalStr = total + " - "
console.log(totalStr)
saveEl.textContent += totalStr
totalEl.textContent = 0
total=0
console.log(total)
}

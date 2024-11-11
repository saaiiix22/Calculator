const input = document.querySelector("input")

const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")

const plus = document.querySelector("#add")
const minus = document.querySelector("#minus")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")
const dot = document.querySelector("#dot")

const equal = document.querySelector("#equal")

const arr = []

zero.addEventListener("click", ()=>{
    arr.push(0)
    input.value = arr.join("")
    console.log(arr);
})
one.addEventListener("click", ()=>{
    arr.push(1)
    input.value = arr.join("")
    console.log(arr);
})

two.addEventListener("click", ()=>{
    arr.push(2)
    input.value = arr.join("")
    console.log(arr);
})

three.addEventListener("click", ()=>{
    arr.push(3)
    input.value = arr.join("")
    console.log(arr);
})

four.addEventListener("click", ()=>{
    arr.push(4)
    input.value = arr.join("")
    console.log(arr);
})

five.addEventListener("click", ()=>{
    arr.push(5)
    input.value = arr.join("")
    console.log(arr);
})

six.addEventListener("click", ()=>{
    arr.push(6)
    input.value = arr.join("")
    console.log(arr);
})

seven.addEventListener("click", ()=>{
    arr.push(7)
    input.value = arr.join("")
    console.log(arr);
})

eight.addEventListener("click", ()=>{
    arr.push(8)
    input.value = arr.join("")
    console.log(arr);
})

nine.addEventListener("click", ()=>{
    arr.push(9)
    input.value = arr.join("")
    console.log(arr);
})

plus.addEventListener("click", ()=>{
    arr.push("+")
    input.value = arr.join("")
    console.log(arr);
})

minus.addEventListener("click", ()=>{
    arr.push("-")
    input.value = arr.join("")
    console.log(arr);
})

multiply.addEventListener("click", ()=>{
    arr.push("*")
    input.value = arr.join("")
    console.log(arr);
})

divide.addEventListener("click", ()=>{
    arr.push("/")
    input.value = arr.join("")
    console.log(arr);
})
dot.addEventListener("click", ()=>{
    arr.push(".")
    input.value = arr.join("")
    console.log(arr);
})
equal.addEventListener("click", ()=>{
    input.value = eval(input.value)
})





// const x = ["1","2","3","4","5","6","7","8","9","0"]
// console.log(Number(x.join("")));

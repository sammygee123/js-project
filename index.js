let countEl=document.getElementById("count-el")
let countEl2=document.getElementById("count-el2")
let saveEl = document.getElementById("save-el")
let saveEl2 = document.getElementById("save-el2")

console.log(countEl)
let count = 0 

console.log(countEl2)
let count2 = 0 

console.log(saveEl)
console.log(saveEl2)

function increment(){
    count = count + 1 
    countEl.textContent = count
}
function decrement(){
    count = count -1 
    countEl.textContent = count
}

function increment2(){
    count2 = count2 + 1 
    countEl2.textContent = count2
}
function decrement2(){
    count2 = count2 -1 
    countEl2.textContent = count2
} 


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 
    console.log(count)
}

function save2() {
    let countStr = count2 + " - "
    saveEl2.textContent += countStr
    countEl2.textContent = 0
    count2 = 0 
    console.log(count)
}

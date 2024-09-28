let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let zero = 0;
    let counterStr = count + " - "    
    saveEl.textContent += counterStr
    countEl.innerText = zero;
    count = zero;
}

let myPoints = 3;

function add3Points() {
    myPoints += 3
}

function remove1point() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()


remove1point()
remove1point()

console.log(myPoints)

console.log("2" + 2) // 22
console.log(11 + 7) //18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // 14
console.log(2 + 2) // 
console.log("11" + "14") //  1114






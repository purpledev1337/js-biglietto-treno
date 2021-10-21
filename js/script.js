// Chiedere all’utente il numero di chilometri da percorrere
const tripKms = parseInt(prompt("How many kilometres do you have to travel?"));
console.log("Distance: ", tripKms, "Km");
document.getElementById('tripKms').innerHTML = tripKms;

// Chiedere all’utente l’età del passeggero
const userAge = parseInt(prompt("What's your age?"));
console.log("Age: ", userAge, "years old");
document.getElementById('userAge').innerHTML = userAge;


// Il prezzo del biglietto è 0.21 € al km
let basicPrice = tripKms * 0.21;
console.log("Basic Price: €" , basicPrice);
document.getElementById('basicPrice').innerHTML = basicPrice;


// va applicato uno sconto del 20% per gli under 18
// va applicato uno sconto del 40% per gli over 65
let discount;
if (userAge < 18) {
    discount = (basicPrice * 20) / 100;
} else if (userAge > 65) {
    discount = (basicPrice * 30) / 100;
} else {
    discount = 0;
}

let finalPrice;
if (discount > 0) {
    finalPrice = basicPrice - discount
} else {
    finalPrice = basicPrice
}

console.log("Discount: €" , discount)
console.log("Final Price: €" , finalPrice)

// Output del prezzo finale in forma umana (massimo due decimali)
let humanPrice = Math.round((finalPrice + Number.EPSILON) * 100) / 100
console.log("Human Comprehensible Price: €" , humanPrice)
document.getElementById('humanPrice').innerHTML = humanPrice;

// Sconto da applicare in forma umana (massimo due decimali)
let humanDiscount = Math.round((discount + Number.EPSILON) * 100) / 100
console.log("Human Comprehensible Discount: €" , humanDiscount)
document.getElementById('humanDiscount').innerHTML = humanDiscount;

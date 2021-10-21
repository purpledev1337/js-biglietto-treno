// Chiedere all’utente il numero di chilometri da percorrere
const tripKms = parseInt(prompt("How many kilometres do you have to travel?"));
document.getElementById('tripKms').innerHTML = tripKms;

// Se l'utente non inserisce dei numeri la pagina si ricarica
if (Number.isNaN(tripKms)) {
    alert("Please, insert a valid distance!"), location.reload(); 
}

// Chiedere all’utente l’età del passeggero
const userAge = parseInt(prompt("What's your age?"));
document.getElementById('userAge').innerHTML = userAge;

// Se l'utente non inserisce dei numeri la pagina si ricarica
if (Number.isNaN(userAge)) {
    alert("Please, insert a valid age!"), location.reload(); 
}

// Il prezzo del biglietto è 0.21 € al km
let basicPrice = tripKms * 0.21;
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

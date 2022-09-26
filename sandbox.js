// console.log('working')
// let catFacts = [];

// function getCatFacts() {
//     fetch('https://catfact.ninja/facts')
//         .then((resp) => resp.json())
//         .then((data) => {
//            catFacts = data.data
//             console.log('LINE 7: ', catFacts);
//         });
//    console.log('LINE 10');
// }

// getCatFacts();
// console.log('LINE 14: ', catFacts);

const drink = document.getElementById('drink')

// function drinks(){
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then((response) => response.json())
.then((data) => {
  // myDiv.innerText = data[0].text
// console.log(data.drinks[0].strDrink)
console.log(data.drinks)
// myDiv.innerText = data.drinks[0].srtDrink
drink.innerText = data.drinks[0].strDrink
});

// };



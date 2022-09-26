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
const ingredient1 = document.getElementById('item1')
const ingredient2 = document.getElementById('item2')
const ingredient3 = document.getElementById('item3')
const ingredient4 = document.getElementById('item4')
const ingredient5 = document.getElementById('item5')
const ingredient6 = document.getElementById('item6')
const ingredient7 = document.getElementById('item7')
const ingredient8 = document.getElementById('item8')
const ingredient9 = document.getElementById('item9')
const nullIng = document.querySelectorAll('nullIng')

function drinks(){
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then((response) => response.json())
.then((data) => {

console.log(data.drinks)
drink.innerText = data.drinks[0].strDrink
ingredient1.innerText = data.drinks[0].strMeasure1 + ' - ' + data.drinks[0].strIngredient1
ingredient2.innerText = data.drinks[0].strMeasure2 + ' - ' + data.drinks[0].strIngredient2
ingredient3.innerText = data.drinks[0].strMeasure3 + ' - ' + data.drinks[0].strIngredient3
ingredient4.innerText = data.drinks[0].strMeasure4 + ' - ' + data.drinks[0].strIngredient4
ingredient5.innerText = data.drinks[0].strMeasure5 + ' - ' + data.drinks[0].strIngredient5
ingredient6.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient6
ingredient7.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient7
ingredient8.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient8
ingredient9.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient9
console.log(ingredient9.innerHTML)
if (nullIng.innerHTML === 'null - null'){
ingredient9.innerHTML = ' '
}
});




};

// function removeNull(){
//     if (ingredient9.innerHTML === null)
//     console.log('working')
//     drinks()
// }
// removeNull()


drinks()


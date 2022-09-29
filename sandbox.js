// const drink = document.getElementById('drink')
// const ingredient1 = document.getElementById('item1')
// const ingredient2 = document.getElementById('item2')
// const ingredient3 = document.getElementById('item3')
// const ingredient4 = document.getElementById('item4')
// const ingredient5 = document.getElementById('item5')
// const ingredient6 = document.getElementById('item6')
// const ingredient7 = document.getElementById('item7')
// const ingredient8 = document.getElementById('item8')
// const ingredient9 = document.getElementById('item9')
// const nullIng = document.querySelectorAll('nullIng')


// function drinks() {
//     fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//         .then((response) => response.json())
//         .then((data) => stuff(data))

//         };

// function stuff(data){
//         console.log(data.drinks)
//         drink.innerText = data.drinks[0].strDrink
//         ingredient1.innerText = data.drinks[0].strMeasure1 + ' - ' + data.drinks[0].strIngredient1
//         ingredient2.innerText = data.drinks[0].strMeasure2 + ' - ' + data.drinks[0].strIngredient2
//         ingredient3.innerText = data.drinks[0].strMeasure3 + ' - ' + data.drinks[0].strIngredient3
//         ingredient4.innerText = data.drinks[0].strMeasure4 + ' - ' + data.drinks[0].strIngredient4
//         ingredient5.innerText = data.drinks[0].strMeasure5 + ' - ' + data.drinks[0].strIngredient5
//         ingredient6.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient6
//         ingredient7.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient7
//         ingredient8.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient8
//         ingredient9.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient9
//         console.log(ingredient9.innerHTML)
//         if (ingredient9.innerHTML === 'null - null') {
//             ingredient9.innerHTML = ' '
//             // nullIng.removeChild(li);
//         }
//     };

// console.log(ingredient1)
// drinks()

// // function removeNull(){
// //     if (ingredient9.innerHTML === null)
// //     console.log('working')
// //     drinks()
// // }
// // removeNull()



// function drinks(callName) {
//     console.log(data.drinks)
//     drink.innerText = data.drinks[0].strDrink
//     ingredient1.innerText = data.drinks[0].strMeasure1 + ' - ' + data.drinks[0].strIngredient1
//     ingredient2.innerText = data.drinks[0].strMeasure2 + ' - ' + data.drinks[0].strIngredient2
//     ingredient3.innerText = data.drinks[0].strMeasure3 + ' - ' + data.drinks[0].strIngredient3
//     ingredient4.innerText = data.drinks[0].strMeasure4 + ' - ' + data.drinks[0].strIngredient4
//     ingredient5.innerText = data.drinks[0].strMeasure5 + ' - ' + data.drinks[0].strIngredient5
//     ingredient6.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient6
//     ingredient7.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient7
//     ingredient8.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient8
//     ingredient9.innerText = data.drinks[0].strMeasure6 + ' - ' + data.drinks[0].strIngredient9
//     console.log(ingredient9.innerHTML)
// }

// function fetch(){
//     fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
//     .then((response) => response.json())
//     .then(callName)
// }


var makeEveryLetterAfterXCaps = function (str, letter) {

    let subSt = str.substring(str.indexOf(letter) + 1);
    let newLetter = subSt.toUpperCase();

    console.log(str + newLetter)
    //  subSt = subSt.toUpperCase()
    console.log(subSt)
    console.log(newLetter)
    let newString = str.replace(subSt, newLetter)
    return newString;
}

// // const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
    it("Tests", () => {
        assert.strictEqual(makeEveryLetterAfterXCaps('bac', 'a'), 'baC')
        assert.strictEqual(makeEveryLetterAfterXCaps('and the cow jumped over the moon', 'n'), 'anD the cow jumped over the moon')
        assert.strictEqual(makeEveryLetterAfterXCaps('where are they now', ' '), 'where Are They Now')
        assert.strictEqual(makeEveryLetterAfterXCaps('aaaa', 'a'), "aAaA")
    })
});
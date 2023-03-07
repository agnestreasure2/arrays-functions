// Answer to question 1:
// Mutating array method is a method that modifies the contents of an array. Whwn a mutaying method is called,
// it changes the values of the element in the array. This method is useful when you need to add, remove or modify elewments in the array.
// Five array methods under mutating methods are:
/**
 * 'push()'
 * 'pop()'
 * 'shift()'
 * 'unshift()'
 * 'sort()'
 */
// While non-mutating array method is a method that does not modify the contents of an array.
// Instead, it returns a new array or a value based on the original array. Non-mutating methods do not change
// the original array, they only create a new one.This method is useful when you need to transform or filter the elements in the array 
// without modifying the original array.

// Five array methods under non-mutating methods are:
/**
 * 'concat()'
 * 'slice()'
 * 'map()'
 * 'map()'
 * 'reduce()'
 */ 

// Answer to question 2: 

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Answer to question 2A:
// Adding kotlin to the end of the array 
languages.push('Kotlin');
console.log(languages);

// Answer to question 2B:
// Adding Java after Ruby
languages.splice(3, 0, 'Java');
console.log(languages);

// Answer to question 2C:
// Remove the first item in the array 
languages.shift();
console.log(languages);

// Answer to question 2D: 
// Adding Scala and Swift to the beginning of the array
languages.splice(0, 0, 'Scala', 'Swift');
console.log(languages);

// Answer to question 2E:
// Replace PHP with Go and Rust
languages.splice(3, 3, 'Go', 'Rust'); 
console.log(languages);

// Answer to question 3:
let fruit = ['apple', 'mango', 'banana'];
function changeFruit() {
    fruit[2] = 'orange';
    return fruit;
} 
console.log(fruit);
// The value of fruit after the function changeFruit still remains the initial value of fruit. That is:
// ['apple', 'mango', 'banana'] 

// Answer to question 4:
let arrValues = []
function maxValue(...arrValues){
    sortedArr = arrValues.sort(function(valueOne, valueTwo){return valueOne - valueTwo})
    return(`Maximum value is ${sortedArr[sortedArr.length - 1]}`);
}
console.log(maxValue(44, 23,1000, 90, 100, 40, 67, 100, 82, 1, 20));

//Answer to question 5.
let valuesOfVTI = [];
function valTimesIndex(...valuesOfVTI){
    let result = 0; let resultOfVIT = ""; let i = 0;
    for(; i < (valuesOfVTI.length - 1); i++){
        result = valuesOfVTI[i] * i;
        resultOfVIT += result + ", "
    }
    return(resultOfVIT += valuesOfVTI[i] * i);
}
console.log(valTimesIndex(1,2,3,4,5,6,7,8,9,10, 100, 44, 999));




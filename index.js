// Задача 1:
// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numbers2 = [];

for (let i = 0; i < numbers.length; i++) {
    numbers2.push(`-${numbers[i]}`);
}
let numbers2string = numbers2.join('');

console.log(numbers2string);


// Задача 2:
// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let arr = [-2, 3, 13, -5, 21, -34, 99];

let positiveArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveArr.push(arr[i]);
    }
}

let result = positiveArr.reduce(function (sum, current) {
    return sum + current;
}, 0);

console.log(result);


// Задача 3:
// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой
//  элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.

let numbersArr = [2, -1, 4, 0, 5, 15, 66, 5, 120, 5, 149];

for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] === 5) {
        console.log(numbersArr[i]);
        break;
    }
}


// Задача 4:
// Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

let randomArr = [];
let min = 1;
let max = 10;

for (let i = 0; i < 10; i++) {
    randomArr.push( Math.floor (Math.random() * (max - min +1)) + min );
}

console.log(randomArr);


// Задача 5:
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

let someString = 'A package tied with string';

function vowels (someString) {
   let lowerString = someString.toLowerCase().split('');
   let vowelsLetters= 'aeiou';

   let counter = lowerString.reduce(function (sum, val) {
      if (vowelsLetters.indexOf (val) !==-1) { 
         sum++;
      }
      return sum;
   }, 0);
   return counter;
}

let numbeOfVowels = vowels(someString);

console.log(`Количество гласных ${numbeOfVowels}`);


// Задача 6:
// Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив,
//  который содержит все числа из него, включая начальное и конечное.


function range (start, end) {
    let someArr = [];
    for (let i = start; i <= end; i++) {
        someArr.push(start++);
    };
    return someArr;
}

console.log( range(15, 40) );


// Задача 7:
// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

let matrixArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]

document.write(matrixArr[1][0]);


// Задача 8:
// Посчитайте сумму элементов массива из Задания 7;

let sumOfMatrix =  0;
for (var i = 0; i < matrixArr.length; i++) {
    for (var j = 0; j < matrixArr[i].length; j++) {
        sumOfMatrix += matrixArr[i][j];
    }
}
console.log(sumOfMatrix);



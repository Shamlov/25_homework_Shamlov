// // 1 задание -----------------------------------------------------------------------------------------------
// let getUserAge = +prompt('введите ваш возраст')   
// Number.isNaN(getUserAge) && alert('это не число')   //оперратором и проверим на число и сообшим об этом сработавшей функцией и все.
// getUserAge <= 0 && alert('число меньше или равно 0')           //оперратором и проверим на отрицательное число и сообшим об этом сработавшей функцией и все.
// switch(true) {                                      //решил использовать такую конструкцию  и сравнивать с true
//     case  0 < getUserAge && getUserAge <= 2   : alert('вы ребенок');   break;
//     case  2 < getUserAge && getUserAge <= 18  : alert('вы подросток'); break;
//     case 18 < getUserAge && getUserAge <= 60  : alert('вы взрослый');  break;
//     case 60 < getUserAge && getUserAge <= 110 : alert('вы пенсионер'); break;
//     case 110 < getUserAge                     : alert('тут что-то не так');  break; 
//     // не использую default . т.к. выше все проверил. 
// }

// // 2-й вариант исполнения
// let getUserAge = +prompt('введите ваш возраст')   
// switch(true) {                                      //решил использовать такую конструкцию  и сравнивать с true
//     case Number.isNaN(getUserAge) || getUserAge <= 0 || 110 < getUserAge  : alert('тут что-то не так');  break;   //используя  || и зная о том ,что любое из выражений возвращает булевое значение, делаю так
//     case  0 < getUserAge && getUserAge <= 2   : alert('вы ребенок');   break;
//     case  2 < getUserAge && getUserAge <= 18  : alert('вы подросток'); break;
//     case 18 < getUserAge && getUserAge <= 60  : alert('вы взрослый');  break;
//     case 60 < getUserAge && getUserAge <= 110 : alert('вы пенсионер'); break;
//     default: alert('такой вариант я не предусмотел')
// }
// -----------------------------------------------------------------------------------------------------------------------------


// // 2 задание ---------------------------------------------------------------------------------------------------- 
// let userInput = Math.trunc(parseInt(prompt('введите число от 0 до 9'), 10)) // для разнообразия использовал  parseInt. вернет число     Math.trunc отбросим дробную часть 
// switch(userInput) {
//     case 0 :  alert(')'); break;
//     case 1 :  alert('!'); break;
//     case 2 :  alert('@'); break;
//     case 3 :  alert('#'); break;
//     case 4 :  alert('$'); break;
//     case 5 :  alert('%'); break;
//     case 6 :  alert('^'); break;
//     case 7 :  alert('&'); break;
//     case 8 :  alert('*'); break;
//     case 9 :  alert('('); break;
//     default : alert('не верный ввод')
// }
// // -----------------------------------------------------------------------------------------------------------------------------


// // 3 задание ---------------------------------------------------------------------------------------------------- 
// let userInput = Math.trunc(+prompt('трехзначное число')) //     Math.trunc отбросим дробную часть 
// let num1 = Math.trunc(userInput / 100)                 
// let num2 = Math.trunc(userInput % 100 / 10)
// let num3 = userInput % 10

// if (userInput <= -1000 || userInput >= 1000 || (userInput <= 99 && userInput >= -99)) {  // проверяем интервал на трехзначное число // тут вернет булевое значение
//     alert('вы ввели не 3-x значное число') 
// } else if (num1 == num2 || num2 == num3 || num1 == num3) {
//     alert(`в числе ${userInput} есть одинаковые цифры`)
// } else {
//     alert(`число ${userInput} нам подходит`)
// }
// // -----------------------------------------------------------------------------------------------------------------------------


// // 4 задание -----------------------------------------------------------------------------------------------------------------
// let userInput = Math.trunc(+prompt('введите год'))
// if ( userInput < 0) {
//     alert('это еще до нашей эры')
// } else if ((!(userInput % 400) || !(userInput % 4)) && !!(userInput % 100)) {
//     alert(`${userInput} год високосный `)
// } else {
//     alert(`${userInput} год НЕ високосный`)
// }
// // -----------------------------------------------------------------------------------------------------------------------------





// // 5 залание --------------------------------------------------------------------------------------------
// // не учтены числа начинающиеся с 0
// let userInput = Math.trunc(+prompt('введи пятиразрядное число'))
// let number = 'это число не подходит'
// if (userInput <= -100000 || userInput >= 100000 || (userInput <= 9999 && userInput >= -9999) || Number.isNaN(userInput)) {
//     alert('это число не подходит')
// } else {
//     number = userInput
// }
// console.log(number)
// ХЗ

// // -----------------------------------------------------------------------------------------------------------------------------


// // 6 залание --------------------------------------------------------------------------------------------
// let userInputUsd = prompt('введите количество USD')
// let userInputСurrency = prompt('во что конвертируем? введи  EUR, UAN или AZN')
// if (userInputUsd == null || userInputСurrency == null) {
//     alert('Вы нажали отмена')
// } else {
//     userInputСurrency = userInputСurrency.toUpperCase()
// }

// let usd
// let rez
// const coeffEur = 0.921278 
// const coeffUan = 38.97
// const coeffAzn = 1.7
// if (+userInputUsd > 0) {
//     usd = +userInputUsd
// } else if (+userInputUsd == 0) {
//     alert('Вы не ввели количество валюты')
// } 
// else {
//     alert('число меньше 0')
// }

// console.log(userInputСurrency)
// switch (true) {
//     case (userInputСurrency == 'EUR') : rez = usd * coeffEur; break;
//     case (userInputСurrency == 'UAN') : rez = usd * coeffUan; break;
//     case (userInputСurrency == 'AZN') : rez = usd * coeffAzn; break;
//     default: alert('проверьте на правильность ввод валюты')
// }

// rezRounded =  Math.trunc(rez * 100) / 100   // тут округление

// if (!Number.isNaN(rezRounded)) {
//     alert(`ГОТОВО,  у вас ${rezRounded} ${userInputСurrency}`)
// } 
// // можно допилить и избавиться от лишних alert и лишних строк  переписывать пока не стал
// // -----------------------------------------------------------------------------------------------------------------------------


// 7 залание --------------------------------------------------------------------------------------------

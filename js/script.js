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


// // 7 задание --------------------------------------------------------------------------------------------
// let priceIncoming = prompt('введите стоимоть товара')
// let verifiedPriceIncoming = false
// if (+priceIncoming < 0) {
//     alert('цена не может быть отрицательной')
// } else if (priceIncoming == null) {
//     alert('вы нажали отмена') 
// } else if (priceIncoming == '') {
//     alert('вы ничего не ввели') 
// } else if (+priceIncoming == 0) {
//     alert('вы ввели 0') 
// } else if (Number.isNaN(+priceIncoming)) {
//     alert('вы ввели текст')
// } else {
//     verifiedPriceIncoming = +priceIncoming
// }

// if (verifiedPriceIncoming < 200 && verifiedPriceIncoming) {
//     alert(`итоговая стоимиость ${verifiedPriceIncoming} у вас нет скидки `)
// } else if (verifiedPriceIncoming > 200 && verifiedPriceIncoming <= 300) {
//     verifiedPriceIncoming = verifiedPriceIncoming - (verifiedPriceIncoming / 100 * 3)
//     alert(`итоговая стоимиость ${verifiedPriceIncoming} ваша скидка 3% `)
// } else if (verifiedPriceIncoming > 300 && verifiedPriceIncoming <= 500) {
//     verifiedPriceIncoming = verifiedPriceIncoming - (verifiedPriceIncoming / 100 * 5)
//     alert(`итоговая стоимиость ${verifiedPriceIncoming} ваша скидка 5% `)
// } else if (verifiedPriceIncoming > 500) {
//     verifiedPriceIncoming = verifiedPriceIncoming - (verifiedPriceIncoming / 100 * 7)
//     alert(`итоговая стоимиость ${verifiedPriceIncoming} ваша скидка 7% `)
// } 
// // -----------------------------------------------------------------------------------------------------------------------------



// // 8 задание --------------------------------------------------------------------------------------------
// let userDataCircumference = prompt('Введите длинну окружности')
// let verifiedDataCircumference
// if (+userDataCircumference < 0 || userDataCircumference == null || userDataCircumference == '' || +userDataCircumference == 0 || Number.isNaN(+userDataCircumference)) {
//     verifiedDataCircumference = false
// } else {
//     verifiedDataCircumference = +userDataCircumference
// }

// let userPerimeterSquare = prompt('Введите периметр квадрата')
// let verifiedPerimeterSquare
// if (+userPerimeterSquare < 0 || userPerimeterSquare == null || userPerimeterSquare == '' || +userPerimeterSquare == 0 || Number.isNaN(+userPerimeterSquare)) {
//     verifiedPerimeterSquare = false
// } else {
//     verifiedPerimeterSquare = +userPerimeterSquare
// }

// if (!verifiedDataCircumference || !verifiedPerimeterSquare) {
//     alert('проверьте ввод')
// } else {
//     // возможно ли вкладывать условия друг в друга?
//     let radiusCalculation = verifiedDataCircumference / 2 * Math.PI
//     let sideSquareCalculation = verifiedPerimeterSquare / 4
    
//     if (radiusCalculation < sideSquareCalculation / 2) {
//         alert('Окрудность вписалась в квадрат')
//     } else {
//         alert('Окрудность не влезла')
//     }
// }
// // -----------------------------------------------------------------------------------------------------------------------------


// // 9 задание --------------------------------------------------------------------------------------------
// alert (`введите номер (цифру) верного ответа \nнапимер\n2`)
// let question1 = +prompt(`ВОПРОС 1\nМосква столица ...\n1 Индии\n2 Ирана \n3 России`);
// let question2 = +prompt(`ВОПРОС 2\nСолнце это ...\n1 Звезда\n2 Планета \n3 Комета`);
// let question3 = +prompt(`ВОПРОС 3\nКамень ...\n1 Жидкий\n2 Твердый \n3 Газообразный`);
// let verifiedquestion1
// let verifiedquestion2
// let verifiedquestion3
// if (Number.isNaN(question1) || Number.isNaN(question2) || Number.isNaN(question3)) {
//     alert('вы ввели не цифру')
// } else {
//     verifiedquestion1 = question1
//     verifiedquestion2 = question2
//     verifiedquestion3 = question3

//     let rez = 0
//     if(verifiedquestion1 == 3) { rez += 2 }
//     if(verifiedquestion2 == 1) { rez += 2 }
//     if(verifiedquestion3 == 2) { rez += 2 }

//     let numberCorrectAnswer = '0'
//     switch (true) {
//         case rez == 2 : numberCorrectAnswer = 'один' ; break;
//         case rez == 4 : numberCorrectAnswer = 'два' ; break;
//         case rez == 6 : numberCorrectAnswer = 'три' ; break;
//     }
//     alert(`ваш результат ${rez}\n${numberCorrectAnswer} верных ответа`)
// }
// // -----------------------------------------------------------------------------------------------------------------------------


// // 10 задание --------------------------------------------------------------------------------------------
// let day = Math.abs(Math.floor(+prompt('Введите число месяца от 1 до 31')))
// let month = Math.abs(Math.floor(+prompt('Введите номер месяца от 1 до 12')))
// let year = Math.abs(Math.floor(+prompt('Введите год')))
// let leapYear = (!(year % 400) || !(year % 4)) && !!(year % 100)
// console.log(leapYear)
// let newDay
// let newMonth
// let newYear
// if(day < 1 || day > 31 || month < 1 || month > 12) {
//     alert ('ошибка ввода, повторите ввод')
// } else {
//     newDay = day + 1
//     newMonth = month
//     newYear = year

//     if ((newDay > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
//         newDay = 1;
//         newMonth = newMonth + 1;
//     }
//     if ((newDay > 31) & (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 ||month == 10)) {
//         newDay = 1;
//         newMonth = newMonth + 1;
//     }
//     if ((newDay > 31) & (month == 12)) {
//         newDay = 1;
//         newMonth = 1;
//         newYear = newYear + 1;
//     }
//     if ((newDay > 28) & (month == 2) & leapYear) {
//         newDay = 1;
//         newMonth = 3;
//     }
//     if ((newDay > 29) & (month == 2) & leapYear) {
//         newDay = 1;
//         newMonth = 3;
//     }

//     if ((day > 30) & (month == 4 || month == 6 || month == 9 || month == 11)) {
//         day = 0;
//     }
//     if ((day > 31) & (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
//         day = 0;
//     }

//     if ((day > 28) & (month == 2) & leapYear ) {
//         day = 0;
//     }
//     if ((day > 29) & (month == 2) & leapYear ) {
//         day = 0;
//     }

//     alert(`вы ввели ${day} ${month} ${year}\nследующая дата ${newDay} ${newMonth} ${newYear}`)
// }
// //  --------------------------------------------------------------------------------------------


// Вопросы:
// вложенность условий как задание 8

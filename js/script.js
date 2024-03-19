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
//1.Number
// const num = 42 //int
// const float = 42.42 //float
// const pow = 10e3
// console.log(pow)


// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) //макс значение int
// console.log('Math.pow 53', Math.pow(2, 53) - 1) //возведение какого либо числа в степень
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER) //мин значение int
// console.log('MAX_VALUE', Number.MAX_VALUE) //проверка мак значения номера
// console.log('MAX_VALUE', Number.MIN_VALUE) //проверка мин значения номера
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) //положительное nfinity
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) //отрицательое infinity
// console.log('2/0', 2 / 0) //infinity
// console.log(Number.NaN) //Not a number
// console.log(typeof NaN) //проверка значения NaN
// const weird = 2 / undefined //тест на проверку значения
// console.log(Number.isNaN(weird)) //получаем false
// console.log(Number.isNaN(42)) //получаем true
// console.log(Number.isFinite(Infinity)) //проверка бесконечности,конечна ли бесконечность = false
// console.log(Number.isFinite(42)) //проверка бесконечности,конечно ли число 42 = true

// const stringInt = '52'
// const stringFloat = '50.52'
// console.log(Number.parseIntstringInt + 2) //выдаст NaN из-за parseIntstringInt
// console.log(Number(stringInt) + 2) //выдаст 54
// console.log(Number.stringInt + 2) // выдаст NaN
// console.log(+stringInt + 2) //элемент '+' просит сложить stringInt и целое число,выведет 54.
// console.log(parseInt(stringInt) + 2) //parseInt переводит значение'52'в число =>52+2=54,выведет 54.


// console.log(parseFloat(stringFloat) + 2) //при переводе stringFloat в  десятичное число используем  parseFloat
// console.log(+stringFloat + 2) //элемент '+' просит сложить stringFloat и целое число,выведет 52.52


// console.log(0.4 + 0.2) // не 0.6
// console.log(+(0.4 + 0.2).toFixed(1)) //выведет 0.6
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) //выведет 0.6



//2.Bigint
// console.log(10n-4)//err
// console.log(parseInt(10 n) - 4)
// console.log(Bigint(10) - Bigint(4))// err
// console.log(5 n / 2 n) //-2n,не 2.5n.Десятые отсеклись.

//3.Math

// console.log(Math.E)
// console.log(Math.PI)


// console.log(Math.sqrt(25)) // возведение 25 в кварат
// console.log(Math.pow(5, 3)) // возведение в степень
// console.log(Math.abs(-42)) //отсекает -
// console.log(Math.max(52, 11, 10)) //из параметров вычисляет макс.
// console.log(Math.max(52, 11, 10)) //из параметров вычисляет мин.
// console.log(Math.floor(4.9)) //округление в меньшую сторону
// console.log(Math.ceil(4.9)) //округление в большую сторону
// console.log(Math.round(4.9)) //округление в большую сторону
// console.log(Math.trunc(4.9)) //округление в меньшую сторону
// console.log(Math.random()) //возвращяет рандомное значение.

//4 Example
// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getRandomBetween(10, 52))// функция вывода рандомного значения в интервале 10-52.
task_3:

// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также 
// принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function number (a) {
	a = +prompt();
	return function (b) {
		b = +prompt();
		return a + b;
	}
}
const result = number();
console.log(result());
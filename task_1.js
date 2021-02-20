task_1:

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

function getOddAndEvenItems(arr) { 
		let odd = 0;
		let even = 0;
		let zero = 0;
	
		for (let i = 0; i < arr.length - 1; i++) {
			
			if ( arr[i] % 2 === 0 ) {
				even++;
			}else if ( arr[i] % 2 !== 0 ) {
				odd++;
			}else if ( arr[i] === 0 ) {
				zero++;
			}else if ( typeof arr[i] !== 'number' ) {
				console.log('Error');
			}else{
				console.log('');
			}
	}
		console.log(odd, even, zero);
	}
getOddAndEvenItems([1,2,3,4,5,0])
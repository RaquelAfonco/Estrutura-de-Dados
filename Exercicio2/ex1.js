// EX 1

function ordenarArray(array) {

    if (array[1] > array[0]) {
        
        let temp = array[1];
        array[1] = array[0];
        array[0] = temp;
    }
    return array;
}

const numeros = [6, 7];

console.log("Array original:", numeros);
console.log("Array ordenado:", ordenarArray(numeros));

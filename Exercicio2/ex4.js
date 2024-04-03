// EX 4

function encontrarIndices(vetor, numero) {

    const indices = [];

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            indices.push(i);
        }
    }
    return indices;
}

const vetor = [1, 3, 5, 2, 5, 8, 5];
const numero = 5;
const indices = encontrarIndices(vetor, numero);

console.log(`O número ${numero} aparece nos índices seguintes: ${indices.join(', ')}`);

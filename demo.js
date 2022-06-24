let array = [
    [4, 5, 6],
    [1, 2, 3],
    [3, 5, 8]
];
const flat_numbers = array.flat()
const filtered_numbers = flat_numbers.filter((v) => v < 3)

console.log(filtered_numbers)



///////////------OUTRA MANEIRA MAIS SIMPLES-------////////////
// console.log(array.flat().filter((v) => v < 3))
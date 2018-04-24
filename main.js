const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

const chained = integers.sort().reverse().filter(int =>{return((int <= 19))}).map(function (int){return ((int * 1.5) -1)})

console.log(chained.reduce(function (total, current){return total += current}, 0))
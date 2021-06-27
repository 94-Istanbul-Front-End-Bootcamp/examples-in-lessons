//0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const fibonacci = [0, 1];

for (let index = 2; index < 10; index++) {
    fibonacci[index] = fibonacci[index - 2] + fibonacci[index - 1];
}

console.log(fibonacci);
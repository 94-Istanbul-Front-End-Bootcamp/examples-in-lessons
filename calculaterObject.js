/*
const calculater = {
    num1: 0,
    num2: 0,
    sum: () => {
        return calculater.num1 + calculater.num2;
    },
    extraction: () => {
        return calculater.num1 - calculater.num2;
    }
}

calculater.num1 = 5;
calculater.num2 = 3;
console.log("Toplama: ", calculater.sum());
console.log("Çıkartma: ", calculater.extraction());
*/

/*Multi */
const calculater = {
    arr: [],
    sum: () => {
        let res = 0;
        arr.forEach(num => {
            res += num;
        });
        return res;
    },
    extraction: () => {
        let res = 0;
        arr.forEach(num => {
            res -= num;
        });
        return res;
    }
}

//çift sayıları gönder
for (let index = 0; index < 50; index++) {
    if (index % 2 == 0) {
        calculater.arr.push(index);
    }
}

//object içerisindeki function'ları çağır
console.log("Toplama: ", calculater.sum());
console.log("Çıkartma: ", calculater.extraction());
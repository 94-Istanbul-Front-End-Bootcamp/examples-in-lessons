try {
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
    calculater.arr.push(3,5);
    console.log(calculater.sum())
} catch (error) {
    console.log(error);
}
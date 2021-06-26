let sonuc = 1;
function faktoriyel(num){
    if (num > 0) {
        sonuc *= num;
        faktoriyel(num-1);
    }else{
        return;
    }
}

faktoriyel(5);
console.log(sonuc);

//Alternatif
function factorial (n){      
    if (n == 1 || n == 0)      
      return 1;      
    else      
      return(n * factorial(n-1));      
}   

console.log(factorial(0));

//Arrow function

const factorial = (n) => {
    if (n == 1 || n == 0)      
      return 1;      
    else      
      return(n * factorial(n-1));   
}
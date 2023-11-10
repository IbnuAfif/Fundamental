//////////////
// No. 1 - Convert Celcius to Fahrenheit
//////////////

let celToFahr = (degrees) => {
    let result = (9/5 * degrees) + 32;
    console.log(result + " degrees")
}  

celToFahr(60)


//////////////
// No. 2 - Check the Odd or Even Number
//////////////

let oddOrEv = (numb) => {
    if (numb % 2 ) { // Ngecek apakah parameter dari numb habis dibagi 2
        console.log (`${numb} Bilangan Ganjil`) // habis dibagi 2 => true
    } else {
        console.log (`${numb} Bilangan Genap`) // sisa dibagi 2 => false
    }
}

oddOrEv(25)


//////////////
// No. 3 - Check the Prime Number
//////////////

let checkPrime = (numb) => {
    let pembagi = 0;
    for (let i = 1; i <= numb; i++) {
        if (numb % i == 0) {
            pembagi++ // 1,2,3
        } 
    } if (pembagi == 2){
        console.log(`${numb} merupakan bilangan prima`)
        } else {console.log(`${numb} bukan bilangan prima`)}
    }

    checkPrime(11)


//////////////
// No. 4 - sumOfNumber
//////////////

let sumOfNumber = (numb) => {
    let result = 0;
    for (let i = 1; i <= numb; i++) {
        result += i;
    }
    console.log(result)
}

sumOfNumber(5)


//////////////
// No. 5 - factor of numb
//////////////

let factorOfNumber = (numb) => {
    let result = 1;
    for (let i = 1; i <= numb; i++) {
        result *= i;
    }
    console.log(result)
}

factorOfNumber(5)


//////////////
// No. 6 - Fibonacci
// [0 1 1 2 3 5 8 13 21 34 55]
// [0 1 2 3 4 5 6  7  8  9 10]
//////////////


let fibonacci = (numb) => {
    let nilaiSebelum = 0, nilaiSekarang = 1, nilaiSelanjutnya = 0;
    for (let i = 2; i <= numb; i++) {
        nilaiSelanjutnya = nilaiSebelum + nilaiSekarang;
        nilaiSebelum = nilaiSekarang;
        nilaiSekarang = nilaiSelanjutnya;
        
    }
    console.log(nilaiSelanjutnya)
}

fibonacci (10)
///////////////
// No. 1
///////////////

let converteExcel = (input) => {
    let result = 0;
    for(let i = 0; i < input.length; i++) {
        result *= 26;
        result += ((input.charCodeAt(i)-'A'.charCodeAt(0) + 1))
    }
    return result;
}

console.log(converteExcel('AB'))

///////////////
// No. 2
///////////////

let findDiffNumb = (arr) => {
    arr = arr.sort((a,b) => a-b);
    if(arr[0] !== arr[1]){
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}

console.log(findDiffNumb([1, 4, 2, 2, 1]));


///////////////
// No. 3
///////////////

let findAnagram = (word1, word2) => {

    if(word1.length !== word2.length){
        return false
    }
    word1 = word1.split('').sort().join('')
    word2 = word2.split('').sort().join('')

    return word1 === word2


}

console.log(findAnagram("dell", "lled"));

///////////////
// No. 4
///////////////

let waysToClimb = (n) => {
    let result = [0, 1];
    for (let i = 0; i < n; i++){
        result = [result[1], result[0] + result[1]];
    }
    return result[1];
}

console.log(waysToClimb(5))
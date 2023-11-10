//////////////
// No. 1 - Find Area Rectangle
//////////////

let areaRectangle = (a, b) => {
    let result = a * b;

    console.log(result)
}

areaRectangle(3, 4)


//////////////
// No. 2 - Find Perimeter Rectangle
//////////////

let perimeterRectangle = (a,b) => {
    let result = (a*2) + (b*2);
    console.log(result);
}

perimeterRectangle(5, 3)


//////////////
// No. 3 - Circle
//////////////

let diameterCircle = (radius) => {
    let result = 2 * radius;
    console.log(result);
}

diameterCircle(5)

let circumferenceCircle = (radius) => {
    let result = (Math.PI *(radius * 2)).toFixed(2)
    console.log(result);
}

circumferenceCircle(5)

let areaCircle = (radius) => {
    let result = (Math.PI * (Math.pow(radius, 2))).toFixed(3);
    console.log(result)
}

areaCircle(5)


//////////////
// No. 4 - Angles of Triangle
//////////////

let anglesOfTriangle = (sudutA, sudutB) => {
    let result = (180 - (sudutA + sudutB))
    console.log(result)
}

anglesOfTriangle(80, 65)


//////////////
// No. 5 - Gap Day
//////////////

let gapDay = (day1, day2) => {
    let date1 = new Date(day1);
    let date2 = new Date(day2);

    let result = (date2 - date1)/(1000 * 3600 * 24)

    console.log(result + ' Hari')
}

gapDay('2022-01-20', '2022-01-22' )


//////////////
// No. 6 - Convert Days
//////////////

let convertDays = (days) => {
    let years = Math.floor(days / 365); // 1 tahun
    let day = days % 365; // sisa dari => 35 hari
    let months = Math.floor(day / 30); // 1 bulan
    let day1 = day % 30; // sisa dari => 0 minggu
    let weeks = Math.floor(day1 / 7); // 0 minggu
    let restDays = day1 % 7 // sisa hari

    console.log(`${years} tahun, ${months} bulan, ${weeks} minggu, ${restDays} hari`)
}

convertDays(365);


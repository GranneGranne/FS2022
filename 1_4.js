// 1.4 a)
console.log(muunnaSekunneiksi(2,1,1));
// end 1.4 a)

//1.4 b) ja c)
let markat = 1.50;
let eurot = 5.0;
let kurssi = 5.945;

console.log(markatEuroiksi(markat, kurssi));
console.log(eurotMarkoiksi(eurot, kurssi));
// end 1.4 b) ja c)



function muunnaSekunneiksi(tunnit, minuutit, sekunnit){
    let aika = tunnit*3600 + minuutit*60 + sekunnit;
    return aika;
}

function markatEuroiksi(markat, kurssi){
    let valuutta = markat / kurssi;
    return Number.parseFloat(valuutta).toFixed(2);
}

function eurotMarkoiksi(eurot, kurssi){
    let valuutta = eurot * kurssi;
    return Number.parseFloat(valuutta).toFixed(2);
}
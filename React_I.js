// Koulu, Luokat, Oppilaat, objekteja, funktioita, >html< ... >/html<

let oppilas1 = {nimi:"Olli"}
let oppilas2 = {nimi:"Mikko"}
let luokka = {nimi:"3A",
                oppilaidenMäärä:27,
                oppilaat:[oppilas1]}
let koulu = { oppilaidenMäärä:100,
                 nimi:"Kangasalan ala-aste",
                luokat:[]}

// web sivu     Koulu
//              Koulun nimi
//              LUokat, oppilaat

const Koulu = (koulu) => {
    return "<h1>"+koulu.nimi+"</h1>"
}

//let r = render(koulu) {
//}

console.log(Koulu(koulu))
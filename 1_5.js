let numero = 1;

console.log(viikonPaiva(numero));

function viikonPaiva(numero){
  switch(numero){
    case 1:
        return "maanantai"
        break;
    case 2:
        return "tiistai"
        break;
    case 3:
        return "keskiviikko"
        break;
    case 4:
        return "torstai"
        break;
    case 5:
        return "perjantai"
        break;
    case 6:
        return "lauantai"
        break;
    case 7:
        return "sunnuntai"
        break;
  }
}
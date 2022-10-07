const lukulista =() =>{
    let list = [];
    for(i = 7; i<=131;i++){
        list.push(i)
    }
    return list
}

const luvut = lukulista;
//const alkuArvo = 0;

const summaa = luvut.reduce(
    (previousValue, currentValue) => previousValue + currentValue
);

console.log(summaa);

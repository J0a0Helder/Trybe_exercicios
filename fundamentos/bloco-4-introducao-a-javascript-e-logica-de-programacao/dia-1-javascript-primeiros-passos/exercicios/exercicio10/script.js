const cost = 100;
const costTotal = cost + (cost*0.2);
const sell = 150;
var lucro = (sell - costTotal) * 1000 

if (cost < 0 || sell < 0){
    console.log("Valor inválido");
}
else{
    console.log(lucro)
}


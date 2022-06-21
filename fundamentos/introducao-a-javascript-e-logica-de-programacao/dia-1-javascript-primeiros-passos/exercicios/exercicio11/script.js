let salarioLiquido;
let Inss;
let descontoIr;

const Salario = 4000;

if (Salario < 1556.94){
    Inss = Salario*0.8;
}
else if (Salario <= 2594.92){
    Inss = Salario*0.9;
}
else if (Salario <= 5189.82){
    Inss = Salario*0.11;
}
else{
    Inss = 570.88;
}

const SalarioBase = Salario - Inss

if (SalarioBase <= 1903.98){
    console.log("seu salario liquido é " + SalarioBase);
}
else if (SalarioBase <= 2826.65){
    descontoIr = (SalarioBase*0,075) - 142.80;
}
else if (SalarioBase <= 3751.05){
    descontoIr = (SalarioBase*0,15) - 354.80
}
else if (SalarioBase <= 4664.68){
    descontoIr = (SalarioBase*0,225) - 636.13
}
else{
    descontoIr = (SalarioBase*0,275) - 869.36
}

console.log ("seu salario liquido é: " + (salarioLiquido - descontoIr))
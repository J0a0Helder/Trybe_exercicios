const a = 1;
const b = 12;
const c = 50;

if(a > b && a > c){
    console.log(a + " é maior que " + b, " e maior que " + c);
}
else if(b > a && b > c){
    console.log(b + " é maior que " + a, "e maior que " + c);
}
else{
    console.log(c + " é maior que " + a, "e maior que " + b);
}
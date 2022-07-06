const a = 60;
const b = 60;
const c = 60;

if(a > 0 && b > 0 && c > 0){
    const ang = a + b + c;
    if(ang === 180){
        console.log ("true");
    }
    else{
        console.log ("false");
    }
}
else{
    console.log("ângulo inválido");
}


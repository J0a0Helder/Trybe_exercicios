let num = 0;

for (let i = 2; i <= 50; i += 1) {
    let primo = true;
    for (let div = 2; div < i; div += 1){
        if(i % div === 0){
            primo = false;
        }
    }
    if (primo){
        num = i;
    } 
}
 console.log(num)
const value1=prompt("Enter the first value");
const value2=prompt("Enter the second value");

const combination=(a,b)=>{
    if(!isNaN(a) && !isNaN(b)){
        const z=Number(a)+Number(b);
        alert(z);
    }
    else{
        alert(a+b);
    }
}
combination(value1,value2);
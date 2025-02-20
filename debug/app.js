function sayHello(){
 console.log('hello');
 console.log('hello');
}

function calculate(x,y){
    console.log('calculatin....');
    const result = x+y;
    console.log('result : ',result);
    sayHello();
    return result;
}

calculate(7,8);

const stop = 9;

console.log('looping.....');
for(let i= 0; i<10;i++){
  
    console.log(i);
    if(i==stop) break;
};
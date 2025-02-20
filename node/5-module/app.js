

console.log('code1');
console.time('timeddout 0');
setTimeout(() => {
   console.log('setTimeout 0');
   console.timeEnd('timeddout 0') ;
}, 0);
for( let i=0;i<100000000;i++){
    
};
for (var i =0; i<5; i++){
    setTimeout(function(){
        console.log(i);
        
    },1000)
}
let {a,b} = { a:1, b:2}
console.log(a,b);
let obj = {
    name : "Umra",
    class : 9
}
console.log({...obj,name : "Kainat"});
console.log({name : "Kainat", ...obj}); //Do not update the values

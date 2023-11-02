// function init(){
//     var firstname="hitesh";
//     console.log("I am inti");
//     function sayfirstname()
//     {
//         console.log(firstname);
//     }
//     return sayfirstname;
// }
// var value=init();
// value();
//with refferrace we can call the function
function doaddition(x)
{
    return function(y){
        return x+y;
    }
}

var add5=doaddition(4);
console.log(add5(5));

//clouser  dispatch

console.log(doaddition(5)(5));
doaddition()()//curring 



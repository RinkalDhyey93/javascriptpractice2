//if we use in array ... than it spread(devided) it and if we use in function than it rest(joint) it

// var returnValue=Math.max(2,5,6,8,9);
// console.log(returnValue);
// var myobj={}
// Object.assign(myobj,{a:1,b:2,c:3},{z:9,y:8,x:7});
// console.log(myobj);
function sumone(a,b){
    return a+b;

}
var mya=[5,4];
//console.log(sumone(...mya));//spread operator=> divede the value

function sumtwo(a,b,...args)//rest operator// joint the value
{
    console.log(args);
    let multi=a*b;
    let sum=0;
    for( const arg of args)
    {
        sum+=arg;
    }
    return [sum,multi];
}
console.log(sumtwo(2,3,1,1,1));
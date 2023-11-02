//aerrow  use in function and array

var iseven=(element) =>//1,2=function,var types of declare function
{
//     if(element %2 ==0)
//     {  return true;}
//    // return false;
      return  element%2==0
}
//console.log(iseven(2));

// var result=[2,3,6,8].every(iseven);//cheack every element by function
// console.log(result);

var result=[2,4,6,8].every((e) => e % 2 ==0);//cheack every element by function () =>{have to return value} syantax
//console.log(result);

var isleap=(element)=>
{
      return element%4 == 0;
}
//console.log(isleap(2016));

var result=[2016,2020,2023].every((e)=>e%4==0);
console.log(result);
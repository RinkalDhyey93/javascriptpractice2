var countries=["India","Usa","japan","russia"];

var states=new Array("rajasthan","delhi","mumbai","assam");

//console.log(states[1]);

//console.log(states.length);
states[0]="punjab";//replacing the value of array by index
//console.log(states);
var user=["hitesh","rinkal@gmail.com",3,34,true];
//console.log(user);
user.pop();
user.pop();//delete last element
//console.log(user);

user.unshift("NEW VALUE");//add first element and shift it
//console.log(user);

user.shift();
//console.log(user);//remove first element


console.log(user.indexOf("new"));

console.log(Array.from("hitesh"));

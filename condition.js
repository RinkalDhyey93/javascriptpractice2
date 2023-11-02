var temperature;
//todo: go to googlr and get the data

temperature=39;

if(temperature<20)
{
console.log("it's very cold outside");
}
if(temperature<30)
    {
console.log("it's very moderate outside");
    }
    else{
        console.log("it's really hot outside");
    }
// var num1=prompt("Enter value of a");

var google=true;
var facebook=false;
var gmail=true;

if(google||facebook||gmail)
{
    console.log("login is success");
}
var authenticated=false;
if(authenticated)
{
    console.log("show signout button");
}
else
{
    console.log("show sign in button");
}

authenticated?console.log("signout button"):console.log("Login");
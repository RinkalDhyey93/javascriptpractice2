//ice-cream exam small child go to the elder not small
//this keyword(its not working in function)but in browser it show the window 
//function call first after decalre is allowed but var call first and after call varible is not allowed
var name="hitesh";

console.log("line number 3",name);
function sayname()
{
    var name="mr. h";
    console.log("line number 8",name);
    saynametwo();
    function saynametwo()
    {
        var name="mr hc";
        console.log("line number 12",name);
    }
}
sayname();
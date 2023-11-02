var testarray=[2,4,6,3,1,5,9,8];
//console.log(testarray.fill("h",2,5));//fill the element of array and second is starting index and third is end of index

const mynumber=[23,24,25,55,66,77,87,98];
const result=mynumber.filter((num)=> num>55);
//console.log(result);
//whenever pass range start=enclusive end=exclusive 

var users=["ted","tin","ton","sam","sor","sod"];

//console.log(users.slice(1,4));//cut the element count=3 4 is exclusive

users.splice(1,2,"hi","empty","dhyey"); //replace with new value 
console.log(users.length);
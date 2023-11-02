var mymap=new Map();
mymap.set(1,"uno");
mymap.set(2,"dos");
mymap.set(3,"tres");
mymap.set(4,"cuatro");
console.log(mymap);
for(let key of mymap.keys()){
    console.log(`key is ${key}`);
}

for(let values of mymap.values()){
    console.log(`values is ${values}`);
}
//for loop gives you key first and foreach loop give values first
for(let [key,values] of mymap){
    console.log(`key is ${key} and value is ${values}`);
}

mymap.forEach((v,k)=> console.log(`${v} key is ${k}`));
mymap.delete(2);
console.log(mymap);
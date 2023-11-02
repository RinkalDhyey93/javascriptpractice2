//copy array data to object and access thim
//const user=["hitesh",3,"admin"];
//var role=user[2];
//var name=user[0];

//var [name,coursecount,role]=user;

//console.log(role);
const myuser={
    name:"hitesh",
    coursecount:5,
    role:"admin",
};
console.log(myuser.coursecount);
const{name,coursecount,role}=myuser;
console.log(role);
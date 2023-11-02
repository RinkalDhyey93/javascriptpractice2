//import user from  "./class";

const user=require("./class.js");
const hitesh=new user("hitesh","hitesh@lco.dev");
console.log(hitesh.getinfo().email);
hitesh.enrollcoursr("Reactbootcamp");
hitesh.enrollcoursr("php");
console.log(hitesh.getcourselist());
let course=hitesh.getcourselist();
course.forEach(c=>console.log(c));
let size=hitesh.getcourselist().length;
console.log(size);
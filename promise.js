//promise= hold that time
//asy = data structure sycronise
//await == waiting time set than after run the methode
//resolve = solve the time 
//reject = not run the method error
const uno = () =>{
    return "I am one";
};
// const dos =  () =>{
//   setTimeout(()=>{
//     return "I am two";
//   },3000);
// };

const dos =  () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(" i am two");
        },3000);
    });

}
const tres = () =>{
    return "I am three";
};

const callme = async () => {
    let valone=uno();
    console.log(valone);

    let valtwo= await dos();
    console.log(valtwo);

    let valthree=tres();
    console.log(valthree);


}
callme();

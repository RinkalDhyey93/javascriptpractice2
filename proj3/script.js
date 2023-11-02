const courses=[
    {
        name:"Complete reactjs course",
        price:"2.3"
    },
    {
        name:"Complete angular course",
        price:"2.1"
    },
    {
        name:"Complete mern course",
        price:"2.7"
    },
    {
        name:"Complete C++ course",
        price:"2.8"
    },
    {
name:"django course",
price:"1.2"
    },
];

{/* <li class="list-group-item">
    Complete c++ course
    <span class="float-right">$ 2.8</span>
</li> */}

function generatelist(){
    const ul=document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach(course =>{
const li=document.createElement("li");//create tag ,<li></li>
li.classList.add("list-group-item");

const name=document.createTextNode(course.name);
li.appendChild(name);

const span=document.createElement("span")
span.classList.add("float-right");

const price=document.createTextNode("$ "+course.price)
span.appendChild(price);

li.appendChild(span);
ul.appendChild(li);
});
}
//generatelist();

window.addEventListener("load",generatelist);

const button=document.querySelector(".sort-btn")
button.addEventListener("click",()=>{
  courses.sort((a,b)=>a.price-b.price) 
  generatelist(); 
});

const button2=document.querySelector(".unsort-btn")
button2.addEventListener("click",()=>{
    courses.sort((a,b)=>b.price-a.price)
    generatelist();
})
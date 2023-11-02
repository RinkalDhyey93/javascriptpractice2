const red=document.querySelector(".red");
const cyan=document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");

const center=document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getbgcolor=(s)=>{
    return window.getComputedStyle(s).backgroundColor;
};
// var orangeelementcolor=getbgcolor(orange);

// orange.addEventListener("mouseenter",()=>{
//     center.style.background=orangeelementcolor;
// });

// var color=getbgcolor(pink);
// pink.addEventListener("click",()=>{
//     center.style.background=color;
// })

const magiccolorchanger=(element,color)=>{
    return element.addEventListener("mouseenter",()=>{
        center.style.background=color;
    });
};

magiccolorchanger(red,getbgcolor(red));
magiccolorchanger(cyan,getbgcolor(cyan));
magiccolorchanger(violet,getbgcolor(violet));
magiccolorchanger(orange,getbgcolor(orange));
magiccolorchanger(pink,getbgcolor(pink));
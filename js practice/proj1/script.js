var rect=document.querySelector("#center");

rect.addEventListener("mousemove",function(details)
{

    var rectanglelocation=rect.getBoundingClientRect();
    var insiderectval=details.clientX-rectanglelocation.left;

    if(insiderectval < rectanglelocation.width/2){
       var redcolor= gsap.utils.mapRange(
        0,
        rectanglelocation.width/2,
        255,
        0,
        insiderectval
        );
      gsap.to(rect,
        {backgroundColor:`rgb(${redcolor},0,0)`,
      ease:Power4,
      });
    }
    else{
        var bluecolor= gsap.utils.mapRange(
            rectanglelocation.width/2,
            rectanglelocation.width,
            0,
            255,
            insiderectval
            );
          gsap.to(rect,
            {backgroundColor:`rgb(0,0,${bluecolor})`,
          ease:Power4,
          });
    }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{backgroundColor:"white"},)
});




// console.log();

//logic 2$$$$$$

// console.log('rinkal')
// let rect=document.querySelector("#center");
// let body=document.querySelector('body');
// console.log(rect);
// rect.addEventListener('mousemove',function(e){
//     console.log(e);
//     let x=e.offsetX;
//     let y=e.offsetY;
//     console.log(`${x} and ${y}`)
//     if(x>=0 && x<=200 && y>=0 && y<=200){
//     body.style.backgroundColor=`rgb(${x},0,0)`;
//     }
//     else
//     {
//     body.style.backgroundColor=`rgb(0,0,${y})`;
//     }
// })
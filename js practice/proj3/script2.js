const btn=document.querySelector("#throttle");
     
    // Throttling Function
    const throttleFunction=(func, delay)=>{
     
      // Previously called time of the function
      let prev = 0; 
      return (...args) => {
        // Current called time of the function
        let now = new Date().getTime(); 
     
        // Logging the difference between previously 
        // called and current called timings
        console.log(now-prev, delay); 
         
        // If difference is greater than delay call
        // the function again.
        if(now - prev> delay){ 
          prev = now;
     
          // "..." is the spread operator here 
          // returning the function with the 
          // array of arguments
          return func(...args);  
        }
      }
    }
    document.querySelector("#center").
    addEventListener("mousemove",
     throttleFunction((dets)=>{
      //your less repetation code

      var div=document.createElement("div");
      div.classList.add("imagediv");
      div.style.left=dets.clientX+'px';
      div.style.top=dets.clientY+'px';

      var img=document.createElement("img");
      img.setAttribute("src","https://images.pexels.com/photos/18626019/pexels-photo-18626019/free-photo-of-perito-moreno.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load");
      div.appendChild(img);

      document.body.appendChild(div);

      gsap.to(img,{y:"0",ease:Power1,duration:.2});
      gsap.to(img,{y:"100",delay:.6,ease:Power2});

      setTimeout(() => {
        div.remove();
      }, 2000);
    }, 400));
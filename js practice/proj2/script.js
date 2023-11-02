window.addEventListener("mousemove",function(details){
    var rect=this.document.querySelector("#rect");

  var xval = gsap.utils.mapRange(
    0,
    this.window.innerWidth,
    200+rect.getBoundingClientRect().width/2,
    this.window.innerWidth-200+rect.getBoundingClientRect().width/2,
    details.clientX)    
    gsap.to('#rect',{
left:xval,
ease:Power3
    })
})
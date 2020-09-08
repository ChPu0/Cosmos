
//GLIDE image left
function glideLeft(imageToGlideId){
  window.addEventListener("scroll", ()=> {
    const scrollable = document.getElementById("container2").offsetHeight;
    const scrolled = window.scrollY/10;
    const windowWidth = window.innerWidth; 
    let wayToBottom = scrollable-scrolled;
    let halfWay= scrolled-wayToBottom+(document.getElementById("iPhoneFrame").height/2); //center of the page height in Px - Image height/2 
    let picToGlide = document.getElementById(imageToGlideId);

    if(scrolled > (scrollable/10)) {
      picToGlide.style.marginLeft = ((windowWidth/2)-document.getElementById(imageToGlideId).width/2)-halfWay*2+"px"; //reduce margin Left by Xscrolled Px
    }
  })
}

//GLIDE image right
function glideRight(imageToGlideId){
  window.addEventListener("scroll", ()=> {
    const scrollable = document.getElementById("container2").offsetHeight;
    const scrolled = window.scrollY/10;
    const windowWidth = window.innerWidth; 
    let wayToBottom = scrollable-scrolled;
    let halfWay= scrolled-wayToBottom+(document.getElementById("iPhoneFrame").height/2); //center of the page height in Px - Image height/2 
    let picToGlide = document.getElementById(imageToGlideId);

    if(scrolled > (scrollable/10)) {
      picToGlide.style.marginLeft = ((windowWidth/2)-document.getElementById(imageToGlideId).width/2)+halfWay*2+"px"; //reduce margin Left by Xscrolled Px
    }
  })
}

//OPACITY
function opacity(imageToShowId){
  window.addEventListener("scroll", ()=> {
    const scrollable = document.getElementById("container2").offsetHeight;
    const scrolled = window.scrollY;
    const windowWidth = window.innerWidth; 
    let wayToBottom = scrollable-scrolled;
    let halfWay= scrolled-wayToBottom+(document.getElementById("iPhoneFrame").height/2); //center of the page height in Px - Image height/2 
    let picToShow = document.getElementById(imageToShowId);

    if(scrolled > (scrollable/10)) {
      picToShow.style.opacity = ((scrolled*2/scrollable)-9.25);
    }
  })
}


//3D Grille fait tourner la grille en3D
function rotate(imageToTransform){
  window.addEventListener("scroll", ()=> {
    const scrollable = document.getElementById("containerSection6").offsetHeight;
    const scrolled = window.scrollY;
    const image = document.getElementById(imageToTransform)
    // const scrolled = window.scrollY;
    if(scrolled>15300) {
      image.style.transform = "rotateX("+((scrolled-15300)/12)+"deg)";
    }
    console.log(scrolled);
  })
}



glideLeft("iPhoneFrame");
glideLeft("iPhoneMoonImg");
glideLeft("iPhoneBMXImg");
glideRight("iPhoneFrameSmall");
glideRight("iPhoneMoonImgSmall");
glideRight("iPhoneBMXImgSmall");
opacity("iPhoneBMXImgSmall");
opacity("iPhoneBMXImg");
rotate("grille");
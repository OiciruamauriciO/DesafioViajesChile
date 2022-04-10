function ajustarSlidePorNavBar(thisToogle){

    console.log("EN ajustarSlidePorNavBar()");

    var elementoCarousel = document.getElementsByClassName('carousel');
    /*var condicion = document.getElementsByClassName('carousel')[0].getAttribute("style");*/
    
        if(elementoCarousel[0].getAttribute('style')==='margin-top: -260px'){
            elementoCarousel[0].setAttribute("style", `margin-top: -100px`);
        }else{
            elementoCarousel[0].setAttribute("style", `margin-top: -260px`);  
        }
}

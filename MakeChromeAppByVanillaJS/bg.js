const body =  document.querySelector(".js-bg");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    body.style.backgroundImage = `url(img/${imgNumber}.jpg)`;
    // const image = new Image();
    // image.src =;
    // image.classList.add("bgImage");
    // body.prepend(image);
}

function genRandom(){
    return Math.floor(Math.random() * IMG_NUMBER) + 1;
}


function init(){
    paintImage(genRandom());
}

init();
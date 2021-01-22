const body =  document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src =`img/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    return Math.floor(Math.random() * IMG_NUMBER) + 1;
}


function init(){
    paintImage(genRandom());
}

init();
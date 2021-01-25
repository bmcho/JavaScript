//constructor
//Array 객체의 프로토 타입을 만든 함수를 반환합니다.

const btnConstructor = document.querySelector(".btn-Constructor");
const btnLength = document.querySelector(".btn-Length");
const btnPrototype = document.querySelector(".btn-Prototype");

const cars = ["Saab", "Volvo", "BMW"];

function handleBtnConstructorClick(event){
    const div = document.querySelector(".constructor");
    if(div.querySelector("span") === null){
        const span = document.createElement("span");
        span.innerHTML = cars.constructor;
        div.appendChild(span);
    }
}

function handleBtnLengthClick(event){
    const div = document.querySelector(".length");
    if(div.querySelector("span") === null){
        const span = document.createElement("span");
        span.innerHTML = cars.length;
        div.appendChild(span);
    }
}

//prototype
//Make a new array method that transforms array values 
Array.prototype.customFucnc = function() {
    var i;
    for (i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };

function handleBtnProtoTypeClick(event){
    const div = document.querySelector(".prototype");
    if(div.querySelector("span") === null){
        const span = document.createElement("span");
        cars.customFucnc();
        span.innerHTML = cars;
        div.appendChild(span);
    }
}


function init(){
    btnConstructor.addEventListener("click", handleBtnConstructorClick);
    btnLength.addEventListener("click", handleBtnLengthClick);
    btnPrototype.addEventListener("click", handleBtnProtoTypeClick);
}

init();
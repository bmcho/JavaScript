//Your first JS Function
//console 또한 Object
console.log(console);

function sayHello(){
  console.log("Hello!");
}
sayHello();


function sayHello_Arg(Arg){
  console.log("Hello!", Arg);
}
sayHello_Arg("Nicolas");

//"" '' 두 방법 모두 string
//``  <-- 이것도 string
function sayHello_Arg2(name, age){
  console.log("Hello!", name, 'you have', age,"years of age");
}
sayHello_Arg2("Nicolas", 33);

//More Function Fun
//`` 활용
function sayHello_Arg3(name, age){
  console.log(`Hello ${name} you ar ${age} years old`);
}
sayHello_Arg3("Nicolas", 33);


function sayHello_Arg4(name, age){
  return `Hello ${name} you ar ${age} years old`;
}
const greetNicolas = sayHello_Arg4("Nicolas", 33);;
console.log(greetNicolas);

const calculator = {
  plus: function(a,b){ return a + b; }
}
const plus = calculator.plus(5,5);
console.log(plus);

//JS DOM Functions
//DOM - Document Object Model
//해당 HTML
console.log(document);
//ID로 찾기
//getElementById 말고 Class, TagName 등 Element요소를 찾는 함수가 있음
const title = document.getElementById("title");
console.log(title);

//HTML는 DOM 형태로 변경이 가능
title.innerHTML =  "Hi! From JS";
//title.style.color = 'red';
document.title ='I own you know';

// Modifying the DOM with JS
console.dir(title);
console.dir(document);

/*querySeletor
    #: id
    .: class
*/
const title1 = document.querySelector("#title");
console.log(title1);

const tag = document.querySelector("body");
console.log(tag);


// Events and event handler
// JS는 이벤트에 반응하기 위해 만들어졌다.

function handleResize(){
  console.log("I have been resized");
}

function handleResize1(event){
  console.log(event);
}

//handleResize() x => handleResize o
//window.addEventListener("resize",handleResize);
//lamda
//window.addEventListener("resize",()=>{console.log("I have been resize2");});
//window.addEventListener("resize",handleResize1);

function handleClick(){
  title.style.color = 'powderblue';
}

//title.addEventListener("click", handleClick);

//If, else, and, or 
//다른 언어의 규칙과 동일
// && : END, || : OR
if(10 === 5){
  console.log("true");
} else {
  console.log("false");
}


//DOM - If else - Function practice
// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

function handleClick1(){
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

// function init(){
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick1);
// }

// init();

/*
  Event Search
  HTML JavaScript DOM evnet MDN
  MDN Web Docs 활용하기
*/


//DOM - If else - Function practice Two
const CLICKED_CLASS = "clicked";

function handleClick2(){
  const currentClass = title.className;
  const hasClass = title.classList.contains(CLICKED_CLASS);
  title.classList.toggle(CLICKED_CLASS);
  // if(currentClass !== CLICKED_CLASS) {
  //   // title.className = CLICKED_CLASS;
  //     title.classList.add(CLICKED_CLASS);
  // } else {
  //   // title.className = "";
  //     title.classList.remove(CLICKED_CLASS);
  // }
  // if(!hasClass) {
  //   title.classList.add(CLICKED_CLASS);
  // } else {
  //   title.classList.remove(CLICKED_CLASS);
  // }
}

function init(){
  title.addEventListener("click", handleClick2);
}

init();

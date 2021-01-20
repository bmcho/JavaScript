 console.log('Im Working. Im JS. Im Beautiful.');

/*
 Variable rule
 1. Create
 2. Initailize
 3. Use
*/

// let, const, var

let a = 10;
let b = a - 5;
console.log(b);

/*
Uncaught TypeError: Assignment to constant variable.
*/
const c = 20
//c = 15;

//Until need let Use const

//string
const what1 = "Nicolas";
const what2 = "😂";
console.log(what1);
console.log(what2);

/*boolean
  true = 1
  false = 0
  this is not text
*/
const what3 = false;

//number
const what4 = 1234;

//folat
const what5 = 123.4;


// Organizing Data with Arrays
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

const something = "Something";
const daysOfWeek = ["Mon", "Teu", "Wed", "Thu", "Fri", "Sat", "Sun", true, 1, 1.1, something];
console.log(daysOfWeek);

//Thu
console.log(daysOfWeek[3]);
//Mon
console.log(daysOfWeek[0]);


//Organizing Data with Objects
const nicoInfoEx = ["Nicolas", "55", true, "Seoul"];

// 각 정보의 위치를 기억할 수 없음
// 몇번째가 이름이고, 몇번째가 나이인지
console.log(nicoInfoEx);

const nicoInfo = {
    name:"Nico",
    age: 33,
    gender:"Male",
    isHandsome:true,
    favMovies:["SpiderMan", "BatMan", "IronMan", "Thor", "Oldboy"],
    favFood:[
      {name:"Kimchi", fatty:false},
      {name:"Cheeseburder", fatty:true}]
}

console.log(nicoInfo);

console.log(nicoInfo.isHandsome);
nicoInfo.isHandsome = false;
console.log(nicoInfo.isHandsome);

console.log(nicoInfo.name);
console.log(nicoInfo.gender);

console.log(nicoInfo.favMovies[1]);
console.log(nicoInfo.favFood[1].name);

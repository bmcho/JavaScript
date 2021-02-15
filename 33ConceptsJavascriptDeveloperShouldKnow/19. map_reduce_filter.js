/*
    mpa()

    메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
    map은 callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열은 만듬

    callback 함수는 호출될 때 대상 요소의 값, 그 요소의 인덱스, 그리고 map을 호출한 원본 배열 3개의 인수를 전달 받음
    thisArg 매개변수가 map에 전달된 경우 callback 함수의 this값으로 사용 그외 undefined
    gkatn so this를 정하는 일반적인 규칙에 따라 결정
*/

{
    const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [2, 8, 18, 32] === [1, 4, 9, 16] 각각의 요소에 *2
}


{
    /**
     * 오브젝트의 배열을 받아 각 오브젝트를 다른 형태으로 재구성해 새로운 배열을 만듬
     */
    var kvArray = [{key:1, value:10},
                   {key:2, value:20},
                   {key:3, value: 30}];

    console.log(kvArray);

    var reformattedArray = kvArray.map(function(obj){
        var rObj = {};
        rObj[obj.key] = obj.value;
        return rObj;
    });

    console.log(reformattedArray);
}

{
    /**
     *  인자가 한개인 함수를 이용하여 map이 어떻게 동작하는지 나타냄
     *  인자인 배열과 안의 요소들은 map을 통해 순회하면서 원본 배열로 부터 자동으로 할당
     */

    var numbers = [1, 4, 9];
    var doubles = numbers.map(function(num) {
      return num * 2;
    });

    console.log(doubles);
}

{
    /**
     *  String에 map을 사용해서 각 문자의 ASCII 인코딩 값을 요소로 갖는 배열을 얻는 방법
     */

     var map = Array.prototype.map;

     var a = map.call('Hello World', function(x){ return x.charCodeAt(0);});

     var b = [].map.call('Hello World', function(x){ return x.charCodeAt(0);});
     console.log(a);
     console.log(b);
}

{
    /**
     *  포괄적으로 사용하기 (querySelectorAll)
     *  querySelectorAll을 사용해서 수집된 객체들을 순회 처리하는 법을 보여줌
     *  이번 경우 체크한 옵션 박스를 콘솔에 프린트.
     */

    //  var elems = document.querySelectorAll('select option:checked');
    //  var values = [].map.call(elems, function(obj) {
    //     return obj.value;
    //   });
}

{
    /**
     * map에 하나의 인자(순회하는 원소)만 받는 콜백을 사용하는 경우가 많음
     * 그러나 어떤 함수는 대개 하나의 인자로 호출하지만 두 개 이상의 인자를 사용하는 경우도 있음
     * 이로 인해 어떤 경우 혼란스러울 수도 있음
     */

    var a = ['1','2','3'].map(parseInt);
    console.log(a); // [ 1, NaN, NaN ] 
    //parseInt는 보통 하나의 인자만 사용하지만 두 개를 받을수 있다.
    a = ['1','2','3'].map(x => parseInt(x));
    console.log(a);

    function returnInt(element) {
        return parseInt(element, 10);
    }

    let b = ['1','2','3'].map(returnInt);
    console.log(b);

    let c = ['1', '2', '3'].map(str => parseInt(str));
    console.log(c);

    console.log(['1.1', '2.2e2', '3e300'].map(Number)); // [1, 2, 3]
    
}


/**
 *  reduce() - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 *  배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
 *  4개의 인자를 가짐
 *  1. 누산기(accumulator : acc) 
 *  2. 현재값(currentValue : cur)
 *  3. 현재 인덱스(currentIndex : idx)
 *  4. 원본 배열(array : src)
 * 
 *  callback을 최초 호출 할때 누산기 와 현재값은 다음 두가지 값중 하나를 가질수 있다.
 *  만약 reduece 함수 호출에서 initialValue를 제공한 경우, 누산기는 initialValue와 같고 현재값은 배열의 첫번째 값과 같음
 *  initialValue를 제공하지 않았다면, accumulator는 배열의 첫 번째 값과 같고 currentValue는 두 번째와 같음
 *  initialValue를 제공하면 인덱스 1부터 제공하지 않으면 인덱스 0부터
 * 
 *  배열이 비워져 있는데 initialValue 제공하지 않으면 TypeError
 *  배열이 비워져 있는데 initialValue 제공하면 return initialValue
 */

 {
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    // expected output: 10
    
    // 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    // expected output: 15
 }

{
    var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
    var maxCallback2 = ( max, cur ) => Math.max( max, cur );

    // initialValue 없이 reduce()
    console.log([ { x: 22 }, { x: 42 } ].reduce( maxCallback )); // 42
    console.log([ { x: 22 }            ].reduce( maxCallback )); // { x: 22 }
    // console.log([                      ].reduce( maxCallback )); // TypeError

    // map/reduce로 개선 - 비었거나 더 큰 배열에서도 동작함
    console.log([ { x: 22 }, { x: 42 } ].map( el => el.x )
                            .reduce( maxCallback2));

 }


 {
     /**
      * 중첩 배열 펼치기
      */
    var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
        function(accumulator, currentValue) {
          return accumulator.concat(currentValue);
        },
        []
      );
      // 펼친 결과: [0, 1, 2, 3, 4, 5]
    var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
        ( accumulator, currentValue ) => accumulator.concat(currentValue),
        []
      );
 }

{
    /**
     * 객체 내의 값 인스턴스 개수 세기
     */

    var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

    var countedNames = names.reduce(function (allNames, name) {
        if (name in allNames) {
          allNames[name]++;
        }
        else {
          allNames[name] = 1;
        }
        return allNames;
      },{});

      console.log(countedNames);
      // countedNames is:
      // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
}

{
    /**
     * 속성으로 객체 분류하기
     */

    var people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
      ];

      function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          var key = obj[property];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {});
      }
      var groupedPeople = groupBy(people, 'age');
      console.log(groupedPeople);
}

{
    /**
     * 확장 연산자와 초기값을 이용하여 객체로 이루어진 배열에 담긴 배열 연결하기
     */

    var friends = [{
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
      }, {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
      }, {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
    }];

    console.log(friends);

    var allbooks = friends.reduce(function(accumulator, currentValue) {
        return [...accumulator, ...currentValue.books];
      }, ['Alphabet']);
    console.log(allbooks);
}

{
    /**
     * 배열의 중복 항목 제거
     * Set과 Array.from()을 사용할 수 있는 환경이라면, 
     * let orderedArray = Array.from(new Set(myArray));를 사용해 중복 요소를 제거 가능
     */

    let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

    let result = arr.sort().reduce((accumulator, current) => {
        const length = accumulator.length
        if (length === 0 || accumulator[length - 1] !== current) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
    console.log(result); //[1,2,3,4,5]
}


{
    /**
     * 프로미스를 순차적으로 실행하기
     */

     /**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
    return arr.reduce(
      (promiseChain, currentFunction) => promiseChain.then(currentFunction),
      Promise.resolve(input)
    );
  }
  
  // promise function 1
  function p1(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 5);
    });
  }
  
  // promise function 2
  function p2(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 2);
    });
  }
  
  // function 3  - will be wrapped in a resolved promise by .then()
  function f3(a) {
   return a * 3;
  }
  
  // promise function 4
  function p4(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 4);
    });
  }
  
  const promiseArr = [p1, p2, f3, p4];
  runPromiseInSequence(promiseArr, 10)
    .then(console.log);   // 1200
}

{
    /**
     * 함수 구성을 위한 파이프 함수
    */

    // Building-blocks to use for composition
    const double = x => x + x;
    const triple = x => 3 * x;
    const quadruple = x => 4 * x;

    // Function composition enabling pipe functionality
    const pipe = (...functions) => input => functions.reduce(
        (acc, fn) => fn(acc),
        input
    );

    // Composed functions for multiplication of specific values
    const multiply6 = pipe(double, triple);
    const multiply9 = pipe(triple, triple);
    const multiply16 = pipe(quadruple, quadruple);
    const multiply24 = pipe(double, triple, quadruple);

    // Usage
    multiply6(6); // 36
    multiply9(9); // 81
    multiply16(16); // 256
    multiply24(10); // 240

    //multiply6을 할당할때 double, triple개의 인수를 받고
    //multiply6을 호출할때 6을 받음
    //그래서 두개의 => 가 나오는듯
}
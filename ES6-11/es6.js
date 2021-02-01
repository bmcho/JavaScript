/*
    Shorthand property names
*/


{
    //기존
    const ellie1 ={
        name: 'Ellie',
        age: '18'
    };

    const name = "Ellie";
    const age = '18';

    const ellie2 ={
        name: name,
        age: age
    };

    //es6
    const ellie3 = {
        name,
        age
    }

    console.log(ellie1,ellie2,ellie3);
}


/*
    Destructuring assignment
*/

{
    //기존
    //object
    const student = {
        name: 'Anna',
        level: 1
    };

    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    //es6
    {
        const { name, level} = student;
        console.log(name, level);

        const{ name: studentName, level: studentLevel } = student    
        console.log(studentName, studentLevel);
    }

    //기존
    //array
    const animals = {"🐶", "🐺"};

    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second); 
    }

    //es6
    //objecs는 {} array []
    {
        const [first, second] = animals;
    }

}

/*
    Spread Syntax
    기존 apply()를 대체한다
*/
{
    const obj1 = {key :'key1'};
    const obj2 = {key :'key2'};

    //기존
    const array = [obj1, obj2];

    //es6

    //array
    const arrayCopy = [...array];
    const arrayCopy2 = [...array, {key:'key3'}];

    //object
    const obj3 = {...obj1};

    //concatenation
    //array, object 둘다 가능
    //object의 경우 key가 동일한 object를 병합을 시킨다면
    //맨뒤의 object의 key가 적용된다.
    const obj4 = {...obj1, ...obj2};
}


/**
 * Default parameters
 */
{
    {
        //기존
        function printMessage(message){
            console.log(message);
        }
        printMessage('hello');  //hello
        printMessage();         //undefined
    }

    {
        //es6
        //c#의 defaultparameters랑 사용방법 같음
        function printMessage(message = 'default message'){
            console.log(message);
        }
        printMessage('hello');  //hello
        printMessage();         //default message
    }
}

/**
 * Ternary Operator
 * 삼항식
 */

isCat = true;

{
    //기존
    let component;
    if(isCat){
        component = 'Cat';
    } else {
        component = "Dog";
    }
}

{
    //es6
    const component = isCat ? "Cat" : "Dog";
}


/**
 * Template  Literals
 */
{
    const weather = "Sunny";
    const temparature = "16℃";

    //기존
    const case1 = 'Today weather is' + weather + ' and temparature is ' + temparature;
    //es6 - string.format과 같은 느낌
    const case2 = `Today weather ${weather} and temparature is ${temparature}`;
}



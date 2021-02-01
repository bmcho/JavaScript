/**
 * Optional Chaining
 */

 {
    const person1 = {
        job :{
            title :'S/W Engineer',
            manaer: {
                name: 'Bob'
            }
        }
    };

    const person2 = {
        name: 'Bob'
    };

    {
        function printManager(person){
            console.log(person.job.manager.name);
        }
        printManager(person1);
        //printManager(person2); <-- Error
        //Error가 나지 않도록 하는 많은 방법들이 있지만
        //Code가 길어 질수 밖에 없다.
    }
    
    //es11
    {
        function printManager(person){
            console.log(person.job?.manager?.name);
        }
        //Nullable과 비슷한 느낌??

        printManager(person1);
        printManager(person2);
    }
 }

 /**
  * Nullish Coalescing Operator
  */
{
    //Logical OR operator
    //false: false, '', 0, null, undefined
    {
        const name = 'Ellie';
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = 'null';
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        //밑과 같은 상황에서도 Guest가 할당
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);
    }

    //es11
    {
        //name의 값이 null이면 Guest를 사용하자
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);
    }
    }
}

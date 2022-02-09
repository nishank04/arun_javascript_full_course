'use strict';

function calcAge(birthYear){
    const age = 2022 - birthYear;
    //console.log(firstName);

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            const output = 'New Otput';
        }
        //console.log(str);
        console.log(millenial)
        //console.log(add(2, 3));
        console.log(output)
    }

    printAge();

    return age;
}
const firstName = 'Nishank';
calcAge(1989);
//console.log(age);
//printAge();
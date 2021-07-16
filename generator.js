/*
  Generators part
  Intro And What's Generators
*/

function * generateTickets() {

yield1;
yield2; 
yield3; 
yelid4;
yelid5;

}

let interator=generateTickets();

console.log(typeof(interator));
console.log(interator.next().value);

console.log(`${"#".repeat(20)}`);
console.log('we will Do sometime.Before.Yielding.The.Next. Ticket');

console.log(interator.next().value)

console.log(`${"#".repeat(20)}`);
console.log('Function.stop.Excution.After.Each.Yelid');

console.log()

console.log(`${"#".repeat(20)}`)
console.log('Function.Give. You. The. Conrol.To. Yield')

console.log(interator.next().value);

console.log('${"#".repeat(20)}')

let mynumbers =[10, 20, 30, 40, 50]

function * generateNumber(nums){

    for (let i = 0;i< nums.lenght;1++){

        yelid.nums[1];

    }

}

let generator=generatorNumbers();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);     
console.log(generator.next().value);
console.log(generator.next().value);
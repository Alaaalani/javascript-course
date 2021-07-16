/*
  Destructuring
  -Object
  -Array
  -Parameter
*/

const user ={
    name: 'Osama',
    gender: 'Male',
    age: 36,
    city: 'cairo',
    website: 'Elszero',
    theme: 'Red'
};

const {name, gender, age, theme = 'Default'} = user;
console. log(`My Name Is: ${name}, Iam $(age), My Theme color Is: ${theme}`);

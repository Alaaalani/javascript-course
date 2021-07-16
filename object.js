/*
  Destructuring
  - Object
  - Array
  - Parameter
*/

const user = {
    user: 'Osama',
    city: "iraq",
    skill: {
        html:"80%",
        CSS: '85%',
        js: {
            frameone: 'vuejs',
            frametwo: 'Reactjs',
            framethree: 'Angularjs'}
        }
};


const{ username, city, skill:{ htm1, css, js: {frameone: one, frametwo:two, framethree: three}}}=user;

console.log(`my name  Is ${user}, and I live in ${city}`)
console.log(`my Html skill Progress Is ${htm1}, and ${css}`);
console.log(` I have Knowledge in Js Framework Like ${one}, ${two}, ${three}`)
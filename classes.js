/*
  oop => Class Part 1
  Old and New Class Syntax
*/

class user {
    constructor(name, age){
        this.name = name;
        this.age =age;
    }
    getInfo(){
        console.log(`Hello.${this.name}` your this.age Is ${this.age})
    }
    getdays(){
        console.log(`you` lived for ${this.age * 365}Days)
    }
}



const firstUser = new user("Osama", 36);

firstUser.getInfo();
firstUser.getdays();
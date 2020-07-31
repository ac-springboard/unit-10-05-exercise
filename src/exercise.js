'use strict';

function header( title ) {
  const n = 40;
  console.log();
  console.log('-'.repeat(n));
  console.log('-', title);
  console.log('-'.repeat(n));
}

header( '01 - Same Keys and Vaues ');

function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}

const createInstructorES6 = ( firstName, lastName ) => ({ firstName, lastName});

// OUTPUTS
console.log( '...createInstructor ->', createInstructor("Master", "Lahiru") );
console.log( 'createInstructorES6 ->', createInstructorES6("Master", "Lahiru") );

header( '02 -Computed Property Names');

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"


const instructorES6 = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

// OUTPUTS
console.log( '...instructor ->', instructor );
console.log( 'instructorES6 ->', instructorES6 );

header( '03 - Object Methods');

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

const instructorES6_03 = {
  firstName: "Colt",
  sayHi(){
    return "Hi!"
  },
  sayBye(){
    return this.firstName + 'says bye!'
  }
}

// OUTPUTS
console.log( '......instructor          ->', instructor );
console.log( '......instructor.sayHi()  ->', instructor.sayHi() );
console.log( '......instructor.sayBye() ->', instructor.sayBye() );
console.log();
console.log( 'instructorES6_93          ->', instructor );
console.log( 'instructorES6_03.sayHi()  ->', instructor.sayHi() );
console.log( 'instructorES6_03.sayBye() ->', instructor.sayBye() );

header( '04 - Animal Function ');

const createAnimal = ( species, verb, noise ) => {
 return {
   species,
   [verb](){ return verb },
   [noise](){ return noise }
 }
}

const d = createAnimal("dog", "bark", "Woooof!");
const s = createAnimal("sheep", "bleet", "BAAAAaaaa");

console.log( d.bark() , d['Woooof!']());
console.log( s.bleet(), s.BAAAAaaaa() );

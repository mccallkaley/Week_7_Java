//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

//get dicts in keys (fave foods)

//console.log(Object.values(person3))

for (let i = 0; i < Object.keys(person3).length; i++) {
    if (Array.isArray(Object.values(person3)[i])) {
    console.log(Object.values(person3)[i])
    console.log(Object.keys(person3)[i])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age, gender){   //passes in name and age
    this.name = name;
    this.age = age;
    this.gender = gender

    this.printInfo = () => {
        console.log(`My name is ${this.name} and I am ${this.age} years old. My gender is ${this.gender}.`)
    }
    this.addYear = () => {
        this.age++;
        console.log(`I will be ${this.age} in 1 year!`)
    }
}

let first_person = new Person('Mccall', '26', 'Female')
let second_person = new Person('Tana', '29', 'Female')

console.log(first_person.printInfo())
console.log(second_person.printInfo())
console.log(first_person.addYear())
console.log(second_person.addYear())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (word) => {
    return new Promise( (resolve, reject) =>{
        if(word.length >= 10){
            resolve(true)
        }else{
            reject(false)
        }
    })
}

isBigWord('Supercalifragilishexecdialidocious')
    .then( () => {
    console.log('Big Word')
})
    .catch( () => {
        console.log('Small Number')
    })






/*
    ======= Creating a JS Promise =====
*/

// const isEvenNumber = (num) =>{
//     return new Promise( (resolve,reject)=>{
//         if(num % 2 == 0){resolve(true)}
//         else{reject(false)}
//     })
// }

// isEvenNumber(10).then(
//     (result)=>{
//         console.log(`is Even Number is ${result}`)
//     }).catch(
//         (error)=>{
//             console.log(`is Even Number is ${error}`)
//         }
//     )
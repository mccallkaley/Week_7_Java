//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]


function findWords(){
    let dog_strlist = dog_string.split((/[ ,]+/))
    let dog_stringlower = dog_strlist.map(i => i.toLowerCase());
    let dog_nameslower = dog_names.map(i => i.toLowerCase());
    let match_array = []
    for(let i = 0; i < dog_nameslower.length; i++){
        if(dog_stringlower.includes(dog_nameslower[i])){
            match_array.push(dog_nameslower[i])
        }
    }
    if (match_array.length == 0){
        return 'No Matches'
    } else {
        return match_array
    }

}

console.log(findWords(dog_string, dog_names))



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     //code goes here
// }

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){                       // when you do this it ensures its even and we are SPLICING so taking out evens 
            arr.splice(i, 1, 'even index')   // 'even index' will replace every other index starting at index 1
        }
    }
    return arr
}

console.log(replaceEvens(arr1))





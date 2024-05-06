// ************************
// Hash tag generator
// ************************


// 2. You are required to implement a function ganerateHash that generates a hash tag from a given input string .

// The hash tag should be considered as follows:

// The input string should be converted to the hash tag format , where each word is capitalized and concatenated together without space.
// If the length of the input string is greater than 280 characters or if the input string is empty or contains only white spaces , the function should return false.
// Otherwise, the function should return the generated hash tag prefixed with #.

// Write a function generateHash to accomplish this task.

function generateHash(string){
    if(string.length>280){
        console.log("enter string less than 280 length")
    }
    else{

        let arr=string.split(" ");
        console.log(arr[0]);
        console.log(arr[1]);
        console.log(arr[2]);


        for(let i=0;i<arr.length;i++){

            let cap=arr[0].capitalize();
            // let cap=arr[i].capitalize;
            console.log(`#${cap}`)
        }
    }


}


// console.log(generateHash("my name is Optimus Prime"));
generateHash("my name is Optimus Prime")
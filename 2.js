// ************************
// Hash tag generator
// ************************


// 2. You are required to implement a function ganerateHash that generates a hash tag from a given input string .

// The hash tag should be considered as follows:

// The input string should be converted to the hash tag format , where each word is capitalized and concatenated together without space.
// If the length of the input string is greater than 280 characters or if the input string is empty or contains only white spaces , the function should return false.
// Otherwise, the function should return the generated hash tag prefixed with #.

// Write a function generateHash to accomplish this task.

function generateHash(str){
    if(str.length>280 || str.trim() === 0){
        return false;
    }
    else{

        str =str.split(" ");
        str=str.map((curEle) =>
            curEle.replace(curEle[0], curEle[0].toUpperCase())
        );

        str=`#${str.join("")}`;
        // console.log(str);
        return str
    }


}


console.log(generateHash("my name is Optimus Prime"));
// generateHash("my name is Optimus Prime")
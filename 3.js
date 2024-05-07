//*
//* Interview Question: Count Occurrences of Character
3 //*



//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.


//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).

function countChar(srt , alpha){
    let count =0;
    for(let i=0;i<srt.length;i++){
        if(srt[i].toLowerCase() == alpha.toLowerCase()){
            count++;
        }
        
    }
    return count;

}





console.log(countChar("MissIssippi", "I")); // Output: 4
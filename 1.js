// 1. Write a function findLongestWord that takes string input and returns the longest word in the string. If there are multiple Longest word , return the first encountered. 

//* Contraints:-
//? The input string may contain alphabetic character , digits , spaces ans punctuation .
//? The input string is non-empty.
//? The input string my contain multiple words separated by spaces.

//* Notes
//? If the input string is empty or contains only whitespaces , the function should return false .
//? The function should ignore leading and trailing whitespaces when determining the longest word.


findLongestWord = (srt) =>{
    if (srt.length === 0){
        return false;
    }

    const word = srt.split(" ");
    // console.log(word)
    for(let i=0;i<word.length ;i++){
        for(let j=i+1 ; j<word.length; j++){
            if(word[i].length<word[j].length){
                samp=word[i];
                word[i]=word[j];
                word[j]=samp;
            }
            
        }
    }
    return word[0];
}


console.log(
    findLongestWord("Watch Tapa Technical javascript course on Youtube ")
);




// method on youtube

/*
findLongestWord = (srt) =>{
    if (srt.trim().length === 0){
        return false;
    }

    const words=srt.split(" ");
    words = words.sort((a,b) => b.length-q.length);
    // console.log(words);
    return words[0];
}

console.log(
    findLongestWord("Watch Tapa Technical javascript course on Youtube ")
);

*/




// by using the reduce method

/*
findLongestWord = (srt) =>{
    if (srt.trim().length === 0){
        return false;
    }

    const words=srt.split(" ");
    return words.reduce(function(acc , curr ){
        if(acc.length < curr.length){
            return curr;
        }
        else{
            return acc;
        }
         
    },"")
}

console.log(
    findLongestWord("Watch Tapa Technical javascript course on Youtube ")
);
*/
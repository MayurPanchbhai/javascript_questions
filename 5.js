//*
//* Interview Question: Arrenge the elements in the array by Ascending order
//*

const sortAscending = (arr) =>{
    return arr.sort(function(a,b){
        return a-b;
    })
}



//Example 
console.log(sortAscending([5,3,1,8]));//output:[1,2,5,8]
// console.log(sortAscending([5,3,10,8]));//output:[1,2,5,8]

//todo 
//? The function should take an array number as input.
//? It should reeturn a new arrat with the numbers sorted in the ascending order.
//? The original array should remian unchanged.
//? You are not allowed to use the build-in sort() mrthod
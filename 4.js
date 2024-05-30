//*
//* Interview Question: Check the type of the trangle
//*

//Write a function called checkTriangleType that three parameters represting the sides of the triangle. The function should return a string indicating the types of the triangle : "equilateral", "isolated" or "scalene".

console.log(checkTriangleType(3,3,3));//output :"equilateral"
console.log(checkTriangleType(3,4,3));//output :"isolated"
console.log(checkTriangleType(5,8,6));//output :"scalene"


//todo the function should adhere the following rules
//? If all three sides are equal length, return "equilateral"
//? If the two sides are equal length, return "isosceles"
//? If all three sides have different lengths, return "scalene"


function checkTriangleType(a,b,c){
    if(a===b && b===c){
        return "equilateral"
    }
    else if(a===b || b===c || c===a){
        return "isosceles"
    }
    else{
        return "scalene"
    }
}
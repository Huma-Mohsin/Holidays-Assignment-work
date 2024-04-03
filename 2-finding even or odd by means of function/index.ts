//Q-2 find out even or odd number in a given array.

function finding_even_odd(digit:number[]) {

    for (let i = 1; i <=digit.length; i++) {
        
    if(i % 2===0){
        console.log("Even Number:",i)
    }
    else{
        console.log("Odd Number:",i)
    }

}
}
finding_even_odd([1,2,3,4,5,6,7,8,9,10]);
//Author-Huma Mohsin
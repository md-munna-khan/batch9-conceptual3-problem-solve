// amar kase akta arary te kichu number ase sho cheye boro number konta

// const numbers = [2,4,5,43,44,90,87,97]

// let biggest = numbers[0];
// for(let i = 1; i<numbers.length;i++){

//     if(numbers[i]>biggest){
//         biggest = numbers[i]
//     }
// }
// console.log("after loop",biggest)

// function giveBiggestNumber(array){
// if(!Array.isArray(array)){
//    return 'this is not array'
// }

// let biggest = array[0];
// for( let i = 1; i< array.length; i++){
//     if(array[i]> biggest){
//         biggest = array[i]
//     }
// }
// return biggest;
// }
// const numbers = [2,4,5,43,44,90,87,97]
// const result = giveBiggestNumber(numbers);
// console.log(result)





// const numbers = [2,4,5,43,44,90,87,97];
// let biggest = numbers[0];
// console.log('before loop',biggest)

// for(let i = 1;i<numbers.length;i++){
//     console.log('currents number',numbers[i],'biggest number',biggest)
//     if(numbers[i]>biggest){
//         biggest = numbers[i]
//     }
// }
// console.log('after loop',biggest)



function giveBiggestNumber(array){
    if(Array.isArray (array)){
       return 'this is not an array'
    }
let biggest=array [0]
for(const number of array){
    if(number>biggest){
        biggest = number
    }
}
return biggest
}
const numbers = [2,4,5,43,44,90,87,97];

const result= giveBiggestNumber(numbers)
console.log(result)

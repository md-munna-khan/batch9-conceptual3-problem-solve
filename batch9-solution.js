// problem 1
// function calculateMoney(ticketSale) {
// if(ticketSale <0 || typeof ticketSale !=="number")  {
//     return "Invalid Number"
// }
//   const remainingAmount = ( ticketSale * 120) - ( 500 + (8 * 50) );
//   return  remainingAmount 
// return( ticketSale * 120) - ( 500 + (8 * 50) );
//     }
    // console.log(calculateMoney(10))
    // console.log(calculateMoney(1055))
    //  console.log(calculateMoney(93))
    //  console.log(calculateMoney(-130))
    //  console.log(calculateMoney("hi"))



    //problem 2

//     function checkName(name){

//         if(typeof name !=="string"){
//             return "invalid"
//         }
        // let lastLetter =name [name.length -1]
//         let lastLetter =name.slice(-1).toLowerCase();
//        let result = false;
//        let checkArray = [ 'a', 'e','i','o','u','y','w'];
//        for( const char of checkArray){
//         if (char === lastLetter){
//             result = true
//         }
//        }

       //second method
    //    let result = checkArray.includes(lastLetter)
//        return result? 'Good name':'Bad name'
//     }
//    console.log(checkName("salman"))
   
//    console.log(checkName("RAFEE"))
//    console.log(checkName("jhankar"))
//    console.log(checkName(199))
//    console.log(checkName(['rashed']))
   
//problem 3

// function deleteInvalids(array) {
// if(!Array.isArray(array)){
//     return "invalid Array"
// }


// let numberArrays=[];
// for(const element of array){
//     if( typeof element ==="number" && isNaN(element)=== false){
//       numberArrays.push(element)
//     }
// }

//     return numberArrays
//     }

// const result= deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]);
// console.log(result)
// console.log(deleteInvalids(["1" , {num:2} , NaN ]))
// console.log(deleteInvalids([ 1 , 2 , -3 ]))
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))


//problem 4
// function password(obj) {
// if(obj.siteName === undefined || obj.name === undefined ||obj.birthYear === undefined || obj.birthYear.toString().length !== 4){
//     return "invalid"
// }

//     let capitalName = obj.siteName[0].toUpperCase() +
//     obj.siteName.slice(1)
// let passwordString = capitalName + '#' + obj.name  +'@' + obj.birthYear;
// return passwordString
//     }

//     console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))
    

//     console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" } ))

//     console.log( password({ name: "toky", birthYear: 200, siteName: "Facebook" }))
// console.log(password({ name: "maisha", birthYear: 2002 } ))
//    let birthYear=1999
//    console.log(birthYear.toString().length === 4)


//problem 5
function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !=="number"){
        return "invalid input"
    }
    // calculate total income
    let totalAmount = 0
    for (let payment of arr){

        if(payment>=3000){
let tex = payment * 0.2;
totalAmount += payment - tex
        } else{
            totalAmount+= payment
        }
        
    }
    let savings = totalAmount - livingCost
    if (savings >=0){
        return savings
    } else{
        return 'earn more'
    }
    return savings>= 0 ? savings :"earn more" //ternary
}
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400 
))
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))
console.log(monthlySavings( typeof 100, [ 900 , 2700 , 3400]))

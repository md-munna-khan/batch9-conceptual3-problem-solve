/**
 * syntax
 * 
 * function function_name() {
 * 
 * 
 * }
 */


// function showName(){
// console.log("munna")

// }

// showName();

// function showName(name,age,address) //perameter
// {
// console.log(name)

// }

// showName("munna",22,"badda") // arguments

// function add (x,y){
//     const total = x + y;
//     console.log(total)
// }
// add(4,7)
// add(5,7)

// function giveName(){
//     const x = "munna"
//     return x ;
// }
// const myName = giveName()
// console.log(myName)

/**
 * types of function (4)
 * 
 
 */
//1. no parameters no return
function show(){
    console.log("hello")
}

//2 parameters with no return
function add (x,y){
    console,log(x+y)
}

// 3. no parameters but return
function giveName(){
        const x = "munna"
        return x ;
    }
    // 4. perameters with return
    function  giveDouble(x){
        return x * 2
    }

    function test(odd,even){
      
        const add = odd + even;
        return add
       
    }
   const savings=test(30,50)
   console.log(savings)
   
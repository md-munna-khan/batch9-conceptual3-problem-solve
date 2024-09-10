
// const me ={
//     name:"munna",
//     age:23,
//     address: "badda",
//     passion:"programmer",

// }

// function introduction(people){
//     if(typeof people !=="object"){
//         return 'please provide a object number'
//     }
// const person= 'amar name '+people.name+ ',amar boyosh '+people.age+ ', amar basha '+people.address+ ",amar pesha "+people.passion;
// return person
// }
// console.log(introduction(me))

const person={
    name:"munna",
    address:"badda"
}
function createmail(mail){
    if(typeof mail !=='object'){
        return 'invalid object'
    }
    const result= mail.name+"@"+mail.address+".com";
    return result
}
console.log(createmail(person))
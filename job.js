const person1 ={
    name:"shahadat",
    honors:40,
    hsc:30,
    isFFFamily:true

}
const person2 ={
    name:"korim",
    honors:45,
    hsc:50,
    isFFFamily:true,

}
function JobSelection(info){
    if(typeof info !== "object"){
        return "invalid object"
    }
let total_marks = info.honors +info.hsc;
if(info.isFFFamily){
    total_marks = total_marks + (total_marks * 0.2)
}


if(info.isFFFamily && total_marks >=80){
    return "you are a most welcome"
} else if ( info.isFFFamily && total_marks<80){
    return "next time vagna"
} else if( !info.isFFFamily && total_marks>=80){
    return "you got the job"
} else if( !info.isFFFamily && total_marks <80 ) {
    return "you Rajakar"
};
console.log(total_marks)
//way 2
// if(total_marks >=80){
//     return "you got the job"
// } else {
//     return "you failed"
// }


}
console.log(JobSelection(person2))
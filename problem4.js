//akta array er moddhe koita number ase count koro

// const x = [1,4,true,9,90, 7,9,7,5,4,false,{name:"munna"}]
 
// function numberCount(array){
//     if(!Array.isArray(array)){
//         return "please input array"
//     }
//     let count= 0;
//     for(const element of array){
//         if(typeof element ==="number"){
//             count++
//         }
//     }
//     return count
// }
// console.log(numberCount(x))



//borjatri

function rickshaCost (peoples){

    const busCost=50;
    const Micro = 15;
    const rickshaVara =20

   const remainBus = peoples % busCost;
  
   const remainMicro = remainBus % Micro;
   return  remainMicro * rickshaVara

}
console.log(rickshaCost(234))
// let promise = new Promise(function(resolve,reject){
//   // do a thing , possibly async, then...
// setTimeout(()=>{
//   if(true){
//     resolve("Stuff Worked");
//   } else {
//     reject("It broke")
//   }
// },2000)
// })
// console.log(promise);
//
// ####################################

let promise = new Promise(function(resolve, reject) {
  if (true) {
    resolve("Stuff Worked");
  } else {
    reject("It broke");
  }
}).then(res => {
  console.log(res);
});
console.log(promise);
console.log("this goes first");
// #############################

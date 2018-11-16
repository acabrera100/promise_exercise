  function testNum(num) {
    return new Promise((resolve, reject) => {
      resolve(num > 10);
    }).then(boo=>{
    console.log(boo);
  })
}
testNum(100)
// ------------------------------------
//
// function whisperShout (str) {
//
//  return new Promise (function(resolve, reject) {
//
//   console.log(str.toLowerCase());
//
//   setTimeout(() => resolve(str), 3000);
//
//
//  }).then(result => {
//   console.log(result.toUpperCase());
//  })
// }
// whisperShout("ok then what is going on?")
// ----------------------------------------

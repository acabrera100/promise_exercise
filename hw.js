//   function testNum(num) {
//     return new Promise((resolve, reject) => {
//       resolve(num > 10);
//     }).then(boo=>{
//     console.log(boo);
//   })
// }
// testNum(100)
// ------------------------------------
//
// function whisperShout(str) {
//   return new Promise(function(resolve, reject) {
//     console.log(str.toLowerCase());
//
//     setTimeout(() => resolve(str), 3000);
//   }).then(result => {
//     console.log(result.toUpperCase());
//   });
// }
// whisperShout("ok then what is going on?");

// ------------------------------------
function waitFact(arr) {
  let ind = 0;
  let interval = setInterval(() => {
    if (ind < arr.length) {
      new Promise((resolve, reject) => {
        console.log(arr[ind]);
        ind++;
        resolve();
      });
    } else {
      clearInterval(interval);
    }
  }, 200);
}

waitFact([3,4,5])

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

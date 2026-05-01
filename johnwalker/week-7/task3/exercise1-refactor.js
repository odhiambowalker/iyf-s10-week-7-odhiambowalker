// BEFORE (messy)
// let a=0;function b(){a++;console.log(a)}

//AFTER (clean)
let counter= 0;

function incrementcounter() {
  counter++;
  console.log(counter);
}

incrementcounter();
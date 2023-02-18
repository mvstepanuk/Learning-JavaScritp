"use strict";
const sentences = [
    {subject:"JavaScript",verb:"is",object:"great"},{subject:"Elephants",verb:"are",object:"large"},{subject:"Mouse",verb:"are",object:"small"}];
function say({subject:a,verb:b,object:c}) {
    console.log(`${a} ${b} ${c}`)
}
for (let a of sentences) say(a);
'use strict'
const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Elephants', verb: 'are', object: 'large' }]
function say ({ subject: a, verb: b, object: c }) {
  console.log(`${a} ${b} ${c}`)
}
for (const a of sentences) say(a)

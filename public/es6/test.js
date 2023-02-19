'use strict'
// средство es6: блок "левых" объявлений
const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Elephants', verb: 'are', object: 'large' },
  { subject: 'Mouse', verb: 'are', object: 'small' },
  { subject: 'coding', verb: 'is', object: 'awesome' },
  { subject: 'candy', verb: 'is', object: 'delicious' },
  { subject: 'Bats', verb: 'are', object: 'adorable' }
]
// средство es6: деструктуризация объекта
function say ({ subject, verb, object }) {
  // средство es6: строки шаблона
  console.log(`${subject} ${verb} ${object}`)
}
// средство es6: for..of
for (const s of sentences) {
  say(s)
}

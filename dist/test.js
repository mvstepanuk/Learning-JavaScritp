'use strict'

// средство es6: блок "левых" объявлений
const sentences = [{
  subject: 'JavaScript',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large'
}]
// средство es6: деструктуризация объекта
function say (_ref) {
  const subject = _ref.subject
  const verb = _ref.verb
  const object = _ref.object
  // средство es6: строки шаблона
  console.log(''.concat(subject, ' ').concat(verb, ' ').concat(object))
}
// средство es6: for..of
for (let _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  const s = _sentences[_i]
  say(s)
}

function getGreetings () {
  return ['Hello, World!', 'Hola Mundo!', 'Hallo Wereld!', 'Здравей Свят!', 'Helo Byd!', 'Moien Welt!', 'Bonjour Monde!', 'Привет Мир']
}
/* eslint-disable no-unused-vars */

const nums = [3, 5, 15, 7, 5]
let n; let i = 0
// eslint-disable-next-line no-sequences
while ((n = nums[i]) < 10, i++ < nums.length) {
  console.log(`Число меньше 10: ${n}.`)
}
console.log(`Найдено число больше 10: ${n}.`)
console.log(`${nums.length} всего чисел.`)

const [eng, esp, holl, bulg, wall, lux, fr, rus] = getGreetings()
console.log(bulg)
// page 137
const o = {
  name: 'Julie',
  greetBackwards () {
    const getReverseName = () => {
      let nameBackwards = ''
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i]
      }
      return nameBackwards
    }
    return `${getReverseName()} si eman ym ,olleH`
  }
}
console.log(o.greetBackwards())
// page 141
const bruce = { name: 'Bruce' }
const madeline = { name: 'Madeline' }

function greet () {
  return `Привет! Меня зовут ${this.name}!`
}

function update (birthYear, occupation) {
  this.birthYear = birthYear
  this.occupation = occupation
}
update.apply(bruce, [1949, 'singer'])
update.apply(madeline, [1942, 'actress'])

const fr1 = greet.call(bruce)
const fr2 = greet.call(madeline)
const fr3 = `My name is ${bruce.name}, i was born in ${bruce.birthYear}. I am a ${bruce.occupation}.`
const fr4 = `My name is ${madeline.name}, i was born in ${madeline.birthYear}. I'm an ${madeline.occupation}.`
document.getElementById('head1').textContent = bulg
document.getElementById('class1').textContent = fr1
document.getElementById('class2').textContent = fr2
document.getElementById('class3').textContent = fr3
document.getElementById('class4').textContent = fr4
// page 147
const x = 3
function fo () {
  document.getElementById('class3').textContent = x
  document.getElementById('class5').textContent = y
}
const y = 5
fo()

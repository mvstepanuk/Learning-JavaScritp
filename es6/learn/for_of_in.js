const data = []; let sum = 0
for (let i = 0, j = 10; i < 10; i++, j--) {
  sum += i * j
}
cL(sum)
for (let i = 1; i < 10; i++) {
  data.push(i)
}
sum = 0
for (const element of data) {
  sum += element
}
cL(sum)

const o = { x: 1, y: 2, z: 3 }
let keys = ''
for (const k of Object.keys(o)) {
  keys += k
}
cL(keys)
sum = 0
for (const v of Object.values(o)) {
  sum += v
}
cL(sum)
let pairs = ''
for (const [k, v] of Object.entries(o)) {
  pairs += k + v
}
cL(pairs)

cL(freq('mississippi'))

const text = 'Na na na na na na na na Batman!'
const wordSet = new Set(text.split(' '))
const unique = []
for (const word of wordSet) {
  unique.push(word)
}
cL(unique)

const m = new Map([[1, 'one'], [2, 'two'], [3, 'three'], [4, 'four']])
for (const [key, value] of m) {
  cL(key)
  cL(value)
}

// eslint-disable-next-line one-var, prefer-const
let a = [], i = 0
for (a[i++] in o) /* пустое тело */;
// eslint-disable-next-line prefer-const
for (let i in a) cL(i)

cL(factorial(4))

function freq (str) {
  const frequency = {}
  for (const letter of str) {
    if (frequency[letter]) {
      frequency[letter]++
    } else {
      frequency[letter] = 1
    }
  }
  return frequency
}

function cL (x) { console.log(x) }

function factorial (x) {
  if (x < 0) throw new Error('Значение x не должно быть отрицательным')
  let f
  for (f = 1; x > 1; f *= x, x--) /* пустое тело */ ;
  return f
}

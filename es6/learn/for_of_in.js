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
for (let [k, v] of Object.entries(o)) {
  pairs += k + v
}
cL(pairs)

cL(freq('mississippi'))

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

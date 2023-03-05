/* eslint-disable no-return-assign */
const arr = [5, 7, 2, 4]
const sum = arr.reduce((a, x) => {
  return a += x
}, 0)
console.log(sum)

const words = ['Beachball', 'Rodeo', 'Angel', 'Aardvark', 'Xylophone', 'November', 'Chocolate', 'Papaya', 'Uniform', 'Joker', 'Clover', 'Bali']
const alphabetical = words.reduce((a, x) => {
  if (!a[x[0]]) a[x[0]] = []
  a[x[0]].push(x)
  return a
}, {})
console.log(alphabetical)
// const longWords = words.reduce((a, w) => w.length > 6 ? a + ' ' + w : a, '').trim()
const longWordsArr = words.filter(w => w.length > 6)
console.log(longWordsArr.join(' '))

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3]
// Алгоритм Дональда Кнута для вычисления дисперсии
const stats = data.reduce((a, x) => {
  a.N++
  const delta = x - a.mean
  a.mean += delta / a.N
  a.M2 = delta * (x - a.mean)
  return a
}, { N: 0, mean: 0, M2: 0 })
if (stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1)
  stats.stdev = Math.sqrt(stats.variance)
}
console.log(stats)

// eslint-disable-next-line one-var
let i, j, sum1 = 0
for (i = 0, j = 10; i < 10; i++, j--) {
  sum1 += i * j
}
console.log(sum1)

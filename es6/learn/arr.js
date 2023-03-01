// Array
let arr = ['b', 'c', 'd']
let d
d = arr.push('e') // -> 4; arr=['b', 'c', 'd', 'e]
consL(d, arr)
d = arr.pop() // -> 'e'; arr=['b', 'c', 'd']
consL(d, arr)
d = arr.unshift('a') // -> 4; arr=['a', b', 'c', 'd']
consL(d, arr)
d = arr.shift() // -> 'a'; arr=['b', 'c', 'd']
consL(d, arr)

arr = [1, 2, 3]
d = arr.concat(4, 5, 6) // -> [1, 2, 3, 4, 5, 6]; arr = [1, 2, 3]
consL(d, arr)
d = arr.concat([4, 5, 6]) // -> [1, 2, 3, 4, 5, 6]; arr = [1, 2, 3]
consL(d, arr)
d = arr.concat([4, 5], 6) // -> [1, 2, 3, 4, 5, 6]; arr = [1, 2, 3]
consL(d, arr)
d = arr.concat([4, [5, 6]]) // -> [1, 2, 3, 4, [5, 6]]; arr = [1, 2, 3]
consL(d, arr)

arr = [1, 2, 3, 4, 5]
d = arr.slice(3) // -> [4, 5]; arr=[1, 2, 3, 4, 5]
consL(d, arr)
d = arr.slice(2, 4) // -> [3, 4]; arr=[1, 2, 3, 4, 5]
consL(d, arr)
d = arr.slice(-2) // -> [4, 5]; arr=[1, 2, 3, 4, 5]
consL(d, arr)
d = arr.slice(1, -2) // -> [2, 3]; arr=[1, 2, 3, 4, 5]
consL(d, arr)
d = arr.slice(-2, -1) // -> [4]; arr=[1, 2, 3, 4, 5]
consL(d, arr)

arr = [1, 5, 7]
d = arr.splice(1, 0, 2, 3, 4) // -> []; arr = [1, 2, 3, 4, 5, 7]
consL(d, arr)
d = arr.splice(5, 0, 6) // -> []; arr = [1, 2, 3, 4, 5, 6, 7]
consL(d, arr)
d = arr.splice(1, 2) // -> [2, 3]; arr = [1, 4, 5, 6, 7]
consL(d, arr)
d = arr.splice(2, 1, 'a', 'b') // -> [5]; arr = [1, 4, 'a', 'b', 6, 7]
consL(d, arr)

arr = [1, 2, 3, 4]
d = arr.copyWithin(1, 2) // -> [1, 3, 4, 4]; arr = [1, 3, 4, 4]
consL(d, arr)
d = arr.copyWithin(2, 0, 2) // -> [1, 3, 1, 3]; arr = [1, 3, 1, 3]
consL(d, arr)
d = arr.copyWithin(0, -3, -1) // -> [3, 1, 1, 3]; arr = [3, 1, 1, 3]
consL(d, arr)

arr = new Array(5).fill(1) // -> arr=[1, 1, 1, 1, 1]
console.log(arr)
arr.fill('a') // -> arr=['a', 'a', 'a', 'a', 'a']
console.log(arr)
arr.fill('b', 1) // -> arr=['a', 'b', 'b', 'b', 'b']
console.log(arr)
arr.fill('c', 2, 4) // -> arr=['a', 'b', 'c', 'c', 'b']
console.log(arr)
arr.fill(5.5, -4) // -> arr=['a', 5.5, 5.5, 5.5, 5.5]
console.log(arr)
arr.fill(0, -3, -1) // -> arr=['a', 5.5, 0, 0, 5.5]
console.log(arr)

arr = [1, 2, 3, 4, 5]
console.log(arr)
arr.reverse() // -> arr = [ 5, 4, 3, 2, 1 ]
console.log(arr)

arr = [5, 3, 2, 4, 1]
console.log(arr)
arr.sort() // -> arr = [ 1, 2, 3, 4, 5 ]
console.log(arr)

// eslint-disable-next-line quotes
arr = [{ id: 1, name: "Suzanne" }, { id: 2, name: "Jim" }, { id: 3, name: "Trevor" }, { id: 4, name: "Amanda" }, { id: 5, name: 'Luise' }]
arr.sort() // -> [{ name: 'Suzanne' }, { name: 'Jim' }, { name: 'Trevor' }, { name: 'Amanda' }, { name: 'Luise'}]
console.log(arr)
arr.sort((a, b) => {
  if (a.name > b.name) return 1
  if (a.name < b.name) return -1
  return 0
})
console.log(arr)
arr.sort((a, b) =>
  a.name[1] > b.name[1] ? -1 : 1
)
console.log(arr)

d = arr.indexOf({ id: 5, name: 'Luise' })
console.log(d)
d = arr.lastIndexOf({ id: 5, name: 'Luise' })
console.log(d)
d = arr.findIndex(o => o.id === 4)
console.log(d)
console.log(arr[d])
d = arr.find(o => o.id === 3)
console.log(d)

class Person {
  constructor (name) {
    this.name = name
    this.id = Person.nextId++
  }
}
Person.nextId = 0
// eslint-disable-next-line one-var
const jamie = new Person('Jamie'),
  juliet = new Person('Juliet'),
  peter = new Person('Peter'),
  jay = new Person('Jay')
const arr1 = [jamie, juliet, peter, jay]
d = arr1.find(p => p.id === juliet.id)
consL(d, arr1)
console.log(arr)
arr1.push(arr[0])
arr.shift()
consL(arr1, arr)
const luise = new Person(arr1[4].name)
arr1.push(luise)
// ???? не работает
d = arr1.find(p => p.id === this.id, luise)
consL(d, arr1)

d = arr1.some(x => x.id === 5) ? 'Да' : 'Нет'
consL(d, ' ')
d = arr1.some(x => x.name === 'Luise') ? 'Да' : 'Нет'
consL(d, ' ')
d = arr1.every(x => typeof x === 'object') ? 'Да' : 'Нет'
consL(d, ' ')
d = arr1.every(x => x instanceof Person) ? 'Да' : 'Нет'
consL(d, ' ')

function consL (a, b) {
  console.log(a)
  console.log(b)
}

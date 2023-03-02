let cart = [{ name: 'Widget', price: 9.95 }, { name: 'Gadget', price: 22.95 }]
const names = cart.map(x => x.name)
const prices = cart.map(x => x.price)
const discountPrices = prices.map(x => x * 0.8)
const lcNames = names.map(x => x.toLowerCase())
consL(names, prices, discountPrices, lcNames)
cart = names.map((x, i) => ({ name: x, price: prices[i] }))
console.log(cart)

// создать колоду игральных карт
const cards = []
for (const suit of ['H', 'C', 'D', 'S']) { // червы, трефы, бубны, пики
  for (let value = 1; value <= 13; value++) cards.push({ suit, value })
}

// получить все карты со значением 2:
let fourDeuces = cards.filter(c => c.value === 2)
let allDiamonds = cards.filter(c => c.suit === 'D')
let allPictures = cards.filter(c => c.value > 10 || c.value === 1)
let allHeartsPictures = cards.filter(c => (c.value > 10 || c.value === 1) && c.suit === 'H')
consL(fourDeuces, allDiamonds, allPictures, allHeartsPictures)

fourDeuces = cards.filter(c => c.value === 2).map(cardToString)
allHeartsPictures = cards.filter(c => (c.value > 10 || c.value === 1) && c.suit === 'H').map(cardToString)
allDiamonds = cards.filter(c => c.suit === 'D').map(cardToString)
allPictures = cards.filter(c => c.value > 10 || c.value === 1).map(cardToString)
consL(fourDeuces, allHeartsPictures, allDiamonds, allPictures)

function consL (a, b, c, e) {
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(e)
}

function cardToString (c) {
  // eslint-disable-next-line quote-props
  const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' }
  const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' }
  for (let i = 2; i <= 10; i++) values[i] = i
  return values[c.value] + suits[c.suit]
}

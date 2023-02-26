// возвращает случайное число в диапазоне [m, n] (включительно)
function rand (m, n) {
  return m + Math.floor((n - m + 1) * Math.random())
}

// случайно возвращает строку, представляющую одну из шести
// граней Короны и Якоря
function randFace () {
  // eslint-disable-next-line quotes
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)]
}

let funds = 50 // Начальные условия
let round = 0
const FUNDSEND = funds + funds / 2

while (funds > 1 && funds < 100) {
  round++
  console.log(`round ${round}:`)
  console.log(`\tstarting funds: ${funds}p`)
  // Размещение ставок
  const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 }
  let totalBet = rand(1, funds)
  if (totalBet === 13) {
    console.log('Неудача! Пропустить этот раунд.....')
    continue
  }
  if (totalBet === 7) {
    totalBet = funds
    bets.heart = totalBet
  } else {
    // Распределение всех ставок
    let remaining = totalBet
    do {
      // eslint-disable-next-line prefer-const
      let bet = rand(1, remaining)
      // eslint-disable-next-line prefer-const
      let face = randFace()
      bets[face] = bets[face] + bet
      remaining = remaining - bet
    } while (remaining > 0)
  }
  funds = funds - totalBet
  console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') + ` (total: ${totalBet} pence)`)

  // Бросок костей
  const hand = []
  for (let roll = 0; roll < 3; roll++) { hand.push(randFace()) }

  console.log(`\thand: ${hand.join(', ')}`)

  // Получение выигрыша
  let winnings = 0
  for (let die = 0; die < hand.length; die++) {
    // eslint-disable-next-line prefer-const
    let face = hand[die]
    if (bets[face] > 0) winnings = winnings + bets[face]
  }
  funds = funds + winnings
  console.log(`\twinnings: ${winnings}`)
  // eslint-disable-next-line semi
  if (winnings > FUNDSEND) break; // Если большой выйгрыш - Выход
}
console.log(`\tending funds: ${funds}`)
/*
if (new Date().getDay() === 3) { // если "среда"
  totalBet = 1
} else if(funds === 7) {
  totalBet = funds
} else {
  console.log('Здесь нет никаких суеверий!')
}

switch(totalBet) {
  case 7:
    totalBet = funds
    break;
  case 13:
    funds = funds - 1; // Подать 1 пенс милостыни!
  // break умышленно удалён - totalBet одинаковый
  case 11:
    totalBet = 0
    break;
  case 21:
    totalBet = 21
    break;
  default:
    console.log("Здесь нет никаких суеверий!")
    break
}

function adjustBet(totalBet, funds) {
  switch(totalBet) {
    case 7:
      return funds;
    case 13:
      funds = funds - 1; // Подать 1 пенс милостыни!
      return funds;
    default:
      return totalBet
  }
}

function toPolar(x,y) {
  return [Math.sqrt(x*x+y*y), Math.atan2(y,x)]
}
function toCartesian(r, theta) {
  return [r*Math.cos(theta), r*Math.sin(theta)]
}
*/
const HAND = [randFace(), randFace(), randFace()]
for (let i = 0; i < HAND.length; i++) console.log(`Roll ${i + 1}: ${HAND[i]}`)

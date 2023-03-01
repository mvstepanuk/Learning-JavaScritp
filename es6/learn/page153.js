
const message = (function () {
  const secret = 'Здесь указан пароль!'
  return `Пароль имеет длину ${secret.length} символов.`
})()
const textP1 = message
const textH1 = 'Немедленно вызываемое функциональное выражение IIFE'
getElId('head1', textH1)
getElId('class1', textP1)

const f = (function () {
  let count = 0
  return function () {
    return `Меня вызвали ${++count} раз(а).`
  }
})()
for (let i = 2, text, id; i < 6; i++) {
  text = f()
  id = `class${i}`
  getElId(id, text)
}
function getElId (thisId, text) {
  document.getElementById(thisId).textContent = text
}

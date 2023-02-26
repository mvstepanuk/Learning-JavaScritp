const firstUsers = {
  firstName: 'Irena',
  fullAge: 25,
  operat12 (id1 = 'class1', id2 = 'class2') {
    const nameS = greet(this)
    const ageS1 = ageS(this)
    getElId(id1, nameS)
    getElId(id2, ageS1)
  }
}
const secondUsers = {
  firstName: 'Daeniel',
  fullAge: 33,
  operat12 (id1 = 'class1', id2 = 'class2') {
    const nameS = greet(this)
    const ageS1 = ageS(this)
    getElId(id1, nameS)
    getElId(id2, ageS1)
  }
}
function greet (user) {
  return `Hello, ${user.firstName}!`
}
function getBirthYear (user) {
  return new Date().getFullYear() - user.fullAge
}
function getElId (thisId, text) {
  document.getElementById(thisId).textContent = text
}
function ageS (user) {
  return `Вы родились в ${getBirthYear(user)} году`
}
// function operat12 (user, id1 = 'class1', id2 = 'class2') {
//   const nameS = greet(user)
//   const ageS1 = ageS(user)
//   getElId(id1, nameS)
//   getElId(id2, ageS1)
// }
const head1 = 'Hello, ' + `${firstUsers.firstName}`
getElId('head1', head1)
firstUsers.operat12('class2', 'class3')
secondUsers.operat12('class4', 'class5')

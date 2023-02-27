/* eslint-disable no-undef */
$(document).ready(function () {
  'use strict'
  console.log('main.js loaded')
  paper.install(window)
  paper.setup(document.getElementById('mainCanvas'))
  const c = Shape.Circle(200, 200, 80)
  c.fillColor = 'black'
  const text = new PointText(200, 200)
  text.justification = 'center'
  text.fillColor = 'white'
  text.fontSize = 20
  text.content = 'hello world'
  // for (let x=25; x<400; x+=50) {
  //     for (let y=25; y<400; y+=50) {
  //         c = Shape.Circle(x, y, 20);
  //         c.fillColor = 'green';
  //     }
  // }
  const tool = new Tool()
  tool.onMouseDown = function (event) {
    const c = Shape.Circle(event.point, 30)
    c.fillColor = 'yellow'
  }
  paper.view.draw()
})

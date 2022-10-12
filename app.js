// var size = 4;
const elTable = document.querySelector('.grid')
const elHero = document.querySelector('h1')
const elTimer = document.querySelector('.timer')
var newOrder = []
var numToCheck = 1;
var time = 0
var miliSeconds
var seconds
var timerIsOn = false;
var gIdx = 0
var intervalID

var levels = [{ size: 4, element: '<div class="levelA"' },
{ size: 5, element: '<div class="levelB"' },
{ size: 6, element: '<div class="levelC"' }]

startRound()

function startRound() {
  elHero.innerHTML = `Click numbers 1 to ${(levels[gIdx].size) ** 2} in order!`
  elTimer.innerHTML = "press 1 to start"
  time = 0
  shuffle()
  createBoard()
}

//create table

//shuffle numbers
function shuffle() {
  var regOrder = []
  for (var i = 1; i <= ((levels[gIdx].size) ** 2); i++) {
    regOrder.push(i)
  }
  newOrder = regOrder.sort(() => 0.5 - Math.random())
}


function createBoard() {
  var htmlStr = ""
  for (i = 0; i < ((levels[gIdx].size) ** 2); i++) {
    htmlStr += `${levels[gIdx].element} onclick='checkAnswer(this)'>${newOrder[i]}</div> `
  }
  elTable.innerHTML = htmlStr
}

function checkAnswer(thisSquare) {
  if (thisSquare.innerHTML == numToCheck) {
    thisSquare.style.backgroundColor = "rgb(251, 109, 159)"
    thisSquare.style.color = "black"
    if (numToCheck == 1) {
      intervalID = setInterval(countUp, 1)
    }
    if (numToCheck === newOrder.length) {
      timerIsOn = false
      victory()
      return
    }
    numToCheck++
  }
}

function victory() {
  clearInterval(intervalID)
  timerIsOn = false
  document.querySelector('h1').innerText = "DONE"
  numToCheck = 1
  gIdx === levels.length - 1 ? (gIdx = 0) : gIdx++;
  setTimeout(startRound, 2500)
}

function countUp() {

  seconds = Math.floor(time / 100)
  miliSeconds = time % 100
  if (miliSeconds < 10) {
    elTimer.innerHTML = seconds + ":0" + miliSeconds
  } else {
    elTimer.innerHTML = seconds + ":" + miliSeconds
  }
  time++
}



//insert numbers to cells

//add eventListener

//check clicked numbers
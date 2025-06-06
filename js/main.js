var money = 2000
var moneyBet = 100
var previousBets = []
var selectedBets = []

var betTable = [
  {
    number: '0',
    color: 'green',
  },
  {
    number: '00',
    color: 'green',
  },
  {
    number: '1',
    color: 'red',
    column: 'one',
  },
  {
    number: '2',
    color: 'black',
    column: 'two',
  },
  {
    number: '3',
    color: 'red',
    column: 'three',
  },
  {
    number: '4',
    color: 'black',
    column: 'one',
  },
  {
    number: '5',
    color: 'red',
    column: 'two',
  },
  {
    number: '6',
    color: 'black',
    column: 'three',
  },
  {
    number: '7',
    color: 'red',
    column: 'one',
  },
  {
    number: '8',
    color: 'black',
    column: 'two',
  },
  {
    number: '9',
    color: 'red',
    column: 'three',
  },
  {
    number: '10',
    color: 'black',
    column: 'one',
  },
  {
    number: '11',
    color: 'black',
    column: 'two',
  },
  {
    number: '12',
    color: 'red',
    column: 'three',
  },
  {
    number: '13',
    color: 'black',
    column: 'one',
  },
  {
    number: '14',
    color: 'red',
    column: 'two',
  },
  {
    number: '15',
    color: 'black',
    column: 'three',
  },
  {
    number: '16',
    color: 'red',
    column: 'one',
  },
  {
    number: '17',
    color: 'black',
    column: 'two',
  },
  {
    number: '18',
    color: 'red',
    column: 'three',
  },
  {
    number: '19',
    color: 'red',
    column: 'one',
  },
  {
    number: '20',
    color: 'black',
    column: 'two',
  },
  {
    number: '21',
    color: 'red',
    column: 'three',
  },
  {
    number: '22',
    color: 'black',
    column: 'one',
  },
  {
    number: '23',
    color: 'red',
    column: 'two',
  },
  {
    number: '24',
    color: 'black',
    column: 'three',
  },
  {
    number: '25',
    color: 'red',
    column: 'one',
  },
  {
    number: '26',
    color: 'black',
    column: 'two',
  },
  {
    number: '27',
    color: 'red',
    column: 'three',
  },
  {
    number: '28',
    color: 'black',
    column: 'one',
  },
  {
    number: '29',
    color: 'black',
    column: 'two',
  },
  {
    number: '30',
    color: 'red',
    column: 'three',
  },
  {
    number: '31',
    color: 'black',
    column: 'one',
  },
  {
    number: '32',
    color: 'red',
    column: 'two',
  },
  {
    number: '33',
    color: 'black',
    column: 'three',
  },
  {
    number: '34',
    color: 'red',
    column: 'one',
  },
  {
    number: '35',
    color: 'black',
    column: 'two',
  },
  {
    number: '36',
    color: 'red',
    column: 'three',
  },
]

var betDisplay = document.createElement('div')
betDisplay.setAttribute('class', 'betDisplay')

var betNumber = document.createElement('h2')
betNumber.textContent = 'number'

var betColor = document.createElement('h2')
betColor.textContent = 'color'

betDisplay.appendChild(betNumber)
betDisplay.appendChild(betColor)

var betDisplayNumber = document.querySelector('.displayNumber')

var renderDisplay = betDisplay
betDisplayNumber.appendChild(renderDisplay)

var renderMoney = document.getElementById('money')
renderMoney.innerHTML = money

var button = document.getElementById('bet-button')
button.addEventListener('click', function () {
  randomBet(betTable)
})

var pastResult = document.getElementById('previousResult')

function randomBet(array) {
  if (!clickedBet) return
  money -= moneyBet * selectedBets.length
  var results = array[Math.floor(Math.random() * array.length)]
  betNumber.textContent = results.number
  betColor.textContent = results.color

  if (clickedBet.type === 'color') {
    if (clickedBet.value === results.color) {
      money += moneyBet * 2
    }
  }

  if (clickedBet.type === 'divisible') {
    if (results.number !== '0' || results.number !== '00') {
      renderMoney.innerHTML = money
      clickedBet = false
      return
    }
    var even = clickedBet.value === 'even' ? 0 : 1
    if (parseInt(results.number, 10) % 2 === even) {
      money += moneyBet * 2
    }
  }

  if (clickedBet.type === 'half') {
    if (
      parseInt(results.number, 10) <= 18 &&
      clickedBet.value === 'first' &&
      parseInt(results.number, 10) >= 1
    ) {
      money += moneyBet * 2
    } else if (
      parseInt(results.number, 10) > 18 &&
      clickedBet.value === 'last'
    ) {
      money += moneyBet * 2
    }
  }

  if (clickedBet.type === 'single') {
    if (results.number === clickedBet.value) {
      money += moneyBet * 36
    }
  }

  if (clickedBet.type === 'dozen') {
    if (
      parseInt(results.number, 10) <= 12 &&
      clickedBet.value === 'dozen1' &&
      parseInt(results.number, 10) >= 1
    ) {
      money += moneyBet * 3
    } else if (
      parseInt(results.number, 10) <= 24 &&
      parseInt(results.number, 10) > 12 &&
      clickedBet.value === 'dozen2'
    ) {
      money += moneyBet * 3
    } else if (
      parseInt(results.number, 10) > 24 &&
      clickedBet.value === 'dozen3'
    ) {
      money += moneyBet * 3
    }
  }

  if (clickedBet.type === 'column') {
    if (clickedBet.value === results.column) {
      money += moneyBet * 3
    }
  }

  renderMoney.innerHTML = money
  previousBets.push(results)

  var chipOff = document.querySelectorAll('.chip')

  chipOff.forEach(function (element) {
    element.classList.remove('chip')
  })
  var outcome = document.createElement('div')
  outcome.textContent = results.number
  var bg = 'bg-' + results.color
  outcome.classList.add(bg)
  pastResult.append(outcome)
  selectedBets = []
  clickedBet = false
}

var clickBet = document.querySelectorAll('.clickBet')
clickBet.forEach(function (element) {
  element.addEventListener('click', function () {
    clickedBet = {
      type: element.getAttribute('data-bet'),
      value: element.getAttribute('data-value'),
    }
    var isSelected = selectedBets.some(item => item.value === clickedBet.value)
    if (isSelected) {
      var index = selectedBets.findIndex(
        item => item.value === clickedBet.value,
      )
      selectedBets.splice(index, 1)
    } else {
      selectedBets.push(clickedBet)
    }
    var chip = this.classList.toggle('chip')
  })
})

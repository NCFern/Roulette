var money = 1000;

var moneyBet = 100;

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
  },
  {
    number: '3',
    color: 'red',
  },
  {
    number: '4',
    color: 'black',
  },
  {
    number: '5',
    color: 'red',
  },
  {
    number: '6',
    color: 'black',
  },
  {
    number: '7',
    color: 'red',
  },
  {
    number: '8',
    color: 'black',
  },
  {
    number: '9',
    color: 'red',
  },
  {
    number: '10',
    color: 'black',
  },
  {
    number: '11',
    color: 'black',
  },
  {
    number: '12',
    color: 'red',
  },
  {
    number: '13',
    color: 'black',
  },
  {
    number: '14',
    color: 'red',
  },
  {
    number: '15',
    color: 'black',
  },
  {
    number: '16',
    color: 'red',
  },
  {
    number: '17',
    color: 'black',
  },
  {
    number: '18',
    color: 'red',
  },
  {
    number: '19',
    color: 'red',
  },
  {
    number: '20',
    color: 'black',
  },
  {
    number: '21',
    color: 'red',
  },
  {
    number: '22',
    color: 'black',
  },
  {
    number: '23',
    color: 'red',
  },
  {
    number: '24',
    color: 'black',
  },
  {
    number: '25',
    color: 'red',
  },
  {
    number: '26',
    color: 'black',
  },
  {
    number: '27',
    color: 'red',
  },
  {
    number: '28',
    color: 'black',
  },
  {
    number: '29',
    color: 'black',
  },
  {
    number: '30',
    color: 'red',
  },
  {
    number: '31',
    color: 'black',
  },
  {
    number: '32',
    color: 'red',
  },
  {
    number: '33',
    color: 'black',
  },
  {
    number: '34',
    color: 'red',
  },
  {
    number: '35',
    color: 'black',
  },
  {
    number: '36',
    color: 'red',
  },
];

var clickedBet;

var betDisplay = document.createElement('div');
betDisplay.setAttribute('class', 'betDisplay');

var betNumber = document.createElement('h2');
betNumber.textContent = 0;

var betColor = document.createElement('h2');
betColor.textContent = 'green';

betDisplay.appendChild(betNumber);
betDisplay.appendChild(betColor);

var betDisplayNumber = document.querySelector('.displayNumber');

var renderDisplay = betDisplay;
betDisplayNumber.appendChild(renderDisplay);

var renderMoney = document.getElementById('money');
renderMoney.innerHTML = money;

var button = document.getElementById('bet-button');
button.addEventListener('click', function () {
  randomBet(betTable);
});

function randomBet(array) {
  if (!clickedBet) return;
  money -= moneyBet;
  var results = array[Math.floor(Math.random() * array.length)];
  betNumber.textContent = results.number;
  betColor.textContent = results.color;

  if (clickedBet.type === 'color') {
    if (clickedBet.value === results.color) {
      money += moneyBet * 2;
    }
  }

  if (clickedBet.type === 'divisible') {
    var even = clickedBet.value === 'even' ? 0 : 1;
    if (parseInt(results.number, 10) % 2 === even) {
      money += moneyBet * 2;
    }
  }

  if (clickedBet.type === 'half') {
    if (parseInt(results.number, 10) <= 18 && clickedBet.value === 'first') {
      money += moneyBet * 2;
    } else if (
      parseInt(results.number, 10) > 18 &&
      clickedBet.value === 'last'
    ) {
      money += moneyBet * 2;
    }
  }

  if (clickedBet.type === 'single') {
    if (parseInt(results.number, 10) === parseInt(clickedBet.value)) {
      money += moneyBet * 36;
    }
  }

  if (clickedBet.type === 'dozen') {
    if (parseInt(results.number, 10) <= 12 && clickedBet.value === 'dozen1') {
      money += moneyBet * 3;
    } else if (
      parseInt(results.number, 10) <= 24 &&
      parseInt(results.number, 10) > 12 &&
      clickedBet.value === 'dozen2'
    ) {
      money += moneyBet * 3;
    } else if (
      parseInt(results.number, 10) > 24 &&
      clickedBet.value === 'dozen3'
    ) {
      money += moneyBet * 3;
    }
  }

  renderMoney.innerHTML = money;

  clickedBet = false;
}

var clickBet = document.querySelectorAll('.clickBet');
clickBet.forEach(function (element) {
  element.addEventListener('click', function () {
    clickedBet = {
      type: element.getAttribute('data-bet'),
      value: element.getAttribute('data-value'),
    };
    console.log(clickedBet);
  });
});

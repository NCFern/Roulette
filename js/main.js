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

function renderBetTable(randomBet) {
  var $betColumn = document.createElement('div');
  $betColumn.setAttribute('class', 'column-third');

  var $betDisplay = document.createElement('div');
  $betDisplay.setAttribute('class', '');

  var $betNumber = document.createElement('h2');
  $betNumber.textContent = randomBet.number;

  var $betColor = document.createElement('h2');
  $betColor.textContent = randomBet.color;

  $betDisplay.appendChild($betNumber);
  $betDisplay.appendChild($betColor);
  $betColumn.appendChild($betDisplay);

  return $betColumn;
}

var $betRow = document.querySelector('.row');
for (var i = 0; i < 1; i++) {
  var $betDisplay = renderBetTable(betTable[i]);
  $betRow.appendChild($betDisplay);
}

// var $button = document.querySelector('.bet-button');
// $button.addEventListener('click', handleClick);

// function handleClick(event) {
//   console.log('button clicked');
//   console.log(event);
//   console.log(event.target);
// }

// click handler on table, get value of html
// when clicked, get random number to compare

// const position = 2;

function getItem(cards, position) {
  return cards[position];
}

// console.log(getItem([1, 2, 4, 1], position));

///--------///

// const position = 2;
// const replacementCard = 6;

function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

// console.log(setItem([1, 2, 4, 1], position, replacementCard));

///--------///

// const newCard = 8;

function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

// console.log(insertItemAtTop([5, 9, 7, 1], newCard));

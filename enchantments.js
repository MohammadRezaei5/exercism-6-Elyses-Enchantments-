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

///--------///

// const position = 2;

function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

// console.log(removeItem([3, 2, 6, 4, 8], position));

///--------///

function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

// console.log(removeItemFromTop([3, 2, 6, 4, 8]));

///--------///

// const newCard = 8;

function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

// console.log(insertItemAtBottom([5, 9, 7, 1], newCard));

///--------///

function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

// console.log(removeItemAtBottom([8, 5, 9, 7, 1]));

///--------///

// const stackSize = 4;

function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize ? true : false;
}

// console.log(checkSizeOfStack([3, 2, 6, 4, 8], stackSize));

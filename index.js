/* eslint-disable quotes */
"use strict";

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
  insertAfter(key, newItem) {
    if (this.head === null) {
      console.log("key not found. The list is empty");
      return;
    }
    let keyNode = this.find(key);
    if (keyNode === null) {
      console.log("key not found.  Please try another key");
      return;
    }
    let newNode = new _Node(newItem, keyNode.next);
    keyNode.next = newNode;
  }
  insertBefore(key, newItem) {
    if (this.head === null) {
      console.log("key not found. The list is empty");
      return;
    }
    let keyNode = this.find(key);
    if (keyNode === null) {
      console.log("key not found. Please try another key");
      return;
    }
    let newNode = new _Node();
    if (this.head === keyNode) {
      this.head = newNode;
      newNode.value = newItem;
      newNode.next = keyNode;
      return;
    }
    let previousNode = this.head;
    while (previousNode.next !== keyNode) {
      previousNode = previousNode.next;
    }
    previousNode.next = newNode;
    newNode.value = newItem;
    newNode.next = keyNode;
  }
  insertAt(index, item) {
    if (this.head === null) {
      console.log("index not found.  The list is empty");
      return;
    }
    let counter = 0;
    let keyNode = this.head;
    while (counter <= index) {
      if (keyNode.next === null && counter !== index) {
        console.log("Index out of bounds. Please try a different number");
        return;
      } else if (counter === index) {
        console.log("inserting");
        this.insertBefore(keyNode.value, item);
        return;
      }
      keyNode = keyNode.next;
      counter++;
    }
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertLast("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Tauhida");
  SLL.insertLast("Cylon");
  // SLL.remove('squirrel');
  // SLL.insertAfter('Apollo', 'newItem');
  // console.log(SLL);
  // SLL.remove('newItem');
  // console.log(SLL);
  // SLL.insertBefore('Apollo', 'Test');
  // console.log(SLL.find('Boomer'));
  // SLL.insertBefore('Helo', 'different test');
  // console.log(SLL.find('Boomer'));
  //   console.log(SLL.find("Starbuck"));
  //   SLL.insertAt(5, "I hope this works");
  //   console.log(SLL.find("Starbuck"));
  //   display(SLL.head);
  //size(SLL);
  //isEmpty(SLL);
  //findPrevious("Apollo", SLL);
  //findLast(SLL);
  //   display(SLL.head);
  //   console.log(reverseList(SLL));
  //console.log(getThirdFromEnd(SLL));
  //console.log(middleOfList(SLL));
  console.log(cycle(CycleList.head));
}

function display(head) {
  let currNode = head;
  while (currNode.next !== null) {
    console.log(currNode);
    currNode = currNode.next;
  }
  console.log(currNode);
}

function size(list) {
  let counter = 0;
  let currNode = list.head;
  while (currNode.next !== null) {
    counter++;
    currNode = currNode.next;
  }
  counter++;
  console.log(counter);
}

function isEmpty(list) {
  if (list.head === null) {
    console.log(true);
  } else console.log(false);
}

function findPrevious(item, list) {
  let currNode = list.head;
  if (currNode.value === item) {
    console.log("No previous items in list");
    return;
  }
  while (currNode.next.value !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

function findLast(list) {
  let currNode = list.head;
  if (currNode === null) {
    console.log("No items in list");
    return;
  }
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

function reverseList(list) {
  let currentPointer = list.head;
  let target = currentPointer.next;

  list.head.next = null;

  while (target !== null) {
    let newCurrentPointer = target.next;
    target.next = currentPointer;
    currentPointer = target;
    target = newCurrentPointer;
  }

  list.head = currentPointer;
  return list.head;
}

function getThirdFromEnd(list) {
  if (size(list) <= 2) {
    return "Less than 3 items in array";
  }
  let initialPos = list.head;
  let lastNode = findLast(list);
  let secondToLast = findPrevious(lastNode.value, list);
  let thirdToLast = findPrevious(secondToLast.value, list);
  return thirdToLast;
}

function middleOfList(list) {
  if (list.head === null) {
    return null;
  }

  let halfwayParse = list.head;
  let lengthParse = list.head;

  while (lengthParse !== null && lengthParse.next !== null) {
    halfwayParse = halfwayParse.next;
    lengthParse = lengthParse.next.next;
  }

  return halfwayParse.value;
}

const CycleList = new LinkedList();
CycleList.insertFirst("Apollo");
CycleList.insertFirst("Boomer");
CycleList.insertFirst("Husker");
CycleList.insertFirst("Helo");
CycleList.insertFirst("Husker");
function cycle(head) {
  let currentNode = head;
  let nextNode = null;

  while (currentNode !== null) {
    nextNode = currentNode.next;
    if (nextNode.next === null) {
      return false;
    }
    if (nextNode.next.value === currentNode.value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
}

main();

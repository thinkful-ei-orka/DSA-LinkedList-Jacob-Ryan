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
        if(this.head === null) {
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
        if(!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    remove(item) {
        if(!this.head) {
            return null;
        }
        if(this.head.value === item ) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    insertAfter(key, newItem) {
        if(this.head === null) {
            console.log('key not found. The list is empty');
            return;
        }
        let keyNode = this.find(key);
        if(keyNode === null) {
            console.log('key not found.  Please try another key');
            return;
        }
        let newNode = new _Node(newItem, keyNode.next);
        keyNode.next = newNode;
    }
    insertBefore(key, newItem) {
        if(this.head === null) {
            console.log('key not found. The list is empty');
            return;
        }
        let keyNode = this.find(key);
        if(keyNode === null) {
            console.log('key not found. Please try another key');
            return;
        }
        let newNode = new _Node();
        if(this.head === keyNode) {
            this.head = newNode;
            newNode.value = newItem;
            newNode.next = keyNode;
            return;
        }
        let previousNode = this.head;
        while(previousNode.next !== keyNode) {
            previousNode = previousNode.next;
        }
        previousNode.next = newNode;
        newNode.value = newItem;
        newNode.next = keyNode;
    }
    insertAt(index, item) {
        if(this.head === null) {
            console.log('index not found.  The list is empty');
            return;
        }
        let counter = 0;
        let keyNode = this.head;
        while((counter !== index) || keyNode.next !== null) {
            console.log(keyNode);
            keyNode = keyNode.next;
            counter++;
        }
        if(keyNode.next === null && counter !== index) {
            console.log('Index out of bounds. Please try a different number');
            return;
        }
        this.insertBefore(keyNode.value, item);
    }
}

function main () {
    let SLL = new LinkedList();
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    // SLL.remove('squirrel');
    // SLL.insertAfter('Apollo', 'newItem');
    // console.log(SLL);
    // SLL.remove('newItem');
    // console.log(SLL);
    // SLL.insertBefore('Apollo', 'Test');
    // console.log(SLL.find('Boomer'));
    // SLL.insertBefore('Helo', 'different test');
    // console.log(SLL.find('Boomer'));
    console.log(SLL.find('Helo'));
    SLL.insertAt(3, 'I hope this works');
    console.log(SLL.find('Helo'));

}

main();
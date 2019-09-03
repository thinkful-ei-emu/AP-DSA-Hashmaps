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
  find(key) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value.key !== key) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

class SepChain {
    constructor(initialCapacity=8) {
      this.length = 0;
      this._hashTable = [];
      this._capacity = initialCapacity;
      this._deleted = 0;
    }
  
    get(key) {
      const index = this._findSlot(key);
      if (this._hashTable[index] === undefined) {
        throw new Error('Key error');
      } 
      try{
        return this._display(this._hashTable[index].value);
      }
      catch(e) {
        return this._hashTable[index].value;
      }
    }
  
    set(key, data){
      const loadRatio = (this.length + this._deleted + 1) / this._capacity;
      if (loadRatio > SepChain.MAX_LOAD_RATIO) {
        this._resize(this._capacity * SepChain.SIZE_RATIO);
      }
      //Find the slot where this key should be in
      const index = this._findSlot(key);
  
      if(!this._hashTable[index]){
        this.length++;
        this._hashTable[index] = {
          key,
          value: data
        }; 
      } else {
        let value = new LinkedList();
        value.insertFirst(this._hashTable[index].value);
        this._hashTable[index] = {
          key,
          value
        };
        this._hashTable[index].value.insertLast(data);
      }
    }
  
    delete(key, node='') {
      const index = this._findSlot(key);
      const slot = this._hashTable[index];
      if (slot === undefined) {
        throw new Error('Key error');
      }
      //console.log(this._hashTable[index].value.head.next)
      //console.log(node)

      if(node !== ''){
        this._hashTable[index].value.remove(node)
        console.log(node)
      }

      else{
        slot.DELETED = true;
        this.length--;
        this._deleted++;
      }
      
    }
  
    _findSlot(key) {
      const hash = SepChain._hashString(key);
      const start = hash % this._capacity;
  
      for (let i=start; i<start + this._capacity; i++) {
        const index = i % this._capacity;
        const slot = this._hashTable[index];
        if (slot === undefined || (slot.key === key && !slot.DELETED)) {
          return index;
        }
      }
    }
  
    _resize(size) {
      const oldSlots = this._hashTable;
      this._capacity = size;
      // Reset the length - it will get rebuilt as you add the items back
      this.length = 0;
      this._deleted = 0;
      this._hashTable = [];
  
      for (const slot of oldSlots) {
        if (slot !== undefined && !slot.DELETED) {
          this.set(slot.key, slot.value);
        }
      }
    }
  
    _display(list) {
      let result = [];
      if(list.head === null){
        return null;
      }
      let currNode = list.head;
    
      while (currNode !== null){
        result.push(currNode.value);
        currNode = currNode.next;
      }
      return result;
    }
  
    static _hashString(string) {
      let hash = 5381;
      for (let i = 0; i < string.length; i++) {
        //Bitwise left shift with 5 0s - this would be similar to
        //hash*31, 31 being the decent prime number
        //but bit shifting is a faster way to do this
        //tradeoff is understandability
        hash = (hash << 5) + hash + string.charCodeAt(i);
        //converting hash to a 32 bit integer
        hash = hash & hash;
      }
      //making sure has is unsigned - meaning non-negtive number. 
      // console.log(hash >>> 0);
      return hash >>> 0;
    }
  }

module.exports = SepChain;

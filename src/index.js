class Node {
  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}

class HashMap {
  constructor() {
    this.loadFactorExp = 4;
    this.bucketAmount = 2 ** this.loadFactorExp;
    this.buckets = new Array(this.bucketAmount).fill(null);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode; // Returned hashCode equals bucket index
  }

  validateIndex(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }
  }

  set(key, value) {
    const index = this.hash(key);
    this.validateIndex(index);

    // Calculate load factor
    while (this.calcLoadFactor() > 0.75) {
      this.increaseBuckets();
    }

    // If the bucket is empty, this node is now the head
    if (this.buckets[index] === null) {
      this.buckets[index] = new Node(key, value, null);
      return 0;
    }

    let traversal = this.buckets[index];
    while (traversal.nextNode != null) {
      if (traversal.key === key) {
        // If the key is found in linked list, update value and return
        traversal.value = value;
        return 0;
      } else {
        // Else, move on to next node
        traversal = traversal.nextNode;
      }
    }

    // If we reach the end of list, append new node
    const newNode = new Node(key, value);
    traversal.nextNode = newNode;
  }

  get(key) {
    const index = this.hash(key);
    this.validateIndex(index);

    let traversal = this.buckets[index];
    while (traversal != null) {
      if (traversal.key === key) {
        return traversal.value;
      } else {
        traversal = traversal.nextNode;
      }
    }

    // Key is not found, return null
    return null;
  }

  has(key) {
    const index = this.hash(key);
    this.validateIndex(index);

    let traversal = this.buckets[index];
    while (traversal != null) {
      if (traversal.key === key) {
        return true;
      } else {
        traversal = traversal.nextNode;
      }
    }

    // Key is not found, return false
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    this.validateIndex(index);

    if (this.buckets[index] === null) {
      return false;
    }

    let traversal = this.buckets[index];
    // if key is the first node in list, set to head to next node and null original head
    if (traversal.key === key) {
      this.buckets[index] = traversal.nextNode;
      traversal = null;
      return true;
    }

    // It wasn't the first node. So start checking from the next node
    // to remember the previous one for relinking
    while (traversal != null) {
      if (traversal.nextNode.key === key) {
        traversal.nextNode = traversal.nextNode.nextNode;
        return true;
      } else {
        traversal = traversal.nextNode;
      }
    }

    // Key is not found, return false
    return false;
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      let traversal = this.buckets[i];
      while (traversal != null) {
        count++;
        traversal = traversal.nextNode;
      }
    }
    return count;
  }

  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = null;
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let traversal = this.buckets[i];
      while (traversal != null) {
        keys.push(traversal.key);
        traversal = traversal.nextNode;
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let traversal = this.buckets[i];
      while (traversal != null) {
        values.push(traversal.value);
        traversal = traversal.nextNode;
      }
    }
    return values;
  }

  entries() {
    let entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let traversal = this.buckets[i];
      while (traversal != null) {
        entries.push([traversal.key, traversal.value]);
        traversal = traversal.nextNode;
      }
    }
    return entries;
  }

  calcLoadFactor() {
    const items = this.length() + 1;
    const loadFactor = items / this.buckets.length;
    return loadFactor;
  }

  increaseBuckets() {
    const arrayCopy = this.entries();

    this.loadFactorExp++;
    this.bucketAmount = 2 ** this.loadFactorExp;

    this.clear();
    this.buckets = null;
    this.buckets = new Array(this.bucketAmount).fill(null);

    for (let i = 0; i < arrayCopy.length; i++) {
      this.set(arrayCopy[i][0], arrayCopy[i][1]);
    }
  }

  display() {
    return this.buckets;
  }
}

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.has('banana'));
console.log(test.has('beard'));
console.log(test.length());
// test.clear();
// console.log(test.display());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.set('moon', 'silver');
console.log(test.display());

console.log(test.get('hat'));
console.log(test.get('carrot'));
console.log(test.get('bird'));

console.log(test.has('banana'));
console.log(test.has('beard'));
console.log(test.length());
// test.clear();
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

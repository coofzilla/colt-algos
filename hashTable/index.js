class HashTable {
  //default 53 if not include size
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    //prime = dividied by itself and 1 (without remainder)
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }
  //separate chaining sharing arr(nested)
  set(key, value) {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    const index = this.hash(key);
    if (!this.keyMap[index]) return undefined;
    for (let object of this.keyMap[index]) {
      if (object[0] === key) return object[1];
    }
  }
  keys() {
    const keyArr = [];
    for (let indices of this.keyMap) {
      for (let keys of indices) {
        keyArr.push(keys[0]);
      }
    }
    return keyArr;
  }
  values() {
    const valArr = [];
    for (let indices of this.keyMap) {
      for (let vals of indices) {
        valArr.push(vals[1]);
      }
    }
    return valArr;
  }
}

const table = new HashTable(4);
table.set('green', 'kiwi');
table.set('pink', 'peach');
table.set('yellow', 'banana');
table.set('red', 'apple');
table.set('purple', 'eggplant');

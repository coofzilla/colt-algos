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
}

const table = new HashTable();

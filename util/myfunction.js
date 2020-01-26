class Sort {
  constructor() {
    this.b = {};
    this.max = 0;
  }
  sortingOut(arr) {
    // b = {};
    // max = 0;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      !this.b[item] ? (this.b[item] = 1) : this.b[item]++;
      if (this.b[item] > this.max) this.max = this.b[item];
    }

    newArr = Object.entries(b);
    let x = newArr.filter(actor => actor[1] === this.max);
    let y = x.map(xx => {
      return xx[0];
    });
    return y;
  }
}

module.exports = Sort;

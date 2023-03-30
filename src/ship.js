const Ship = (size) => {
  return {
    size,
    hits: 0,
    hit: function() {
      this.hits++;
    },
    isSunk: function() {
      return (this.hits >= this.size ? true : false);
    }
  };
};

export { Ship };
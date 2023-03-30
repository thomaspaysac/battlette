const Ship = (size, name = 'Unnamed ship', id = undefined) => {
  return {
    name,
    size,
    hits: 0,
    hit: function() {
      this.hits++;
    },
    isSunk: function() {
      return (this.hits >= this.size ? true : false);
    },
    id,
  };
};

export { Ship };
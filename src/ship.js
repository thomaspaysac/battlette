const Ship = (size) => {
  return {
    size,
    hitPoints: size,
    sunk: false,
    hit: function() {
      this.hitPoints--;
    }
  };
};

export { Ship };
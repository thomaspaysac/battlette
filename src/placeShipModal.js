function GenerateShipModal (player, ship) {
  return `<div id="ship-modal_player">${player.playerName}</div>
  <p>Place your <span id="ship-modal_ship">${ship}</span></p>`;
}

export { GenerateShipModal };
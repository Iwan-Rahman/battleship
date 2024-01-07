const ship = (length) => {
  let hits = 0
  let sunk = false

  const hit = () => ++hits;
  const isSunk = () => sunk = hits == length ? true : false;
  return {hit,isSunk}
};

export default ship;
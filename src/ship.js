const ship = (length) => {
  let hits = 0
  let sunk = false

  const hit = () => ++hits;
  const isSunk = () => sunk = hits == length ? true : false;

  const toString = () => "S";
  return {length,hit,isSunk,toString}
};

export default ship;
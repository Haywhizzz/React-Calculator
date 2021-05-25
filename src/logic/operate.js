import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (operation === '+') {
    return Big(numberOne) * 1 + Big(numberTwo) * 1;
  }
  if (operation === '-') {
    return Big(numberOne) - Big(numberTwo);
  }
  if (operation === 'x') {
    return Big(numberOne) * Big(numberTwo);
  }
  if (operation === '÷') {
    return Big(numberOne) / Big(numberTwo);
  }
  if (operation === '%') {
    return Big(numberOne) * 0.01;
  }
  return '0';
};

export default operate;

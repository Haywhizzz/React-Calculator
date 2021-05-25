import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (operation === '+') {
    return Big(numberOne).plus(Big(numberTwo));
  }
  if (operation === '-') {
    return Big(numberOne).minus(Big(numberTwo));
  }
  if (operation === 'x') {
    return Big(numberOne).times(Big(numberTwo));
  }
  if (operation === '÷') {
    return Big(numberOne).div(Big(numberTwo));
  }
  if (operation === '%') {
    return Big(numberOne) * 0.01;
  }
  return '0';
};

export default operate;

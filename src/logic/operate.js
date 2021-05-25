import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const x = Big(numOne);
  const y = Big(numTwo);
  let result = 0;

  if (operation === '+') result = x.plus(y);
  else if (operation === '-') result = x.minus(y);
  else if (operation === 'X') result = x.times(y);
  else if (operation === '/') result = x.div(y);
  else if (operation === '%') result = x.times(0.01);
  else result = 'error';

  return result.toString();
};

export default operate;

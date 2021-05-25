import operate from './operate';

const calculate = (data, buttonName) => {
  const copyData = { ...data };
  if (buttonName === '+/-') {
    copyData.total *= -1;
    copyData.next *= -1;
  } else if (buttonName === '+' || buttonName === '-' || buttonName === 'x' || buttonName === '÷' || buttonName === '%') {
    copyData.total = operate(copyData.total, copyData.next, buttonName);
  }
  return copyData;
};

export default calculate;

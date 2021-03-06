import calculate from '../calculate';

describe('Test cases for calculate.js Module', () => {
  test('test for the `AC` button', () => {
    const result = calculate({ total: '5', next: '', operation: '' }, 'AC');
    // eslint-disable-next-line no-unused-expressions
    expect(result).toBeUndefined;
  });

  test('Add two numbers after pressing the equal sign', () => {
    const result = calculate({ total: '2', next: '2', operation: '+' }, '=');
    const { total } = result;
    expect(total).toEqual('4');
  });

  test('Subtract number2 from number 1 after pressing the equal sign', () => {
    const result = calculate({ total: '4', next: '2', operation: '-' }, '=');
    const { total } = result;
    expect(total).toEqual('2');
  });

  test('Divide two numbers after pressing the equal sign', () => {
    const result = calculate({ total: '4', next: '2', operation: '÷' }, '=');
    const { total } = result;
    expect(total).toEqual('2');
  });

  test('Multiplies numbers after pressing the equal sign', () => {
    const result = calculate({ total: '4', next: '2', operation: 'x' }, '=');
    const { total } = result;
    expect(total).toEqual('8');
  });

  test('test for the `+/-` button', () => {
    const result = calculate({ total: '5', next: '2', operation: '+/-' }, '=');
    const { total } = result;
    expect(total).toEqual('error');
  });

  test('test for the `%` button', () => {
    const result = calculate({ total: '5', next: '', operation: '' }, '%');
    const { total } = result;
    expect(total).toEqual('0.05');
  });

  test('test for the `.` button', () => {
    const result = calculate({ total: '5', next: '', operation: '' }, '.');
    const { total } = result;
    expect(total).toEqual('5');
  });
});

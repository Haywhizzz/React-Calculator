import calculate from '../calculate';

test('number buttons when total and next are not empty', () => {
  const data = calculate({ total: '2', next: '4', operation: '+' }, '5');
  expect(data).toEqual({ total: '2', next: '45', operation: '+' });
});

test('number buttons when total and next are empty', () => {
  const data = calculate({ total: null, next: null, operation: '+' }, '5');
  expect(data).not.toEqual({ total: '9', next: null, operation: '+' });
});

test('AC button', () => {
  const data = calculate({ total: '2', next: '4', operation: '+' }, 'AC');
  expect(data).toEqual({ total: null, next: null, operation: null });
});

test('% button', () => {
  const data = calculate({ total: '2', next: '4', operation: '+' }, '%');
  expect(data).toEqual({ total: '2', next: '0.04', operation: '+' });
});

test('operation after operation', () => {
  const data = calculate({ total: '2', next: '4', operation: '+' }, '-');
  expect(data.total).toBe('2');
});

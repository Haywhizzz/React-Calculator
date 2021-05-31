import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('Home snapshot test', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

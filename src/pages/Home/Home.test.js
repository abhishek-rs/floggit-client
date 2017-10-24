/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

test('renders without exploding', () => {
  // Given
  const home = (<Home />);
  // When
  const wrapper = shallow(home);
  // Then
  expect(wrapper.length).toEqual(1);
});

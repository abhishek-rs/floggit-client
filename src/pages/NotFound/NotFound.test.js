/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

test('renders without exploding', () => {
  // Given
  const notFound = (<NotFound />);
  // When
  const wrapper = shallow(notFound);
  // Then
  expect(wrapper.length).toEqual(1);
});

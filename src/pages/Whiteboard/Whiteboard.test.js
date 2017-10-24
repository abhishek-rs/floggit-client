/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow } from 'enzyme';
import Whiteboard from './Whiteboard';

test('renders without exploding', () => {
  // Given
  const defaultProps = {
    match: {
      params: {
        id: '1a',
      },
    },
  };
  const whiteboard = (<Whiteboard {...defaultProps} />);
  // When
  const wrapper = shallow(whiteboard);
  // Then
  expect(wrapper.length).toEqual(1);
});

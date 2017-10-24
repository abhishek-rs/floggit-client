/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow } from 'enzyme';
import Whiteboard from './Whiteboard';

const createDefaultProps = () => ({
  id: '1a',
  name: 'whiteboard',
  onRemove: jest.fn(),
});

test('renders without exploding', () => {
  // Given
  const defaultProps = createDefaultProps();
  const whiteboard = (<Whiteboard {...defaultProps} />);
  // When
  const wrapper = shallow(whiteboard);
  // Then
  expect(wrapper.length).toEqual(1);
});

test('clicking on the remove button triggers the onRemove function with the correct id', () => {
  // Given
  const defaultProps = createDefaultProps();
  const whiteboard = (<Whiteboard {...defaultProps} />);
  const wrapper = shallow(whiteboard);
  // When
  wrapper.find('.test--Whiteboard-remove-button').simulate('click');
  // Then
  expect(defaultProps.onRemove).toHaveBeenCalledWith('1a');
});

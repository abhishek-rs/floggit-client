/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import WhiteboardInput from './WhiteboardInput';

const createDefaultProps = () => ({
  onAdd: jest.fn(),
  onCloseForm: jest.fn(),
});

test('renders whitout exploding', () => {
  // Given
  const defaultProps = createDefaultProps();
  const whiteboardInput = (<WhiteboardInput {...defaultProps} />);
  // When
  const wrapper = shallow(whiteboardInput);
  // Then
  expect(wrapper.length).toEqual(1);
});

test('clicking on the add button calls the correct function with the expected value', () => {
  // Given
  const defaultProps = createDefaultProps();
  const whiteboardInput = (<WhiteboardInput {...defaultProps} />);
  const wrapper = mount(whiteboardInput);
  wrapper.find('.test--WhiteboardInput-add-item-input').get(0).value = 'name';
  // When
  wrapper.find('.test--WhiteboardInput-add-item-button').simulate('click');
  // Then
  expect(defaultProps.onAdd).toHaveBeenCalledWith('name');
});

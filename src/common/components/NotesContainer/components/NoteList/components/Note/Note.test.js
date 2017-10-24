/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Note from './Note';

const createDefaultProps = () => ({
  id: '1a',
  title: 'title',
  color: 'DEFAULT',
  information: [
    { id: '2a', text: 'info item text' },
  ],
  onRemoveNote: jest.fn(),
  onUpdateNote: jest.fn(),
});

test('renders without exploding', () => {
  // Given
  const defaultProps = createDefaultProps();
  const note = (<Note {...defaultProps} />);
  // When
  const wrapper = shallow(note);
  // Then
  expect(wrapper.length).toEqual(1);
});

test('clicking on the remove button triggers the correct function with the expected id', () => {
  // Given
  const defaultProps = createDefaultProps();
  const note = (<Note {...defaultProps} />);
  const wrapper = mount(note);
  // When
  wrapper.find('.test--Note-remove-btn').simulate('click');
  // Then
  expect(defaultProps.onRemoveNote).toHaveBeenCalledWith(defaultProps.id);
});

test('clicking on the update button triggers the correct function with the expected values', () => {
  // Given
  const defaultProps = createDefaultProps();
  const note = (<Note {...defaultProps} />);
  const wrapper = mount(note);
  // Given
  wrapper.find('.test--Note-update-btn').simulate('click');
  // Then
  expect(defaultProps.onUpdateNote).toHaveBeenCalledWith(defaultProps);
});

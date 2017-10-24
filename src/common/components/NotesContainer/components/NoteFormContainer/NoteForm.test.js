/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ColorSelect from './components/ColorSelect';
import NoteForm from './NoteForm';

const createDefaultProps = () => ({
  id: '1a',
  isLoading: false,
  activeForm: true,
  whiteboardId: '2a',
  title: '',
  color: 'DEFAULT',
  information: [
    { id: '2a', text: 'info item text' },
  ],
  onTitleUpdate: jest.fn(),
  onColorUpdate: jest.fn(),
  onAddInfoItem: jest.fn(),
  onRemoveInfoItem: jest.fn(),
  onSaveNote: jest.fn(),
  onCloseForm: jest.fn(),
});

test('renders without exploding', () => {
  // Given
  const defaultProps = createDefaultProps();
  const noteForm = (<NoteForm {...defaultProps} />);
  // When
  const wrapper = shallow(noteForm);
  // Then
  expect(wrapper.length).toEqual(1);
});

test('typing in a title calls the correct function with the expected value', () => {
  // Given
  const defaultProps = createDefaultProps();
  const noteForm = (<NoteForm {...defaultProps} />);
  const wrapper = mount(noteForm);
  // When
  wrapper
    .find('.test--NoteForm-title-input')
    .simulate('change', { target: { value: 'title' } });
  // Then
  expect(defaultProps.onTitleUpdate).toHaveBeenCalledWith('title');
});

test('clicking on the add info item button calls the correct function with the expected value', () => {
  // Given
  const defaultProps = createDefaultProps();
  const noteForm = (<NoteForm {...defaultProps} />);
  const wrapper = mount(noteForm);
  wrapper.find('.test--NoteForm-info-item-input').get(0).value = 'info item text';
  // When
  wrapper.find('.test--NoteForm-info-item-btn').simulate('click');
  // Then
  expect(defaultProps.onAddInfoItem).toHaveBeenCalledWith('info item text');
});

test('clicking on the remove info item triggers the correct function with the expected id', () => {
  // Given
  const defaultProps = createDefaultProps();
  const noteForm = (<NoteForm {...defaultProps} />);
  const wrapper = mount(noteForm);
  // When
  wrapper.find('.test--NoteForm-info-item-remove-btn').simulate('click');
  // Then
  expect(defaultProps.onRemoveInfoItem).toHaveBeenCalledWith(defaultProps.information[0].id);
});

test('clicking on the cancel button triggers the correct function', () => {
  // Given
  const defaultProps = createDefaultProps();
  const noteForm = (<NoteForm {...defaultProps} />);
  const wrapper = mount(noteForm);
  // When
  wrapper.find('.test--NoteForm-cancel-btn').simulate('click');
  // Then
  expect(defaultProps.onCloseForm).toHaveBeenCalled();
});

test('clicking on the add/update button triggers the correct function with the expected whiteboard id', () => {
  // Given
  const defaultProps = createDefaultProps();
  const noteForm = (<NoteForm {...defaultProps} />);
  const wrapper = mount(noteForm);
  // When
  wrapper.find('.test--NoteForm-save-btn').simulate('click');
  // Then
  expect(defaultProps.onSaveNote).toHaveBeenCalledWith(defaultProps.whiteboardId);
});

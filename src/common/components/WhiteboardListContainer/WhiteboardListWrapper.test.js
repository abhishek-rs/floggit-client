/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow } from 'enzyme';
import WhiteboardList from './components/WhiteboardList';
import WhiteboardInput from './components/WhiteboardInput';
import WhiteboardListWrapper from './WhiteboardListWrapper';

const createDefaultProps = () => ({
  whiteboards: [],
  handleActivateForm: () => {},
  handleAdd: () => {},
  handleRemove: () => {},
  handleCloseForm: () => {},
});

test('renders without exploding', () => {
  // Given
  const defaultProps = createDefaultProps();
  const whiteboardListWrapper = (<WhiteboardListWrapper {...defaultProps} />);
  // When
  const wrapper = shallow(whiteboardListWrapper);
  // Then
  expect(wrapper.length).toEqual(1);
});

test('renders WhiteboardList and no loading div when the list has finished loading', () => {
// Given
  const defaultProps = createDefaultProps();
  const whiteboardListWrapper = (<WhiteboardListWrapper {...defaultProps} />);
  // When
  const wrapper = shallow(whiteboardListWrapper);
  // Then
  expect(wrapper.find('.test--WhiteboardListWrapper-loading').length).toEqual(0);
  expect(wrapper.find(WhiteboardList).length).toEqual(1);
});

test('renders loading div and no WhiteboardList when loading property is present', () => {
  // Given
  const defaultProps = createDefaultProps();
  defaultProps.isLoading = true;
  const whiteboardListWrapper = (<WhiteboardListWrapper {...defaultProps} />);
  // When
  const wrapper = shallow(whiteboardListWrapper);
  // Then
  expect(wrapper.find('.test--WhiteboardListWrapper-loading').length).toEqual(1);
  expect(wrapper.find(WhiteboardList).length).toEqual(0);
});


test('renders WhiteboardList and no create form when the list is present', () => {
  // Given
  const defaultProps = createDefaultProps();
  const whiteboardListWrapper = (<WhiteboardListWrapper {...defaultProps} />);
  // When
  const wrapper = shallow(whiteboardListWrapper);
  // Then
  expect(wrapper.find('.test--WhiteboardListWrapper-form').length).toEqual(0);
  expect(wrapper.find(WhiteboardInput).length).toEqual(0);
  expect(wrapper.find(WhiteboardList).length).toEqual(1);
});

test('renders create form and no WhiteboardList when the list is not present', () => {
  // Given
  const defaultProps = createDefaultProps();
  defaultProps.isFormActive = true;
  const whiteboardListWrapper = (<WhiteboardListWrapper {...defaultProps} />);
  // When
  const wrapper = shallow(whiteboardListWrapper);
  // Then
  expect(wrapper.find('.test--WhiteboardListWrapper-form').length).toEqual(1);
  expect(wrapper.find(WhiteboardInput).length).toEqual(1);
  expect(wrapper.find(WhiteboardList).length).toEqual(0);
});

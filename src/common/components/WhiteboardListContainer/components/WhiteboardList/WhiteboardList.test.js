/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow } from 'enzyme';
import WhiteboardList from './WhiteboardList';
import Whiteboard from './components/Whiteboard';

const createDefaultProps = () => ({
  whiteboards: [],
  onItemRemove: () => {},
});

test('renders without exploding', () => {
  // Given
  const defaultProps = createDefaultProps();
  const whiteboardList = (<WhiteboardList {...defaultProps} />);
  // When
  const wrapper = shallow(whiteboardList);
  // Then
  expect(wrapper.length).toEqual(1);
});

test('renders the correct number of Whiteboards', () => {
  // Given
  const propsWith3Whiteboards = Object.assign({}, createDefaultProps(), {
    whiteboards: [
      { id: '1a', name: 'whiteboard1' },
      { id: '2a', name: 'whiteboard2' },
      { id: '3a', name: 'whiteboard3' },
    ],
  });
  const whiteboardList = (<WhiteboardList {...propsWith3Whiteboards} />);
  // When
  const wrapper = shallow(whiteboardList);
  // Then
  expect(wrapper.find(Whiteboard).length).toEqual(3);
});

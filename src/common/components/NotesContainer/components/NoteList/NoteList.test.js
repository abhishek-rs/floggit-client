/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import NoteList from './NoteList';

const createDefaultProps = () => ({
  notes: [
    {
      id: '1a',
      title: 'testTitle',
      color: 'DEFAULT',
      information: [
        { id: '2b', text: 'info item text' },
      ],
    },
  ],
  noteFormId: '3c',
  currentWhiteboardId: '4d',
  activeForm: true,
  onRemoveNote: jest.fn(),
  onUpdateNote: jest.fn(),
});

test('renders without exploding', () => {
  // Given
  const defaultProps = createDefaultProps();
  const noteList = (<NoteList {...defaultProps} />);
  // When
  const wrapper = shallow(noteList);
  // Then
  expect(wrapper.length).toEqual(1);
});

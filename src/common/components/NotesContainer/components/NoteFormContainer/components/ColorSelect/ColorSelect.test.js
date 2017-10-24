/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow } from 'enzyme';
import ColorSelect from './ColorSelect';

const createDefaultProps = () => ({
  colors: ['DEFAULT', 'INFO', 'SUCCESS', 'DANGER'],
  selectedColor: 'DEFAULT',
  onColorUpdate: jest.fn(),
});

test('renders without exploding', () => {
  // Given
  const defaultProps = createDefaultProps();
  const colorSelect = (<ColorSelect {...defaultProps} />);
  // When
  const wrapper = shallow(colorSelect);
  // Then
  expect(wrapper.length).toEqual(1);
});

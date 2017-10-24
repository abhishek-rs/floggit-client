/* eslint-env jest */
import rootReducer from './index';

test('return the expected default state of note-form when the unknown action is provided', () => {
  // Given
  const initialState = {
    noteForm: {
      id: null,
      title: '',
      color: 'DEFAULT',
      information: [],
      activeForm: false,
    },
  };
  const unknownAction = { type: 'UNKNOWN_ACTION' };
  // When
  const state = rootReducer(initialState, unknownAction).noteForm;
  // Then
  expect(state).toEqual(initialState.noteForm);
});

test('return the expected default state of notes when the unknown action is provided', () => {
  // Given
  const initialState = {
    notes: {
      data: [],
      isLoading: false,
    },
  };
  const unknownAction = { type: 'UNKNOWN_ACTION' };
  // When
  const state = rootReducer(initialState, unknownAction).notes;
  // Then
  expect(state).toEqual(initialState.notes);
});

test('return the expected default state of whiteboards when the unknown action is provided', () => {
  // Given
  const initialState = {
    whiteboards: {
      data: [],
      activeForm: false,
      isLoading: false,
    },
  };
  const unknownAction = { type: 'UNKNOWN_ACTION' };
  // When
  const state = rootReducer(initialState, unknownAction).whiteboards;
  // Then
  expect(state).toEqual(initialState.whiteboards);
});

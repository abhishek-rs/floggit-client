/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import noteFormReducer from './note-form';

test('returns the expected default state when unknown action is provided', () => {
  // Given
  const initialState = {
    id: null,
    title: '',
    color: 'DEFAULT',
    information: [],
    activeForm: false,
  };
  const unknownAction = { type: 'UNKNOWN_ACTION' };
  // When
  const state = noteFormReducer(initialState, unknownAction);
  // Then
  expect(state).toEqual(initialState);
});

test('sets activeForm to true when NOTEFORM_LOAD_NOTE action is triggered', () => {
  // Given
  const initialState = {
    activeForm: false,
  };
  const loadNoteAction = { type: 'NOTEFORM_LOAD_NOTE' };
  // When
  const state = noteFormReducer(initialState, loadNoteAction);
  // Then
  const expectedState = {
    activeForm: true,
  };
  expect(state).toEqual(expectedState);
});

test('sets activeForm to true when NOTEFORM_OPEN action is triggered', () => {
  // Given
  const initialState = {
    id: null,
    title: '',
    color: 'DEFAULT',
    information: [],
    activeForm: false,
  };
  const openAction = { type: 'NOTEFORM_OPEN' };
  // When
  const state = noteFormReducer(initialState, openAction);
  // Then
  const expectedState = {
    id: null,
    title: '',
    color: 'DEFAULT',
    information: [],
    activeForm: true,
  };
  expect(state).toEqual(expectedState);
});

test('resets state when NOTEFORM_RESET action is triggered', () => {
  // Given
  const initialState = {
    id: '1a',
    title: 'testTitle',
    color: 'DANGER',
    information: [],
    activeForm: true,
  };
  const resetAction = { type: 'NOTEFORM_RESET' };
  // When
  const state = noteFormReducer(initialState, resetAction);
  // Then
  const expectedState = {
    id: null,
    title: '',
    color: 'DEFAULT',
    information: [],
    activeForm: false,
  };
  expect(state).toEqual(expectedState);
});

test('adds the correct info item when NOTEFORM_ADD_INFOITEM is triggered', () => {
  // Given
  const initialState = {
    id: '1a',
    title: '',
    color: 'DEFAULT',
    information: [],
    activeForm: true,
  };
  const addInfoItemAction = {
    type: 'NOTEFORM_ADD_INFOITEM',
    value: {
      id: '2a',
      text: 'infoText',
    },
  };
  // When
  const state = noteFormReducer(initialState, addInfoItemAction);
  // Then
  const expectedState = {
    id: '1a',
    title: '',
    color: 'DEFAULT',
    information: [
      { id: '2a', text: 'infoText' },
    ],
    activeForm: true,
  };
  expect(state).toEqual(expectedState);
});

test('removes the correct info item when NOTEFORM_REMOVE_INFOITEM is triggered', () => {
  // Given
  const initialState = {
    id: '1a',
    title: '',
    information: [
      { id: '2a', text: 'infoItem1' },
      { id: '3a', text: 'infoItem2' },
    ],
    activeForm: true,
  };
  const removeInfoItemAction = {
    type: 'NOTEFORM_REMOVE_INFOITEM',
    value: '3a',
  };
  // When
  const state = noteFormReducer(initialState, removeInfoItemAction);
  // Then
  const expectedState = {
    id: '1a',
    title: '',
    information: [
      { id: '2a', text: 'infoItem1' },
    ],
    activeForm: true,
  };
  expect(state).toEqual(expectedState);
});

test('updates the note title when NOTEFORM_UPDATE_TITLE is triggered', () => {
  // Given
  const initialState = {
    id: '1a',
    title: '',
    color: 'DEFAULT',
    information: [],
    activeForm: true,
  };
  const updateTitleAction = {
    type: 'NOTEFORM_UPDATE_TITLE',
    value: 'updatedTestTitle',
  };
  // When
  const state = noteFormReducer(initialState, updateTitleAction);
  // Then
  const expectedState = {
    id: '1a',
    title: 'updatedTestTitle',
    color: 'DEFAULT',
    information: [],
    activeForm: true,
  };
  expect(state).toEqual(expectedState);
});

test('updates the note color when NOTEFORM_UPDATE_COLOR is triggered', () => {
  // Given
  const initialState = {
    id: '1a',
    title: '',
    color: 'DEFAULT',
    information: [],
    activeForm: true,
  };
  const updateColorAction = {
    type: 'NOTEFORM_UPDATE_COLOR',
    value: 'DANGER',
  };
  // When
  const state = noteFormReducer(initialState, updateColorAction);
  // Then
  const expectedState = {
    id: '1a',
    title: '',
    color: 'DANGER',
    information: [],
    activeForm: true,
  };
  expect(state).toEqual(expectedState);
});

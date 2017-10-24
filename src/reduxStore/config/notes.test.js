/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import notesReducer, { loadNotes } from './notes';

jest.mock('../../utils/repository/notesAPI');

test('returns the expected default state when unknown action is provided', () => {
  // Given
  const initialState = {
    data: [],
    isLoading: false,
  };
  const unknownAction = { type: 'UNKNOWN_ACTION' };
  // When
  const state = notesReducer(initialState, unknownAction);
  // Then
  expect(state).toEqual(initialState);
});

test('sets isLoading to true when NOTE_LOADING action is triggered', () => {
  // Given
  const initialState = {
    data: [],
    isLoading: false,
  };
  const loadingAction = { type: 'NOTE_LOADING' };
  // When
  const state = notesReducer(initialState, loadingAction);
  // Then
  const expectedState = {
    data: [],
    isLoading: true,
  };
  expect(state).toEqual(expectedState);
});

test('adds the correct note when the NOTE_ADD action is triggered', () => {
  // Given
  const initialState = {
    data: [
      { id: '1a', whiteboardId: '1b', title: 'testTitle1', information: [{}], color: 'DEFAULT', display: true },
      { id: '2b', whiteboardId: '2c', title: 'testTitle2', information: [{}], color: 'DEFAULT', display: true },
    ],
    isLoading: false,
  };
  const addAction = {
    type: 'NOTE_ADD',
    data: {
      id: '3c',
      whiteboardId: '3d',
      title: 'testTitle3',
      information: [{}],
      color: 'DEFAULT',
      display: true,
    },
  };
  // When
  const state = notesReducer(initialState, addAction);
  // Then
  const expectedState = {
    data: [
      { id: '1a', whiteboardId: '1b', title: 'testTitle1', information: [{}], color: 'DEFAULT', display: true },
      { id: '2b', whiteboardId: '2c', title: 'testTitle2', information: [{}], color: 'DEFAULT', display: true },
      { id: '3c', whiteboardId: '3d', title: 'testTitle3', information: [{}], color: 'DEFAULT', display: true },
    ],
    isLoading: false,
  };
  expect(state).toEqual(expectedState);
});

test('sets isLoading to false when NOTE_LOADED action is triggered', () => {
  // Given
  const initialState = {
    data: [],
    isLoading: true,
  };
  const loadedAction = { type: 'NOTE_LOADED' };
  // When
  const state = notesReducer(initialState, loadedAction);
  // Then
  const expectedState = {
    data: [],
    isLoading: false,
  };
  expect(state).toEqual(expectedState);
});

test('removes correct note when the NOTE_REMOVE action is triggered', () => {
  // Given
  const initialState = {
    data: [
      { id: '1a', whiteboardId: '1b', title: 'testTitle1', information: [{}], color: 'DEFAULT', display: true },
      { id: '2b', whiteboardId: '2c', title: 'testTitle2', information: [{}], color: 'DEFAULT', display: true },
    ],
    isLoading: false,
  };
  const removeAction = {
    type: 'NOTE_REMOVE',
    data: { id: '2b' },
  };
  // When
  const state = notesReducer(initialState, removeAction);
  // Then
  const expectedState = {
    data: [{ id: '1a', whiteboardId: '1b', title: 'testTitle1', information: [{}], color: 'DEFAULT', display: true }],
    isLoading: false,
  };
  expect(state).toEqual(expectedState);
});


test('updates the correct note when the NOTE_UPDATE action is triggered', () => {
  // Given
  const initialState = {
    data: [
      { id: '1a', whiteboardId: '1b', title: 'testTitle1', information: [{}], color: 'DEFAULT', display: true },
    ],
    isLoading: false,
  };
  const updateAction = {
    type: 'NOTE_UPDATE',
    data: {
      id: '1a',
      whiteboardId: '1b',
      title: 'updatedTitle',
      information: [{}],
      color: 'DANGER',
      display: true,
    },
  };
  // When
  const state = notesReducer(initialState, updateAction);
  // Then
  const expectedState = {
    data: [
      { id: '1a', whiteboardId: '1b', title: 'updatedTitle', information: [{}], color: 'DANGER', display: true },
    ],
    isLoading: false,
  };
  expect(state).toEqual(expectedState);
});

test('replaces the notes when the NOTE_LIST_REPLACE action is triggered', () => {
  // Given
  const initialState = {
    data: [
      { id: '1a', whiteboardId: '1b', title: 'testTitle1', information: [{}], color: 'DEFAULT', display: true },
      { id: '2b', whiteboardId: '2c', title: 'testTitle2', information: [{}], color: 'DEFAULT', display: true },
    ],
    isLoading: false,
  };
  const noteListReplaceAction = {
    type: 'NOTE_LIST_REPLACE',
    data: {
      notes: [
        { id: '3c', whiteboardId: '3d', title: 'testTitle3', information: [{}], color: 'DEFAULT', display: true },
      ],
    },
  };
  // When
  const state = notesReducer(initialState, noteListReplaceAction);
  // Then
  const expectedState = {
    data: [
      { id: '3c', whiteboardId: '3d', title: 'testTitle3', information: [{}], color: 'DEFAULT', display: true },
    ],
    isLoading: false,
  };
  expect(state).toEqual(expectedState);
});

test('loadNotes triggers the correct actions', () => {
  // Given
  const dispatch = jest.fn();
  const expectedLoadingAction = { type: 'NOTE_LOADING' };
  const expectedReplaceAction = {
    type: 'NOTE_LIST_REPLACE',
    data: {
      notes: [
        { id: '1a', whiteboardId: '1b', title: 'testTitle', information: [{}], color: 'DEFAULT', display: true },
      ],
    },
  };
  const expectedLoadedAction = { type: 'NOTE_LOADED' };
  // When
  return loadNotes()(dispatch)
    .then(() => {
      expect(dispatch).toHaveBeenCalledWith(expectedLoadingAction);
      expect(dispatch).toHaveBeenCalledWith(expectedReplaceAction);
      expect(dispatch).toHaveBeenCalledWith(expectedLoadedAction);
    });
});

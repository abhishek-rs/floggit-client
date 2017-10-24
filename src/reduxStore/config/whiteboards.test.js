/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import whiteboardsReducer, { loadWhiteboards } from './whiteboards';

jest.mock('../../utils/repository/whiteboardsAPI');

test('return the expected default state when unknown action is provided', () => {
  // Given
  const initialState = {
    data: [],
    activeForm: false,
    isLoading: false,
  };
  const unknownAction = { type: 'UNKNOWN_ACTION' };
  // When
  const state = whiteboardsReducer(initialState, unknownAction);
  // Then
  expect(state).toEqual(initialState);
});

test('sets isLoading to true when WHITEBOARD_LOADING action is triggered', () => {
  // Given
  const initialState = {
    data: [],
    activeForm: false,
    isLoading: false,
  };
  const loadingAction = { type: 'WHITEBOARD_LOADING' };
  // When
  const state = whiteboardsReducer(initialState, loadingAction);
  // Then
  const expectedState = {
    data: [],
    activeForm: false,
    isLoading: true,
  };
  expect(state).toEqual(expectedState);
});

test('sets isLoading to false when WHITEBOARD_LOADED action is triggered', () => {
  // Given
  const initialState = {
    data: [],
    activeForm: false,
    isLoading: true,
  };
  const loadedAction = { type: 'WHITEBOARD_LOADED' };
  // When
  const state = whiteboardsReducer(initialState, loadedAction);
  // Then
  const expectedState = {
    data: [],
    activeForm: false,
    isLoading: false,
  };
  expect(state).toEqual(expectedState);
});

test('sets activeForm to true when WHITEBOARD_FORM_ACTIVE action is triggered', () => {
  // Given
  const initialState = {
    data: [],
    activeForm: false,
    isLoading: false,
  };
  const formActiveAction = { type: 'WHITEBOARD_FORM_ACTIVE' };
  // When
  const state = whiteboardsReducer(initialState, formActiveAction);
  // Then
  const expectedState = {
    data: [],
    activeForm: true,
    isLoading: false,
  };
  expect(state).toEqual(expectedState);
});

test('sets activeForm to false when WHITEBOARD_FORM_INACTIVE action is triggered', () => {
  // Given
  const initialState = {
    data: [],
    activeForm: true,
    isLoading: false,
  };
  const formInactiveAction = { type: 'WHITEBOARD_FORM_INACTIVE' };
  // When
  const state = whiteboardsReducer(initialState, formInactiveAction);
  // Then
  const expectedState = {
    data: [],
    activeForm: false,
    isLoading: false,
  };
  expect(state).toEqual(expectedState);
});

test('adds the correct whiteboard when WHITEBOARD_ADD is triggered', () => {
  // Given
  const initialState = {
    data: [
      { id: '1a', name: 'whiteboard1' },
    ],
    activeForm: false,
    isLoading: false,
  };
  const addAction = {
    type: 'WHITEBOARD_ADD',
    data: {
      id: '2a',
      name: 'whiteboard2',
    },
  };
  // When
  const state = whiteboardsReducer(initialState, addAction);
  // Then
  const expectedState = {
    data: [
      { id: '1a', name: 'whiteboard1' },
      { id: '2a', name: 'whiteboard2' },
    ],
    activeForm: false,
    isLoading: false,
  };
  expect(state).toEqual(expectedState);
});

test('removes the correct whiteboard when WHITEBOARD_REMOVE action is triggered', () => {
  // Given
  const initialState = {
    data: [
      { id: '1a', name: 'whiteboard1' },
      { id: '2a', name: 'whiteboard2' },
    ],
    activeForm: false,
    isLoading: false,
  };
  const removeAction = {
    type: 'WHITEBOARD_REMOVE',
    data: { id: '2a' },
  };
  // When
  const state = whiteboardsReducer(initialState, removeAction);
  // Then
  const expectedState = {
    data: [
      { id: '1a', name: 'whiteboard1' },
    ],
    activeForm: false,
    isLoading: false,
  };
  expect(state).toEqual(expectedState);
});

test('replaces the whiteboards then WHITEBOARD_LIST_REPLACE action is triggered', () => {
  // Given
  const initialState = {
    data: [
      { id: '1a', name: 'whiteboard1' },
    ],
  };
  const listReplaceAction = {
    type: 'WHITEBOARD_LIST_REPLACE',
    data: {
      whiteboards: [
        { id: '2a', name: 'whiteboard2' },
      ],
    },
  };
  // When
  const state = whiteboardsReducer(initialState, listReplaceAction);
  // Then
  const expectedState = {
    data: [
      { id: '2a', name: 'whiteboard2' },
    ],
  };
  expect(state).toEqual(expectedState);
});

test('loadWhiteboards triggers the correct actions', () => {
  // Given
  const dispatch = jest.fn();
  const expectedLoadingAction = { type: 'WHITEBOARD_LOADING' };
  const expectedReplaceAction = {
    type: 'WHITEBOARD_LIST_REPLACE',
    data: {
      whiteboards: [
        { id: '1a', name: 'testName' },
      ],
    },
  };
  const expectedLoadedAction = { type: 'WHITEBOARD_LOADED' };
  // When
  return loadWhiteboards()(dispatch)
    .then(() => {
      expect(dispatch).toHaveBeenCalledWith(expectedLoadingAction);
      expect(dispatch).toHaveBeenCalledWith(expectedReplaceAction);
      expect(dispatch).toHaveBeenCalledWith(expectedLoadedAction);
    });
});

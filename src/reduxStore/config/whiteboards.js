import whiteboardsAPI from '../../utils/repository/whiteboardsAPI';

// ACTIONS
const WHITEBOARD_ADD = 'WHITEBOARD_ADD';
const WHITEBOARD_UPDATE = 'WHITEBOARD_UPDATE';
const WHITEBOARD_REMOVE = 'WHITEBOARD_REMOVE';
const WHITEBOARD_LIST_REPLACE = 'WHITEBOARD_LIST_REPLACE';
const WHITEBOARD_LOADING = 'WHITEBOARD_LOADING';
const WHITEBOARD_LOADED = 'WHITEBOARD_LOADED';

const initialState = {
  data: [],
  isLoading: false,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WHITEBOARD_ADD: {
      const newWhiteboards = [...state.data, action.data];
      return Object.assign({}, state, { data: newWhiteboards });
    }
    case WHITEBOARD_UPDATE: {
      const newWhiteboards = state.data.map((whiteboard) => {
        if (whiteboard.id === action.data.id) {
          return action.data;
        }
        return whiteboard;
      });
      return Object.assign({}, state, { data: newWhiteboards });
    }
    case WHITEBOARD_REMOVE: {
      const newWhiteboards = state.data.filter(whiteboard => whiteboard.id !== action.data.id);
      return Object.assign({}, state, { data: newWhiteboards });
    }
    case WHITEBOARD_LIST_REPLACE: {
      const newWhiteboards = [...action.data.whiteboards];
      return Object.assign({}, state, { data: newWhiteboards });
    }
    case WHITEBOARD_LOADING: {
      return Object.assign({}, state, { isLoading: true });
    }
    case WHITEBOARD_LOADED: {
      return Object.assign({}, state, { isLoading: false });
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const internalAddWhiteboard = (id, value) => ({
  type: WHITEBOARD_ADD,
  data: {
    id,
    name: value.name,
  },
});

const internalUpdateWhiteboard = value => ({
  type: WHITEBOARD_UPDATE,
  data: {
    id: value.id,
    name: value.name,
  },
});

const internalRemoveWhiteboard = id => ({
  type: WHITEBOARD_REMOVE,
  data: { id },
});

const internalReplaceAllWhiteboards = whiteboards => ({
  type: WHITEBOARD_LIST_REPLACE,
  data: {
    whiteboards,
  },
});

const internalLoadingWhiteboards = () => ({
  type: WHITEBOARD_LOADING,
});

const internalLoadedWhiteboards = () => ({
  type: WHITEBOARD_LOADED,
});

// THUNK
const addWhiteboard = value => dispatch => whiteboardsAPI.add(value)
  .then((id) => {
    dispatch(internalAddWhiteboard(id, value));
  });

const updateWhiteboard = value => dispatch => whiteboardsAPI.update(value)
  .then(() => {
    dispatch(internalUpdateWhiteboard(value));
  });

const removeWhiteboard = id => dispatch => whiteboardsAPI.remove(id)
  .then(() => {
    dispatch(internalRemoveWhiteboard(id));
  });

const loadWhiteboards = () => (dispatch) => {
  dispatch(internalLoadingWhiteboards());
  return whiteboardsAPI.getAll()
    .then((whiteboards) => {
      dispatch(internalReplaceAllWhiteboards(whiteboards));
      dispatch(internalLoadedWhiteboards());
    })
    .catch(() => {
      dispatch(internalLoadedWhiteboards());
    });
};

export { addWhiteboard, updateWhiteboard, removeWhiteboard, loadWhiteboards };
export default reducer;

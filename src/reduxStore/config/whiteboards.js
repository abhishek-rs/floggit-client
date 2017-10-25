import whiteboardsAPI from '../../utils/repository/whiteboardsAPI';
import notesAPI from '../../utils/repository/notesAPI';
import { removeNote } from './notes';

// ACTIONS
const WHITEBOARD_ADD = 'WHITEBOARD_ADD';
const WHITEBOARD_REMOVE = 'WHITEBOARD_REMOVE';
const WHITEBOARD_LIST_REPLACE = 'WHITEBOARD_LIST_REPLACE';
const WHITEBOARD_LOADING = 'WHITEBOARD_LOADING';
const WHITEBOARD_LOADED = 'WHITEBOARD_LOADED';
const WHITEBOARD_FORM_ACTIVE = 'WHITEBOARD_FORM_ACTIVE';
const WHITEBOARD_FORM_INACTIVE = 'WHITEBOARD_FORM_INACTIVE';

const initialState = {
  data: [],
  activeForm: false,
  isLoading: false,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WHITEBOARD_ADD: {
      const newWhiteboards = [...state.data, action.data];
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
    case WHITEBOARD_FORM_ACTIVE: {
      return Object.assign({}, state, { activeForm: true });
    }
    case WHITEBOARD_FORM_INACTIVE: {
      return Object.assign({}, state, { activeForm: false });
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
    name: value,
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

const internalActivateForm = () => ({
  type: WHITEBOARD_FORM_ACTIVE,
});

const internalInactivateForm = () => ({
  type: WHITEBOARD_FORM_INACTIVE,
});

// THUNK
const activateForm = () => (dispatch) => {
  const header = document.querySelector('.WhiteboardListContainer-header');
  header.style.display = 'none';
  dispatch(internalActivateForm());
};

const inactivateForm = () => (dispatch) => {
  const header = document.querySelector('.WhiteboardListContainer-header');
  header.style.display = 'block';
  dispatch(internalInactivateForm());
};

const addWhiteboard = value => dispatch => whiteboardsAPI.add(value)
  .then((id) => {
    dispatch(internalAddWhiteboard(id, value));
    dispatch(inactivateForm());
  })
  .catch(internalInactivateForm());

const removeWhiteboard = id => dispatch => whiteboardsAPI.remove(id)
  .then(() => {
    dispatch(internalRemoveWhiteboard(id));
    return notesAPI.getAll();
  })
  .then((notes) => {
    notes.forEach((note) => {
      if (note.whiteboardId === id) {
        dispatch(removeNote(note.id));
      }
    });
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


export { addWhiteboard, removeWhiteboard, loadWhiteboards, activateForm, inactivateForm };
export default reducer;

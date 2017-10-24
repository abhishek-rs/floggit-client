import notesAPI from '../../utils/repository/notesAPI';

// ACTIONS
const NOTE_ADD = 'NOTE_ADD';
const NOTE_REMOVE = 'NOTE_REMOVE';
const NOTE_UPDATE = 'NOTE_UPDATE';
const NOTE_LIST_REPLACE = 'NOTE_LIST_REPLACE';
const NOTE_LOADING = 'NOTE_LOADING';
const NOTE_LOADED = 'NOTE_LOADED';
const NOTE_FILTER = 'NOTE_FILTER';

const initialState = {
  data: [],
  isLoading: false,
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_ADD: {
      const newNotes = [...state.data, action.data];
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_REMOVE: {
      const newNotes = state.data.filter(note => note.id !== action.data.id);
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_UPDATE: {
      const newNotes = state.data.map((note) => {
        if (note.id === action.data.id) {
          return action.data;
        }
        return note;
      });
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_LIST_REPLACE: {
      const newNotes = [...action.data.notes]
        .map(note => Object.assign({}, note, { display: true }));
      newNotes.reverse();
      return Object.assign({}, state, { data: newNotes });
    }
    case NOTE_LOADING: {
      return Object.assign({}, state, { isLoading: true });
    }
    case NOTE_LOADED: {
      return Object.assign({}, state, { isLoading: false });
    }
    case NOTE_FILTER: {
      const newData = state.data.map((item) => {
        let val = false;
        if (item.title.toUpperCase().includes(action.value.toUpperCase())) val = true;

        item.information.forEach((subItem) => {
          if (subItem.text.toUpperCase().includes(action.value.toUpperCase())) val = true;
        });

        return Object.assign({}, item, { display: val });
      });
      return Object.assign({}, state, { data: newData });
    }
    default:
      return state;
  }
};

// ACTION CREATORS
const internalAddNote = (id, value) => ({
  type: NOTE_ADD,
  data: {
    id,
    whiteboardId: value.whiteboardId,
    title: value.title,
    color: value.color,
    information: value.information,
    display: true,
  },
});

const internalRemoveNote = id => ({
  type: NOTE_REMOVE,
  data: { id },
});

const internalUpdateNote = value => ({
  type: NOTE_UPDATE,
  data: {
    id: value.id,
    whiteboardId: value.whiteboardId,
    title: value.title,
    color: value.color,
    information: value.information,
    display: true,
  },
});


const internalReplaceAllNotes = notes => ({
  type: NOTE_LIST_REPLACE,
  data: {
    notes,
  },
});

const internalLoadingNotes = () => ({
  type: NOTE_LOADING,
});

const internalLoadedNotes = () => ({
  type: NOTE_LOADED,
});

const filterNotes = value => ({
  type: NOTE_FILTER,
  value,
});

// THUNK
const addNote = (whiteboardId, value) => (dispatch) => {
  dispatch(internalLoadingNotes());
  return notesAPI.add(whiteboardId, value.title, value.color, value.information)
    .then((id) => {
      const newValue = value;
      newValue.whiteboardId = whiteboardId;
      dispatch(internalAddNote(id, newValue));
      dispatch(internalLoadedNotes());
    });
};

const removeNote = id => (dispatch) => {
  dispatch(internalLoadingNotes());
  return notesAPI.remove(id)
    .then(() => {
      dispatch(internalRemoveNote(id));
      dispatch(internalLoadedNotes());
    });
};

const updateNote = (whiteboardId, value) => (dispatch) => {
  dispatch(internalLoadingNotes());
  return notesAPI.update(whiteboardId, value)
    .then(() => {
      const newValue = value;
      newValue.whiteboardId = whiteboardId;
      dispatch(internalUpdateNote(newValue));
      dispatch(internalLoadedNotes());
    });
};

const loadNotes = () => (dispatch) => {
  dispatch(internalLoadingNotes());
  return notesAPI.getAll()
    .then((notes) => {
      dispatch(internalReplaceAllNotes(notes));
      dispatch(internalLoadedNotes());
    })
    .catch(() => {
      dispatch(internalLoadedNotes());
    });
};

export { addNote, removeNote, updateNote, loadNotes, filterNotes };
export default reducer;

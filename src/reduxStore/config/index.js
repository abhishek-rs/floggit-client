import { combineReducers } from 'redux';
import notes from './notes';
import noteForm from './note-form';
import whiteboards from './whiteboards';

const reducer = combineReducers({
  notes,
  noteForm,
  whiteboards,
});

export default reducer;

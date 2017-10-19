import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './config/';
import { loadWhiteboards } from './config/whiteboards';
import { loadNotes } from './config/notes';
import { loadWhiteboards } from './config/whiteboards';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(loadWhiteboards());
store.dispatch(loadNotes());

export default store;

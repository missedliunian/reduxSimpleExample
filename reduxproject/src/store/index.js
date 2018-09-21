import { createStore } from 'redux';
import reducer from '../reducers/home';

export const store = createStore(reducer);
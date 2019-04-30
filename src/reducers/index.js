import { combineReducers } from 'redux';
import { stuffReducer } from './stuff';

export const rootReducer = combineReducers({
    stuff: stuffReducer,
})
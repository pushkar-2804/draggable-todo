import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/task.slice';
import statusesReducer from './slices/status.slice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('Failed to save state:', err);
  }
};

const store = configureStore({
  reducer: combineReducers({
    tasks: tasksReducer,
    statuses: statusesReducer,
  }),
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
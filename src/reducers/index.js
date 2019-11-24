import reduceReducers from 'reduce-reducers';

import InitialState from './InitialState';
import TodosReducer from './Todos';

const AppReducer = reduceReducers(InitialState, TodosReducer);

export default AppReducer;

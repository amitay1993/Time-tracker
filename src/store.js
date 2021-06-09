import {createStore} from 'redux';
// import rootReducer from "./reducers/root";
import taskReducer from "./reducers/taskReducer";


const store = createStore(taskReducer); // store.getState()
// window.store = store;
export default store;

import {ADD_TASK, START_TASK, START_TIME} from "../constants/actionTypes";

const initialState = {
    tasks: [],
    currentTask: null,
};


const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {name: action.payload.name, time: 0}],
            }
        case START_TASK:
            return {
                ...state,
                currentTask: action.payload.id !== state.currentTask ? action.payload.id : null
            }
        case START_TIME:
            // flow, compose [1,2,3,4]
            // return flow([
            //     update(['tasks', state.currentTask, 'time'], (time) => time + 1),
            //     update(['tasks', state.currentTask, 'time'], (time) => time + 1),
            //     set('currentTask', null)
            // ])(state)
            // return update(['tasks', state.currentTask, 'time'], (time) => time + 1, state)
            const newTasks = [...state.tasks]
            const taskToModify = state.tasks[state.currentTask];
            newTasks[state.currentTask] = {...taskToModify, time: taskToModify.time + 1};
            return {
                ...state,
                tasks: newTasks
            }
    }
    return state;
};


export const computeTotalTime=(allTasks)=>{

    let totalTime = 0;
    allTasks.forEach(task => {
        totalTime += (task.time);
    })
    return totalTime;
}
export default tasksReducer;
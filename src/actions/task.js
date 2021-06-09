import {ADD_TASK, START_TASK, START_TIME} from "../constants/actionTypes";

export const addTask = (name) => ({
    type: ADD_TASK,
    payload: {name}
});

export const startTask = (id) => ({
    type: START_TASK,
    payload: {id}
});

export const startTime = () => ({
        type: START_TIME,
})

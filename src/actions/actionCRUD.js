import * as actions from './actionTypes';

export const addBucket = bucketItem => ({
    type: actions.ADD_BUCKET,
    payload: { bucket_value: bucketItem },
});

export const addTask = (itemValue, bucketName) => ({
    type: actions.ADD_TASK,
    payload: { value: itemValue, bucketName: bucketName },
});

export const deleteTask = selectedItemId => ({
    type: actions.DELETE_TASK,
    payload: { id: selectedItemId },
});

export const editTask = modifiedItem => ({
    type: actions.EDIT_TASK,
    payload: { modifiedItem },
});

export const cancelTask = () => ({
    type: actions.CANCEL_TASK,
    payload: {},
});

export const cancelEditTask = () => ({
    type: actions.CANCEL_EDIT_TASK,
    payload: {},
});

export const completeTask = modifiedItem => ({
    type: actions.COMPLETE_TASK,
    payload: { modifiedItem },
});

export const selectEditTask = id => ({
    type: actions.SELECT_EDIT_TASK,
    payload: { id },
});



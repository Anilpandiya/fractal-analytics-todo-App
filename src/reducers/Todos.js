import uuid from 'uuid/v1';

import * as actionTypes from '../actions/actionTypes';

const TodosReducer = (state, action) => {

  switch (action.type) {
    case actionTypes.ADD_BUCKET: {
      const bucketName = action.payload.bucket_value;
      return { ...state, bucketName: [...state.bucketName, bucketName] }
    }

    case actionTypes.ADD_TASK: {
      const id = uuid();
      const todoItem = {
        value: action.payload.value,
        id,
        completed: false,
        bucketName: action.payload.bucketName
      };

      return { ...state, items: [...state.items, todoItem] };
    }

    case actionTypes.CANCEL_EDIT_TASK: {
      const newState = state.items.length ? { ...state, editingItem: {} } : { ...state };
      return newState;
    }

    case actionTypes.DELETE_TASK: {
      const items = state.items.filter(({ id }) => id !== action.payload.id);
      return { ...state, items };
    }

    case actionTypes.EDIT_TASK: {
      const items = state.items.map(item => {
        if (item.id === action.payload.modifiedItem.id) {
          item.value = action.payload.modifiedItem.value;
        }

        return item;
      });

      return { ...state, items, editingItem: {} };
    }

    case actionTypes.COMPLETE_TASK: {
      const items = state.items.map(item => {
        if (item.id === action.payload.modifiedItem.id) {
          const newItem = { ...item };
          newItem.completed = !newItem.completed;
          return newItem;
        }

        return item;
      });

      return { ...state, items };
    }

    case actionTypes.SELECT_EDIT_TASK: {
      const item = state.items.find(({ id }) => id === action.payload.id);
      return { ...state, editingItem: item };
    }

    default: {
      return state;
    }
  }
};

export default TodosReducer;

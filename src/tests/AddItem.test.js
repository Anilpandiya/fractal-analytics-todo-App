import { ADD_TASK } from '../actions/actionTypes';
import { addTask } from '../actions/actionCRUD';

describe('AddItem', () => {
  it('should call AddItem action', () => {
    const newItem = 'Some new todo item';

    const action = {
      type: ADD_TASK,
      payload: {
        value: newItem,
      },
    };

    expect(addTask(newItem)).toEqual(action);
  });
});

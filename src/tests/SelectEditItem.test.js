import { SELECT_EDIT_TASK } from '../actions/actionTypes';
import { selectEditTask } from '../actions/actionCRUD';

describe('SelectEditItem', () => {
  it('should call SelectEditItem action with an item that will be modified', () => {
    const itemId = {
      id: '0',
    };

    const action = {
      type: SELECT_EDIT_TASK,
      payload: {
        id: itemId,
      },
    };

    expect(selectEditTask(itemId)).toEqual(action);
  });
});

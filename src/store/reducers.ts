import * as fromAction from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: "Learn redux", complete: false }]
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case fromAction.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];

      return {
        ...state,
        data
      };
    }
    case fromAction.REMOVE_TODO: {
      const todoToDelete = action.payload;
      const data = state.data.filter(todo => todo.label !== todoToDelete.label);
      return {
        ...state,
        data
      }
    }
  }

  return state;
}

import { ACTIONS } from ".";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEMS:
      return {
        ...state,
        isModalOpen: true,
        modalContent: "item added",
        todos: [...state.todos, action.todo.task],
      }
    case ACTIONS.DELETE_ITEMS:
      const remainingItems = state.todos.filter((e, i) => i !== action.playLoad);
      return {
        isModalOpen: true,
        modalContent: "item deleted",
        todos: remainingItems,
      } ;
    case ACTIONS.EMPTY_VALUE:
      return { ...state, isModalOpen: true, modalContent: "please add value" };
    case ACTIONS.MODAL_CLOSE:
      return { ...state, isModalOpen: false, modalContent: "" };
    default:
      return { ...state };
  }
}
export default reducer;

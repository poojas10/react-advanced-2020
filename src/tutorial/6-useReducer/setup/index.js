import React, { useState, useReducer} from "react";
import Modal from "./Modal";
import reducer from "./reducer";
// import { data } from "../../../data";
// reducer function
export const ACTIONS = {
  ADD_ITEMS: "add-items",
  DELETE_ITEMS: "delete-items",
  EMPTY_VALUE: "no-value",
  MODAL_CLOSE: "modal-close",
};

const defaultState = {
  todos: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [userTodos, setTodos] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  function addItems(e) {
    e.preventDefault();
    if (userTodos.trim().length !== 0) {
      dispatch({ type: ACTIONS.ADD_ITEMS, todo: { task: userTodos } });
    }
    else{
      dispatch({ type: ACTIONS.EMPTY_VALUE });
    }
    setTodos("");
  }
  function modalClose() {
    dispatch({ type: ACTIONS.MODAL_CLOSE });
  }
  return (
    <>
      {state.isModalOpen && (
        <Modal modalClose={modalClose} modalContent={state.modalContent} />
      )}
      <form onSubmit={addItems}>
        <input
          onChange={(e) => {
            setTodos(e.target.value);
          }}
          value={userTodos}
        ></input>
        <button>Add items</button>
      </form>
      {state.todos.map((e, i) => {
        return (
          <article key={Math.random()}>
            <p>{e}</p>
            <button
              onClick={() => {
                dispatch({ type: ACTIONS.DELETE_ITEMS, playLoad:i});
              }}
            >
              delete
            </button>
          </article>
        );
      })}
    </>
  );
};

export default Index;

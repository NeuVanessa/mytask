import React from "react";

import "./styles.css";
export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="container">
      <div className="main">
        <div>
          <h6 align="left">Nome: {todo.name}</h6>
          <h6 align="left">Descrição: {todo.description}</h6>
        </div>
        <div className="box">ID: {todo.uid}</div>

        <button
          className="button-delete"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Deletar
        </button>
      </div>
    </div>
  );
};

import React from "react";
import { TodoItem } from "../todoItem";

export const Todos = (props) => {
  return (
    <div>
      {props.todos.length === 0
        ? "Não Existe Item na lista"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.uid}
                  onDelete={props.onDelete}
                  editTodo={props.editTodo}
                />
              </>
            );
          })}
    </div>
  );
};

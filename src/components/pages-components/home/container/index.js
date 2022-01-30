import React, { useEffect, useState } from "react";

//components
import Form from "../../../pages-components/home/form";
import { Todos } from "../todos";
//styles
import "./styles.css";

const Container = () => {
  let initTodo;
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Deletando Item da Lista", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (name, description) => {
    console.log("Item Adicionado com sucesso", name, description);
    let uid = 0;

    if (todos.length === 0) {
      uid = 0;
    } else {
      uid = todos[todos.length - 1].uid + 1;
    }
    const myTodo = {
      uid: uid,
      name: name,
      description: description,
      edit: false,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const editTodo = (uid) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.uid === uid) {
        todo.name = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  };

  return (
    <>
      <main className="screen-signin">
        <aside className="aside-left-home">
          <br />
          <h2 className="title">Adiconar Item a Lista</h2>
          <br />
          <div>
            <h5>Quantidade: {todos.length}</h5>
            <Form addTodo={addTodo} />
          </div>

          <div>
            <Todos todos={todos} onDelete={onDelete} editTodo={editTodo} />
          </div>
        </aside>
        <aside className="aside-right-home">
          <br />
          <h2 className="title">Mostrando Lista</h2>

          <br />
          {todos.map((todo) => (
            <div key={todo.uid} className="todo">
              <div className="todo-text">
                {todo.id === todoEditing ? (
                  <input
                    className="login-loginInputPassword"
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                ) : (
                  <div>Nome: {todo.name}</div>
                )}
              </div>
              <div className="todo-actions">
                {todo.id === todoEditing ? (
                  <button onClick={() => editTodo(todo.uid)}>
                    Confirmar Edição
                  </button>
                ) : (
                  <button
                    className="button-signin-form"
                    onClick={() => setTodoEditing(todo.uis)}
                  >
                    Editar
                  </button>
                )}
              </div>
            </div>
          ))}
        </aside>
      </main>
    </>
  );
};

export default Container;

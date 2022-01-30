import React, { useState } from "react";

import "./styles.css";

import Input from "../../../design-system/input";
const Form = ({ addTodo }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //SE NÃO FOR INFORMADO O NOME E DESCRIÇÃO APARECER UM ALERT ERROR
    if (!name || !description) {
      alert("Nome e Descrição são obrigatórios");
    } else {
      //ADICIONANDO OS ELEMENTOS NA LISTA
      addTodo(name, description);

      //LIMPANDO A LISTA
      setName("");
      setDescription("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button className="button-signin-form" type="submit">
        Adicionar
        </button>
      </form>
    </>
  );
};

export default Form;

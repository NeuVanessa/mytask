import React, { useContext, useState } from "react";

//bibliotecas
import { useHistory } from "react-router";

//components
import { AuthContext } from "../../contexs/auth";
//styles
import "./styles.css";

//icon
import { MdPerson, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function Login() {
  const [show, setShow] = useState(false);
  const { loading, login, username, setUsername, password, setPassword } =
    useContext(AuthContext);

  const history = useHistory("");
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      alert("Nome de Usuário e Senha são obrigatórios");
      return;
    } else {
      login(username, password);
      history.replace("/home");
    }
  }

  return (
    <main className="screen-signin">
      <aside className="aside-left"></aside>
      <aside className="aside-right">
        <span className="welcome">Bem Vindo</span>
        <h2 className="title-signin">Faça o login com sua conta</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-loginInputPassword">
            <MdPerson color="#191a16" size={40} />
            <input
              placeholder="nome.sobrenome"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="verificationUsername"
            />{" "}
            <br />
          </div>
          <div className="login-loginInputPassword">
            <MdLock color="#191a16" size={40} />
            <input
              placeholder="admin@123"
              type={show ? "text" : "password"}
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <div className="login-eye">
              {show ? (
                <HiEye color="#191a16" size={20} onClick={handleClick} />
              ) : (
                <HiEyeOff size={20} onClick={handleClick} />
              )}
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="button-signin"
          >
            {loading ? "Aguarde..." : "Logar"}
          </button>
        </form>
      </aside>
    </main>
  );
}

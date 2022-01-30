import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    function loadStorage() {
      const storegeUser = localStorage.getItem("Usuarios");
      if (storegeUser) {
        setUser(JSON.parse(storegeUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function login() {
    setLoading(true);
    let user = JSON.parse(localStorage.getItem("Usuarios") || "[]");
    let newUser = {
      password,
      username,
    };
    setUser(user);
    loadStorage(user);
    user.push(newUser);
    localStorage.setItem("Usuarios", JSON.stringify(user));
    alert("Você logou com sucesso!");
  }

  async function signOut() {
    await localStorage.setItem("Usuarios", JSON.stringify(user));
  }

  function loadStorage(users) {
    localStorage.setItem("Usuarios", JSON.stringify(users));
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        username,
        login,
        setUsername,
        password,
        setPassword,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

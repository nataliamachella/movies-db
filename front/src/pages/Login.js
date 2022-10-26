import { useState } from "react";
/* import { useNavigate } from "react-router-dom"; */

const Login = () => {
  const [user, setuser] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  /* const navigate = useNavigate(); */

  const handleUser = (e) => {
    setuser(e.target.value);
  }; /* navigate("/"); */
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const ifMatch = (param) => {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "naty" && param.password === "1234") {
        const { user, password } = param;
        let acc = { user, password };
        let account = JSON.stringify(acc);
        localStorage.setItem("account", account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }
  };

  const handleSubmit = () => {
    let account = { user, password };
    if (account) {
      ifMatch(account);
      console.log(account);
    }
  };
  return (
    <div classuser="containerPrincipal">
      <div classuser="containerSecundario">
        <div classuser="form-group">
          <label>Usuario: </label>
          <br />
          <input
            type="text"
            classuser="form-control"
            user="useruser"
            onChange={handleUser}
          />
          <br />
          <label>Contraseña: </label>
          <br />
          <input
            type="password"
            classuser="form-control"
            user="password"
            onChange={handlePassword}
          />
          <br />
          <button classuser="btn btn-primary" onClick={handleSubmit}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
interface IUser {
  login: string;
  password: string;
}

function Auth() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [auth, setAuth] = useState(false);

  const userAuth: IUser = {
    login,
    password,
  };
  useEffect(() => {
    // Проверяем наличие token в куках
    const token = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("token="));
    if (token) {
      setAuth(true);
    }
  }, []);
  const history = useNavigate();
  const authUser = async () => {
    console.log(password);

    if (login == "" || password == "") {
      alert("Не все поля заполнены");
      return;
    }

    const response = await fetch("http://localhost:5000/authorization", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(userAuth),
      credentials: "include",
    })
      .then((response) => response.text())
      .catch((error) => console.log(error));
    if (response == "error") alert("Ошибка авторизации");
    if (response == "succes") window.location.href = "/profile";
  };
  if (auth == false) {
    return (
      <>
        <h2 className="text-xl font-semibold mb-4">Авторизация</h2>
        <Input
          title="Ваш логин"
          length="full"
          value={login}
          typesq="normal"
          ronChange={(e) => setLogin(e.target.value)}
        />
        <Input
          title="Ваш пароль"
          length="full"
          value={password}
          typesq="normal"
          ronChange={(e) => setPassword(e.target.value)}
        />
        <Button
          size="medium"
          color="succes"
          title="Войти"
          ronClick={authUser}
        />
      </>
    );
  } else {
    history("/profile");
  }
}

export default Auth;

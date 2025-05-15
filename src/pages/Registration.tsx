import { useState } from "react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";

interface IAddNewUser {
  login: string;
  password: string;
  fullName: string;
}
const Registration = () => {
  const history = useNavigate();
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRetype, setRePassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const newUser: IAddNewUser = {
    login,
    password,
    fullName,
  };

  const registrNewUser = async () => {
    console.log(password + " " + passwordRetype);

    if (
      login == "" ||
      password == "" ||
      passwordRetype == "" ||
      fullName == ""
    ) {
      alert("Не все поля заполнены");
      return;
    }

    if (password != passwordRetype) {
      alert("Пароль и повтор пароля разные");
      return;
    }

    if (password.length < 8) {
      alert("Ваш пароль короткий");
      return;
    }

    const response = await fetch("http://localhost:5000/registr", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.text())
      .catch((error) => console.log(error));
    if (response == "error") alert("извините, но такой логин уже присутствует");
    if (response == "succes") history("/auth");
  };
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Регистрация</h2>
      <Input
        title="Ваше имя"
        length="full"
        value={fullName}
        typesq="normal"
        ronChange={(e) => setFullName(e.target.value)}
      />
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
      <Input
        title="Повторите ваш пароль"
        length="full"
        value={passwordRetype}
        typesq="normal"
        ronChange={(e) => setRePassword(e.target.value)}
      />
      <Button
        size="medium"
        color="succes"
        title="Зарегистрироваться"
        ronClick={registrNewUser}
      />
    </>
  );
};

export default Registration;

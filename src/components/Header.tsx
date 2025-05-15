import { useEffect, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
interface IUser {
  login: string;
  password: string;
}
const Header = () => {
  const [authModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [auths, setAuths] = useState(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [auth, setAuth] = useState(false);
  console.log(auth);
  const userAuth: IUser = {
    login,
    password,
  };
  useEffect(() => {
    const token = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("token="));
    if (token) {
      setAuths(true);
    }
  }, []);
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

  useEffect(() => {
    const token = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("token="));

    if (token) {
      const tryData = async () => {
        try {
          const checkSession = await fetch("http://localhost:5000/profile", {
            credentials: "include",
          });
          if (checkSession.ok) {
            setAuth(true);
          } else {
            console.log("Нет доступа к профилю");
            deleteCookie();
          }
        } catch {}
      };

      tryData();
      setAuth(true);
    }
  }, []);

  const deleteCookie = () => {
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    window.location.href = "/";
  };

  const discardModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-between items-center bg-blue-50 p-4">
      <div className="text-2xl font-bold">
        <img src="./public/logo.png" alt="Логотип" className="h-12" />
      </div>
      <nav className="flex space-x-6">
        <a
          href="/"
          className="text-gray-800 hover:text-blue-500 transition duration-300"
        >
          Home
        </a>
        <a
          href="/About"
          className="text-gray-800 hover:text-blue-500 transition duration-300"
        >
          About
        </a>
        <a
          href="/Contacts"
          className="text-gray-800 hover:text-blue-500 transition duration-300"
        >
          Contacts
        </a>
        <a
          href="/products"
          className="text-gray-800 hover:text-blue-500 transition duration-300"
        >
          Продукты
        </a>
        <a
          href="/message"
          className="text-gray-800 hover:text-blue-500 transition duration-300"
        >
          Message
        </a>
      </nav>

      <nav className="flex space-x-6">
        {!auths && (
          <a
            onClick={() => setIsModalOpen(true)}
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            Авторизация
          </a>
        )}
        {auths && (
          <a
            onClick={() => deleteCookie()}
            className="text-gray-800 hover:text-blue-500 transition duration-300"
          >
            Выйти
          </a>
        )}
      </nav>

      {authModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="bg-blue-100 p-6 rounded shadow-lg">
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
            <Button
              size="small"
              color="primary"
              title="Отмена"
              ronClick={discardModal}
            />
            <p>
              Нету аккаунта? <a href="registration">Зарегистрироваться</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

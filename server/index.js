import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import cookieParser from "cookie-parser";
import crypto from "crypto";
import { Session } from "inspector/promises";
const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
// Массив для хранения данных
let dataStore = [];
let userList = [];

// Обработка POST-запросов
app.post("/data", (req, res) => {
  const newData = req.body;
  console.log(newData);
  dataStore.push(newData); // Сохраняем данные в массив
  console.log(dataStore);
  res.status(201).json(newData); // Отправляем ответ с новыми данными
});

app.post("/registr", (req, res) => {
  const newData = req.body;
  if (userList.some((user) => user.login === newData.login)) {
    console.log(newData.login + " данный логин уже имеется в списке");
    return res.send("error");
  }
  userList.push(newData);

  return res.send("succes");
});

app.post("/authorization", (req, res) => {
  const newData = req.body;
  const userAuth = userList.find((user) => user.login === newData.login);
  if (userAuth) {
    const cookieLive = 15; //day
    const secretToken = crypto.randomBytes(64).toString("hex");

    // sessionStorage. тут  логика сессии
    userAuth.token = secretToken;
    res.cookie("token", secretToken, {
      maxAge: cookieLive * 24 * 60 * 60 * 1000,
    });
    return res.send("succes");
  }
  return res.send("error");
});

app.get("/profile", (req, res) => {
  const { token = null } = req.cookies;
  const userAuth = userList.find((user) => user.token === token);
  if (userAuth) {
    res.json(userAuth);
  } else {
    res.status(401).json({ error: "Не авторизован" });
  }
});

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello world!", title: "ggwp" });
});

app.get("/api/getdata", (req, res) => {
  res.json(dataStore);
});

app.post("/api/test/", (req, res) => {
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`server runnging at http://localhost:${port}`);
});

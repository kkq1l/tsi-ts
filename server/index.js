import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import axios from 'axios';

const app=express();
const port=5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); 
// Массив для хранения данных
let dataStore = [];
let userList = [];


// Обработка POST-запросов
app.post('/data', (req, res) => {
  const newData = req.body;
  console.log(newData);
  dataStore.push(newData); // Сохраняем данные в массив
  console.log(dataStore)
  res.status(201).json(newData); // Отправляем ответ с новыми данными
});

app.post('/registr', (req, res) => {
  const newData = req.body;
  console.log(newData.login);
  if (userList.login.includes(newData.login))
  {
    console.log(newData.login+" данный логин уже имеется в списке");
    res.send('error');
    return;
  }
  console.log(newData);
  userList.push(newData); // Сохраняем данные в массив
  console.log(dataStore)
});

app.get('/api/data', (req, res)=> {
    res.json({message: "Hello world!", title: "ggwp"});
});


app.get('/api/getdata', (req, res)=> {
  res.json(dataStore);
});

app.post('/api/test/', (req, res)=>{
  res.send('Got a POST request')
});

app.listen(port,()=>{
    console.log(`server runnging at http://localhost:${port}`);
});

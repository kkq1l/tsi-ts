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


// Обработка POST-запросов
app.post('/data', (req, res) => {
  const newData = req.body;
  console.log(newData);
  dataStore.push(newData); // Сохраняем данные в массив
  console.log(dataStore)
  res.status(201).json(newData); // Отправляем ответ с новыми данными
});

app.get('/api/data', (req, res)=> {
    res.json({message: "Hello world!", title: "ggwp"});
});

app.post('/api/test/', (req, res)=>{
  res.send('Got a POST request')
});

app.listen(port,()=>{
    console.log(`server runnging at http://localhost:${port}`);
});

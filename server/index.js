import express from 'express';
import cors from 'cors';

const app=express();
const port=5000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res)=> {
    res.json({message: "Hello world!", title: "ggwp"});
});

app.post('/api/test/', (req, res)=>{
  res.send('Got a POST request')
});

app.listen(port,()=>{
    console.log(`server runnging at http://localhost:${port}`);
});

import express, { json } from 'express';
import { config } from 'dotenv';

const app = express();
config();

app.use(json());

app.get('/', (req, res)=>{
    res.send('Api funcionando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Servidor funcionando en puerto ${PORT}`));



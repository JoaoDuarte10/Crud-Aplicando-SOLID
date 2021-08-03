require('dotenv').config();
import express from 'express'
import { router } from './routes';
import { Tabelas } from './database/Tabelas'

const app = express();

//Cria as tabelas necessárias
const tables = new Tabelas();
tables.createTabelas();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT)

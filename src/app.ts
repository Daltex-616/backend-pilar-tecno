import 'dotenv/config'

import express from "express";
import cors from "cors"
import { connectDB } from './db/mongoDb';
import deporteRouter from './router/deporteRouter';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT

connectDB()

app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
}));

app.use(express.json())

app.use("/deportes", deporteRouter)

app.use(errorHandler)

app.listen(PORT,()=>
console.log("el server se ecuentra encendido"))

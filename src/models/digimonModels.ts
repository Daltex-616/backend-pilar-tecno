import mongoose from "mongoose";
import {Idigimon} from "../interface/Idigimon"

const digimonSchema = new mongoose.Schema<Idigimon>({
    pregunta: { type: String, required: true },
    opciones_respuestas: { type: [String], required: true },
    respuesta_correcta: { type: Number, required: true },
  });

  export const Digimon = mongoose.model("Digimon", digimonSchema)
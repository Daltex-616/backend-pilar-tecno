import mongoose from "mongoose";
import { Ideportes } from "../interface/Ideporte";

const deporteSchema = new mongoose.Schema<Ideportes>({
  name: {
    type: String,
    required: true,
  },
  deporte_tipo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  dias: {
    type: [String],
    required: true,
  },
  horarios: {
    type: [String],
    required: true,
  },
  urlimg: {
    type: [String],
    required: false,
  },
  ubicacion: {
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true },
  },
  requisitos: {
    type: String,
    required: true,
  },
});

export const Deporte = mongoose.model("Deporte", deporteSchema);

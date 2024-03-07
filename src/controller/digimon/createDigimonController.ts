import { NextFunction, Request,Response } from "express";
import { Idigimon } from "../../interface/Idigimon";
import { createDigimon } from "../../services/digimonService";

export async function createDigimonController(req: Request, res: Response, next: NextFunction) {
    try {
      const { pregunta, opciones_respuestas, respuesta_correcta } = req.body;
      const DigimonData: Idigimon = { pregunta, opciones_respuestas, respuesta_correcta };
      const response = await createDigimon(DigimonData);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
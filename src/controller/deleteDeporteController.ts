import { NextFunction, Request, Response } from "express";
import { deleteDeporte } from "../services/deporteServices";

export async function deleteDeporteController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.params.id;
  try {
    const response = await deleteDeporte(id);
    if (response) {
      return res.status(200).json(response);
    }else{
        res.status(404).json({ message: `Evento con el id:${id} no encontrado para actualizar` });
    }
  } catch (error) {
    next(error)
  }
}

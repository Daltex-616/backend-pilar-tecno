import { NextFunction, Request, Response } from "express";
import { Ideportes } from "../interface/Ideporte";
import { updateDeporte } from "../services/deporteServices";

export async function updateDeportesController(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id; // Obtener el ID de los parámetros de la URL

    // Extraer datos del cuerpo de la solicitud
    const { name, descripcion, deporte_tipo, dias, horarios, urlimg, ubicacion, requisitos } = req.body;

    // Crear objeto Ideportes con los datos actualizados
    const DeporteData: Ideportes = {
      name,
      descripcion,
      deporte_tipo,
      dias,
      horarios,
      urlimg,
      ubicacion,
      requisitos,
    };

    // Llamar a la función de servicio para actualizar el deporte
    const response = await updateDeporte(id, DeporteData);

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: `Deporte con el ID:${id} no encontrado para actualizar` });
    }
  } catch (error) {
    next(error);
  }
}

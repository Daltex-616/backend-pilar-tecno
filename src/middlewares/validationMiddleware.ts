import { NextFunction, Request, Response } from "express";
import Joi, { string } from "joi";



const ubicacionSchema = Joi.object({
  latitud: Joi.number().required(),
  longitud: Joi.number().required(),
});
export function validateDeporteBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { body } = req;
  const schema = Joi.object({
    name: Joi.string().required(),
    deporte_tipo: Joi.string()
      .valid("futbol", "mechas", "voleibol", "Voleibol","Natación","natación","Atletismo","atletismo")
      .required(),
    descripcion: Joi.string().required(),
    dias: Joi.array()
      .items(
        Joi.string().valid(
          "lunes",
          "martes",
          "miércoles",
          "jueves",
          "viernes",
          "sábado",
          "domingo",
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Domingo",
          "Sábado"
        )
      )
      .required(),
    horarios: Joi.array().items(Joi.string()).required(),
    urlimg: Joi.array().items(Joi.string().uri()),
    ubicacion: ubicacionSchema.required(),
    requisitos: Joi.string().required(),
  });
  const { error, value } = schema.validate(body);
  if (error) {
    return res.status(404).json({
      message: error.details[0].message,
    });
  }
  next();
}

import { NextFunction, Request, Response } from "express";
import { Ideportes } from "../interface/Ideporte";
import { createDeporte } from "../services/deporteServices";

export async function createDeportesController(req:Request, res:Response, next:NextFunction){
    try {
        const {name,descripcion,deporte_tipo,dias,horarios,urlimg,ubicacion,requisitos} = req.body
        const DeporteData:Ideportes = {name,descripcion,deporte_tipo,dias,horarios,urlimg,ubicacion,requisitos}
        const response = await createDeporte(DeporteData)
        res.status(200).json(response)
        
    } catch (error) {
        next(error)
    }
}
import { NextFunction, Request, Response } from "express";
import { getDeporteById } from "../services/deporteServices";

export async function getDeporteByIdController(req:Request,res:Response,next:NextFunction) {
    try {
        const id = req.params.id
        const deporte = await getDeporteById(id)
        if(!deporte){
            res.status(200).json({
                info:`el evento deportivo con el id ${id} no existe`
            })
        }
        res.json(deporte)
    } catch (error) {
        next(error)
        
    }
}
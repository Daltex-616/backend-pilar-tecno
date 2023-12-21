import { NextFunction, Request, Response } from "express";
import { getDeportes } from "../services/deporteServices";

export async function getDeportesControllers(req:Request,res:Response, next:NextFunction) {
    try {
        const deporte_tipo = req.query.deporte_tipo as string | undefined
        const deportes = await getDeportes(deporte_tipo)
        res.status(200).json(deportes)
    } catch (error) {
        next(error)
    }    
}
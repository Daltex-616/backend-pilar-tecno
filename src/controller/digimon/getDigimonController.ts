import { NextFunction,Request,Response } from "express";
import { getDigimon } from "../../services/digimonService";

export async function getDigimonController(req:Request,res:Response,next:NextFunction){
    try {
        const pregunta = req.query.pregunta as string | undefined
        const digimons = await getDigimon(pregunta)
        res.status(200).json(digimons)
    } catch (error) {
        next(error)
    }
}
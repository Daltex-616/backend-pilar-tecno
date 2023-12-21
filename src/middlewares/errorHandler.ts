import { NextFunction, Request, Response } from "express";
import { httpError } from "../constants/error";

export function errorHandler(err: Error,req:Request,res:Response, next:NextFunction){
    const code = err.message
    const error = httpError[code as keyof typeof
    httpError] || httpError.InternalServerError
    return res.status(error.status).json(error)
}
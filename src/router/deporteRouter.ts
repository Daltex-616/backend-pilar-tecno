import { Router } from "express";
import { createDeportesController } from "../controller/createDeportesController";
import { getDeportesControllers } from "../controller/getDeporteController";
import { getDeporteByIdController } from "../controller/getDeporteByIdController";
import { validateDeporteBody } from "../middlewares/validationMiddleware";
import { updateDeportesController } from "../controller/updateDeporteController";
import { deleteDeporteController } from "../controller/deleteDeporteController";



  
const deporteRouter = Router()

deporteRouter.get("/", getDeportesControllers)

deporteRouter.get("/:id", getDeporteByIdController)

deporteRouter.post("/",validateDeporteBody, createDeportesController)

deporteRouter.put("/:id",updateDeportesController)

deporteRouter.delete("/:id", deleteDeporteController)

export default deporteRouter
import { Router } from "express";
import { getDigimonController } from "../controller/digimon/getDigimonController";

const digimonRouter = Router()

digimonRouter.get("/" ,getDigimonController)

export default digimonRouter
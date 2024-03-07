import { Router } from "express";
import { getDigimonController } from "../controller/digimon/getDigimonController";
import { createDigimonController } from "../controller/digimon/createDigimonController";

const digimonRouter = Router()

digimonRouter.get("/" ,getDigimonController)
digimonRouter.post("/", createDigimonController)

export default digimonRouter
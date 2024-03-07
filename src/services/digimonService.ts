import { Idigimon } from "../interface/Idigimon";
import { Digimon } from "../models/digimonModels";


export async function getDigimon(pregunta?:string){
    const query = pregunta ? {pregunta:pregunta}:{}
    const digimons = await Digimon.find(query)
    return digimons.map(digimon =>{
        return digimon.toJSON()
    })
}

export async function getDeporteById(id:string) {
    const digimon =  await Digimon.findById(id)
    return digimon?.toJSON()
}

export async function createDigimon(digimonData:Idigimon) {
    const digimon = new Digimon(digimonData)
    return digimon.save()
}
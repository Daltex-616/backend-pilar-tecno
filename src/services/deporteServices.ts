import { Ideportes } from "../interface/Ideporte";
import { Deporte } from "../models/deporteModels";

export async function getDeportes(deporte_tipo?:string) {
    const query = deporte_tipo ? {deporte_tipo:deporte_tipo} : {}
    const deportes = await Deporte.find(query)
    return deportes.map(deporte=>{
        return deporte.toJSON()
    })
}

export async function getDeporteById(id:string) {
    const deporte =  await Deporte.findById(id)
    return deporte?.toJSON()
}

export async function createDeporte(deporteData:Ideportes) {
    const deporte = new Deporte(deporteData)
    return deporte.save()
}

export async function updateDeporte(id:string,nuevoDeporte: Partial<Ideportes>):Promise<Ideportes | null>{
    const deporte = await Deporte.findOneAndUpdate({_id:id},{$set:nuevoDeporte},{new:true})
    return deporte
}

export async function deleteDeporte(id:string){
    const deporte = await Deporte.findByIdAndDelete(id)
    return deporte

}
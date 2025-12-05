import { generalServices } from "../services/generalSetting.services";
import {Request,Response} from "express" 


export class generalController {
    private repo = new generalServices()

     createSettiing = async(req:Request,res:Response) =>{
       const data = req.body
       if(!data){
        return res.status(404).json({msg:"fill all the data"})
       }
       const setting = await this.repo.generalServices(data)
       if(!setting){
        return res.status(404).json({msg:"setitg not created"})
       }
       return res.status(200).json({msg:"setting created",setting})
    }
    getSetiing = async(req:Request,res:Response) =>{
        try {
           const data = await  this.repo.getGenaralSetting()
           if(!data){
            return res.status(400).json({msg:"data not found"})
           }
            return res.status(201).json({msg:"data fetch",data})
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

import { GeneralSettingRepository } from "../repo/generalSetting.repo"

export class generalServices {
    private repo = new GeneralSettingRepository()

    async generalServices (data:any){
        return this.repo.upsertSettings(data)
    } 
    async getGenaralSetting (){
     return this.repo.getSettings()
    }
}
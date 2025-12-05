import express from 'express'
import { generalController, } from '../controller/general.setting.controller'

const SettingRouter = express.Router()

const controller = new generalController()

// bind() ensures `this` works inside class method
SettingRouter.post('/api/setting', controller.createSettiing.bind(controller))
SettingRouter.get("/api/getsetting",controller.getSetiing)

export default SettingRouter

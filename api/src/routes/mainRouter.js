import { Router } from 'express'
import { inicioRoutes } from '../controllers/controllers.js'
const mainRouter = Router()

mainRouter.get('/', inicioRoutes)

export default mainRouter

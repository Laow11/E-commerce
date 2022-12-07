import express from 'express'
import morgan from 'morgan'
import mainRouter from './routes/mainRouter.js'

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(mainRouter)

export default server

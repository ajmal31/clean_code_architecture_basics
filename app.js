import http from "http"
import express from 'express'
import connectDb from "./framework/db/connection.js"
import config from "./config/config.js"
import serverConfig from "./server.js"
import expressConfig from "./framework/webserver/express.js"
import routes from "./framework/webserver/Routes/index.js"


//Create Express App Instance
const app=express()


//Create Server
const server=http.createServer(app)

//configure the server
serverConfig(server,config).startServer()

//Connect Db
connectDb(config)

//Express config
expressConfig(app)

//Routes config
routes(app,express)








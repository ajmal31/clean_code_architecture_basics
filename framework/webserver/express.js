import express from 'express'
import morgan from 'express'
import cors from 'cors'

const expressConfig=(app)=>{

    // app.use(morgan('dev'))
    app.use(express.json())
    // app.use(express.urlencoded({extended:true}))

    

}
export default expressConfig
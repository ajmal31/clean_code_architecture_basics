
import userRoutes from "./user/userRoutes.js"

const routes=(app,express)=>{
    
    app.use('/api/user',userRoutes(express))
}

export default routes
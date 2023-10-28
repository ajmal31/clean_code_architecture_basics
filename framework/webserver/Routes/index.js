
import userRoutes from "./user/userRoutes.js"

const routes=(app,express)=>{
    
    console.log('reach router index')
    app.use('/api/user',userRoutes(express))
}

export default routes
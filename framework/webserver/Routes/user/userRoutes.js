import userController from "../../../../adaptors/controller/userController.js"
import userRepInterface from "../../../../applicatioin/repositories/userRepoInter.js"
import userRepoImplements from "../../../db/repositories/userRepoImp.js"
const userRoutes=(express)=>{

    
    console.log('reach routes')
    
    const router=express.Router()

    //sending ineterface and implements to controller
    const controller=userController(userRepInterface,userRepoImplements)

    router.route('/register').post(controller.createUser)

    router.route('/login').post(controller.loginUser)

    return router

     

}
export default userRoutes
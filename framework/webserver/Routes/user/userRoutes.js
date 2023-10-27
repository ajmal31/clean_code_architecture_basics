import userController from "../../../../adaptors/controller/userController.js"
import userSrvInterface from "../../../../applicatioin/services/userSrvInter.js"
import userRepoImplements from "../../../db/repositories/userRepoImp.js"
const userRoutes=(express)=>{


    console.log('succes from routes')
    const router=express.Router()

    const controller=userController(userSrvInterface,userRepoImplements)

    router.route('/register').post(controller.createUser)

     

}
export default userRoutes
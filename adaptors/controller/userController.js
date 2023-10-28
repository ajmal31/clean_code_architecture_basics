//importing usecases in controller
import userRegister from "../../applicatioin/useCase/userRegister.js"
//Controller Function
const userController=(userRepInterface,userRepImplements)=>{

    console.log('reach controller!!!!')

         //Assign userRepInterface and UserRep Implements to db Respository
         const dbRepository=userRepInterface(userRepImplements())
   
        const createUser=async(req,res)=>{
            console.log('enter inside the controller create usere function')

            const {name,email}= req.body

            try{

                let response=await userRegister(name,email,dbRepository)
                res.json({response}).status(200)


            }catch(err){

                console.log('error occured',err)

                throw err 

            }
          
            
        
        }


 return {
    createUser
 }

}
export default userController
//importing usecases in controller
import userRegister from "../../applicatioin/useCase/userRegister.js"
import userLogin from "../../applicatioin/useCase/userLogin.js"
//Controller Function
const userController=(userRepInterface,userRepImplements)=>{

    console.log('reach controller!!!!')

         //Assign userRepInterface and UserRep Implements to db Respository
         const dbRepository=userRepInterface(userRepImplements())
      

        //user register function 
        const createUser=async(req,res)=>{
            const {name,email}= req.body

            try{

                let response=await userRegister(name,email,dbRepository)
                res.json({response}).status(200)


            }catch(err){

                console.log('error occured',err)

                throw err 

            }

        }
        //user login
        const loginUser=async(req,res)=>{
             console.log('user login controller')
            const {name,email}=req.body
            try{

                let response=await userLogin(name,email,dbRepository)
                res.json({message:'user Login succeful',response}).status(200)
                

            }catch(err){

            }
            

        }


 return {
    createUser,
    loginUser
 }

}
export default userController
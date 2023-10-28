
import userEntity from "../../entities/userEnities.js"
const userRegister=async(name,email,repository)=>{

    console.log('reach usecase user register!!')
   
    if(email){

        try{

            let userdetails=await userEntity(name,email)
            let createUser=await repository.createUser(userdetails)
            console.log('user created data got from interface in usercase')
            return ({message:"user created"})
             

        }catch(err){
             
            console.log('error occured in usecase')
            throw err
            
        }
    }

}
export default userRegister
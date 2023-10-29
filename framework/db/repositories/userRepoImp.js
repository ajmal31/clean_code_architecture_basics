import {userModel} from "../models/user.js"
const userRepoImplements=()=>{
    
    const createUser=async (user)=>{
       
        
        let name=user?.getName()
        let email=user?.getEmail()
        
        const userSchema=new userModel({

            username:name,
            email:email
        })

        const response=await userSchema.save()
       
        return response
        
        
        

    }

    const findByEmail=async(email)=>{

        const response=await userModel.findOne({email:email})
        return response

    }
    return {
        findByEmail,
        createUser
    }

}

export default userRepoImplements
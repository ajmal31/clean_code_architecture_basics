
//import user login entinty for storing datas
import userEntity from "../../entities/userEnities.js"
const loginUser=async(name,email,repository)=>{
    
    const userdetails=await userEntity(name,email)
      
    const response=await repository.findByEmail(userdetails?.getEmail())
    if(!response) console.log('user does not exist')
    return response

}

export default loginUser
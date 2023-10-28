const userRepoImplements=()=>{
    
    const createUser=async (user)=>{
       
        console.log('user data got in userRepo implements')
        console.log('user details')
        let name=user?.getName()
        let email=user?.getEmail()
        console.log(name)
        console.log(email)
        
         

    }
    return {
        createUser
    }

}

export default userRepoImplements
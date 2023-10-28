
const userEntity=(name,email)=>{

    console.log('entity')

    return{
     
        getName:()=>name,
        getEmail:()=>email
        
    }

}

export default userEntity
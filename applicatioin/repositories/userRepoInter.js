

const userRepInterface=(repositories)=>{

   console.log('reach userrepo interface')

   const createUser=(user)=>repositories.createUser(user)
   
   const findByEmail=(email)=>repositories.findByEmail(email)
   return{
      findByEmail,
      createUser
   }
}


export default userRepInterface
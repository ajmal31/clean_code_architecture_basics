

const userRepInterface=(repositories)=>{

   console.log('reach userrepo interface')

   const createUser=(user)=>repositories.createUser(user)
   console.log('data return from impplements',createUser)
   return{
      createUser
   }
}


export default userRepInterface
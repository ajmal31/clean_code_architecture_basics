import mongoose from 'mongoose'
const {Schema}=mongoose

const userShema=new Schema({
    username: String,
    email: String
    
})

const user =mongoose.model('clean-users',userShema)

export default user
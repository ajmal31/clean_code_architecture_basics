import mongoose from 'mongoose'
const {Schema}=mongoose

const userShema=new Schema({
    username: String,
    email: String
    
})

export const userModel =mongoose.model('clean-users',userShema)


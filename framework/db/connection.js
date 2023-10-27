import mongoose from 'mongoose'

const connectDb=async (config)=>{
     console.log('hai,there')
    mongoose.connect(config.mongo.url)

    mongoose.connection.once('open',()=>{
        console.log('connetion success')
    })
    mongoose.connection.on('error',(err)=>{
        console.log('error occurred while connection mongodb',err)
    
    })
}

export default connectDb
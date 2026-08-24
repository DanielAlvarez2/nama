import mongoose from 'mongoose'

export default async function connectMongoDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')
        return mongoose
    }catch(err){
        console.log(err)
    }
}
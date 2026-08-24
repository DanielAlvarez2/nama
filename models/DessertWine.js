import mongoose, {Schema} from 'mongoose'

const DessertWineSchema = new Schema({
    vintage: String,
    name1: String,
    name2: String,
    typos: String,
    price: String,
    staffInfo: String,
    sequence: Number,
    cloudinary_public_id: String,
    cloudinary_secure_url: String
},{timestamps:true})

const DessertWine = mongoose.models.DessertWine || mongoose.model('DessertWine', DessertWineSchema)

export default DessertWine
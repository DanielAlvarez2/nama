import mongoose, {Schema} from 'mongoose'

const DessertSchema = new Schema({
    name: String,
    allergies: String,
    description1: String,
    description2: String,
    price: String,
    staffInfo: String,
    sequence: Number,
    cloudinary_public_id: String,
    cloudinary_secure_url: String
},{timestamps:true})

const Dessert = mongoose.models.Dessert || mongoose.model('Dessert', DessertSchema)

export default Dessert
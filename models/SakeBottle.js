import mongoose, {Schema} from 'mongoose'

const SakeBottleSchema = new Schema({
    section: String,
    producer: String,
    bin: String,
    name: String,
    size: String,
    price: String,
    abv: String,
    staffInfo: String,
    sequence: Number,
    cloudinary_public_id: String,
    cloudinary_secure_url: String
},{timestamps:true})

const SakeBottle = mongoose.models.SakeBottle || mongoose.model('SakeBottle', SakeBottleSchema)

export default SakeBottle
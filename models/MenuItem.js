import mongoose, {Schema} from 'mongoose'

const MenuItemSchema = new Schema({
    menu: String,
    section: String,
    name1: String,
    name2: String,
    upgrade1: String,
    price1: String,
    upgrade2: String,
    price2: String,
    upgrade3: String,
    price3: String,
    abv: String,
    vintage: String,
    allergies: String,
    description1: String,
    description2: String,
    typos: String,
    price: String,
    staffInfo: String,
    sequence: Number,
    cloudinary_public_id: String,
    cloudinary_secure_url: String
},{timestamps:true})

const MenuItem = mongoose.models.MenuItem || mongoose.model('MenuItem', MenuItemSchema)

export default MenuItem
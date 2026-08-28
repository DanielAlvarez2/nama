import mongoose, {Schema} from 'mongoose'

const DessertMenuCoffeeTeaSchema = new Schema({
    name: String,
    price: String,
    sequence: Number,
    
},{timestamps:true})

const DessertMenuCoffeeTea = mongoose.models.DessertMenuCoffeeTea || mongoose.model('DessertMenuCoffeeTea', DessertMenuCoffeeTeaSchema)

export default DessertMenuCoffeeTea
export const dynamic = 'force-dynamic'

import DessertMenu from '@/components/DessertMenu.jsx'
import connectMongoDB from '@/libs/mongodb'
import Dessert from '@/models/Dessert.js'
import DessertWine from '@/models/DessertWine.js'
import DessertMenuCoffeeTea from '@/models/DessertMenuCoffeeTea.js'


export default async function DessertPage(){

    await connectMongoDB() 
    const desserts = JSON.parse(JSON.stringify(await Dessert.find().sort({sequence:1})))
    const dessertWines = JSON.parse(JSON.stringify(await DessertWine.find().sort({sequence:1})))
    const dessertMenuCoffeesTeas = JSON.parse(JSON.stringify(await DessertMenuCoffeeTea.find().sort({sequence:1})))
    
    return(

<>
  <DessertMenu 
    desserts = {desserts}
    dessertWines = {dessertWines}
    dessertMenuCoffeesTeas={dessertMenuCoffeesTeas}
  />
</>

    ) // return
} // DessertPage()
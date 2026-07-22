import DessertMenu from '@/components/DessertMenu.jsx'
import connectMongoDB from '@/libs/mongodb'
import Dessert from '@/models/Dessert.js'

export default async function DessertPage(){

      await connectMongoDB() 
      const desserts = JSON.parse(JSON.stringify(await Dessert.find().sort({sequence:1})))
      const maxSequence = await Dessert.find().sort({sequence:-1})

    return(

<>
  <DessertMenu 
    desserts = {desserts}
    maxSequence = {maxSequence[0].sequence}
  />
</>

    ) // return
} // DessertPage()
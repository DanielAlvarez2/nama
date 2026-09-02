export const dynamic = 'force-dynamic'

import DessertMenu from '@/components/DessertMenu.jsx'
import connectMongoDB from '@/libs/mongodb'
import MenuItem from '@/models/MenuItem.js'

export default async function DessertPage(){

    await connectMongoDB() 

    const menuItems = JSON.parse(JSON.stringify(await MenuItem.find().sort({sequence:1})))
    
    return(

<>
  <DessertMenu menuItems = {menuItems} />
</>

    ) // return
} // DessertPage()
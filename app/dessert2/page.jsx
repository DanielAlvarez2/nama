export const dynamic = 'force-dynamic'

import DessertMenu2 from '@/components/DessertMenu2.jsx'
import connectMongoDB from '@/libs/mongodb'
import MenuItem from '@/models/MenuItem.js'

export default async function DessertPage2(){

    await connectMongoDB() 

    const menuItems = JSON.parse(JSON.stringify(await MenuItem.find().sort({sequence:1})))
    
    return(

<>
  <DessertMenu2 menuItems = {menuItems} />
</>

    ) // return
} // DessertPage2()

import LunchClient from '../components/LunchClient.jsx'
import MenuItem from '@/models/MenuItem.js'
import connectMongoDB from '@/libs/mongodb.js'

export const dynamic = 'force-dynamic'

export default async function ManagerLunchPage(){

  await connectMongoDB()
  const allItems = JSON.parse(JSON.stringify(await MenuItem.find({menu:'lunch'}).sort({sequence:1})))
  return(
    <LunchClient allItems={allItems} />
  )
}
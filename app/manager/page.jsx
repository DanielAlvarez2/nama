
import DinnerClient from './components/DinnerClient.jsx'
import MenuItem from '@/models/MenuItem.js'
import connectMongoDB from '@/libs/mongodb.js'


export default async function ManagerDinnerPage(){

  await connectMongoDB()
  const allItems = JSON.parse(JSON.stringify(await MenuItem.find({menu:'dinner'}).sort({sequence:1})))
  return(
    <DinnerClient allItems={allItems} />
  )
}
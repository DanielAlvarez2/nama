
import DrinksClient from './components/DrinksClient.jsx'
import MenuItem from '@/models/MenuItem.js'
import connectMongoDB from '@/libs/mongodb.js'


export default async function ManagerDrinksPage(){

  await connectMongoDB()
  const allDrinks = JSON.parse(JSON.stringify(await MenuItem.find({menu:'drink'}).sort({sequence:1})))
  return(
    <DrinksClient allDrinks={allDrinks} />
  )
}

import SakeClient from './components/SakeClient.jsx'
import SakeItem from '@/models/SakeBottle.js'
import connectMongoDB from '@/libs/mongodb.js'

export const dynamic = 'force-dynamic'

export default async function ManagerSakePage(){

  await connectMongoDB()
  const allSakes = JSON.parse(JSON.stringify(await SakeItem.find().sort({sequence:1})))
  return(
    <SakeClient allSakes={allSakes} />
  )
}
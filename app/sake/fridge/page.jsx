import SakeFridgeClient from './SakeFridgeClient.jsx'
import SakeBottle from '@/models/SakeBottle.js'
import connectMongoDB from '@/libs/mongodb.js'

export const dynamic = 'force-dynamic'

export default async function SakeFridge(){

  await connectMongoDB()
  const allSakes = JSON.parse(JSON.stringify(await SakeBottle.find().sort({sequence:1})))
  return(
    <SakeFridgeClient allSakes={allSakes} />
  )
}
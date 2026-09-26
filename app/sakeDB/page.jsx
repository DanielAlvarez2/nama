import SakeDBclient from './sakeDBclient.jsx'
import SakeBottle from '@/models/SakeBottle.js'
import connectMongoDB from '@/libs/mongodb.js'

export const dynamic = 'force-dynamic'

export default async function SakeDB(){

  await connectMongoDB()
  const allSakes = JSON.parse(JSON.stringify(await SakeBottle.find().sort({sequence:1})))
  return(
    <SakeDBclient allSakes={allSakes} />
  )
}
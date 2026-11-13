import SakeABVclient from './SakeABVclient.jsx'
import SakeBottle from '@/models/SakeBottle.js'
import connectMongoDB from '@/libs/mongodb.js'

export default async function SakeABV(){
  await connectMongoDB()
  const allSakes = JSON.parse(JSON.stringify(await SakeBottle.find()))
  return(
    <SakeABVclient allSakes={allSakes} />
  )
}
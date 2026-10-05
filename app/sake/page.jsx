import SakeClient from './sakeClient.jsx'
import SakeBottle from '@/models/SakeBottle.js'
import connectMongoDB from '@/libs/mongodb.js'

export const dynamic = 'force-dynamic'

export default async function SakePage(){

  await connectMongoDB()
  const allSakes = JSON.parse(JSON.stringify(await SakeBottle.find().sort({sequence:1})))
  return(
    <SakeClient allSakes={allSakes} />
  )
}
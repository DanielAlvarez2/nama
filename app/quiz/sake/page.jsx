import SakeBottle from "@/models/SakeBottle"
import QuizSakeClient from "./QuizSakeClient"
export const dynamic = 'force-dynamic'

export default async function QuizSakeServer(){
  const allSakeBottles = JSON.parse(JSON.stringify(await SakeBottle.find()))
  return <QuizSakeClient allSakeBottles={allSakeBottles} />
} // QuizSakeServer()
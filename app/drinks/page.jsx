export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter';
import DrinksClient from './components/DrinksClient.jsx'
import MenuItem from '@/models/MenuItem.js'

export default async function DrinksMenu(){

  const allDrinks = JSON.parse(JSON.stringify(await MenuItem.find({menu:'drink',section:'cocktails'}).sort({sequence:1})))

return(
  <DrinksClient allDrinks={allDrinks} />
)

}
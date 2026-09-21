export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'
import LunchClient from './LunchClient';
import MenuItem from '@/models/MenuItem';
import connectMongoDB from '@/libs/mongodb'


export default async function LunchMenu() {
  
  await connectMongoDB()

  const allItems = JSON.parse(JSON.stringify(await MenuItem.find().sort({sequence:1})))

  return (
    
    <LunchClient allItems={allItems} />
  )
}



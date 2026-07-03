'use server'

import connectMongoDB from '@/libs/mongodb.js'
import { NextResponse } from 'next/server'
import Dessert from '@/models/dessert.js'
import {revalidatePath} from 'next/cache'

const BASE_URL = (process.env.NODE_ENV == 'production') ? 
                    'https://nama-nyc.onrender.com' :
                    'http://localhost:3000'


export async function addDessert(formData){
    console.log('addDessert() working')
    console.log(formData.get('name'))
    console.log(formData.get('price'))
    console.log('staff-info: ')
    console.log(formData.get('staff-info'))
    if (!formData.get('name').trim() || !formData.get('price').trim()){
        console.log(`Name and Price are Required`)
        return
    }
    try{
        await connectMongoDB()
        await Dessert.create({
            name: formData.get('name'),
            allergies: formData.get('allergies'),
            description1: formData.get('description1'),
            description2: formData.get('description2'),
            price: formData.get('price'),
            staffInfo: formData.get('staff-info')
        })
        return 
    }catch(err){
        console.log(err)
    }

}
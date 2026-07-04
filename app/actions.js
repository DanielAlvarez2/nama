'use server'

import mongoose from 'mongoose'
import connectMongoDB from '@/libs/mongodb.js'
import { NextResponse } from 'next/server'
import Dessert from '@/models/Dessert.js'
import {revalidatePath} from 'next/cache'



export async function addDessert(formData){
    if (!formData.get('name').trim() || !formData.get('price').trim()){
        console.log(`Name and Price are Required`)
        return
    }
    try{
        await connectMongoDB()
        await Dessert.create({
            name: formData.get('name').trim(),
            allergies: formData.get('allergies').trim(),
            description1: formData.get('description1').trim(),
            description2: formData.get('description2').trim(),
            price: formData.get('price').trim(),
            staffInfo: formData.get('staff-info').trim()
        })
        revalidatePath('/manager/dessert')
        return 
    }catch(err){
        console.log(err)
    }
}
export async function deleteItem(Model,id){
    if(!id) return
    await connectMongoDB()
    await mongoose.model(Model).findByIdAndDelete(id)
    revalidatePath('/manager/dessert')
    return
}
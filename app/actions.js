'use server'

import mongoose from 'mongoose'
import connectMongoDB from '@/libs/mongodb.js'
import { NextResponse } from 'next/server'
import Dessert from '@/models/Dessert.js'
import {revalidatePath} from 'next/cache'



export async function addDessert(formData){
    try{
        await connectMongoDB()
        const highestSequenceDessert = await Dessert.find().sort({sequence:-1})
        await Dessert.create({
            name: formData.get('name').trim(),
            allergies: formData.get('allergies').trim(),
            description1: formData.get('description1').trim(),
            description2: formData.get('description2').trim(),
            price: formData.get('price').trim(),
            staffInfo: formData.get('staff-info').trim(),
            sequence: highestSequenceDessert[0] ? highestSequenceDessert[0].sequence + 1 : 1
        })
        revalidatePath('/manager/dessert')
        return 
    }catch(err){
        console.log(err)
    }
}
export async function editDessert(formData){
    try{
        await connectMongoDB()
        await Dessert.findByIdAndUpdate(formData.get('id'),{
            name: formData.get('name').trim(),
            allergies: formData.get('allergies').trim(),
            description1: formData.get('description1').trim(),
            description2: formData.get('description2').trim(),
            price: formData.get('price').trim(),
            staffInfo: formData.get('staff-info').trim(),
        })
        revalidatePath('/manager/dessert')
        return 
    }catch(err){
        console.log(err)
    }
}
export async function deleteItem(Model,id){
    if(!Model || !id) return
    await connectMongoDB()
    const target = await mongoose.model(Model).findById(id)
    const maxSequenceItem = await mongoose.model(Model).find().sort({sequence:-1})
    if(target.sequence != maxSequenceItem[0].sequence){
        for(let i=target.sequence+1;i<=maxSequenceItem[0].sequence;i++){
            await mongoose.model(Model).findOneAndUpdate({sequence:i},{$set:{sequence:i-1}})
        }
    }
    await mongoose.model(Model).findByIdAndDelete(id)
    revalidatePath('/manager/dessert')
    return
}
export async function moveDown(Model,id){
    if(!Model || !id) return
    await connectMongoDB()
    const target = await mongoose.model(Model).findById(id)
    await mongoose.model(Model).findOneAndUpdate({sequence:target.sequence+1},{$set:{sequence:target.sequence}})
    await mongoose.model(Model).findByIdAndUpdate(id,{sequence:target.sequence + 1}) 
    revalidatePath('/manager/dessert')
    return
}
export async function moveUp(Model,id){
    if(!Model || !id) return
    await connectMongoDB()
    const target = await mongoose.model(Model).findById(id)
    await mongoose.model(Model).findOneAndUpdate({sequence:target.sequence-1},{$set:{sequence:target.sequence}})
    await mongoose.model(Model).findByIdAndUpdate(id,{sequence:target.sequence - 1}) 
    revalidatePath('/manager/dessert')
    return
}
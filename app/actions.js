'use server'

import mongoose from 'mongoose'
import connectMongoDB from '@/libs/mongodb.js'
import { NextResponse } from 'next/server'
import Dessert from '@/models/Dessert.js'
import {revalidatePath} from 'next/cache'

import {cloudinary} from '@/libs/cloudinary.js'

export async function addDessert(formData){
    try{
        let cloudinary_public_id = ''
        let cloudinary_secure_url = ''    

        if(formData.get('preview-image')){
                const cloudinaryResponse = await cloudinary.uploader.upload(formData.get('preview-image'))
                cloudinary_public_id = cloudinaryResponse.public_id
                cloudinary_secure_url = cloudinaryResponse.secure_url
        }
        await connectMongoDB()
        const highestSequenceDessert = await Dessert.find().sort({sequence:-1})
        await Dessert.create({
            name: formData.get('name').trim(),
            allergies: formData.get('allergies').trim(),
            description1: formData.get('description1').trim(),
            description2: formData.get('description2').trim(),
            price: formData.get('price').trim(),
            staffInfo: formData.get('staff-info').trim(),
            sequence: highestSequenceDessert[0] ? highestSequenceDessert[0].sequence + 1 : 1,
            cloudinary_public_id,
            cloudinary_secure_url
        })
        revalidatePath('/manager/dessert')
        return 
    }catch(err){
        console.log(err)
    }
}
export async function editDessert(formData){
    try{
        let cloudinary_public_id = ''
        let cloudinary_secure_url = ''    
        await connectMongoDB()

            // NO PIC -> NO PIC COMPLETE
            
            // NO PIC -> ADD PIC COMPLETE
            if(!formData.get('current-image-url') && formData.get('preview-image')){
                const cloudinaryResponse = await cloudinary.uploader.upload(formData.get('preview-image'))
                cloudinary_public_id = cloudinaryResponse.public_id
                cloudinary_secure_url = cloudinaryResponse.secure_url                
            }
            
            // OLD PIC -> NEW PIC COMPLETE
            if(formData.get('current-image-url') && formData.get('preview-image')){
                await cloudinary.uploader.destroy(formData.get(cloudinary_public_id))
                const cloudinaryResponse = await cloudinary.uploader.upload(formData.get('preview-image'))
                cloudinary_public_id = cloudinaryResponse.public_id
                cloudinary_secure_url = cloudinaryResponse.secure_url                
            }

            // OLD PIC -> NO PIC
            // formData.set('price','NEW PRICE')
            // formData.get('image-file') is form:file-preview
            // formData.get('current-image-url')
            // formData.get('current-image-id') 
            

        // NO PIC -> NEW PIC
        // if(!formData.get('current-image') && formData.get('preview-image')){
        //     console.log('NO PIC -> NEW PIC')
        // }
        // OLD PIC -> NEW PIC
        // OLD PIC -> NO PIC

        await Dessert.findByIdAndUpdate(formData.get('id'),{
            name: formData.get('name').trim(),
            allergies: formData.get('allergies').trim(),
            description1: formData.get('description1').trim(),
            description2: formData.get('description2').trim(),
            price: formData.get('price').trim(),
            staffInfo: formData.get('staff-info').trim(),
            cloudinary_public_id,
            cloudinary_secure_url
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
    if(target.cloudinary_public_id){
        await cloudinary.uploader.destroy(target.cloudinary_public_id)
    }
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
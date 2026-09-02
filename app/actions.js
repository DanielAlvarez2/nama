'use server'

import mongoose from 'mongoose'
import connectMongoDB from '@/libs/mongodb.js'
import { NextResponse } from 'next/server'
import MenuItem from '@/models/MenuItem.js'
import DessertWine from '@/models/DessertWine.js'
import DessertMenuCoffeeTea from '@/models/DessertMenuCoffeeTea.js'
import {revalidatePath} from 'next/cache'

import {cloudinary} from '@/libs/cloudinary.js'

export async function deleteMenuItem(id,menu,section,path){
    if(!id || !menu || !section || !path) return
    await connectMongoDB()
    const target = await MenuItem.findById(id)
    if(target.cloudinary_public_id){
        await cloudinary.uploader.destroy(target.cloudinary_public_id)
    }
    const allMenuItems = await MenuItem.find().sort({sequence:-1})
    const menuSectionItems = allMenuItems.filter(item=>item.menu == menu && item.section == section) 
    const maxSequence = menuSectionItems[0].sequence
    const menuSectionItemsAscending = menuSectionItems.toReversed()

    if(target.sequence != maxSequence){
        for(let i=target.sequence+1;i<=maxSequence;i++){
            await MenuItem.findOneAndUpdate({sequence:i,menu,section},{$set:{sequence:i-1}})
        }
    }
    await MenuItem.findByIdAndDelete(id)
    revalidatePath(path)
    return
}



export async function addMenuItem(formData){
    try{
        let cloudinary_public_id = ''
        let cloudinary_secure_url = ''    

        if(formData.get('preview-image')){
                const cloudinaryResponse = await cloudinary.uploader.upload(formData.get('preview-image'))
                cloudinary_public_id = cloudinaryResponse.public_id
                cloudinary_secure_url = cloudinaryResponse.secure_url
        }
        await connectMongoDB()
        const highestSequenceArray = await MenuItem.find().sort({sequence:-1})
        const highestSequenceArrayFiltered= highestSequenceArray.filter(item=>item.menu == formData.get('menu') && formData.get('section'))
        const highestSequence = highestSequenceArrayFiltered[0] ? highestSequenceArrayFiltered[0].sequence : 0
        await MenuItem.create({
            menu: formData.get('menu'),
            section: formData.get('section'),
            name1: formData.get('name1').trim(),
            name2: formData.get('name2') ? formData.get('name2').trim() : '',
            upgrade1: formData.get('upgrade1') ? formData.get('upgrade1').trim() : '',
            upgrade2: formData.get('upgrade2') ? formData.get('upgrade2').trim() : '',
            upgrade3: formData.get('upgrade3') ? formData.get('upgrade3').trim() : '',
            price3: formData.get('price3') ? formData.get('price3').trim() : '',
            price2: formData.get('price2') ? formData.get('price2').trim() : '',
            price1: formData.get('price1') ? formData.get('price1').trim() : '',
            abv: formData.get('abv') ? formData.get('abv').trim() : '',
            vintage: formData.get('vintage') ? formData.get('vintage').trim() : '',
            allergies: formData.get('allergies') ? formData.get('allergies').trim() : '',
            description1: formData.get('description1') ? formData.get('description1').trim() : '',
            description2: formData.get('description2') ? formData.get('description2').trim() : '',
            typos: formData.get('typos') ? formData.get('typos').trim() : '',
            price: formData.get('price').trim(),
            staffInfo: formData.get('staff-info') ? formData.get('staff-info').trim() : '',
            sequence: highestSequence + 1,
            cloudinary_public_id,
            cloudinary_secure_url
        })
        revalidatePath(formData.get('path'))
        return 
    }catch(err){
        console.log(err)
    }
} // addMenuItem()

export async function editMenuItem(formData){
    try{
        let cloudinary_public_id = ''
        let cloudinary_secure_url = ''  
        await connectMongoDB()

            // NO PIC -> NO PIC COMPLETE

            // OLD PIC -> SAME PIC COMPLETE
            if(formData.get('current-image-url') && !formData.get('preview-image') && !formData.get('delete-image-checkbox')){
                console.log('OLD PIC -> SAME PIC')
                cloudinary_secure_url = formData.get('current-image-url')
                cloudinary_public_id = formData.get('current-image-id')
            }
            
            // NO PIC -> ADD PIC COMPLETE
            if(!formData.get('current-image-url') && formData.get('preview-image')){
                console.log('NO PIC => ADD PIC')
                const cloudinaryResponse = await cloudinary.uploader.upload(formData.get('preview-image'))
                cloudinary_public_id = cloudinaryResponse.public_id
                cloudinary_secure_url = cloudinaryResponse.secure_url                
            }
            
            // OLD PIC -> NEW PIC COMPLETE
            if(formData.get('current-image-url') && formData.get('preview-image')){
                console.log('OLD PIC -> NEW PIC')
                await cloudinary.uploader.destroy(formData.get('current-image-id'))
                const cloudinaryResponse = await cloudinary.uploader.upload(formData.get('preview-image'))
                cloudinary_public_id = cloudinaryResponse.public_id
                cloudinary_secure_url = cloudinaryResponse.secure_url                
            }
            
            // OLD PIC -> NO PIC COMPLETE
            if(formData.get('current-image-url') && formData.get('delete-image-checkbox')){
                // console.log('OLD PIC -> NO PIC')
                // console.log('cloudinary.destroy: ' + formData.get('current-image-id'))
                await cloudinary.uploader.destroy(formData.get('current-image-id'))
            }

        await MenuItem.findByIdAndUpdate(formData.get('id'),{
            name1: formData.get('name1').trim(),
            name2: formData.get('name2') ? formData.get('name2').trim() : '',
            allergies: formData.get('allergies') ? formData.get('allergies').trim() : '',
            description1: formData.get('description1') ? formData.get('description1').trim() : '',
            description2: formData.get('description2') ? formData.get('description2').trim() : '',
            typos: formData.get('typos') ? formData.get('typos').trim() : '',
            price: formData.get('price').trim(),
            staffInfo: formData.get('staff-info') ? formData.get('staff-info').trim() : '',
            cloudinary_public_id,
            cloudinary_secure_url
        })
        
        revalidatePath(formData.get('path'))
        return

    }catch(err){
        console.log(err)
    }
} 
// editMenuItem() 




export async function addDessertMenuCoffeeTea(formData){
    try{
        await connectMongoDB()
        const highestSequenceDessertMenuCoffeeTea = await DessertMenuCoffeeTea.find().sort({sequence:-1})
        await DessertMenuCoffeeTea.create({
            name: formData.get('name').trim(),
            price: formData.get('price').trim(),
            sequence: highestSequenceDessertMenuCoffeeTea[0] ? highestSequenceDessertMenuCoffeeTea[0].sequence + 1 : 1,
        })
        revalidatePath('/manager/dessert')
        return 
    }catch(err){
        console.log(err)
    }
} // addDessertMenuCoffeeTea()

export async function editDessertMenuCoffeeTea(formData){
    try{
        await connectMongoDB()
        await DessertMenuCoffeeTea.findByIdAndUpdate(formData.get('id'),{
            name: formData.get('name').trim(),
            price: formData.get('price').trim(),
        })
        
        revalidatePath('/manager/dessert')
        return

    }catch(err){
        console.log(err)
    }
} 
// editDessertMenuCoffeeTea() 



export async function addDessertWine(formData){
    try{
        let cloudinary_public_id = ''
        let cloudinary_secure_url = ''    

        if(formData.get('preview-image')){
                const cloudinaryResponse = await cloudinary.uploader.upload(formData.get('preview-image'))
                cloudinary_public_id = cloudinaryResponse.public_id
                cloudinary_secure_url = cloudinaryResponse.secure_url
        }
        await connectMongoDB()
        const highestSequenceDessertWine = await DessertWine.find().sort({sequence:-1})
        await DessertWine.create({
            name1: formData.get('name1').trim(),
            name2: formData.get('name2').trim(),
            typos: formData.get('typos').trim(),
            price: formData.get('price').trim(),
            vintage: formData.get('vintage').trim(),
            staffInfo: formData.get('staff-info').trim(),
            sequence: highestSequenceDessertWine[0] ? highestSequenceDessertWine[0].sequence + 1 : 1,
            cloudinary_public_id,
            cloudinary_secure_url
        })
        revalidatePath('/manager/dessert')
        return 
    }catch(err){
        console.log(err)
    }
} // addDessertWine()

export async function editDessertWine(formData){
    try{
        let cloudinary_public_id = ''
        let cloudinary_secure_url = ''  
        await connectMongoDB()

            // NO PIC -> NO PIC COMPLETE

            // OLD PIC -> SAME PIC COMPLETE
            if(formData.get('current-image-url') && !formData.get('preview-image') && !formData.get('delete-image-checkbox')){
                console.log('OLD PIC -> SAME PIC')
                cloudinary_secure_url = formData.get('current-image-url')
                cloudinary_public_id = formData.get('current-image-id')
            }
            
            // NO PIC -> ADD PIC COMPLETE
            if(!formData.get('current-image-url') && formData.get('preview-image')){
                console.log('NO PIC => ADD PIC')
                const cloudinaryResponse = await cloudinary.uploader.upload(formData.get('preview-image'))
                cloudinary_public_id = cloudinaryResponse.public_id
                cloudinary_secure_url = cloudinaryResponse.secure_url                
            }
            
            // OLD PIC -> NEW PIC COMPLETE
            if(formData.get('current-image-url') && formData.get('preview-image')){
                console.log('OLD PIC -> NEW PIC')
                await cloudinary.uploader.destroy(formData.get('current-image-id'))
                const cloudinaryResponse = await cloudinary.uploader.upload(formData.get('preview-image'))
                cloudinary_public_id = cloudinaryResponse.public_id
                cloudinary_secure_url = cloudinaryResponse.secure_url                
            }
            
            // OLD PIC -> NO PIC COMPLETE
            if(formData.get('current-image-url') && formData.get('delete-image-checkbox')){
                await cloudinary.uploader.destroy(formData.get('current-image-id'))
            }

        await DessertWine.findByIdAndUpdate(formData.get('id'),{
            vintage: formData.get('vintage').trim(),
            name1: formData.get('name1').trim(),
            name2: formData.get('name2').trim(),
            price: formData.get('price').trim(),
            typos: formData.get('typos').trim(),
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
// editDessertWine() 


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

export async function moveDown(id,menu,section,path){
    if(!id || !menu || !section || !path) return
    await connectMongoDB()
    const target = await MenuItem.findById(id)
    await MenuItem.findOneAndUpdate({sequence:target.sequence+1,menu,section},{$set:{sequence:target.sequence}})
    await MenuItem.findByIdAndUpdate(id,{sequence:target.sequence + 1}) 
    revalidatePath(path)
    return
}

export async function moveUp(id,menu,section,path){
    if(!id || !menu || !section || !path) return
    await connectMongoDB()
    const target = await MenuItem.findById(id)
    await MenuItem.findOneAndUpdate({sequence:target.sequence-1,menu,section},{$set:{sequence:target.sequence}})
    await MenuItem.findByIdAndUpdate(id,{sequence:target.sequence - 1}) 
    revalidatePath(path)
    return
}


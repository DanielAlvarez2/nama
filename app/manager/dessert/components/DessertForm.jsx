'use client'

import { addDessert } from "@/app/actions"
import { useActionState } from "react"
import { useState } from "react"
import { TiDeleteOutline } from "react-icons/ti";
import {useEditModeContext} from '@/context/EditModeContext'
import {useExistingImageContext} from '@/context/ExistingImageContext'


export default function DessertForm({addDessert,editDessert}){

    const {editMode,setEditMode} = useEditModeContext()   
    const {existingImage,setExistingImage} = useExistingImageContext()

    const [previewImage, setPreviewImage] = useState()
    // const [existingImage, setExistingImage] = useState()

    function handleFileInputChange(e){
        const file = e.target.files[0]
        previewFile(file)
    }
    function previewFile(file){
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = ()=> setPreviewImage(reader.result)
    }

    async function handleSubmit(formData){
        if (!formData.get('name').trim() || !formData.get('price').trim()) {
            alert('Name and Price are required')
            setTimeout(()=>{
                document.querySelector('#name-dessert').value = formData.get('name')
                document.querySelector('#allergies-dessert').value = formData.get('allergies')
                document.querySelector('#description1-dessert').value = formData.get('description1')
                document.querySelector('#description2-dessert').value = formData.get('description2')
                document.querySelector('#price-dessert').value = formData.get('price')
                document.querySelector('#staff-info').value = formData.get('staff-info')
            },10)
            return
        }
        if(editMode){
            const return_id = await editDessert(formData)
            setEditMode(false)
        }else{
            await addDessert(formData)
        }
        setTimeout(()=>{
            document.getElementById('desserts-section').scrollIntoView({behavior:'smooth'})
        },10)        
        resetForm()
    }

    function resetForm(){
        document.querySelector('#delete-image-checkbox') && (document.querySelector('#delete-image-checkbox').checked = false)
        document.querySelector('#id-dessert').value = ''
        document.querySelector('#name-dessert').value = ''
        document.querySelector('#allergies-dessert').value = ''
        document.querySelector('#description1-dessert').value = ''
        document.querySelector('#description2-dessert').value = ''
        document.querySelector('#price-dessert').value = ''
        document.querySelector('#staff-info').value = ''
        // document.querySelector('#current-img').src = ''
        document.querySelector('#current-image-url').value = ''
        document.querySelector('#current-image-id').value = ''
        document.querySelector('#image-text').textContent = ''
        // document.querySelector('#current-image-label').style.display = 'none'
        document.querySelector('#form-dessert h1').textContent = 'ADD NEW DESSERT'
        document.querySelector('#form-dessert').style.background = 'lightgreen'
        document.querySelector('#submit-button-dessert-form').innerHTML = `+ New Dessert`
        setEditMode(false)
        document.querySelector('#image-file-dessert').value = ''
        setPreviewImage('')
        setExistingImage(null)
    }

function toggleCheckbox(){
    if(document.querySelector('#delete-image-checkbox').checked == true){
        document.querySelector('#delete-icon').style.color = 'red'
        document.querySelector('#image-file-dessert').value = ''
        setPreviewImage('')
    }else{
        document.querySelector('#delete-icon').style.color = 'transparent'
    }
}

    return(
        <>
            <form   action={handleSubmit}
                    id='form-dessert'
            >
                <h1>ADD NEW DESSERT</h1>
                <br/><br/>

                <input  type='hidden' 
                        name='id' 
                        id='id-dessert' />

                <label>
                    Name: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            required
                            name='name'
                            id='name-dessert'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Allergies:<br/>
                    <input  type='text' 
                            name='allergies'
                            id='allergies-dessert'
                            style={{width:'35%'}} />
                </label>
                <br/><br/>

                <label>
                    Description Line 1:<br/>
                    <input  type='text' 
                            name='description1'
                            id='description1-dessert'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Description Line 2:<br/>
                    <input  type='text' 
                            name='description2'
                            id='description2-dessert'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Price: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            name='price'
                            required
                            id='price-dessert'
                            style={{width:'35%'}} />
                </label>
                <br/><br/>

                <label>
                    Staff Info:<br/>
                    <textarea   style={{width:'100%',height:'150px'}}
                                id='staff-info'
                                name='staff-info' />
                </label>
                <br/><br/>

                {existingImage && 
                    <label id='current-image-label'>
                        Current Image:<br/>
                        <div style={{position:'relative'}}>
                            <img    id='current-img' 
                                    src={existingImage ? existingImage : null}
                                    style={{maxWidth:'100%',maxHeight:'300px',display:'block',margin:'0 auto'}}
                            />
                            <TiDeleteOutline    size={150} 
                                                id='delete-icon'
                                                style={{color:'transparent',
                                                        position:'absolute',
                                                        bottom:'50%',
                                                        left:'50%',
                                                        transform:'translate(-50%,50%)',
                                                        // transform:'translateY(50%)',
                                                }}
                            />
                        </div>
                       
                       <br/>
                    </label>
                }
                        <input  type='hidden'
                                id='current-image-url' 
                                name='current-image-url' />
                        <input  type='hidden'
                                id='current-image-id' 
                                name='current-image-id' />

                <label>
                    <span id='image-text' style={{fontSize:'inherit'}}></span>Image File: (optional)<br/>
                    <input  type='file' 
                            name='image-file'
                            id='image-file-dessert'
                            onChange={handleFileInputChange}
                    />
                </label>
                <br/><br/>

                <input  type='hidden'
                        defaultValue={previewImage} 
                        name='preview-image' />

                {previewImage &&    <div style={{width:'100%',textAlign:'center'}}> 
                                        <img src={previewImage} style={{maxWidth:'100%',maxHeight:'300px'}} />
                                    </div>}
                {editMode && existingImage &&
                    <span style={{fontSize:'20px',display:'flex',alignItems:'center'}}>
                        <br/><br/>
                        <input  type='checkbox' 
                                onClick={toggleCheckbox}
                                id='delete-image-checkbox'
                                name='delete-image-checkbox' />  
                        &nbsp;Delete Current Image (optional)
                    </span>
                    }
                <br/><br/>
                <div style={{display:'flex'}}>
                    <button id='submit-button-dessert-form' type='submit'>+ New Dessert</button>
                    <button type='button'
                            onClick={resetForm} 
                            style={{background:'red'}}>Cancel</button>
                </div>
                

            </form>
        </>
    )
}
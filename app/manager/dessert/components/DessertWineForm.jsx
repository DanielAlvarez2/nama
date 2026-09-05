'use client'

import { addMenuItem,editMenuItem } from "@/app/actions"
import { useActionState } from "react"
import { useState } from "react"
import { TiDeleteOutline } from "react-icons/ti";
import {useEditModeContext} from '@/context/EditModeContext'
import {useExistingImageContext} from '@/context/ExistingImageContext'


export default function DessertWineForm(){

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
        if (!formData.get('name1').trim() || !formData.get('price').trim()) {
            alert('Name and Price are required')
            setTimeout(()=>{
                document.querySelector('#name1-dessert-wine').value = formData.get('name1')
                document.querySelector('#name2-dessert-wine').value = formData.get('name1')
                document.querySelector('#typos-dessert-wine').value = formData.get('typos')
                document.querySelector('#vintage-dessert-wine').value = formData.get('vintage')
                document.querySelector('#price-dessert-wine').value = formData.get('price')
                document.querySelector('#staff-info-dessert-wine').value = formData.get('staff-info')
            },10)
            return
        }
        if(editMode){
            await editMenuItem(formData)
            setEditMode(false)
        }else{
            await addMenuItem(formData)
        }
        setTimeout(()=>{
            document.getElementById('desserts-section').scrollIntoView({behavior:'smooth'})
        },10)        
        resetFormDessertWine()
    }

    function resetFormDessertWine(){
        document.querySelector('#delete-image-checkbox-dessert-wine') && (document.querySelector('#delete-image-checkbox-dessert-wine').checked = false)
        document.querySelector('#id-dessert-wine').value = ''
        document.querySelector('#vintage-dessert-wine').value = ''
        document.querySelector('#name1-dessert-wine').value = ''
        document.querySelector('#name2-dessert-wine').value = ''
        document.querySelector('#price-dessert-wine').value = ''
        document.querySelector('#staff-info-dessert-wine').value = ''
        document.querySelector('#current-image-url-dessert-wine').value = ''
        document.querySelector('#current-image-id-dessert-wine').value = ''
        document.querySelector('#image-text-dessert-wine').textContent = ''
        document.querySelector('#form-dessert-wine h1').textContent = 'ADD NEW DESSERT WINE'
        document.querySelector('#form-dessert-wine').style.background = 'lightgreen'
        document.querySelector('#submit-button-dessert-wine-form').innerHTML = `+ New Dessert Wine`
        setEditMode(false)
        document.querySelector('#image-file-dessert-wine').value = ''
        setPreviewImage('')
        setExistingImage(null)
    }

function toggleCheckbox(){
    if(document.querySelector('#delete-image-checkbox-dessert-wine').checked == true){
        document.querySelector('#delete-icon-dessert-wine').style.color = 'red'
        document.querySelector('#image-file-dessert-wine').value = ''
        setPreviewImage('')
    }else{
        document.querySelector('#delete-icon-dessert-wine').style.color = 'transparent'
    }
}

    return(
        <>
            <form   action={handleSubmit}
                    style={{marginBottom:'0px'}}
                    id='form-dessert-wine'
            >
                <h1>ADD NEW DESSERT WINE</h1>
                <br/><br/>

                <input  type='hidden' 
                        name='id' 
                        id='id-dessert-wine' />

                <input  type='hidden'
                        name='menu'
                        value='dessert' />

                <input  type='hidden'
                        name='section'
                        value='dessert wines' />

                <input  type='hidden'
                        name='path'
                        value='/manager/dessert' />

                <label>
                    Vintage: <span className="required">*REQUIRED</span><br/>
                    <input  type='text'
                            name='vintage'
                            id='vintage-dessert-wine'
                            required
                            autoComplete="off"
                            style={{width:'35%'}}
                    />
                </label>
                <br/><br/>

                <label>
                    Name (line 1): <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            required
                            autoComplete="off"
                            name='name1'
                            id='name1-dessert-wine'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Name (line 2):<br/>
                    <input  type='text' 
                            name='name2'
                            autoComplete="off"
                            id='name2-dessert-wine'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Price: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            name='price'
                            required
                            autoComplete="off"
                            id='price-dessert-wine'
                            style={{width:'35%'}} />
                </label>
                <br/><br/>

                <label>
                    Typos:<br/>
                    <input  type='text'
                            name='typos'
                            autoComplete="off"
                            id='typos-dessert-wine'
                            style={{width:'100%', color:'red'}}
                    />
                </label>
                <br/><br/>

                <label>
                    Staff Info:<br/>
                    <textarea   style={{width:'100%',height:'150px'}}
                                id='staff-info-dessert-wine'
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
                                                id='delete-icon-dessert-wine'
                                                style={{color:'transparent',
                                                        position:'absolute',
                                                        bottom:'50%',
                                                        left:'50%',
                                                        transform:'translate(-50%,50%)',
                                                }}
                            />
                        </div>
                       
                       <br/>
                    </label>
                }
                        <input  type='hidden'
                                id='current-image-url-dessert-wine' 
                                name='current-image-url' />
                        <input  type='hidden'
                                id='current-image-id-dessert-wine' 
                                name='current-image-id' />

                <label>
                    <span id='image-text-dessert-wine' style={{fontSize:'inherit'}}></span>Image File: (optional)<br/>
                    <input  type='file' 
                            name='image-file-dessert-wine'
                            id='image-file-dessert-wine'
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
                                id='delete-image-checkbox-dessert-wine'
                                name='delete-image-checkbox' />  
                        &nbsp;Delete Current Image (optional)
                    </span>
                    }
                <br/><br/>
                <div style={{display:'flex'}}>
                    <button id='submit-button-dessert-wine-form' type='submit'>+ Dessert Wine</button>
                    <button type='button'
                            onClick={resetFormDessertWine} 
                            style={{background:'red'}}>Cancel</button>
                </div>
                

            </form>
        </>
    )
}
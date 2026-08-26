'use client'

import { addDessertWine } from "@/app/actions"
import { useActionState } from "react"
import { useState } from "react"
import { TiDeleteOutline } from "react-icons/ti";
import {useEditModeContext} from '@/context/EditModeContext'
import {useExistingImageContext} from '@/context/ExistingImageContext'


export default function DessertWineForm({addDessertWine,editDessertWine}){

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
                document.querySelector('#name1').value = formData.get('name1')
                document.querySelector('#name2').value = formData.get('name1')
                document.querySelector('#typos').value = formData.get('typos')
                document.querySelector('#vintage').value = formData.get('vintage')
                document.querySelector('#price').value = formData.get('price')
                document.querySelector('#staff-info').value = formData.get('staff-info')
            },10)
            return
        }
        if(editMode){
            await editDessert(formData)
            setEditMode(false)
        }else{
            await addDessertWine(formData)
        }
        setTimeout(()=>{
            document.getElementById('desserts-section').scrollIntoView({behavior:'smooth'})
        },10)        
        resetForm()
    }

    function resetForm(){
        document.querySelector('#delete-image-checkbox') && (document.querySelector('#delete-image-checkbox').checked = false)
        document.querySelector('#id').value = ''
        document.querySelector('#name1').value = ''
        document.querySelector('#name2').value = ''
        document.querySelector('#price').value = ''
        document.querySelector('#staff-info').value = ''
        document.querySelector('#current-image-url').value = ''
        document.querySelector('#current-image-id').value = ''
        document.querySelector('#image-text').textContent = ''
        document.querySelector('#form-dessert-wine h1').textContent = 'ADD NEW DESSERT WINE'
        document.querySelector('#form-dessert-wine').style.background = 'lightgreen'
        document.querySelector('#submit-button-dessert-wine-form').innerHTML = `+ New Dessert Wine`
        setEditMode(false)
        document.querySelector('#image-file-dessert-wine').value = ''
        setPreviewImage('')
        setExistingImage(null)
    }

function toggleCheckbox(){
    if(document.querySelector('#delete-image-checkbox').checked == true){
        document.querySelector('#delete-icon').style.color = 'red'
        document.querySelector('#image-file-dessert-wine').value = ''
        setPreviewImage('')
    }else{
        document.querySelector('#delete-icon').style.color = 'transparent'
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
                        id='id' />

                <label>
                    Name (line 1): <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            required
                            autoComplete="off"
                            name='name1'
                            id='name1'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Name (line 2):<br/>
                    <input  type='text' 
                            name='name2'
                            autoComplete="off"
                            id='name2'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>


                <label>
                    Typos:<br/>
                    <input  type='text'
                            name='typos'
                            autoComplete="off"
                            id='typos'
                            style={{width:'100%', color:'red'}}
                    />
                </label>
                <br/><br/>

                <label>
                    Vintage:<br/>
                    <input  type='text'
                            name='vintage'
                            id='vintage'
                            autoComplete="off"
                            style={{width:'35%'}}
                    />
                </label>
                <br/><br/>

                <label>
                    Price: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            name='price'
                            required
                            autoComplete="off"
                            id='price'
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
                                id='delete-image-checkbox'
                                name='delete-image-checkbox' />  
                        &nbsp;Delete Current Image (optional)
                    </span>
                    }
                <br/><br/>
                <div style={{display:'flex'}}>
                    <button id='submit-button-dessert-wine-form' type='submit'>+ Dessert Wine</button>
                    <button type='button'
                            onClick={resetForm} 
                            style={{background:'red'}}>Cancel</button>
                </div>
                

            </form>
        </>
    )
}
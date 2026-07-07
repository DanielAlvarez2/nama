'use client'

import { addDessert } from "@/app/actions"
import { useActionState } from "react"
import { useState } from "react"

export default function DessertForm({addDessert,editDessert}){

    const [previewImage, setPreviewImage] = useState()
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
        if(formData.get('edit-boolean') == 'true'){
            // alert('update dessert')
            await editDessert(formData)
        }else{
            // alert('add new dessert')
            await addDessert(formData)
        }
        resetForm()
        document.getElementById('desserts-section').scrollIntoView({behavior:'smooth'})
    }

    function resetForm(){
        document.querySelector('#id-dessert').value = ''
        document.querySelector('#name-dessert').value = ''
        document.querySelector('#allergies-dessert').value = ''
        document.querySelector('#description1-dessert').value = ''
        document.querySelector('#description2-dessert').value = ''
        document.querySelector('#price-dessert').value = ''
        document.querySelector('#staff-info').value = ''
        document.querySelector('#form-dessert h1').textContent = 'ADD NEW DESSERT'
        document.querySelector('#form-dessert').style.background = 'lightgreen'
        document.querySelector('#submit-button-dessert-form').innerHTML = `+ Add New Dessert`
        document.querySelector('#edit-boolean').value = 'false'
        document.querySelector('#image-file-dessert').value = ''
        setPreviewImage('')
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

                <input  type='hidden'
                        name='edit-boolean'
                        id='edit-boolean'
                        value='false' />

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

                <label>
                    Image File: (optional)<br/>
                    <input  type='file' 
                            name='image-file'
                            id='image-file-dessert'
                            onChange={handleFileInputChange}
                    />
                </label>
                <br/><br/>

                {previewImage &&    <div style={{width:'100%',textAlign:'center'}}> 
                                        <img src={previewImage} style={{maxWidth:'100%',maxHeight:'300px'}} />
                                    </div>}


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
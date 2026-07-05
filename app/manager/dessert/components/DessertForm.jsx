'use client'

import { addDessert } from "@/app/actions"
import { useActionState } from "react"
import { useState } from "react"

export default function DessertForm({addDessert}){

    const [editMode, setEditMode] = useState(false)

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
        await addDessert(formData)
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

                <label>
                    Image File: (optional)<br/>
                    <input  type='file' 
                            name='image-file'
                            id='image-file-dessert'
                    />
                </label>
                <br/><br/>

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
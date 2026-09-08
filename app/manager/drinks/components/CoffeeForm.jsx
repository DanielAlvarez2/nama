'use client'

import {useEditModeContext} from '@/context/EditModeContext'
import {addMenuItem,editMenuItem} from '@/app/actions.js'


export default function CoffeeForm(){

    const {editMode,setEditMode} = useEditModeContext()   

    async function handleSubmit(formData){
        if (!formData.get('name1').trim() || !formData.get('price').trim()) {
            alert('Name and Price are required')
            setTimeout(()=>{
                document.querySelector('#name-dessert-menu-coffee-tea').value = formData.get('name1')
                document.querySelector('#price-dessert-menu-coffee-tea').value = formData.get('price')
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
            document.querySelector('.section-dessert').scrollIntoView({behavior:'smooth'})
        },10)        
        resetForm()
    }

    function resetForm(){
        document.querySelector('#id').value = ''
        document.querySelector('#name1').value = ''
        document.querySelector('#price').value = ''
        document.querySelector('#form h1').textContent = 'ADD NEW COFFEE/TEA'
        document.querySelector('#form').style.background = 'lightgreen'
        document.querySelector('#submit-button').innerHTML = `+ New Coffee/Tea`
        setEditMode(false)
    }


    return(
        <>
            <form   action={handleSubmit}
                    style={{marginBottom:'0px'}}
                    id='form'
            >
                <h1>ADD NEW COFFEE/TEA</h1>
                <br/><br/>

                <input  type='hidden' 
                        name='id' 
                        id='id' />

                <input  type='hidden'
                        name='menu'
                        value='drink'
                />

                <input  type='hidden'
                        name='section'
                        value='coffee'
                />

                <input  type='hidden'
                        name='path'
                        value='/manager/drinks' />

                <label>
                    Name: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            required
                            autoComplete="off"
                            name='name1'
                            id='name1'
                            style={{width:'100%'}} />
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






                <div style={{display:'flex'}}>
                    <button id='submit-button' type='submit'>+ Coffee/Tea</button>
                    <button type='button'
                            onClick={resetForm} 
                            style={{background:'red'}}>Cancel</button>
                </div>
                

            </form>
        </>
    )
}
'use client'

import {useEditModeContext} from '@/context/EditModeContext'
import {addMenuItem} from '@/app/actions.js'


export default function DessertMenuCoffeesForm({addDessertMenuCoffeeTea,editDessertMenuCoffeeTea}){

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
            document.getElementById('desserts-section').scrollIntoView({behavior:'smooth'})
        },10)        
        resetFormDessertMenuCoffee()
    }

    function resetFormDessertMenuCoffee(){
        document.querySelector('#id-dessert-menu-coffee').value = ''
        document.querySelector('#name-dessert-menu-coffee').value = ''
        document.querySelector('#price-dessert-menu-coffee').value = ''
        document.querySelector('#form-dessert-menu-coffee h1').textContent = 'ADD NEW COFFEE/TEA'
        document.querySelector('#form-dessert-menu-coffee').style.background = 'lightgreen'
        document.querySelector('#submit-button-dessert-menu-coffee').innerHTML = `+ New Coffee/Tea`
        setEditMode(false)
    }


    return(
        <>
            <form   action={handleSubmit}
                    style={{marginBottom:'0px'}}
                    id='form-dessert-menu-coffee'
            >
                <h1>ADD NEW COFFEE/TEA</h1>
                <br/><br/>

                <input  type='hidden' 
                        name='id' 
                        id='id-dessert-menu-coffee' />

                <input  type='hidden'
                        name='menu'
                        value='dessert'
                />

                <input  type='hidden'
                        name='section'
                        value='coffee'
                />


                <label>
                    Name: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            required
                            autoComplete="off"
                            name='name1'
                            id='name-dessert-menu-coffee'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>


                <label>
                    Price: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            name='price'
                            required
                            autoComplete="off"
                            id='price-dessert-menu-coffee'
                            style={{width:'35%'}} />
                </label>
                <br/><br/>






                <div style={{display:'flex'}}>
                    <button id='submit-button-dessert-menu-coffee' type='submit'>+ Coffee/Tea</button>
                    <button type='button'
                            onClick={resetFormDessertMenuCoffee} 
                            style={{background:'red'}}>Cancel</button>
                </div>
                

            </form>
        </>
    )
}
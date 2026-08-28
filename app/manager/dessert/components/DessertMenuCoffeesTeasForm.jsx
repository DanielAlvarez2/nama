'use client'

import {useEditModeContext} from '@/context/EditModeContext'


export default function DessertMenuCoffeesTeasForm({addDessertMenuCoffeeTea,editDessertMenuCoffeeTea}){

    const {editMode,setEditMode} = useEditModeContext()   

    async function handleSubmit(formData){
        if (!formData.get('name').trim() || !formData.get('price').trim()) {
            alert('Name and Price are required')
            setTimeout(()=>{
                document.querySelector('#name-dessert-menu-coffee-tea').value = formData.get('name')
                document.querySelector('#price-dessert-menu-coffee-tea').value = formData.get('price')
            },10)
            return
        }
        if(editMode){
            await editDessertMenuCoffeeTea(formData)
            setEditMode(false)
        }else{
            await addDessertMenuCoffeeTea(formData)
        }
        setTimeout(()=>{
            document.getElementById('desserts-section').scrollIntoView({behavior:'smooth'})
        },10)        
        resetFormDessertMenuCoffeeTea()
    }

    function resetFormDessertMenuCoffeeTea(){
        document.querySelector('#id-dessert-menu-coffee-tea').value = ''
        document.querySelector('#name-dessert-menu-coffee-tea').value = ''
        document.querySelector('#price-dessert-menu-coffee-tea').value = ''
        document.querySelector('#form-dessert-menu-coffees-teas h1').textContent = 'ADD NEW COFFEE/TEA'
        document.querySelector('#form-dessert-menu-coffees-teas').style.background = 'lightgreen'
        document.querySelector('#submit-button-dessert-menu-coffees-teas').innerHTML = `+ New Coffee/Tea`
        setEditMode(false)
    }


    return(
        <>
            <form   action={handleSubmit}
                    style={{marginBottom:'0px'}}
                    id='form-dessert-menu-coffees-teas'
            >
                <h1>ADD NEW COFFEE/TEA</h1>
                <br/><br/>

                <input  type='hidden' 
                        name='id' 
                        id='id-dessert-menu-coffee-tea' />


                <label>
                    Name: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            required
                            autoComplete="off"
                            name='name'
                            id='name-dessert-menu-coffee-tea'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>


                <label>
                    Price: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            name='price'
                            required
                            autoComplete="off"
                            id='price-dessert-menu-coffee-tea'
                            style={{width:'35%'}} />
                </label>
                <br/><br/>






                <div style={{display:'flex'}}>
                    <button id='submit-button-dessert-menu-coffees-teas' type='submit'>+ Coffee/Tea</button>
                    <button type='button'
                            onClick={resetFormDessertMenuCoffeeTea} 
                            style={{background:'red'}}>Cancel</button>
                </div>
                

            </form>
        </>
    )
}
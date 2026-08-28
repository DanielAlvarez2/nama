'use client'

import { deleteItem,moveDown,moveUp } from "@/app/actions.js"
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import {useEditModeContext} from '@/context/EditModeContext'

export default function DessertMenuCoffeesTeasItem(props){

    const {editMode,setEditMode} = useEditModeContext()

    function editDessertMenuCoffeeTea(id,
                                      name,
                                      price,){
        document.querySelector('#id-dessert-menu-coffee-tea').value = id
        document.querySelector('#name-dessert-menu-coffee-tea').value = name
        document.querySelector('#price-dessert-menu-coffee-tea').value = price
        document.querySelector('#form-dessert-menu-coffees-teas h1').textContent = 'EDIT COFFEE/TEA'
        document.querySelector('#form-dessert-menu-coffees-teas').style.background = 'lightblue'
        document.querySelector('#submit-button-dessert-menu-coffees-teas').innerHTML = `Update Coffee/Tea`
        setEditMode(true)
        setTimeout(()=>{
          document.getElementById('form-dessert-menu-coffees-teas').scrollIntoView({behavior:'smooth'})
        }
          ,10)
    }
    return(
        <> 
                <div  className="dinner-menu-item"
                      style={{border:'1px solid #888',
                              borderRadius:'10px',
                              padding:'5px'
                      }}
                    //   onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>{props.name}</div>
                    <div className="price">{props.price}</div>  
                  </div>

                  
                    <span   className="item-button edit-button"
                            onClick={()=>editDessertMenuCoffeeTea(props.id,
                                                                  props.name,
                                                                  props.price,
                                    )}
                    >EDIT</span>
                    <span   className="item-button delete-button"
                            onClick={()=>deleteItem('DessertMenuCoffeeTea',props.id)}
                    >
                        DELETE
                    </span>
                    <span onClick={()=>moveUp('DessertMenuCoffeeTea',props.id)}
                          className={`item-button arrow-button ${props.sequence == 1 ? 'visibility-hidden' : ''}`}>
                        <ImArrowUp style={{ position:'relative',
                                            
                                            top:'1px'}} />
                    </span>
                    <span onClick={()=>moveDown('DessertMenuCoffeeTea',props.id)}
                          className={`item-button arrow-button ${props.sequence == props.maxSequenceDessertMenuCoffeesTeas ? 'visibility-hidden' : ''}`}>
                        <ImArrowDown style={{position:'relative',top:'2px'}} />
                    </span>
                </div>

        </>
    )
}
'use client'

import { deleteMenuItem,moveDown,moveUp } from "@/app/actions.js"
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import {useEditModeContext} from '@/context/EditModeContext'

export default function CoffeeItem(props){

    const {editMode,setEditMode} = useEditModeContext()

    function editCoffee(id,
                                      name1,
                                      price,){
        document.querySelector('#id').value = id
        document.querySelector('#name').value = name1
        document.querySelector('#price').value = price
        document.querySelector('#form h1').textContent = 'EDIT COFFEE/TEA'
        document.querySelector('#form').style.background = 'lightblue'
        document.querySelector('#submit-button').innerHTML = `Update Coffee/Tea`
        setEditMode(true)
        setTimeout(()=>{
          document.getElementById('form').scrollIntoView({behavior:'smooth'})
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
                    <div>{props.name1}</div>
                    <div className="price">{props.price}</div>  
                  </div>

                  
                    <span   className="item-button edit-button"
                            onClick={()=>editCoffee(props.id,
                                                                  props.name1,
                                                                  props.price,
                                    )}
                    >EDIT</span>
                    <span   className="item-button delete-button"
                            onClick={()=>deleteMenuItem(props.id,'drink','coffee','/manager/drinks')}
                    >
                        DELETE
                    </span>
                    <span onClick={()=>moveUp(props.id,'drink','coffee','/manager/drinks')}
                          className={`item-button arrow-button ${props.sequence == 1 ? 'visibility-hidden' : ''}`}>
                        <ImArrowUp style={{ position:'relative',
                                            
                                            top:'1px'}} />
                    </span>
                    <span onClick={()=>moveDown(props.id,'drink','coffee','/manager/drinks')}
                          className={`item-button arrow-button ${props.sequence == props.maxSequence ? 'visibility-hidden' : ''}`}>
                        <ImArrowDown style={{position:'relative',top:'2px'}} />
                    </span>
                </div>

        </>
    )
}
'use client'

import { deleteItem,moveDown,moveUp } from "@/app/actions.js"
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";

export default function DessertItem(props){

    function editDessert(id,name,allergies,description1,description2,price,staffInfo){
        document.getElementById('id-dessert').value = id  
        document.querySelector('#name-dessert').value = name
        document.querySelector('#allergies-dessert').value = allergies
        document.querySelector('#description1-dessert').value = description1
        document.querySelector('#description2-dessert').value = description2
        document.querySelector('#price-dessert').value = price
        document.querySelector('#staff-info').value = staffInfo
        document.querySelector('#form-dessert h1').textContent = 'EDIT DESSERT'
        document.querySelector('#form-dessert').style.background = 'lightblue'
        document.querySelector('#submit-button-dessert-form').innerHTML = `Update Dessert`
        document.querySelector('#edit-boolean').value = 'true'
        setTimeout(()=>document.getElementById('form-dessert').scrollIntoView({behavior:'smooth'}),10)
                
    }
    return(
        <> 
                <div  className="dinner-menu-item"
                    //   onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <img  src={props.cloudinary_secure_url} 
                        style={{maxWidth:'100%',maxHeight:'100px'}}
                  />
                  <div className="name-price">
                    <span>
                      <span className="name">{props.name}</span>
                      {props.allergies && 
                        <span className="allergies">({props.allergies})</span>
                      }
                    </span>
                    <span className="price">{props.price}</span>
                  </div>
                  <div className="description1" dangerouslySetInnerHTML={{__html:props.description1}}></div>
                  <div className="description2" dangerouslySetInnerHTML={{__html:props.description2}}></div>
                    <span   className="item-button edit-button"
                            onClick={()=>editDessert(   props.id,
                                                        props.name,
                                                        props.allergies,
                                                        props.description1,
                                                        props.description2,
                                                        props.price,
                                                        props.staffInfo
                                    )}
                    >EDIT</span>
                    <span   className="item-button delete-button"
                            onClick={()=>deleteItem('Dessert',props.id)}
                    >
                        DELETE
                    </span>
                    <span onClick={()=>moveUp('Dessert',props.id)}
                          className={`item-button arrow-button ${props.sequence == 1 ? 'visibility-hidden' : ''}`}>
                        <ImArrowUp style={{ position:'relative',
                                            
                                            top:'1px'}} />
                    </span>
                    <span onClick={()=>moveDown('Dessert',props.id)}
                          className={`item-button arrow-button ${props.sequence == props.maxSequence ? 'visibility-hidden' : ''}`}>
                        <ImArrowDown style={{position:'relative',top:'2px'}} />
                    </span>
                </div>

        </>
    )
}
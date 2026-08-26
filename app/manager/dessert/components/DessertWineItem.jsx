'use client'

import { deleteItem,moveDown,moveUp } from "@/app/actions.js"
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { useState } from "react";
import {useEditModeContext} from '@/context/EditModeContext'
import {useExistingImageContext} from '@/context/ExistingImageContext'

export default function DessertWineItem(props){

    const {editMode,setEditMode} = useEditModeContext()
    const {existingImage,setExistingImage} = useExistingImageContext()

    function editDessert( id,
                          name1,
                          name2,
                          allergies,
                          description1,
                          description2,
                          typos,
                          price,
                          staffInfo,
                          currentImageURL,
                          currentImageID){
        document.getElementById('id-dessert').value = id  
        document.querySelector('#name-dessert').value = name
        document.querySelector('#allergies-dessert').value = allergies
        document.querySelector('#description1-dessert').value = description1
        document.querySelector('#description2-dessert').value = description2
        document.querySelector('#typos').value = typos ? typos : ''
        document.querySelector('#price-dessert').value = price
        document.querySelector('#staff-info').value = staffInfo 
        // document.querySelector('#current-img').src = currentImageURL ? currentImageURL : '/no-image.jpg'
        document.querySelector('#current-image-url').value = currentImageURL
        document.querySelector('#current-image-id').value = currentImageID
        // document.querySelector('#current-image-id').value = 'TESTING123'
        document.querySelector('#image-text').textContent = currentImageURL ? 'Replace ' : 'Add '
        // document.querySelector('#current-image-label').style.display = 'block'
        document.querySelector('#form-dessert h1').textContent = 'EDIT DESSERT'
        document.querySelector('#form-dessert').style.background = 'lightblue'
        document.querySelector('#submit-button-dessert-form').innerHTML = `Update Dessert`
        setEditMode(true)
        setExistingImage(currentImageURL ? currentImageURL : null)
        document.querySelector('#delete-image-checkbox') && (document.querySelector('#delete-image-checkbox').checked = false)
        setTimeout(()=>{
          document.getElementById('form-dessert').scrollIntoView({behavior:'smooth'})
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
                  <img  src={props.cloudinary_secure_url ? props.cloudinary_secure_url : '/pixel-transparent.png'} 
                        style={{maxWidth: props.cloudinary_secure_url ? '100%' : '0',
                                maxHeight: props.cloudinary_secure_url ? '100px' : '0',
                                margin:'0 auto',
                                display:'block',
                                // border:'5px solid pink'
                              }}
                        id={`img-${props.id}`}
                  />
                  
                  <div style={{display:'flex'}}>
                    <div style={{width:'7ch'}}>{props.vintage}</div>
                    <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                      <div>
                        <span>{props.name1}</span><br/>
                        <span>{props.name2}</span>
                      </div>
                      <span className="price">{props.price}</span>
                    </div>  
                  </div>

                  <div className="typos" style={{color:'red'}} dangerouslySetInnerHTML={{__html:props.typos}}></div>
                    <span   className="item-button edit-button"
                            onClick={()=>editDessert(   props.id,
                                                        props.name,
                                                        props.allergies,
                                                        props.description1,
                                                        props.description2,
                                                        props.typos,
                                                        props.price,
                                                        props.staffInfo,
                                                        props.cloudinary_secure_url,
                                                        props.cloudinary_public_id,
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
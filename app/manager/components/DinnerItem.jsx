'use client'

import { deleteMenuItem,moveDown,moveUp } from "@/app/actions.js"
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { useState } from "react";
import {useEditModeContext} from '@/context/EditModeContext'
import {useExistingImageContext} from '@/context/ExistingImageContext'

export default function DinnerItem(props){

    const {editMode,setEditMode} = useEditModeContext()
    const {existingImage,setExistingImage} = useExistingImageContext()

    function editItem(
                    section,
                        id,
                          name1,
                          allergies,
                          description1,
                          price,
                          upgrade1,
                          price1,
                          upgrade2,
                          price2,
                          upgrade3,
                          price3,
                          typos,
                          staffInfo,
                          currentImageURL,
                          currentImageID){
        document.querySelector('#id').value = id  
        document.querySelector('#section').value = section  
        document.querySelector('#name1').value = name1
        document.querySelector('#allergies').value = allergies
        document.querySelector('#description1').value = description1
        document.querySelector('#upgrade1').value = upgrade1
        document.querySelector('#price1').value = price1
        document.querySelector('#price2').value = price2
        document.querySelector('#price3').value = price3
        document.querySelector('#upgrade2').value = upgrade2
        document.querySelector('#upgrade3').value = upgrade3
        document.querySelector('#typos').value = typos
        document.querySelector('#price').value = price
        document.querySelector('#staff-info').value = staffInfo 
        // document.querySelector('#current-img').src = currentImageURL ? currentImageURL : '/no-image.jpg'
        document.querySelector('#current-image-url').value = currentImageURL
        document.querySelector('#current-image-id').value = currentImageID
        // document.querySelector('#current-image-id').value = 'TESTING123'
        document.querySelector('#image-text').textContent = currentImageURL ? 'Replace ' : 'Add '
        // document.querySelector('#current-image-label').style.display = 'block'
        document.querySelector('#form h1').textContent = `EDIT ${section.toUpperCase()}`
        document.querySelector('#form').style.background = 'lightblue'
        document.querySelector('#submit-button-form').innerHTML = `Update ${section}`
        setEditMode(true)
        setExistingImage(currentImageURL ? currentImageURL : null)
        document.querySelector('#delete-image-checkbox') && (document.querySelector('#delete-image-checkbox').checked = false)
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
                  <img  src={props.cloudinary_secure_url ? props.cloudinary_secure_url : '/pixel-transparent.png'} 
                        style={{maxWidth: props.cloudinary_secure_url ? '100%' : '0',
                                maxHeight: props.cloudinary_secure_url ? '100px' : '0',
                                margin:'0 auto',
                                display:'block',
                                // border:'5px solid pink'
                              }}
                        id={`img-${props.id}`}
                  />
                  <div className="name-price">
                    <span>
                      <span className="name">{props.name1}</span>
                      { props.allergies && <span> ({props.allergies})</span>}
                    </span>
                    <span className="price">{props.price}</span>
                  </div>
                  <div className="description1" dangerouslySetInnerHTML={{__html:props.description1}}></div>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <span>{props.upgrade1}</span>
                    <span>{props.price1}</span>
                  </div>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <span>{props.upgrade2}</span>
                    <span>{props.price2}</span>
                  </div>
                  <div style={{display:'flex',justifyContent:'space-between'}}>
                    <span>{props.upgrade3}</span>
                    <span>{props.price3}</span>
                  </div>
                  <div className="typos" style={{color:'red'}} dangerouslySetInnerHTML={{__html:props.typos}}></div>
                    <span   className="item-button edit-button"
                            onClick={()=>editItem(      
                              props.section,
                              props.id,
                              props.name1,
                              props.allergies,
                              props.description1,
                              props.price,
                              props.upgrade1,
                              props.price1,
                              props.upgrade2,
                              props.price2,
                              props.upgrade3,
                              props.price3,
                              props.typos,
                              props.staffInfo,                                                    props.cloudinary_secure_url,
                              props.cloudinary_secure_url,
                              props.cloudinary_public_id,
                                    )}
                    >EDIT</span>
                    <span   className="item-button delete-button"
                            onClick={()=>deleteMenuItem(props.id,'dinner',props.section,'/manager')}
                    >
                        DELETE
                    </span>
                    <span onClick={()=>moveUp(props.id,'dinner',props.section,'/manager')}
                          className={`item-button arrow-button ${props.sequence == 1 ? 'visibility-hidden' : ''}`}>
                        <ImArrowUp style={{ position:'relative',
                                            
                                            top:'1px'}} />
                    </span>
                    <span onClick={()=>moveDown(props.id,'dinner',props.section,'/manager')}
                          className={`item-button arrow-button ${props.sequence == props.maxSequence ? 'visibility-hidden' : ''}`}>
                        <ImArrowDown style={{position:'relative',top:'2px'}} />
                    </span>
                </div>

        </>
    )
}
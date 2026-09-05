'use client'

import { deleteMenuItem,moveDown,moveUp } from "@/app/actions.js"
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { useState } from "react";
import {useEditModeContext} from '@/context/EditModeContext'
import {useExistingImageContext} from '@/context/ExistingImageContext'

export default function MocktailItem(props){

    const {editMode,setEditMode} = useEditModeContext()
    const {existingImage,setExistingImage} = useExistingImageContext()

    function editMocktail(id,
                          name1,
                          description1,
                          description2,
                          typos,
                          price,
                          staffInfo,
                          currentImageURL,
                          currentImageID){
        document.getElementById('id-mocktail').value = id  
        document.querySelector('#name1-mocktail').value = name1
        document.querySelector('#description1-mocktail').value = description1
        document.querySelector('#description2-mocktail').value = description2
        document.querySelector('#typos-mocktail').value = typos
        document.querySelector('#price-mocktail').value = price
        document.querySelector('#staff-info-mocktail').value = staffInfo 
        // document.querySelector('#current-img').src = currentImageURL ? currentImageURL : '/no-image.jpg'
        document.querySelector('#current-image-url').value = currentImageURL
        document.querySelector('#current-image-id').value = currentImageID
        // document.querySelector('#current-image-id').value = 'TESTING123'
        document.querySelector('#image-text').textContent = currentImageURL ? 'Replace ' : 'Add '
        // document.querySelector('#current-image-label').style.display = 'block'
        document.querySelector('#form-mocktail h1').textContent = 'EDIT MOCKTAIL'
        document.querySelector('#form-mocktail').style.background = 'lightblue'
        document.querySelector('#submit-button-mocktail-form').innerHTML = `Update Mocktail`
        setEditMode(true)
        setExistingImage(currentImageURL ? currentImageURL : null)
        document.querySelector('#delete-image-checkbox') && (document.querySelector('#delete-image-checkbox').checked = false)
        setTimeout(()=>{
          document.getElementById('form-mocktail').scrollIntoView({behavior:'smooth'})
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
                    </span>
                    <span className="price">{props.price}</span>
                  </div>
                  <div className="description1" dangerouslySetInnerHTML={{__html:props.description1}}></div>
                  <div className="description2" dangerouslySetInnerHTML={{__html:props.description2}}></div>
                  <div className="typos" style={{color:'red'}} dangerouslySetInnerHTML={{__html:props.typos}}></div>
                    <span   className="item-button edit-button"
                            onClick={()=>editMocktail(  props.id,
                                                        props.name1,
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
                            onClick={()=>deleteMenuItem(props.id,'drink','mocktails','/manager/drinks')}
                    >
                        DELETE
                    </span>
                    <span onClick={()=>moveUp(props.id,'drink','mocktails','/manager/drinks')}
                          className={`item-button arrow-button ${props.sequence == 1 ? 'visibility-hidden' : ''}`}>
                        <ImArrowUp style={{ position:'relative',
                                            
                                            top:'1px'}} />
                    </span>
                    <span onClick={()=>moveDown(props.id,'drink','mocktails','/manager/drinks')}
                          className={`item-button arrow-button ${props.sequence == props.maxSequence ? 'visibility-hidden' : ''}`}>
                        <ImArrowDown style={{position:'relative',top:'2px'}} />
                    </span>
                </div>

        </>
    )
}
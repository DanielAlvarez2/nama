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

    function editDessertWine( id,
                              vintage,
                              name1,
                              name2,
                              price,
                              typos,
                              staffInfo,
                              currentImageURL,
                              currentImageID){
        document.querySelector('#id-dessert-wine').value = id
        document.querySelector('#vintage-dessert-wine').value = vintage
        document.querySelector('#name1-dessert-wine').value = name1
        document.querySelector('#name2-dessert-wine').value = name2
        document.querySelector('#price-dessert-wine').value = price
        document.querySelector('#typos-dessert-wine').value = typos ? typos : ''
        document.querySelector('#staff-info-dessert-wine').value = staffInfo 
        // document.querySelector('#current-img').src = currentImageURL ? currentImageURL : '/no-image.jpg'
        document.querySelector('#current-image-url-dessert-wine').value = currentImageURL
        document.querySelector('#current-image-id-dessert-wine').value = currentImageID
        // document.querySelector('#current-image-id').value = 'TESTING123'
        document.querySelector('#image-text-dessert-wine').textContent = currentImageURL ? 'Replace ' : 'Add '
        // document.querySelector('#current-image-label').style.display = 'block'
        document.querySelector('#form-dessert-wine h1').textContent = 'EDIT DESSERT WINE'
        document.querySelector('#form-dessert-wine').style.background = 'lightblue'
        document.querySelector('#submit-button-dessert-wine-form').innerHTML = `Update Dessert Wine`
        setEditMode(true)
        setExistingImage(currentImageURL ? currentImageURL : null)
        document.querySelector('#delete-image-checkbox-dessert-wine') && (document.querySelector('#delete-image-checkbox-dessert-wine').checked = false)
        setTimeout(()=>{
          document.getElementById('form-dessert-wine').scrollIntoView({behavior:'smooth'})
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
                            onClick={()=>editDessertWine( props.id,
                                                          props.vintage,
                                                          props.name1,
                                                          props.name2,
                                                          props.price,
                                                          props.typos,
                                                          props.staffInfo,
                                                          props.cloudinary_secure_url,
                                                          props.cloudinary_public_id,
                                    )}
                    >EDIT</span>
                    <span   className="item-button delete-button"
                            onClick={()=>deleteItem('DessertWine',props.id)}
                    >
                        DELETE
                    </span>
                    <span onClick={()=>moveUp('DessertWine',props.id)}
                          className={`item-button arrow-button ${props.sequence == 1 ? 'visibility-hidden' : ''}`}>
                        <ImArrowUp style={{ position:'relative',
                                            
                                            top:'1px'}} />
                    </span>
                    <span onClick={()=>moveDown('DessertWine',props.id)}
                          className={`item-button arrow-button ${props.sequence == props.maxSequenceDessertWines ? 'visibility-hidden' : ''}`}>
                        <ImArrowDown style={{position:'relative',top:'2px'}} />
                    </span>
                </div>

        </>
    )
}
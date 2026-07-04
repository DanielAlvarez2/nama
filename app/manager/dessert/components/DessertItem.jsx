'use client'

import { deleteItem } from "@/app/actions.js"
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";

export default function Dessert(props){
    return(
        <> 
                <div  className="dinner-menu-item"
                    //   onClick={()=>showModal('hojicha-banana-roulade')}
                >
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
                    <span   className="item-button edit-button">EDIT</span>
                    <span   className="item-button delete-button"
                            onClick={()=>deleteItem('Dessert',props.id)}
                    >
                        DELETE
                    </span>
                    <span className="item-button arrow-button">
                        <ImArrowUp style={{position:'relative',top:'1px'}} />
                    </span>
                    <span className="item-button arrow-button">
                        <ImArrowDown style={{position:'relative',top:'2px'}} />
                    </span>
                </div>

        </>
    )
}
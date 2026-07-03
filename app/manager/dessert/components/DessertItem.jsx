'use client'

export default function Dessert(props){
    return(
        <> 
                <div  className="dinner-menu-item"
                    //   onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">{props.name}</span>
                      <span className="allergies">({props.allergies})</span>
                    </span>
                    <span className="price">{props.price}</span>
                  </div>
                  <div className="description1" dangerouslySetInnerHTML={{__html:props.description1}}></div>
                  <div className="description2" dangerouslySetInnerHTML={{__html:props.description2}}></div>
                </div>

        </>
    )
}
'use client'

import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'

// export const dynamic = 'force-dynamic'

export default function DessertMenu({desserts}){
    const router = useRouter()
    useEffect(()=> router.refresh(),[])
    // router.refresh()
    function showModal(menuItem){
        document.querySelector(`#${menuItem}`).style.display = 'grid'
    }

    function closeModals(){
        document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
    }

    function openModalDessert(name,
                              allergies,
                              price,
                              description1,
                              description2,
                              typos,
                              staffInfo,
                              img_src
    ){
      document.querySelector('#modal-dessert-name').innerHTML = name
      document.querySelector('#modal-dessert-description1').innerHTML = description1
      document.querySelector('#modal-dessert-description2').innerHTML = description2
      document.querySelector('#modal-dessert-typos').innerHTML = typos ? typos : ''
      document.querySelector('#modal-dessert-staff-info').innerHTML = staffInfo
      document.querySelector('#modal-dessert-img').src = img_src
      document.querySelector('#modal-dessert-price').innerHTML = price
      document.querySelector('#modal-dessert-allergies').innerHTML = `(${allergies})`
      document.querySelector('#modal-dessert').style.display = 'grid'
    }

    return(
    <div className='webpage'>

      <Navbar page='dessert' />
    
      <div  className="dessert-menu-page" 
            // style={{backgroundImage:'url(akari-dessert-1.jpg)',backgroundSize:'5.5in'}}
      >
        
          <div 
          // className="menu-items"
          >
            <div 
            // className="section section-dessert"
            
            >
              <div className="left-column">
                <div className='dessert-menu-h1'>Desserts</div>
                <div className='kanji'>カクテル</div>
              
              </div>

              <div className="right-column" style={{width:'100%',lineHeight:'1.25'}}>
              
                {desserts.map(item=>(
                  <div  key={item._id} 
                        className='dinner-menu-item'
                        onClick={()=>openModalDessert(item.name,
                                                      item.allergies,
                                                      item.price,
                                                      item.description1,
                                                      item.description2,
                                                      item.typos,
                                                      item.staffInfo,
                                                      item.cloudinary_secure_url
                                                    )}
                  >
                    <div className="dessert-name-price">
                      <span>
                        <span className="dessert-name">{item.name}</span>
                        <span className="dessert-allergies"> ({item.allergies})</span>
                      </span>
                      <span className="dessert-price">{item.price}</span>
                    </div>
                    <div className="dessert-description">{item.description1}</div>
                    <div className="dessert-description">{item.description2}</div>
                    <div className='typo'>{item.typos}</div>
                  </div>
                  
                ))}



              </div>{/* .right-column */}
            </div>{/* .section */}











          </div>{/* .menu-items */}









      </div>{/* .dessert-menu-page */}












      
      <br className='no-print'/>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div  className='dessert-menu-page'
            style={{display:'flex',
                    flexDirection:'column',
                    paddingBottom:'70px',
                    // backgroundImage:'url("akari-dessert-2.jpg")',
                    backgroundSize:'5.5in'
                  }}
      >
          <div className="menu-items">

            <div className="section-dessert"
                  style={{width:'100%'}}
            >
              <div className="left-column">
                <div className='dessert-menu-h1'>Dessert & Fortified Wines By The Glass</div>
                <div className='kanji'>デザートワイン</div>
                
              </div>

              <div className="right-column"
                    style={{width:'100%'}}
              >
              
                <div className='dessert-wine'
                      onClick={()=>showModal('sauternes')}
                >
                  <div className='dessert-wine-vintage'>2022</div>
                  <div className='dessert-wine-name'>Chateau Suduiraut, <span className='typo'>SA</span></div>
                  <div className='dessert-price'>24</div>
                </div>{/* .dessert-wine */}

                <div  className='dessert-wine'
                      onClick={()=>showModal('macabeu')}
                >
                  <div className='dessert-wine-vintage'>2000</div>
                  <div className='dessert-wine-name'>Domaine de Rancy Rivesaltes,<br/>
                        Ambré, Vin Doux Naturel, FR
                  </div>
                  <div className='dessert-price'>32</div>
                </div>{/* .dessert-wine */}

                <div className='dessert-wine' onClick={()=>showModal('sattlerhof')}>
                  <div className='dessert-wine-vintage'>2021</div>
                  <div className='dessert-wine-name'>Weingut Sattlerhof, AUT</div>
                  <div className='dessert-price'>38</div>
                </div>{/* .dessert-wine */}

                <div  className='dessert-wine' 
                      // onClick={()=>showModal('grahams-port')}
                >
                  <div className='dessert-wine-vintage'>*2005</div>
                  <div className='dessert-wine-name'>Graham's Port, Quinta Dos Malvedos, PT</div>
                  <div className='dessert-price'>40</div>
                </div>{/* .dessert-wine */}






              </div>{/* .right-column */}
            </div>{/* .section */}

<br/>
            <div className="section-dessert section-coffee"
                  style={{width:'100%'}}
            >
              <div className="left-column">
                <div className='dessert-menu-h1'>Coffee & Tea</div>
                <div className='kanji'>カクテテル</div>
                
                
              </div>

              <div className="right-column" 
                    style={{width:'100%'}}
              >
              


                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Espresso</span>
                    <span className="dessert-price">8</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Coffee</span>
                    <span className="dessert-price">10</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Latte | Matcha Latte</span>
                    <span className="dessert-price">12</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Iced Green Tea | Iced Black Tea</span>
                    <span className="dessert-price">15</span>
                  </div>
                </div>


                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Sencha Jou</span>
                    <span className="dessert-price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Genmaimatcha</span>
                    <span className="dessert-price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Hojicha</span>
                    <span className="dessert-price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Yame Black</span>
                    <span className="dessert-price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Yame Oolong</span>
                    <span className="dessert-price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Soba Tea</span>
                    <span className="dessert-price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Chamomile</span>
                    <span className="dessert-price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="dessert-name">Peppermint</span>
                    <span className="dessert-price">16</span>
                  </div>
                </div>



            </div>{/* .right-column */}
          </div>{/* .section */}
        </div>{/* .menu-items */}

          <div className="legal legal-dessert"
                style={{textAlign:'left',
                        margin:'0',
                        marginTop:'auto',
                        lineHeight:'1.8',
                        letterSpacing:'0',
                        fontFamily:'AnagoBook',
                        fontSize:'7px'}}
          >
            <br/>
                All prices are in USD and subject to 8.875% government tax.<br/>
                Our coffee and tea are green certified and come from Fairtrade partnerships.
          </div>

      </div>{/* .dessert-menu-page */}

      <br className='no-print' />

      <NavbarFooter page='dessert' />
      <br className='no-print'/>





















    <div id="modal-dessert" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img id='modal-dessert-img' />
          </div>      
          <div className='modal-text'>
          
              <br/><br/>
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name" id='modal-dessert-name'></span>
                              <span className="allergies" id='modal-dessert-allergies'></span>
                            </span>
                            <span className="price" id='modal-dessert-price'></span>
                          </div>
                          <div className="description1" id='modal-dessert-description1'></div>
                          <div className="description2" id='modal-dessert-description2'></div>
                          <div id='modal-dessert-typos' className='typo'></div>
                          <hr/>
                          <br/>
                            <div id='modal-dessert-staff-info' style={{whiteSpace:'pre-line'}}></div>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #modal-dessert */}

          







    <div id="sauternes" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`sauternes.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div className='dessert-wine'>
                  <div className='dessert-wine-vintage'>2022</div>
                  <div className='dessert-wine-name'>Chateau Suduiraut, <span className='typo'>SA</span></div>
                  <div>24</div>
                </div>{/* .dessert-wine */}
                <hr/>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #sauternes */}

    <div id="macabeu" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`macabeu.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className='dessert-wine'>
                  <div className='dessert-wine-vintage'>2000</div>
                  <div className='dessert-wine-name'>Domaine de Rancy Rivesaltes,<br/>
                        Ambré, Vin Doux Naturel, FR
                  </div>
                  <div>32</div>
                </div>{/* .dessert-wine */}
                <hr/>
            </div>{/* .modal-text */}  
            
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #macabeu */}

    <div id="sattlerhof" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`sattlerhof.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div className='dessert-wine'>
                  <div className='dessert-wine-vintage'>2021</div>
                  <div className='dessert-wine-name'>Weingut Sattlerhof, AUT</div>
                  <div>38</div>
                </div>{/* .dessert-wine */}
                <hr/>

            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #sattlerhof */}


    </div>

    )
}
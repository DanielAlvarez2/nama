'use client'

import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'


export default function DessertMenu({menuItems}){
    const router = useRouter()
    useEffect(()=> router.refresh(),[])
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
    }//openModalDessert()

    function openModalDessertWine(img_src,
                                  vintage,
                                  name1,
                                  name2,
                                  price,
                                  typos,
                                  staffInfo,
    ){
      document.querySelector('#modal-dessert-wine-img').src = img_src
      document.querySelector('#modal-dessert-wine-vintage').innerHTML = vintage
      document.querySelector('#modal-dessert-wine-name1').innerHTML = name1
      document.querySelector('#modal-dessert-wine-name2').innerHTML = name2
      document.querySelector('#modal-dessert-wine-price').innerHTML = price
      document.querySelector('#modal-dessert-wine-typos').innerHTML = typos ? typos : ''
      document.querySelector('#modal-dessert-wine-staff-info').innerHTML = staffInfo
      document.querySelector('#modal-dessert-wine').style.display = 'grid'
    }//openModalDessertWine()

    return(
    <div className='webpage'>

      <Navbar page='dessert' />
    
      <div  className="dessert-menu-page" 
            style={{display:'flex',flexDirection:'column'}}
            // style={{backgroundImage:'url(akari-dessert-1.jpg)',backgroundSize:'5.5in'}}
      >
        
          <div 
          className="menu-items"
          >
            <div 
            // className="section section-dessert"
            
            >
              <div className="left-column">
                <div className='dessert-menu-h1'>Desserts</div>
                <div className='kanji'>デザート</div>
              
              </div>

              <div className="right-column" style={{width:'100%',lineHeight:'1.25'}}>
              
                {menuItems.map(item=>(
                    item.menu == 'dessert' && item.section == 'desserts' && 
                  <div  key={item._id} 
                        className='dinner-menu-item'
                        onClick={()=>openModalDessert(item.name1,
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
                        <span className="dessert-name">{item.name1}</span>
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





          <div className="legal legal-dessert"
                style={{textAlign:'left',
                        margin:'0',
                        marginTop:'auto',
                        paddingBottom:'50px',
                        lineHeight:'1.8',
                        letterSpacing:'0',
                        fontFamily:'AnagoBook',
                        fontSize:'7px'}}
          >
            (D)Dairy (GF)Gluten Free (N)Nuts (V)Vegan
            <br/><br/>

                All prices are in USD and subject to 8.875% government tax. 
                Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs 
                may increase your risk of foodborne illness. 
                Please let us know if you have any allergies or special dietary requirements, 
                or if you require any further information. Our choice of suppliers and local produce 
                - including fish, meat, dairy, fruits and vegetables - is informed by our commitment to sustainability.
          </div>




      </div>{/* .dessert-menu-page */}












      
      <br className='no-print'/>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div  className='dessert-menu-page'
            style={{display:'flex',
                    flexDirection:'column',
                    paddingBottom:'70px',
                    paddingTop:'40px',
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

                {menuItems.map(item=>(
                    item.menu == 'dessert' && item.section == 'dessert wines' &&
                  <div  key={item._id} 
                        className='dinner-menu-item'
                        onClick={()=>openModalDessertWine(
                                                      item.cloudinary_secure_url,
                                                      item.vintage,
                                                      item.name1,
                                                      item.name2,
                                                      item.price,
                                                      item.typos,
                                                      item.staffInfo,
                                                    )}
                  >
                    <div style={{display:'flex'}}>
                        <div style={{width:'7ch'}}>{item.vintage}</div>
                        
                        <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                          <div>
                            <div className="dessert-name">{item.name1}</div>
                            <div className="dessert-name">{item.name2}</div>
                          </div>
                          <div className="dessert-price">{item.price}</div>
                        </div>  
                    </div>
                    <div className='typo'>{item.typos}</div>


                  </div>

                  
                  
                ))}








              </div>{/* .right-column */}
            </div>{/* .section */}

<br/>
            <div className="section-dessert section-coffee"
                  style={{width:'100%'}}
            >
              <div className="left-column">
                <div className='dessert-menu-h1'>Coffee & Tea</div>
                <div className='kanji'>コーヒーと紅茶</div>
                
                
              </div>

              <div className="right-column" 
                    style={{width:'100%'}}
              >
              
                {menuItems.map(item=>(
                    item.menu == 'dessert' && item.section == 'coffee' &&
                  <div  key={item._id} 
                        className='dinner-menu-item'
                  >
                        <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                          <div className="dessert-name">{item.name1}</div>
                          <div className="dessert-price">{item.price}</div>
                        </div>  
                  </div>

                  
                  
                ))}







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
                          <br/>
                          <hr/>
                          <br/>
                            <div id='modal-dessert-staff-info' style={{whiteSpace:'pre-line'}}></div>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #modal-dessert */}

















    <div id="modal-dessert-wine" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img id='modal-dessert-wine-img' />
          </div>      
          <div className='modal-text'>
          
              <br/><br/>
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">

                    <div style={{display:'flex'}}>
                        <div style={{width:'7ch'}} id='modal-dessert-wine-vintage'></div>
                        
                        <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                          <div>
                            <div id='modal-dessert-wine-name1'></div>
                            <div id='modal-dessert-wine-name2'></div>
                          </div>
                          <div id='modal-dessert-wine-price'></div>
                        </div>  
                    </div>
                    <div className='typo' id='modal-dessert-wine-typos'></div>

                          <br/>
                          <hr/>
                          <br/>
                            <div id='modal-dessert-wine-staff-info' style={{whiteSpace:'pre-line'}}></div>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #modal-dessert-wine */}

          







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
                  <div className='dessert-wine-name'>Chateau Suduiraut, FR</div>
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
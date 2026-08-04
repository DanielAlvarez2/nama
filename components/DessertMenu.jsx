'use client'

import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'
import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function DessertMenu({desserts}){

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
    
      <div className="small-paper">
        
          <div className="menu-items">
            <div className="section section-dessert">
              <div className="left-column">Desserts<br/>デザート</div>

              <div className="right-column">
              
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
                    <div className="name-price">
                      <span>
                        <span className="name">{item.name}</span>
                        <span className="allergies">({item.allergies})</span>
                      </span>
                      <span className="price">{item.price}</span>
                    </div>
                    <div className="description1">{item.description1}</div>
                    <div className="description2">{item.description2}</div>
                    <div className='typo'>{item.typos}</div>
                  </div>
                  
                ))}



              </div>{/* .right-column */}
            </div>{/* .section */}











          </div>{/* .menu-items */}









      </div>{/* .small-paper */}
      
      <br className='no-print'/>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div className='small-paper'>
          <div className="menu-items">

            <div className="section section-dessert">
              <div className="left-column">
                Dessert & Fortified Wines By The Glass<br/>デザートのお供に</div>

              <div className="right-column">
              
                <div className='dessert-wine'>
                  <div>2022</div>
                  <div className='dessert-wine-name'>Chateau Suduiraut, SA</div>
                  <div>24</div>
                </div>{/* .dessert-wine */}

                <div className='dessert-wine'>
                  <div>2000</div>
                  <div className='dessert-wine-name'>Domaine de Rancy Rivesaltes,<br/>
                        Ambré, Vin Doux Naturel, FR
                  </div>
                  <div>32</div>
                </div>{/* .dessert-wine */}

                <div className='dessert-wine'>
                  <div>2021</div>
                  <div className='dessert-wine-name'>Weingut Sattlerhof, AUT</div>
                  <div>38</div>
                </div>{/* .dessert-wine */}

                <div className='dessert-wine'>
                  <div>2005</div>
                  <div className='dessert-wine-name'>Graham's Port, Quinta Dos Malvedos, PT</div>
                  <div>40</div>
                </div>{/* .dessert-wine */}


                <div  className="dinner-menu-item"
                      onClick={()=>showModal('sauternes')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Château Suduiraut</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">24</span>
                  </div>
                  <div className="description1">Sauternes, Bordeaux</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('macabeu')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Domaine de Rancy</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">32</span>
                  </div>
                  <div className='name2'>Rivesaltes, Ambré, Vin Doux Naturel</div>
                  <div className="description1">Roussillon, France 2000</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('sattlerhof')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Weingut Sattlerhof</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">38</span>
                  </div>
                  <div className='name2'>Beerenauslese</div>
                  <div className="description1">Südsteiermark, Austria <span className='typo'>2021</span></div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('grahams-port')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Graham's Port, Quinta dos Malvedos</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">40</span>
                  </div>
                  <div className='name2'></div>
                  <div className="description1">Vintage Port, Douro, Portugal, 2005</div>
                  <div className="description2"></div>
                </div>


              </div>{/* .right-column */}
            </div>{/* .section */}


            <div className="section section-dessert section-coffee">
              <div className="left-column">Coffee & Tea<br/>カクテテル</div>

              <div className="right-column">
              


                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Espresso</span>
                    <span className="price">8</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Coffee</span>
                    <span className="price">10</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Latte | Matcha Latte</span>
                    <span className="price">12</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Iced Green Tea | Iced Black Tea</span>
                    <span className="price">15</span>
                  </div>
                </div>


                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Sencha Jou</span>
                    <span className="price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Genmaimatcha</span>
                    <span className="price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Hojicha</span>
                    <span className="price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Yame Black</span>
                    <span className="price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Yame Oolong</span>
                    <span className="price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Soba Tea</span>
                    <span className="price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Chamomile</span>
                    <span className="price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Peppermint</span>
                    <span className="price">16</span>
                  </div>
                </div>



            </div>{/* .right-column */}
          </div>{/* .section */}
        </div>{/* .menu-items */}
          <div className="legal legal-dessert">
                All prices are in USD and subject to 8.875% geovernment tax.<br/>
                Our coffee and tea are green certified and come from Fairtrade partnerships.
          </div>

      </div>{/* .small-paper */}

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
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Château Suduiraut</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">24</span>
                          </div>
                          <div className="description1">Sauternes, Bordeaux</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
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
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Domaine de Rancy</span><br/>
                              <span className="name">Rivesaltes, Ambré, Vin Doux Naturel</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">32</span>
                          </div>
                          <div className="description1">Roussillon, France 2000</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
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
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Weingut Sattlerhof</span><br/>
                              <span className="name">Beerenauslese</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">38</span>
                          </div>
                          <div className="description1">Südsteiermark Austria <span className='typo'>2021</span></div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #sattlerhof */}


    </div>

    )
}
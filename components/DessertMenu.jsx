'use client'

import Navbar from '@/components/Navbar.jsx'
import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function DessertMenu({desserts,maxSequence}){

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
              <div className="left-column">デザート<br/>Desserts</div>

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











            <div className="section section-dessert">
              <div className="left-column">デザートのお供に<br/>
                Dessert & Fortified Wines By The Glass</div>

              <div className="right-column">
              
                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('chateau-suduiraut')}
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
                      // onClick={()=>showModal('domaine-de-rancy')}
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
                      // onClick={()=>showModal('weingut-sattlerhof')}
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
          </div>{/* .menu-items */}









          <div className="legal legal-dessert">
            <div>(V) Vegan (N) Nuts (D) Dairy (GF) Gluten Free</div>
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase<br/>
            your risk of foodborne illness. Kindly inform server of any dietary restriction.
          </div>
      </div>{/* .small-paper */}
      
      <br className='no-print'/>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div className='small-paper'>
          <div className="menu-items">
            <div className="section section-dessert">
              <div className="left-column">Coffee & Tea</div>

              <div className="right-column">
              


                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Drip Coffee</span>
                    <span className="price">10</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Iced Coffee</span>
                    <span className="price">11</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Espresso</span>
                    <span className="price">8</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Cappuccino</span>
                    <span className="price">12</span>
                  </div>
                </div>


                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Latte</span>
                    <span className="price">12</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Matcha Latte</span>
                    <span className="price">12</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Iced Matcha Latte</span>
                    <span className="price">15</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Matcha Bowl</span>
                    <span className="price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Iced Green Tea</span>
                    <span className="price">15</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Iced Black Tea</span>
                    <span className="price">15</span>
                  </div>
                </div>

                <div  className="dinner-menu-item"
                      style={{marginBottom:'10px',marginTop:'50px'}}
                >
                  <div className="name-price">
                    <span className="name">Kettl Teas</span>
                    <span className="price">16</span>
                  </div>
                </div>
                Sencha Jou<br/>
                Genmaimatcha<br/>
                Gyokuro<br/>
                Houjicha<br/>
                Yame Black<br/>
                Yame Oolong<br/>

                <br/><br/>

                <div  className="dinner-menu-item"
                      style={{marginBottom:'10px'}}
                >
                  <div className="name-price">
                    <span className="name">Soba and Tis<span style={{color:'red'}}>s</span>anes</span>
                    <span className="price">16</span>
                  </div>
                </div>
                Soba Tea<br/>
                Chamomile<br/>
                Peppermint<br/>


            </div>{/* .right-column */}
          </div>{/* .section */}
        </div>{/* .menu-items */}
      </div>{/* .small-paper */}

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
              MENU DESCRIPTION:
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

          









    </div>

    )
}
'use client'

import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";

export default function DessertMenu(){

    function showModal(menuItem){
        document.querySelector(`#${menuItem}`).style.display = 'grid'
    }
    function closeModals(){
        document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
    }


    return(
    <div className='webpage'>

      <div className='no-print' style={{width:'100%',textAlign:'center',marginTop:'15px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
          <path fill="#281E09" d="m51.9 30.5-.4-1c-.9.5-1 1.6-1.6 2.2-1.3 1.4-4.3 1.3-6 1.3-.6 3.3-.5 6.6-.8 10-.3 3.4-1.8 9-1 12.4.1.5.5.8.8 1.2l-.6.6.6 1.8c-.8.2-1-1.3-1.2-1.8a74.1 74.1 0 0 1 1-35.5c.6-2.3 1.5-4.4 2-6.7-1.8 1.5-3.7 2.8-5.4 4.4-2.3 2-6.3 5.1-8.1 7.2-1 1.1-1.9 2.8-3 4-.6.7-2 2.3-2.7 2.5-3.4 1.1-7.8-2.9-9.7-5.3l-6.7 5.7L9 33l-3.2 2.3c-.8.4.1-1-.6-.6-.9.5-1.2 2-2.5 1.2-.2.9 1.2.7 1.2 1-1 1.5-3.8 2-3.8-.3 0-3.3 9.2-10.1 11.4-12.7 1-.4 2.6.5 3.5.5.7 0 1.4-.4 2.2-.2 1.5.4 4.5 3.4 6.2 4 2 .6 2.8-.3 4.3-1.4 2.5-1.6 4.8-3.8 7.3-5.5 2-1.5 9.2-5.4 10.3-7.4 1.7-3 2.1-8.6 3.6-12 .2-.5.4-1 1-1.4 1.7 4.8.7 10.4 1 15.5 0 2.4.1 6.1.5 8.4.2.8 1 2.1 1 2.3 0 .2-.4.6-.4 1.2-.1 1.2.3 2.3.3 3.5v3.5c0 .3.2 1-.3 1-.2-1.7.2-3.8 0-5.4Zm-.9-5.4L49.7 7.2c-.7 1.2-1 2.7-1.5 4l-.6 2.3c-1.2 4.2-2 8.5-3 12.8 2.3-.6 4-1.3 6.4-1.2Zm34.5 5.1c.3-2.7 1.6-5.6 2-8.2l-3.8 2c-1.3 1.9-6.3 5-8.4 4.9-2.1-.1-4-1.6-5.8-2.3-2.2 1.2-7.4 10-10.2 5.8-.4-.6-1.4-3.3-1.3-4 0-1 2.6-2.2 3.3-3.2l.3.5 5.9-5.7c5.5.1 5.4 5.8 11.7 3.4 2-.8 8.6-5 10.2-4.8 2.2.2 0 2.7-.3 3.4l-1.6 5-2 7.7v-4.5Zm27.3-6.2 7.2.6c0 .5-.7.3-1 .3-.8 0-1.5-.3-2-.3-1.3 0-2.6.5-4 .3-.3.2 2.4 6.2 2.4 7.4 0 .4-1.3 3.8-1.6 3.8-.6-.2-.6-1-.9-1.3-.3-.4-1-.6-1.4-1.3-.8-1.3-2.3-8.2-2.7-8.4-1.5.1-3 .4-4.5.7-1.3.3-6.1 1.2-7 1.7-.4.2-.5 1-1 1.3-.7.3-1.6 0-2.1.3-.4.2-.9 3.7-2.6 3.6-.4-.5 1.6-3.8 1.6-4.5.1-.8-.5-1.9 0-2.8.3-.5 2.6-.7 3-.9.4-.2 3.4-4 4.4-4.7 1.5-1.3 3-2.8 5.2-2.5.6-1.7.2-4.5 3-3.7 1.7.5 3.3 8.5 4 10.4Zm-7.3-5-.1-1a19.6 19.6 0 0 0-7.1 5.8h1.4l-.9 1 9.6-1.1-1-5-1.9.4Z"></path>
        </svg>
      </div>

      <nav className='no-print'>
        <Link href='/'>Dinner</Link> | 
        <Link href='/dessert' className='current-page' >Dessert</Link> | 
        <Link href='/drinks'>Drinks</Link> | 
        <Link href='/sake'>Sake</Link>
      </nav>

      <br className='no-print'/>
    
      <div className="small-paper">
        
          <div className="menu-items">
            <div className="section section-dessert">
              <div className="left-column">デザート<br/>Desserts</div>

              <div className="right-column">
              


                <div  className="dinner-menu-item"
                      onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hojicha Banana Roulade</span>
                      <span className="allergies">(D, N, GF)</span>
                    </span>
                    <span className="price">22</span>
                  </div>
                  <div className="description1">Hojicha Sponge <span style={{color:'red'}}>Cake</span>, Roasted Banana Cream</div>
                  <div className="description2"></div>
                </div>









                <div  className="dinner-menu-item"
                      onClick={()=>showModal('melon-parfait')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Melon Parfait</span>
                      <span className="allergies">(D, GF)</span>
                    </span>
                    <span className="price">22</span>
                  </div>
                  <div className="description1">Chamomile Jelly, Honey Ice Cream, Meringue</div>
                  <div className="description2"></div>
                </div>








                <div  className="dinner-menu-item"
                      onClick={()=>showModal('matcha-misu')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Matcha-Misu</span>
                      <span className="allergies">(D)</span>
                    </span>
                    <span className="price">22</span>
                  </div>
                  <div className="description1">Mascarpone Cream, Chestnut Pudding</div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      onClick={()=>showModal('black-sesame-cheesecake')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Kurogoma Cheesecake</span>
                      <span className="allergies">(D, N)</span>
                    </span>
                    <span className="price">22</span>
                  </div>
                  <div className="description1">Blackberry Compote, Vanilla Ice Cream</div>
                  <div className="description2" style={{color:'red'}}>Black Sesame Cheesecake</div>
                </div>

                {/* <div  className="dinner-menu-item"
                      onClick={()=>showModal('miso-banana-profiterole')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Miso Banana Profiterole</span>
                      <span className="allergies">(D)</span>
                    </span>
                    <span className="price">22</span>
                  </div>
                  <div className="description1">Caramelized Banana, Chocolate Foam,</div>
                  <div className="description2">Puffed Buckwheat</div>
                </div> */}

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






















          







    <div id="hojicha-banana-roulade" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img src='hojicha-banana-roulade.jpg' />
          </div>      
          <div className='modal-text'>
          
              <br/><br/>
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Hōjicha Banana Roulade</span>
                              <span className="allergies">(D, N, GF)</span>
                            </span>
                            <span className="price">22</span>
                          </div>
                          <div className="description1">Hōjicha Sponge <span style={{color:'red'}}>Cake</span>, Roasted Banana Cream</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          hōjicha green tea sponge cake<br/>
                          roasted banana cream filling<br/>
                          caramelized banana<br/>
                          vanilla ice cream<br/>
                          contains egg
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #hojicha-banana-roulade */}

    <div id="melon-parfait" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />
          <div className='modal-content'>
             
          <div>
            <img src='melon-parfait.jpg' />
          </div>          
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Melon Parfait</span>
                              <span className="allergies">(D, GF)</span>
                            </span>
                            <span className="price">22</span>
                          </div>
                          <div className="description1">Chamomile Jelly, Honey Ice Cream, Meringue</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          seasonal melon<br/>
                          chamomile jelly<br/>
                          chamomile granita<br/>
                          vanilla cream<br/>
                          honey ice cream<br/>
                          milk foam<br/>
                          meringue sticks<br/>
                          jelly does NOT contain pork<br/>
                          FISH gelatin<br/>
                          contains egg
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}   
      </div>
    </div>{/* #melon-parfait */}

    <div id="black-sesame-cheesecake" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />     
          <div className='modal-content'>
          
          <div>
            <img src='black-sesame-cheesecake.jpg' />
          </div>     
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Kurogoma Cheesecake</span>
                              <span className="allergies">(D, N)</span>
                            </span>
                            <span className="price">22</span>
                          </div>
                          <div className="description1">Blackberry Compote, Vanilla Ice Cream</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          black sesame cheesecake<br/>
                          blackberry compote<br/>
                          chocolate crumble<br/>
                          vanilla ice cream<br/>
                          contains egg<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #black-sesame-cheesecake */}

    <div id="yuzu-crepe-cake" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src='yuzu-crepe-cake.jpg' />
          </div>         
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Yuzu Crêpe Cake</span>
                              <span className="allergies">(D)</span>
                            </span>
                            <span className="price">22</span>
                          </div>
                          <div className="description1">Yuzu Cream, Candied Zest`</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #yuzu-crepe-cake */}

    <div id="sakura-monaka" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='sakura-monaka.jpg' />
          </div>        
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Sakura Monaka</span>
                              <span className="allergies">(D, N)</span>
                            </span>
                            <span className="price">22</span>
                          </div>
                          <div className="description1">Red Bean Paste, Sakura Ice Cream,</div>
                          <div className="description2">Sour Cherries</div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #sakura-monaka */}

    <div id="matcha-misu" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img src='matcha-misu.jpg' />
          </div>      
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Matcha-Misu</span>
                              <span className="allergies">(D)</span>
                            </span>
                            <span className="price">22</span>
                          </div>
                          <div className="description1">Mascarpone Cream, Chestnut Pudding</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          green tea sponge cake<br/>
                          mascarpone cheese mousse<br/>
                          chestnut cremeux<br/>
                          matcha green tea powder on top<br/>
                          contains egg<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #matcha-misu */}

    <div id="miso-banana-profiterole" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='miso-banana-profiterole.jpg' />
          </div>        
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Miso Banana Profiterole</span>
                              <span className="allergies">(D)</span>
                            </span>
                            <span className="price">22</span>
                          </div>
                          <div className="description1">Caramelized Banana, Chocolate Foam,</div>
                          <div className="description2">Puffed Buckwheat</div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #miso-banana-profiterole */}


    </div>

    )
}
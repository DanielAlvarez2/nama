'use client'

import NavbarMenuManager from '@/components/NavbarMenuManager';
import NavbarFooterMenuManager from '@/components/NavbarFooterMenuManager';
import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import CocktailsForm from './CocktailsForm.jsx'

export default function DrinksClient(props){

    function showModal(menuItem){
        document.querySelector(`#${menuItem}`).style.display = 'grid'
    }
    function closeModals(){
        document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
    }

    function handleDrinkPageUpdate(value){
      setDrinkPage(value)
        // if (value == 'cocktails') setDrinkPage('cocktails')
        // if (value == 'mocktails') setDrinkPage('mocktails')
        // if (value == 'beer') setDrinkPage('beer')
        // if (value == 'sake') setDrinkPage('sake')
        // if (value == 'champagne') setDrinkPage('champagne')
        // if (value == 'whites') setDrinkPage('whites')
        // if (value == 'rose') setDrinkPage('rose')
        // if (value == 'reds') setDrinkPage('reds')
        // if (value == 'coffee') setDrinkPage('coffee')
    }

    return(
    <div className='webpage'>

      <NavbarMenuManager page='drinks' />

            <div style={{width:'100%',textAlign:'center'}}>
                <select onChange={(e)=>handleDrinkPageUpdate(e.target.value)}>
                    <option value='cocktails'>Cocktails</option>
                    <option value='mocktails'>Mocktails</option>
                    <option value='beer'>Beer</option>
                    <option value='sake'>Sake</option>
                    <option value='champagne'>Champagne</option>
                    <option value='whites'>White Wines</option>
                    <option value='rose'>Rosé Wine</option>
                    <option value='reds'>Red Wines</option>
                    <option value='coffee'>Coffee & Tea</option>
                </select>
            </div>
            <br/>

      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column"></div>
                <div><span className='name'>Specialty Cocktails</span><br/>スペシャルティカクテル</div>
                

              <div className="right-column">
              


                <div  className="dinner-menu-item"
                      onClick={()=>showModal('ume-spritz')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Ume Spritz</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">31</span>
                  </div>
                  <div className="description1">Kagatsuru Umeshu, Mondino </div>
                  <div className="description2">Aperitivo, Cremant d'Alsace</div>
                </div>











              </div>{/* .right-column */}
            </div>{/* .section */}





          </div>{/* .menu-items */}








      </div>{/* .small-paper */}

      <br className='no-print' />

      <CocktailsForm />

      <br className='no-print' />



      <NavbarFooterMenuManager page='drinks' />


















    <div id="ume-spritz" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src='ume-spritz.jpg' />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Ume Spritz</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">31</span>
                          </div>
                          <div className="description1">Kagatsuru Umeshu, Mondino </div>
                          <div className="description2">Aperitivo, Cremant d'Alsace</div>
                          
                          <hr/>
                          <br/>
                          Kagatsuru Umeshu<br/>
                          Mondino Aperitivo<br/>
                          Cremant d'Alsace
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #ume-spritz */}


    <div id="yuzu-sour" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='yuzu-sour.jpg' />
          </div>        
          <div className='modal-text'>
                 
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Yuzu Sour</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">30</span>
                          </div>
                          <div className="description1">Mal Bien Mezcal, Daiyame Shochu, Yuzu Kosho, Lime</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          Mal Bien Mezcal<br/>
                          Daiyame Shochu<br/>
                          Yuzu Kosho<br/>
                          Lime<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #yuzu-sour */}



    <div id="foxs-wedding" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img src='foxs-wedding.jpg' />
          </div>      
              
          <div className='modal-text'>
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">A Fox's Wedding</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">28</span>
                          </div>
                          <div className="description1">Osuzuyama Gin, Summer Snow Nigori, Cinnamon</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          Osuzuyama Gin<br/>
                          Summer Snow Nigori<br/>
                          Cinnamon<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}     
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #foxs-wedding */}



    <div id="okusuri" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src='okusuri.jpg' />
          </div>         
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Okusuri</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">32</span>
                          </div>
                          <div className="description1">Ichiro's Malt & Grain Whiskey, Port Askaig Single Malt, </div>
                          <div className="description2">Lemon, Pickled Honey</div>
                          
                          <hr/>
                          <br/>
                          Ichiro's Malt & Grain Whiskey<br/>
                          Port Askaig Single Malt<br/>
                          Lemon<br/>
                          Pickled Honey<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #okusuri */}



    <div id="budo-panther" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src='budo-panther.jpg' />
          </div>         
              
          <div className='modal-text'>
             
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Budo Panther</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">29</span>
                          </div>
                          <div className="description1">Kana Shochu, Genever, Concord </div>
                          <div className="description2">Grape, Lemon, Sorghum</div>
                          
                          <hr/>
                          <br/>
                          Kana Shochu<br/>
                          Genever<br/>
                          Concord Grape<br/>
                          Lemon<br/>
                          Sorghum<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}      
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #budo-panther */}



    <div id="ringo-no-mitai" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
               
          <div>
            <img src='ringo-no-mitai.jpg' />
          </div>       
              
          <div className='modal-text'>
                  
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Ringo No Mitai</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">28</span>
                          </div>
                          <div className="description1">Nikka Sencha Gin, Centum Herbus, Midori, Lemon</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          Nikka Sencha Gin<br/>
                          Centum Herbus<br/>
                          Midori: Melon Liqueur<br/>
                          Lemon<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}    
      </div>
    </div>{/* #ringo-no-mitai */}



    <div id="improved-yokohama" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='improved-yokohama.jpg' />
          </div>        
              
          <div className='modal-text'>
                  
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Improved Yokohama Cocktail</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">50</span>
                          </div>
                          <div className="description1">Hakushu 12 Year Single Malt, Marasca, </div>
                          <div className="description2">Benedictine, Absinthe</div>
                          
                          <hr/>
                          <br/>
                          Hakushu 12 Year Single Malt WHISKY<br/>
                          Marasca<br/>
                          Benedictine<br/>
                          Absinthe<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #improved-yokohama */}



    <div id="pepper-buck" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
              
          <div>
            <img src='pepper-buck.jpg' />
          </div>        
              
          <div className='modal-text'>
                  
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Pepper Buck</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price"></span>
                          </div>
                          <div className="description1">Lime, Spiced Ginger, Jalape<span style={{color:'red'}}>ñ</span>o</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          Lime<br/>
                          Spiced Ginger<br/>
                          Jalapeño<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}     
      </div>
    </div>{/* #pepper-buck */}



    <div id="phony-negroni" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />      
          <div className='modal-content'>
                 
          <div>
            <img src='phony-negroni.jpg' />
          </div>    
              
          <div className='modal-text'>
                  
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Phony Negroni</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price"></span>
                          </div>
                          <div className="description1">Juniper, Orange, Gentian</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          Juniper<br/>
                          Orange<br/>
                          Gentian<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #phony-negroni */}



    <div id="straw-hat" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src='straw-hat.jpg' />
          </div>       
              
          <div className='modal-text'>
                  
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Straw Hat</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price"></span>
                          </div>
                          <div className="description1">Houjicha, Thai Coconut, Lime</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          Houjicha GREEN TEA<br/>
                          Thai Coconut<br/>
                          Lime<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #straw-hat */}



    <div id="souchong-sour" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />      
          <div className='modal-content'>
          
          <div>
            <img src='souchong-sour.jpg' />
          </div>    
              
          <div className='modal-text'>
                  
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Souchong Sour</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price"></span>
                          </div>
                          <div className="description1">Passionfruit, Falernum, Lapsang Souchong Kombucha</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          Passionfruit<br/>
                          Falernum<br/>
                          Lapsang Souchong Kombucha<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #souchong-sour */}



    </div>

    )
}
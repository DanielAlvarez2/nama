'use client'

import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";

export default function DrinksMenu(){

    function showModal(menuItem){
        document.querySelector(`#${menuItem}`).style.display = 'grid'
    }
    function closeModals(){
        document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
    }


    return(
    <div className='webpage'>
      <div id='modal'>
        <img id='modal-pic' />
      </div>{/* #modal */}

      <div style={{width:'100%',textAlign:'center',marginTop:'15px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
          <path fill="#281E09" d="m51.9 30.5-.4-1c-.9.5-1 1.6-1.6 2.2-1.3 1.4-4.3 1.3-6 1.3-.6 3.3-.5 6.6-.8 10-.3 3.4-1.8 9-1 12.4.1.5.5.8.8 1.2l-.6.6.6 1.8c-.8.2-1-1.3-1.2-1.8a74.1 74.1 0 0 1 1-35.5c.6-2.3 1.5-4.4 2-6.7-1.8 1.5-3.7 2.8-5.4 4.4-2.3 2-6.3 5.1-8.1 7.2-1 1.1-1.9 2.8-3 4-.6.7-2 2.3-2.7 2.5-3.4 1.1-7.8-2.9-9.7-5.3l-6.7 5.7L9 33l-3.2 2.3c-.8.4.1-1-.6-.6-.9.5-1.2 2-2.5 1.2-.2.9 1.2.7 1.2 1-1 1.5-3.8 2-3.8-.3 0-3.3 9.2-10.1 11.4-12.7 1-.4 2.6.5 3.5.5.7 0 1.4-.4 2.2-.2 1.5.4 4.5 3.4 6.2 4 2 .6 2.8-.3 4.3-1.4 2.5-1.6 4.8-3.8 7.3-5.5 2-1.5 9.2-5.4 10.3-7.4 1.7-3 2.1-8.6 3.6-12 .2-.5.4-1 1-1.4 1.7 4.8.7 10.4 1 15.5 0 2.4.1 6.1.5 8.4.2.8 1 2.1 1 2.3 0 .2-.4.6-.4 1.2-.1 1.2.3 2.3.3 3.5v3.5c0 .3.2 1-.3 1-.2-1.7.2-3.8 0-5.4Zm-.9-5.4L49.7 7.2c-.7 1.2-1 2.7-1.5 4l-.6 2.3c-1.2 4.2-2 8.5-3 12.8 2.3-.6 4-1.3 6.4-1.2Zm34.5 5.1c.3-2.7 1.6-5.6 2-8.2l-3.8 2c-1.3 1.9-6.3 5-8.4 4.9-2.1-.1-4-1.6-5.8-2.3-2.2 1.2-7.4 10-10.2 5.8-.4-.6-1.4-3.3-1.3-4 0-1 2.6-2.2 3.3-3.2l.3.5 5.9-5.7c5.5.1 5.4 5.8 11.7 3.4 2-.8 8.6-5 10.2-4.8 2.2.2 0 2.7-.3 3.4l-1.6 5-2 7.7v-4.5Zm27.3-6.2 7.2.6c0 .5-.7.3-1 .3-.8 0-1.5-.3-2-.3-1.3 0-2.6.5-4 .3-.3.2 2.4 6.2 2.4 7.4 0 .4-1.3 3.8-1.6 3.8-.6-.2-.6-1-.9-1.3-.3-.4-1-.6-1.4-1.3-.8-1.3-2.3-8.2-2.7-8.4-1.5.1-3 .4-4.5.7-1.3.3-6.1 1.2-7 1.7-.4.2-.5 1-1 1.3-.7.3-1.6 0-2.1.3-.4.2-.9 3.7-2.6 3.6-.4-.5 1.6-3.8 1.6-4.5.1-.8-.5-1.9 0-2.8.3-.5 2.6-.7 3-.9.4-.2 3.4-4 4.4-4.7 1.5-1.3 3-2.8 5.2-2.5.6-1.7.2-4.5 3-3.7 1.7.5 3.3 8.5 4 10.4Zm-7.3-5-.1-1a19.6 19.6 0 0 0-7.1 5.8h1.4l-.9 1 9.6-1.1-1-5-1.9.4Z"></path>
        </svg>
      </div>

      <nav>
        <Link href='/'>Dinner</Link> | 
        <Link href='/dessert-menu'>Dessert</Link> | 
        <Link href='/drinks'>Drinks</Link> 
      </nav>
    
      <div className="small-paper" style={{paddingTop:'25px'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">COCKTAILS</div>

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



                <div  className="dinner-menu-item"
                      onClick={()=>showModal('yuzu-sour')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Yuzu Sour</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">30</span>
                  </div>
                  <div className="description1">Mal Bien Mezcal, Daiyame Shochu, Yuzu Kosho, Lime</div>
                  <div className="description2"></div>
                </div>



                <div  className="dinner-menu-item"
                      onClick={()=>showModal('foxs-wedding')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">A Fox's Wedding</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">28</span>
                  </div>
                  <div className="description1">Osuzuyama Gin, Summer Snow Nigori, Cinnamon</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      onClick={()=>showModal('okusuri')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Okusuri</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">32</span>
                  </div>
                  <div className="description1">Ichiro's Malt & Grain Whiskey, Port Askaig Single Malt, </div>
                  <div className="description2">Lemon, Pickled Honey</div>
                </div>




                <div  className="dinner-menu-item"
                      onClick={()=>showModal('budo-panther')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Budo Panther</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Kana Shochu, Genever, Concord </div>
                  <div className="description2">Grape, Lemon, Sorghum</div>
                </div>






                <div  className="dinner-menu-item"
                      onClick={()=>showModal('ringo-no-mitai')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Ringo No Mitai</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">28</span>
                  </div>
                  <div className="description1">Nikka Sencha Gin, Centum Herbus, Midori, Lemon</div>
                  <div className="description2"></div>
                </div>






                <div  className="dinner-menu-item"
                      onClick={()=>showModal('improved-yokohama')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Improved Yokohama Cocktail</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">50</span>
                  </div>
                  <div className="description1">Hakushu 12 Year Single Malt, Marasca,</div>
                  <div className="description2">Benedictine, Absinthe</div>
                </div>





                <div  className="dinner-menu-item"
                      onClick={()=>showModal('hot-wassail')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hot Wassail</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Bordelet Poire, Hakurakusei Ginjo Sake, Apples, </div>
                  <div className="description2">Prune Brandy, Pimento Dram, Amontillado Sherry</div>
                </div>
















              </div>{/* .right-column */}
            </div>{/* .section */}


            <div className="section section-dessert">

              <div className="left-column" style={{ display:'flex',
                                                    width:'3.5in',
                                                    // background:'pink',
                                                    justifyContent:'space-between'}}>
                <span style={{fontSize:'inherit'}}>ZERO PROOF COCKTAILS</span>
                <span className='price'>14</span>

              </div>

              <div className="right-column">


                <div  className="dinner-menu-item"
                      onClick={()=>showModal('pepper-buck')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Pepper Buck</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price"></span>
                  </div>
                  <div className="description1">Lime, Spiced Ginger, Jalape<span style={{color:'red'}}>ñ</span>o</div>
                  <div className="description2"></div>
                </div>

              
                <div  className="dinner-menu-item"
                      onClick={()=>showModal('phony-negroni')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Phony Negroni</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price"></span>
                  </div>
                  <div className="description1">Juniper, Orange, Gentian</div>
                  <div className="description2"></div>
                </div>

              
                <div  className="dinner-menu-item"
                      onClick={()=>showModal('straw-hat')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Straw Hat</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price"></span>
                  </div>
                  <div className="description1">Houjicha, Thai Coconut, Lime</div>
                  <div className="description2"></div>
                </div>

              
                <div  className="dinner-menu-item"
                      onClick={()=>showModal('souchong-sour')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Souchong Sour</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price"></span>
                  </div>
                  <div className="description1">Passionfruit, Falernum, Lapsang Souchong Kombucha</div>
                  <div className="description2"></div>
                </div>

              
              </div>{/* .right-column */}
            </div>{/* .section */}




          </div>{/* .menu-items */}








      </div>{/* .small-paper */}






      <div className="small-paper">


                                            
          <div className="menu-items">
            <div className="section section-dessert">
              <div className="left-column">新<br/>New</div>

              <div className="right-column">
              
              <span style={{color:'red'}}>
              The following menu items will go live on<br/>
              Friday June 19, 2026<br/><br/>
              </span>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hōjicha Banana Roulade</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">??</span>
                  </div>
                  <div className="description1">Hōjicha Sponge Cake, Roasted Banana Cream, </div>
                  <div className="description2">Caramelized Banana, Vanilla Ice Cream</div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('melon-parfait')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Melon Parfait</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">??</span>
                  </div>
                  <div className="description1">Seasonal Melon, Chamomille Jelly, </div>
                  <div className="description2">Honey Ice Cream</div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('black-sesame-cheesecake')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Kurog<span style={{color:'red'}}>o</span>ma Cheesecake</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">??</span>
                  </div>
                  <div className="description1">Black Sesame Cheesecake, Blackberry Compote, </div>
                  <div className="description2">Vanilla Ice Cream</div>
                </div>







              </div>
            </div>

            
           </div> {/* .menu-items */}

          <div className="legal legal-dessert">
            <div>(V) Vegan (N) Nuts (D) Dairy (GF) Gluten Free</div>
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase<br/>
            your risk of foodborne illness. Kindly inform server of any dietary restriction.
          </div>

       </div> {/* .small-paper */}



















    <div id="hojicha-banana-roulade" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='hojicha-banana-roulade.jpg' />
              <br/><br/>
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Hōjicha Banana Roulade</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">??</span>
                          </div>
                          <div className="description1">Hōjicha Sponge Cake, Banana, </div>
                          <div className="description2">Vanilla Ice Cream</div>
                          
                          <hr/>
                          <br/>
                          hōjicha sponge cake<br/>
                          roasted banana cream filling<br/>
                          caramelized banana<br/>
                          vanilla ice cream<br/>
                          <br/><br/>
              </div>
      </div>
    </div>{/* #hojicha-banana-roulade */}

    <div id="melon-parfait" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='melon-parfait.jpg' />
              <br/><br/>
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Melon Parfait</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">??</span>
                          </div>
                          <div className="description1">Seasonal Melon, Chamomille Jelly, </div>
                          <div className="description2">Honey Ice Cream</div>
                          
                          <hr/>
                          <br/>
                          seasonal melon<br/>
                          chamomille jelly<br/>
                          chamomille granita<br/>
                          vanilla cream<br/>
                          vanilla ice cream<br/>
                          milk foam<br/>
                          meringue sticks<br/>
                          <br/><br/>
              </div>
      </div>
    </div>{/* #melon-parfait */}

    <div id="black-sesame-cheesecake" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='black-sesame-cheesecake.jpg' />
              <br/><br/>
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Kurog<span style={{color:'red'}}>o</span>ma Cheesecake</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">??</span>
                          </div>
                          <div className="description1">Black Sesame Cheesecake, Blackberry Compote, </div>
                          <div className="description2">Vanilla Ice Cream</div>
                          
                          <hr/>
                          <br/>
                          black sesame cheesecake<br/>
                          blackberry compote<br/>
                          vanilla ice cream<br/>
                          <br/><br/>
              </div>
      </div>
    </div>{/* #black-sesame-cheesecake */}

    <div id="yuzu-crepe-cake" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='yuzu-crepe-cake.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #yuzu-crepe-cake */}

    <div id="sakura-monaka" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='sakura-monaka.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #sakura-monaka */}

    <div id="matcha-misu" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='matcha-misu.jpg' />
              <br/><br/>
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
                          <br/><br/>
              </div>
      </div>
    </div>{/* #matcha-misu */}

    <div id="miso-banana-profiterole" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='miso-banana-profiterole.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #miso-banana-profiterole */}


    </div>

    )
}
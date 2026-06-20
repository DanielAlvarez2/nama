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
              <div className="left-column">Sake by the glass</div>

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Aman, Hakurakusei, Junmai Ginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">25</span>
                  </div>
                  <div className="description1">Miyagi, Japan NV</div>
                  <div className="description2"></div>
                </div>



                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Aman, Hakurakusei, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">35</span>
                  </div>
                  <div className="description1">Miyagi, Japan NV</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Zaku, "Kaizan Ittekisui", Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">49</span>
                  </div>
                  <div className="description1">Mie, Japan NV</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Izumibashi, Umeshu, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">35</span>
                  </div>
                  <div className="description1">Kanagawa, Japan NV</div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Carafe 8oz</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">68</span>
                  </div>
                  <div className="description1">Aman, Hakurakusei, Junmai Diginjo</div>
                  <div className="description2">Miyagi, Japan NV</div>
                </div>






              </div>{/* .right-column */}
            </div>{/* .section */}

            

            <div className="section section-dessert">
              <div className="left-column">Beer</div>

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Sapporo Lager</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">12</span>
                  </div>
                  <div className="description1">Hokkaido, Japan</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Koshihikari Rice Ale</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">12</span>
                  </div>
                  <div className="description1">Niigata, Japan</div>
                  <div className="description2"></div>
                </div>






                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hitachino Nest White Ale</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">12</span>
                  </div>
                  <div className="description1">Naka, Japan</div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Non-Alcoholic Pilsner & India Pale Ale</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">12</span>
                  </div>
                  <div className="description1">Beacon, New York</div>
                  <div className="description2"></div>
                </div>







              </div>{/* .right-column */}
            </div>{/* .section */}

            






           </div> {/* .menu-items */}


       </div> {/* .small-paper */}








      <div className="small-paper">


                                            
          <div className="menu-items">



            <div className="section section-dessert">
              <div className="left-column">By The Glass</div>
              <div className="left-column">Sparkling</div>

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Bollinger, "Special Cuvée", Brut</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">39</span>
                  </div>
                  <div className="description1">Champagne, France NV</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Laherte Frères</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">47</span>
                  </div>
                  <div className="description1">"Rosé de Meunier", Extra Brut</div>
                  <div className="description2">Rosé Champagne, France, NV</div>
                </div>





                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Aman, "Cuvée Spéciale", Brut</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">75</span>
                  </div>
                  <div className="description1">Champagne<span style={{color:'red'}}>,</span> France NV</div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Taittinger, "Comtes de Champagne"</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">120</span>
                  </div>
                  <div className="description1">Blanc de Blancs, Brut</div>
                  <div className="description2">Champagne, France 2014</div>
                </div>






              </div>{/* .right-column */}
            </div>{/* .section */}

            

            <div className="section section-dessert">
              <div className="left-column">White</div>

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Rennaisance</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">27</span>
                  </div>
                  <div className='name'>Sancerre "La Magie des Caillottes"</div>
                  <div className="description1">Loire Valley, France 2025</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Kollwentz, Chardonnay "Leithakalk"</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Burgenland, Austria 2022</div>
                  <div className="description2"></div>
                </div>






                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Bernard Gripa, Saint-Péray "Les Pins"</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">28</span>
                  </div>
                  <div className="description1">Rhône Valley, France 2021</div>
                  <div className="description2"></div>
                </div>












              </div>{/* .right-column */}
            </div>{/* .section */}

            






           </div> {/* .menu-items */}


       </div> {/* .small-paper */}


      <div className="small-paper">


                                            
          <div className="menu-items">



            <div className="section section-dessert">
              <div className="left-column">By The Glass</div>
              <div className="left-column">Rosé</div>

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Château d'Esclans, Côtes de Provence</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">27</span>
                  </div>
                  <div className="description1">Provence, France 2024</div>
                  <div className="description2"></div>
                </div>






              </div>{/* .right-column */}
            </div>{/* .section */}

            

            <div className="section section-dessert">
              <div className="left-column">Red</div>

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Peay Vineyards, Pinot Noir</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">32</span>
                  </div>
                  <div className="description1">Sonoma Coast, California 2023</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Bodegas Alto Moncayo, Garnacha</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">28</span>
                  </div>
                  <div className="description1">Campo de Borja, Spain 2022</div>
                  <div className="description2"></div>
                </div>






                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Grgich Hills, Cabernet Sauvignon</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">42</span>
                  </div>
                  <div className="description1">Napa Valley, California 2020</div>
                  <div className="description2"></div>
                </div>












              </div>{/* .right-column */}
            </div>{/* .section */}

            






           </div> {/* .menu-items */}


       </div> {/* .small-paper */}















      <div className="small-paper">


                                            
          <div className="menu-items">



            <div className="section section-dessert">
              <div className="left-column">Kettl Teas</div>
              

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Sencha Jou</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Incredibly fragrant green tea, hint of </div>
                  <div className="description2">fresh cut grass and marine notes</div>
                </div>





                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Genmaimatcha</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Select sencha blended with matcha and </div>
                  <div className="description2">roasted brown rice, toasty, lingering sweetness</div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Gyokuro</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Refined sweet green tea, hint of </div>
                  <div className="description2">toasted hazelnut and umami tang</div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Houjicha</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Low-caffeine green tea, deep fragrances of </div>
                  <div className="description2">toasted hazelnut and caramelized sugar</div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Yame Black</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Indian-style bright breakfast tea </div>
                  <div className="description2">with a mild malty finish</div>
                </div>





                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Yame Oolong</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Delicately roasted tea with layers </div>
                  <div className="description2">of toffee-like sweetness</div>
                </div>






              </div>{/* .right-column */}
            </div>{/* .section */}

            

            <div className="section section-dessert">
              <div className="left-column">Soba and Tis<span style={{color:'red',fontSize:'inherit'}}>s</span>anes</div>

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Soba Tea</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Nutty, caffeine-free, warm, and toasty</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Chamomile</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Soothing natural blend made only from </div>
                  <div className="description2">caffeine-free chamomile flowers</div>
                </div>






                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Peppermint</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Caffeine-free herbal tea, spicy aroma </div>
                  <div className="description2">and cool, penetrating taste</div>
                </div>












              </div>{/* .right-column */}
            </div>{/* .section */}

            






           </div> {/* .menu-items */}


       </div> {/* .small-paper */}
















      <div className="small-paper">


                                            
          <div className="menu-items">



            <div className="section section-dessert">
              <div className="left-column">Coffee & Matcha</div>
              

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Coffee</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">10</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Espresso</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">8</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Cappuccino</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">12</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Latte</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">12</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Chai Latte</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">12</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Matcha Latte</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">12</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Iced Matcha Latte</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">15</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Matcha Bowl</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>





              </div>{/* .right-column */}
            </div>{/* .section */}

            

            






           </div> {/* .menu-items */}


       </div> {/* .small-paper */}



















    <div id="ume-spritz" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='ume-spritz.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #ume-spritz */}


    <div id="yuzu-sour" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='yuzu-sour.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #yuzu-sour */}



    <div id="foxs-wedding" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='foxs-wedding.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #foxs-wedding */}



    <div id="okusuri" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='okusuri.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #okusuri */}



    <div id="budo-panther" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='budo-panther.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #budo-panther */}



    <div id="ringo-no-mitai" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='ringo-no-mitai.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #ringo-no-mitai */}



    <div id="improved-yokohama" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='improved-yokohama.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #improved-yokohama */}



    <div id="pepper-buck" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='pepper-buck.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #pepper-buck */}



    <div id="phony-negroni" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='phony-negroni.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #phony-negroni */}



    <div id="straw-hat" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='straw-hat.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #straw-hat */}



    <div id="souchong-sour" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
            <img src='souchong-sour.jpg' />
              <br/><br/>
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
      </div>
    </div>{/* #souchong-sour */}



    </div>

    )
}
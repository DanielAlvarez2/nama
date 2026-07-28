'use client'

import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter';

export default function DrinksMenu(){

    function showModal(menuItem){
        document.querySelector(`#${menuItem}`).style.display = 'grid'
    }
    function closeModals(){
        document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
    }


    return(
    <div className='webpage'>

      <Navbar page='drinks' />
      
    
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
                      <span className="name">Ume Melon Spritz</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">28</span>
                  </div>
                  <div className="description1">Sour Plum, Bonnie Melon, Apricot, Sparkling Wine</div>
                  <div className="description2"></div>
                </div>



                <div  className="dinner-menu-item"
                      onClick={()=>showModal('lychee-martini')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Lychee Martini</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">30</span>
                  </div>
                  <div className="description1">Vodka, Daiyame Shochu, Lemon, Lychee, Shiso</div>
                  <div className="description2"></div>
                </div>



                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('foxs-wedding')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Sakura Martini</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">30</span>
                  </div>
                  <div className="description1">Hakurakusei Junmai Ginjo, Ki No Bi Gin, Sakura</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('banana-club')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Banana Club</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Hana Shochu, Four Roses Single Barrel </div>
                  <div className="description2">Bourbon, Nikka Malt Whiskey, Banana, Soda</div>
                </div>







                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('budo-panther')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Akarita</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">30</span>
                  </div>
                  <div className="description1">Mal Bien Mezcal, Red Yuzu Kosho, Lime, Shochu</div>
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
                  <div className="description1">Ichiro Malt & Grain Whiskey, Port Askaig Peated </div>
                  <div className="description2">Scotch, Lemon, Ginger, Pickled Honey</div>
                </div>










                <div  className="dinner-menu-item"
                      onClick={()=>showModal('shiitake-sazerac')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Shiitake Sazerac</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">30</span>
                  </div>
                  <div className="description1">Pinhook 9yr Bourbon, Dad's Hat Oloroso Cask, </div>
                  <div className="description2">Hyakunen No Kodoku Shochu, Bitters</div>
                  
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
                  <div className="description1">Nikka Coffey Gin, Lime, Midori, Leopold </div>
                  <div className="description2">Sour Apple, Bordiga Centum Herbis</div>
                </div>





                <div  className="dinner-menu-item"
                      onClick={()=>showModal('hojicha-colada')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hojicha Colada</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">32</span>
                  </div>
                  <div className="description1">Rums of Mexico Ca<span className='typo'>ñ</span>a Crio<span className='typo'>l</span>la, El Dorado Enmore<span className='typo'>,</span> </div>
                  <div className="description2">Worthy Park, Lime, Coconut, Hojicha</div>
                </div>
















              </div>{/* .right-column */}
            </div>{/* .section */}






          </div>{/* .menu-items */}








      </div>{/* .small-paper */}

      <br className='no-print' />


      <div className='small-paper'>
        <div className='menu-items'>
            <div className="section section-dessert">

              <div className="left-column" style={{ display:'flex',
                                                    width:'3.5in',
                                                    // background:'pink',
                                                    justifyContent:'space-between'}}>
                <span style={{fontSize:'inherit'}}>ZERO PROOF COCKTAILS</span>
                <span className='price'></span>

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
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Ginger, Jalape<span style={{color:'red'}}>ñ</span>o, Lime</div>
                  <div className="description2"></div>
                </div>

              
              
                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('straw-hat')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Genmai Horchata</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Genmaimatcha, Rice, Cinnamon, Kokuto</div>
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
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Gentian, Orange, Juniper</div>
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
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Passionfruit, Falernu<span className='typo'>m</span>, Unified </div>
                  <div className="description2">Ferments Lapsang Souchong</div>
                </div>

              
                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('souchong-sour')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Soba Arnold Palmer</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Yuzu, Lemon, Soba</div>
                  <div className="description2"></div>
                </div>

              
                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('souchong-sour')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Unified Ferments Kombucha</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Snow Chrysanthemum, Lapsang </div>
                  <div className="description2">Souchong, Rhododendron, Soba</div>
                </div>

              
              </div>{/* .right-column */}
            </div>{/* .section */}
            
        </div>{/* .menu-items */}
      </div>{/* .small-paper */}

      
      <br className='no-print' />

















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
                  <div className="description1">Aman, Hakurakusei, Junmai Daiginjo</div>
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

      <br className='no-print' />







      <div className="small-paper">


                                            
          <div className="menu-items">



            <div className="section section-dessert">
              <div className="left-column">By The Glass</div>
              <div className="left-column">Sparkling</div>

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('bollinger')}
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
                      onClick={()=>showModal('aman-champagne-btg')}
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

      <br className='no-print' />





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
                      <span className="name">VieVité</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">22</span>
                  </div>
                  <div className="description1">Côtes de Provence, France 2025</div>
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

      <br className='no-print' />














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

      <br className='no-print' />















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

      <NavbarFooter page='drinks' />


















    <div id="ume-spritz" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`ume-spritz.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Ume Melon Spritz</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">28</span>
                          </div>
                          <div className="description1">Sour Plum, Bonnie Melon, Apricot, Sparkling Wine</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #ume-spritz */}

    <div id="bollinger" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`bollinger.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Bollinger, "Special Cuvée", Brut</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">39</span>
                          </div>
                          <div className="description1">Champagne, France NV</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #bollinger */}

    <div id="aman-champagne-btg" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`aman-champagne-btg.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Aman, "Cuvée Spéciale", Brut</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">75</span>
                          </div>
                          <div className="description1">Champagne, France NV</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #aman-champagne-btg */}


    <div id="yuzu-sour" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`yuzu-sour.jpg?v=${Date.now()}`} />
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

    <div id="banana-club" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`banana-club.jpg?v=${Date.now()}`} />
          </div>        
          <div className='modal-text'>
                 
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Banana Club</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">29</span>
                          </div>
                          <div className="description1">Hana Shochu, Four Roses Single Barrel </div>
                          <div className="description2">Bourbon, Nikka Malt Whiskey, Banana, Soda</div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #banana-club */}

    <div id="lychee-martini" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`lychee-martini.jpg?v=${Date.now()}`} />
          </div>        
          <div className='modal-text'>
                 
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Lychee Martini</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">30</span>
                          </div>
                          <div className="description1">Vodka, Daiyame Shochu, Lemon, Lychee, Shiso</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #lychee-martini */}



    <div id="foxs-wedding" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img src={`foxs-wedding.jpg?v=${Date.now()}`} />
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
            <img src={`okusuri.jpg?v=${Date.now()}`} />
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
                          <div className="description1">Ichiro Malt & Grain Whiskey, Port Askaig Peated </div>
                          <div className="description2">Scotch, Lemon, Ginger, Pickled Honey</div>
                          
                          <hr/>
                          <br/>
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
            <img src={`budo-panther.jpg?v=${Date.now()}`} />
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



    <div id="hojicha-colada" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
               
          <div>
            <img src={`hojicha-colada.jpg?v=${Date.now()}`} />
          </div>       
              
          <div className='modal-text'>
                  
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Hojicha Colada</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">32</span>
                          </div>
                          <div className="description1">Rums of Mexico Ca<span className='typo'>ñ</span>a Crio<span className='typo'>l</span>la, El Dorado Enmore<span className='typo'>,</span> </div>
                          <div className="description2">Worthy Park, Lime, Coconut, Hojicha</div>
                          
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
    </div>{/* #hojicha-colada */}

    <div id="ringo-no-mitai" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
               
          <div>
            <img src={`ringo-no-mitai.jpg?v=${Date.now()}`} />
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
                          <div className="description1">Nikka Coffey Gin, Lime, Midori, Leopold </div>
                          <div className="description2">Sour Apple, Bordiga Centum Herbis</div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}    
      </div>
    </div>{/* #ringo-no-mitai */}



    <div id="shiitake-sazerac" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`shiitake-sazerac.jpg?v=${Date.now()}`} />
          </div>        
              
          <div className='modal-text'>
                  
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Shiitake Sazerac</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">30</span>
                          </div>
                          <div className="description1">Pinhook 9yr Bourbon, Dad's Hat Oloroso Cask, </div>
                          <div className="description2">Hyakunen No Kodoku Shochu, Bitters</div>
                          
                          
                          <hr/>
                          <br/>
                          Bourbon<br/>
                          Rye<br/>
                          Shochu<br/>
                          Chocolate Bitters<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #shiitake-sazerac */}



    <div id="pepper-buck" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
              
          <div>
            <img src={`pepper-buck.jpg?v=${Date.now()}`} />
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
            <img src={`phony-negroni.jpg?v=${Date.now()}`} />
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
            <img src={`straw-hat.jpg?v=${Date.now()}`} />
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
            <img src={`souchong-sour.jpg?v=${Date.now()}`} />
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
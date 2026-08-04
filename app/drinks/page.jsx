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
              <div className="left-column">Specialty Cocktails<br/>スペシャルティカクテル</div>

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
                      onClick={()=>showModal('akarita')}
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

          <div className='legal' style={{width:'3.25in'}}>
            All prices are in USD and subject to 8.875% government tax.
          </div>





      </div>{/* .small-paper */}






      <br className='no-print' />








      <div className='small-paper'>
        <div className='menu-items'>
            <div className="section section-dessert">

              <div className="left-column" style={{ display:'flex',
                                                    width:'3.5in',
                                                    // background:'pink',
                                                    justifyContent:'space-between'}}>
                <span style={{fontSize:'inherit'}}>Non-Alcoholic Cocktails<br/>ノンアルコールカクテル</span>
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





                {/* <div  className="dinner-menu-item"
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
                </div> */}

              
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

          <div className='legal' style={{width:'3.25in'}}>
            All prices are in USD and subject to 8.875% government tax.
          </div>


      </div>{/* .small-paper */}

      
      <br className='no-print' />

















      <div className="small-paper">


                                            
          <div className="menu-items">

            <div className="section section-dessert">
              <div className="left-column">Beer<br/>ビール</div>

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
                      <span className="name">Hakkaissan Rydeen IPA</span>
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
                      <span className="name">BERO Non-Alcoholic Pilsner</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">12</span>
                  </div>
                  <div className="description1">Pennsylvania</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Baladin Botanic Non-Alcoholic Ale</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">12</span>
                  </div>
                  <div className="description1">Cuneo, Italy</div>
                  <div className="description2"></div>
                </div>







              </div>{/* .right-column */}
            </div>{/* .section */}









            


            






           </div> {/* .menu-items */}

          <div className='legal' style={{width:'3.25in'}}>
            All prices are in USD and subject to 8.875% government tax.
          </div>

       </div> {/* .small-paper */}









      <br className='no-print' />














      <div className="small-paper">


                                            
          <div className="menu-items">


            <div className="section section-dessert">
              <div className="left-column">Sake by the Glass<br/>グラスでの酒</div>

              <div className="right-column">
              

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Niizawa, Aman Hakurakusei, Junmai Ginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">25</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>



                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Niizawa, Aman Hakurakusei, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">35</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Zaku, Kaizan Ittekisui, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">49</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Izumibashi Shuzo, Umeshu, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">35</span>
                  </div>
                  <div className="description1"></div>
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
                  <div className="description1">Niizawa, Aman Hakurakusei, Junmai Daiginjo</div>
                  <div className="description2"></div>
                </div>






              </div>{/* .right-column */}
            </div>{/* .section */}









            






           </div> {/* .menu-items */}

          <div className='legal' style={{width:'3.25in'}}>
            All prices are in USD and subject to 8.875% government tax.
          </div>

       </div> {/* .small-paper */}










      <br className='no-print' />














      <div className="small-paper">


                                            
          <div className="menu-items">



            <div className="section section-dessert">
              <div className="left-column">Wines by the Glass<br/>グラスワイン</div>
              <div className="left-column">Champagne<br/>シャンパン</div>

              <div className="right-column">
              
                <div  className='dessert-wine' 
                      onClick={()=>showModal('bollinger')}
                >
                  <div className='dessert-wine-vintage'>NV</div>
                  <div className='dessert-wine-name'>Bollinger, Special Cuvée, Brut</div>
                  <div>39</div>
                </div>{/* .dessert-wine */}

                <div  className='dessert-wine' 
                      onClick={()=>showModal('laherte-freres')}
                >
                  <div className='dessert-wine-vintage'>NV</div>
                  <div className='dessert-wine-name'>Laherte Frères, Rosé de Meunier, Extra Brut</div>
                  <div>47</div>
                </div>{/* .dessert-wine */}

                <div  className='dessert-wine' 
                      onClick={()=>showModal('aman-champagne-btg')}
                >
                  <div className='dessert-wine-vintage'>NV</div>
                  <div className='dessert-wine-name'>Aman, Cuvée Spéciale, Brut</div>
                  <div>75</div>
                </div>{/* .dessert-wine */}

                <div  className='dessert-wine' 
                      onClick={()=>showModal('taittinger')}
                >
                  <div className='dessert-wine-vintage'>2014</div>
                  <div className='dessert-wine-name'>Taittinger, Comtes de Champagne Blanc de Blancs, Brut</div>
                  <div>120</div>
                </div>{/* .dessert-wine */}




              </div>{/* .right-column */}
            </div>{/* .section */}

            







           </div> {/* .menu-items */}

          <div className='legal' style={{width:'3.25in'}}>
            All prices are in USD and subject to 8.875% government tax.
          </div>


       </div> {/* .small-paper */}








      <br className='no-print' />














      <div className="small-paper">


                                            
          <div className="menu-items">



            
            <div className="section section-dessert">
              <div className="left-column">White<br/>白ワイン</div>

              <div className="right-column">
              

                <div  className='dessert-wine' 
                      onClick={()=>showModal('sancerre')}
                >
                  <div className='dessert-wine-vintage'>2025</div>
                  <div className='dessert-wine-name'>Renaissance, Sancerre<br/>Loire Valley, FR</div>
                  <div>27</div>
                </div>{/* .dessert-wine */}

                <div  className='dessert-wine' 
                      onClick={()=>showModal('chardonnay')}
                >
                  <div className='dessert-wine-vintage'>2022</div>
                  <div className='dessert-wine-name'>Kollwentz, Chardonnay Leithakalk<br/>Burgenland, AUT</div>
                  <div>29</div>
                </div>{/* .dessert-wine */}

                <div  className='dessert-wine' 
                      onClick={()=>showModal('saint-peray')}
                >
                  <div className='dessert-wine-vintage'>2021</div>
                  <div className='dessert-wine-name'>Bernard Gripa, Saint-Péray Les Pins<br/>Rhône Valley, FR</div>
                  <div>28</div>
                </div>{/* .dessert-wine */}

              </div>{/* .right-column */}
            </div>{/* .section */}



            <div className="section section-dessert">
              <div className="left-column">Rosé<br/>ロゼワイン</div>

              <div className="right-column">
              
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('saint-peray')}
                >
                  <div className='dessert-wine-vintage'>*2025</div>
                  <div className='dessert-wine-name'>VieVité<br/>Côtes de Provence, FR</div>
                  <div>22</div>
                </div>{/* .dessert-wine */}








              </div>{/* .right-column */}
            </div>{/* .section */}

            

            <div className="section section-dessert">
              <div className="left-column">Red<br/>赤ワイン</div>

              <div className="right-column">
              
                <div  className='dessert-wine' 
                      onClick={()=>showModal('pinot-noir')}
                >
                  <div className='dessert-wine-vintage'>2023</div>
                  <div className='dessert-wine-name'>Peay Vineyards<br/>Sonoma Coast, CA</div>
                  <div>32</div>
                </div>{/* .dessert-wine */}

                <div  className='dessert-wine' 
                      onClick={()=>showModal('garnacha')}
                >
                  <div className='dessert-wine-vintage'>2022</div>
                  <div className='dessert-wine-name'>Bodegas Alto Moncayo, Garnacha<br/>Aragon, ESP</div>
                  <div>28</div>
                </div>{/* .dessert-wine */}

                <div  className='dessert-wine' 
                      onClick={()=>showModal('cabernet')}
                >
                  <div className='dessert-wine-vintage'>2020</div>
                  <div className='dessert-wine-name'>Grgich Hills, Cabernet Sauvignon<br/>Napa Valley, CA</div>
                  <div>42</div>
                </div>{/* .dessert-wine */}
























              </div>{/* .right-column */}
            </div>{/* .section */}

            






           </div> {/* .menu-items */}

          <div className='legal' style={{width:'3.25in'}}>
            All prices are in USD and subject to 8.875% government tax.
          </div>



       </div> {/* .small-paper */}

      <br className='no-print' />















      <div className="small-paper">


                                            
          <div className="menu-items">



            <div className="section section-dessert">
              <div className="left-column">Coffee & Tea<br/>コーヒーとお茶</div>
              

              <div className="right-column">
              

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
                      <span className="name">Cappuccino | Latte</span>
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
                      <span className="name">Matcha Latte | Chai Latte</span>
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
                  <div className="description1"></div>
                  <div className="description2"></div>
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
                  <div className="description1"></div>
                  <div className="description2"></div>
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
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hojicha</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
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
                  <div className="description1"></div>
                  <div className="description2"></div>
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
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('hojicha-banana-roulade')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Soba</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1"></div>
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
                  <div className="description1"></div>
                  <div className="description2"></div>
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
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>





              </div>{/* .right-column */}
            </div>{/* .section */}

            

            






           </div> {/* .menu-items */}

          <div className='legal' style={{width:'3.25in'}}>
            All prices are in USD and subject to 8.875% government tax.<br/>
            Our coffee and tea are green certified and come from Fairtrade partnerships.
          </div>

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

    <div id="taittinger" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`taittinger.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('taittinger')}
                >
                  <div className='dessert-wine-vintage'>2014</div>
                  <div className='dessert-wine-name'>Taittinger, Comtes de Champagne Blanc de Blancs, Brut</div>
                  <div>120</div>
                </div>{/* .dessert-wine */}
                <hr/>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #taittinger */}

    <div id="sancerre" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`sancerre.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('sancerre')}
                >
                  <div className='dessert-wine-vintage'>2025</div>
                  <div className='dessert-wine-name'>Renaissance, Sancerre<br/>Loire Valley, FR</div>
                  <div>27</div>
                </div>{/* .dessert-wine */}
                <hr/>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #sancerre */}

    <div id="chardonnay" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`chardonnay.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('chardonnay')}
                >
                  <div className='dessert-wine-vintage'>2022</div>
                  <div className='dessert-wine-name'>Kollwentz, Chardonnay Leithakalk<br/>Burgenland, AUT</div>
                  <div>29</div>
                </div>{/* .dessert-wine */}
                <hr/>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #chardonnay */}

    <div id="garnacha" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`garnacha.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('garnacha')}
                >
                  <div className='dessert-wine-vintage'>2022</div>
                  <div className='dessert-wine-name'>Bodegas Alto Moncayo, Garnacha<br/>Aragon, ESP</div>
                  <div>28</div>
                </div>{/* .dessert-wine */}
                <hr/>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #garnacha */}

    <div id="cabernet" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`cabernet.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('cabernet')}
                >
                  <div className='dessert-wine-vintage'>2020</div>
                  <div className='dessert-wine-name'>Grgich Hills, Cabernet Sauvignon<br/>Napa Valley, CA</div>
                  <div>42</div>
                </div>{/* .dessert-wine */}
                <hr/>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #cabernet */}

    <div id="pinot-noir" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`pinot-noir.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('pinot-noir')}
                >
                  <div className='dessert-wine-vintage'>2023</div>
                  <div className='dessert-wine-name'>Peay Vineyards<br/>Sonoma Coast, CA</div>
                  <div>32</div>
                </div>{/* .dessert-wine */}
                <hr/>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #pinot-noir */}

    <div id="saint-peray" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`saint-peray.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('saint-peray')}
                >
                  <div className='dessert-wine-vintage'>2021</div>
                  <div className='dessert-wine-name'>Bernard Gripa, Saint-Péray Les Pins<br/>Rhône Valley, FR</div>
                  <div>28</div>
                </div>{/* .dessert-wine */}
                <hr/>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #saint-peray */}

    <div id="laherte-freres" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`laherte-freres.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('laherte-freres')}
                >
                  <div className='dessert-wine-vintage'>NV</div>
                  <div className='dessert-wine-name'>Laherte Frères, Rosé de Meunier, Extra Brut</div>
                  <div>47</div>
                </div>{/* .dessert-wine */}
                <hr/>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #laherte-freres */}

    <div id="bollinger" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`bollinger.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('bollinger')}
                >
                  <div className='dessert-wine-vintage'>NV</div>
                  <div className='dessert-wine-name'>Bollinger, Special Cuvée, Brut</div>
                  <div>39</div>
                </div>{/* .dessert-wine */}
                <hr/>
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
                <div  className='dessert-wine' 
                      // onClick={()=>showModal('aman-champagne-btg')}
                >
                  <div className='dessert-wine-vintage'>NV</div>
                  <div className='dessert-wine-name'>Aman, Cuvée Spéciale, Brut</div>
                  <div>75</div>
                </div>{/* .dessert-wine */}
                <hr/>
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



    <div id="akarita" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`akarita.jpg?v=${Date.now()}`} />
          </div>         
              
          <div className='modal-text'>
             
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Akarita</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">30</span>
                          </div>
                          <div className="description1">Mal Bien Mezcal, Red Yuzu Kosho, Lime, Shochu</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}      
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #akarita */}



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
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
      
    
      <div  className="small-paper" 
            style={{
                    
                    // backgroundImage:'url("akari-drinks-1.jpg")',
                    backgroundSize:'5.5in',
                    // color:'blue'
                    }}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">
                
                <div className='drink-menu-h1'>Specialty Cocktails</div>
                <div className='kanji'>スペシャルティカクテル</div>
              </div>

              <div className="right-column">
              


                <div  className="dinner-menu-item"
                      onClick={()=>showModal('ume-spritz')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Ume Melon Spritz</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">28</span>
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
                    <span className="dessert-price">30</span>
                  </div>
                  <div className="description1">Vodka, Daiyame Shochu, Lemon, Lychee, Shiso</div>
                  <div className="description2"></div>
                </div>



                <div  className="dinner-menu-item"
                      onClick={()=>showModal('sakura-martini')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Sakura Martini</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">30</span>
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
                    <span className="dessert-price">29</span>
                  </div>
                  <div className="description1">Hana Shochu, Four Roses Single Barrel Bourbon, </div>
                  <div className="description2">Nikka Malt Whiskey, Banana, Soda</div>
                </div>







                <div  className="dinner-menu-item"
                      onClick={()=>showModal('akarita')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Akarita</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">30</span>
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
                    <span className="dessert-price">32</span>
                  </div>
                  <div className="description1">Ichiro Malt & Grain Whiskey, Port Askaig Peated Scotch, </div>
                  <div className="description2">Lemon, Ginger, Pickled Honey</div>
                </div>










                <div  className="dinner-menu-item"
                      onClick={()=>showModal('shiitake-sazerac')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Shiitake Sazerac</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">30</span>
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
                    <span className="dessert-price">28</span>
                  </div>
                  <div className="description1">Nikka Coffey Gin, Lime, Midori, Leopold Sour Apple, </div>
                  <div className="description2">Bordiga Centum Herbis</div>
                </div>





                <div  className="dinner-menu-item"
                      onClick={()=>showModal('hojicha-colada')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hojicha Colada</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">32</span>
                  </div>
                  <div className="description1">Rums of Mexico Caña Criolla, El Dorado Enmore, </div>
                  <div className="description2">Worthy Park, Lime, Coconut, Hojicha</div>
                </div>
















              </div>{/* .right-column */}
            </div>{/* .section */}








          </div>{/* .menu-items */}

          <div  className='legal' 
                style={{
                        width:'3.25in',
                        fontFamily:'AnagoBook',
                        letterSpacing:'0',
                        marginTop:'auto',
                        paddingBottom:'50px',
                        fontSize:'7px'
                        }}>
            All prices are in USD and subject to 8.875% government tax.
          </div>





      </div>{/* .drink-menu-page-paper */}






      <br className='no-print' />








      <div  className='small-paper' 
            // style={{backgroundImage:'url("scan-drinks-2.jpg")',backgroundSize:'5.5in'}}
            >
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
                      <span className="name">*Pepper Buck</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">16</span>
                  </div>
                  <div className="description1">Ginger, Jalapeño, Lime</div>
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
                    <span className="dessert-price">16</span>
                  </div>
                  <div className="description1">Juniper, Orange, Gentian</div>
                  <div className="description2"></div>
                </div>


                <div  className="dinner-menu-item"
                      onClick={()=>showModal('genmai-horchata')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Genmai Horchata</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">16</span>
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
                    <span className="dessert-price">16</span>
                  </div>
                  <div className="description1">Passionfruit, Falernu<span className='typo'>m</span>, Unified </div>
                  <div className="description2">Ferments Lapsang Souchong</div>
                </div> */}

              
                <div  className="dinner-menu-item"
                      onClick={()=>showModal('soba-arnold-palmer')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Soba Arnold Palmer</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">16</span>
                  </div>
                  <div className="description1">Yuzu, Lemon, Soba</div>
                  <div className="description2"></div>
                </div>

              
                <div  className="dinner-menu-item"
                      onClick={()=>showModal('kombucha')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">*Unified Ferments Kombucha</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">16</span>
                  </div>
                  <div className="description1">Snow Chrysanthemum, Lapsang Souchong, </div>
                  <div className="description2">Rhododendron, Soba</div>
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
                      onClick={()=>showModal('sapporo')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Sapporo Lager</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">12</span>
                  </div>
                  <div className="description1">Hokkaido, Japan</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      onClick={()=>showModal('koshihikari')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Koshihikari Rice <span className='typo'>Ale</span></span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">12</span>
                  </div>
                  <div className="description1">Niigata, Japan</div>
                  <div className="description2"></div>
                </div>






                <div  className="dinner-menu-item"
                      onClick={()=>showModal('nest')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hitachino Nest White Ale</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">12</span>
                  </div>
                  <div className="description1">Naka, Japan</div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      onClick={()=>showModal('rydeen-ipa')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hakkaissan Rydeen IPA</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">12</span>
                  </div>
                  <div className="description1">Niigata, Japan</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('bero')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">BERO Non-Alcoholic Pilsner</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">12</span>
                  </div>
                  <div className="description1 typo">Pennsylvania</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('botanic')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Baladin Botanic Non-Alcoholic Ale</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">12</span>
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
                      onClick={()=>showModal('aman-ginjo')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Niizawa, Aman Hakurakusei, Junmai Ginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">25</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>



                <div  className="dinner-menu-item"
                      onClick={()=>showModal('aman-daiginjo')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Niizawa, Aman Hakurakusei, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">35</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      onClick={()=>showModal('zaku-daiginjo')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Zaku, Kaizan Ittekisui, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">49</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      onClick={()=>showModal('umeshu')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Izumibashi Shuzo, Umeshu, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">35</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      onClick={()=>showModal('carafe')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Carafe 8oz</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">68</span>
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
                  <div className='dessert-wine-name'>Laherte Frères, Rosé de Meunier, <br/>Extra Brut</div>
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
                  <div className='dessert-wine-name'>Taittinger, Comtes de Champagne <br/>Blanc de Blancs, Brut</div>
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
                  <div className='dessert-wine-name'>Peay Vineyards, Pinot Noir,<br/>Sonoma Coast, CA</div>
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



            <div className="section section-dessert" style={{marginBottom:'0'}}>
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
                    <span className="dessert-price">8</span>
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
                    <span className="dessert-price">10</span>
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
                    <span className="dessert-price">12</span>
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
                    <span className="dessert-price">12</span>
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
                    <span className="dessert-price">15</span>
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
                    <span className="dessert-price">16</span>
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
                    <span className="dessert-price">16</span>
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
                    <span className="dessert-price">16</span>
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
                    <span className="dessert-price">16</span>
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
                    <span className="dessert-price">16</span>
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
                    <span className="dessert-price">16</span>
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
                    <span className="dessert-price">16</span>
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
                    <span className="dessert-price">16</span>
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
                    <span className="dessert-price">16</span>
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
                    <span className="dessert-price">16</span>
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


















    <div id="kombucha" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`kombucha.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Unified Ferments Kombucha</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">16</span>
                          </div>
                          <div className="description1">Snow Chrysanthemum, Lapsang Souchong, </div>
                          <div className="description2">Rhododendron, Soba</div>
                          <br/>
                          <hr/>
                          <br/>
                          4 Flavor Options:<br/>
                           - Snow Chrysanthemum<br/>
                           - Lapsang Souchong<br/>
                           - Rhododendron<br/>
                           - Soba<br/>
                          <br/>
                          Kombucha: <br/>
                          FERMENTED, slightly fizzy, sweetened tea<br/>
                          served cold<br/>
                          <br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #kombucha */}

    <div id="botanic" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`botanic.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Baladin Botanic Non-Alcoholic Ale</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">12</span>
                          </div>
                          <div className="description1">Cuneo, Italy</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          Baladin Brewery<br/>
                          Botanic<br/>
                          11 oz<br/>
                          Non-Alcoholic Malt Beverage with Coriander, Passion Flower, Chamomile & Gentian<br/>
                          &lt;0.5%abv<br/>
                          <br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #botanic */}

    <div id="koshihikari" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`koshihikari.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Koshihikari Rice <span className='typo'>Ale</span></span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">12</span>
                          </div>
                          <div className="description1">Niigata, Japan</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          Echigo Beer Co.<br/>
                          Koshihikari<br/>
                          Rice <span className='typo'>Lager</span><br/>
                          Niigata, Japan<br/>
                          11 oz<br/>
                          5%abv<br/>
                          <br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #koshihikari */}

    <div id="nest" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`nest.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Hitachino Nest White Ale</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">12</span>
                          </div>
                          <div className="description1">Naka, Japan</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          Kiuchi Brewery<br/>
                          Hitachino Nest White Ale<br/>
                          ale brewed with spices and orange juice<br/>
                          12 oz<br/>
                          5.5%abv<br/>
                          <br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #nest */}

    <div id="bero" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`bero.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">BERO Non-Alcoholic Pilsner</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">12</span>
                          </div>
                          <div className="description1 typo">Pennsylvania</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          BERO Kingston Golden Pils<br/>
                          <span className='typo'>Northglenn, Colorado</span><br/>
                          12 oz<br/>
                          Non-Alcoholic<br/>
                          &lt;0.5%abv<br/><br/>
                          Founded by actor Tom Holland(Spider-Man)
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #bero */}

    <div id="rydeen-ipa" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`rydeen-ipa.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Hakkaissan Rydeen IPA</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">12</span>
                          </div>
                          <div className="description1">Niigata, Japan</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          Sarukurayama Brewery<br/>
                          Hakkaisan Rydeen IPA<br/>
                          Niigata, Japan<br/>
                          6%abv<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #rydeen-ipa */}

    <div id="sapporo" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`sapporo.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Sapporo</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">12</span>
                          </div>
                          <div className="description1">Hokkaido, Japan</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          Sapporo Brewing Co.<br/>
                          Pale Lager / Pilsner<br/>
                          12 oz<br/>
                          4.9%abv<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #sapporo */}

    <div id="ume-spritz" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`ume-spritz.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Ume Melon Spritz</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">28</span>
                          </div>
                          <div className="description1">Sour Plum, Bonnie Melon, Apricot, Sparkling Wine</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          sour plum wine<br/>
                          bonnie melon juice<br/>
                          apricot liqueur<br/>
                          sparkling wine
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
                  <div className='dessert-wine-name'>Taittinger, Comtes de Champagne<br/>Blanc de Blancs, Brut</div>
                  <div>120</div>
                </div>{/* .dessert-wine */}
                
                <hr/>
                <br/>
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
                <br/>
                Grape Varietal: Sauvignon Blanc<br/>
                13%abv
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
                <br/>
                Grape Varietal: Chardonnay<br/>
                13.5%abv
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
                <br/>
                Grape Varietal: Garnacha<br/>
                16%abv
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
                <br/>
                Grape Varietal: Cabernet Sauvignon<br/>
                14.1%abv
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
                <br/>
                Grape Varietal: Pinot Noir<br/>
                13%abv
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #pinot-noir */}

    <div id="aman-ginjo" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`aman-ginjo.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('aman-ginjo')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Niizawa, Aman Hakurakusei, Junmai Ginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">25</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>
                
                <hr/>
                <br/>
                15.5%abv
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #aman-ginjo */}

    <div id="aman-daiginjo" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`aman-daiginjo.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('aman-ginjo')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Niizawa, Aman Hakurakusei, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">35</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>
                <hr/><br/>
                16%abv
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #aman-daiginjo */}

    <div id="carafe" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`aman-daiginjo.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('aman-ginjo')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Carafe 8oz<br/>Niizawa, Aman Hakurakusei, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">68</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>


                <hr/><br/>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #carafe */}

    <div id="zaku-daiginjo" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`zaku-daiginjo.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('aman-ginjo')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Zaku, Kaizan Ittekisui, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">49</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>


                <hr/><br/>
                16%abv
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #zaku-daiginjo */}

    <div id="umeshu" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`umeshu.jpg?v=${Date.now()}`} />
          </div>
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
                <div  className="dinner-menu-item"
                      // onClick={()=>showModal('aman-ginjo')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Izumibashi Shuzo, Umeshu, Junmai Daiginjo</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="dessert-price">35</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>


                <hr/><br/>
                10%abv
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #umeshu */}

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
                <hr/><br/>
                Grape Varietals: Marsanne / Roussanne<br/>
                13%abv
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
                <hr/><br/>
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
                <hr/><br/>
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
                <hr/><br/>
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
                 
              
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Yuzu Sour</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">30</span>
                          </div>
                          <div className="description1">Mal Bien Mezcal, Daiyame Shochu, Yuzu Kosho, Lime</div>
                          <div className="description2"></div>
                          <br/><hr/><br/>
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
                 
              
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Banana Club</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">29</span>
                          </div>
                          <div className="description1">Hana Shochu, Four Roses Single Barrel Bourbon, </div>
                          <div className="description2">Nikka Malt Whiskey, Banana, Soda</div>
                          <br/>
                          <hr/>
                          <br/>
                          hana shochu<br/>
                          bourbon<br/>
                          whiskey<br/>
                          banana syrup<br/>
                          club soda<br/>
                          lemon twist
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
                 
              
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Lychee Martini</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">30</span>
                          </div>
                          <div className="description1">Vodka, Daiyame Shochu, Lemon, Lychee, Shiso</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          vodka<br/>
                          shochu<br/>
                          lychee juice<br/>
                          lemon juice
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #lychee-martini */}



    <div id="sakura-martini" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img src={`sakura-martini.jpg?v=${Date.now()}`} />
          </div>      
              
          <div className='modal-text'>
              
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Sakura Martini</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">30</span>
                          </div>
                          <div className="description1">Hakurakusei Junmai Ginjo, Ki No Bi Gin, Sakura</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          sake<br/>
                          gin<br/>
                          cherry blossom bitters<br/>
                          garnish: sakura/cherry blossom flower
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}     
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #sakura-martini */}



    <div id="okusuri" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`okusuri.jpg?v=${Date.now()}`} />
          </div>         
              
          <div className='modal-text'>
                 
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Okusuri</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">32</span>
                          </div>
                          <div className="description1">Ichiro Malt & Grain Whiskey, Port Askaig Peated Scotch, </div>
                          <div className="description2">Lemon, Ginger, Pickled Honey</div>
                          <br/>
                          <hr/>
                          <br/>
                          whiskey<br/>
                          scotch<br/>
                          lemon juice<br/>
                          wasabi/ginger/pickled honey infusion
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
             
              MENU DESCRIPTION:<br/><br/> 
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Akarita</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">30</span>
                          </div>
                          <div className="description1">Mal Bien Mezcal, Red Yuzu Kosho, Lime, Shochu</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          mezcal<br/>
                          red yuzu kosho<br/>
                          lime juice<br/>
                          shochu<br/>
                          gernish: citrus zest<br/><br/>
                          red yuzu kosho:<br/>
                          spicy/salty paste<br/>
                          ripe yuzu citrus zest<br/>
                          red chili peppers<br/>
                          salt
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
                  
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Hojicha Colada</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">32</span>
                          </div>
                          <div className="description1">Rums of Mexico Caña Criolla, El Dorado Enmore, </div>
                          <div className="description2">Worthy Park, Lime, Coconut, Hojicha</div>
                          <br/>
                          <hr/>
                          <br/>
                          rum<br/>
                          hojicha green tea/coconut cream<br/>
                          lime juice<br/>
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
                  
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Ringo No Mitai</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">28</span>
                          </div>
                          <div className="description1">Nikka Coffey Gin, Lime, Midori, Leopold Sour Apple, </div>
                          <div className="description2">Bordiga Centum Herbis</div>
                          <br/>
                          <hr/>
                          <br/>
                          gin<br/>
                          midori(melon liqueur)<br/>
                          sour apple liqueur<br/>
                          centum herbis("100 herbs") herbal liqueur<br/>
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
                  
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Shiitake Sazerac</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">30</span>
                          </div>
                          <div className="description1">Pinhook 9yr Bourbon, Dad's Hat Oloroso Cask, </div>
                          <div className="description2">Hyakunen No Kodoku Shochu, Bitters</div>
                          <br/>
                          
                          <hr/>
                          <br/>
                          Bourbon<br/>
                          Rye<br/>
                          Shochu<br/>
                          Bitters<br/>
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
                  
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Pepper Buck</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">16</span>
                          </div>
                          <div className="description1">Ginger, Jalapeño, Lime</div>
                          <div className="description2"></div>
                          <br/><hr/><br/>
                          ginger beer<br/>
                          spiced ginger<br/>
                          jalapeño<br/>
                          lime juice<br/>
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
                  
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Phony Negroni</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">16</span>
                          </div>
                          <div className="description1">Juniper, Orange, Gentian</div>
                          <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          juniper<br/>
                          orange<br/>
                          gentian: bitter plant root<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #phony-negroni */}



    <div id="genmai-horchata" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`genmai-horchata.jpg?v=${Date.now()}`} />
          </div>       
              
          <div className='modal-text'>
                  
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Genmai Horchata</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">16</span>
                          </div>
                          <div className="description1">Genmaimatcha, Rice, Cinnamon, Kokuto</div>
                          <div className="description2"></div>
                          
                          <br/>
                          <hr/>
                          <br/>

                          genmaimatcha green tea<br/>
                          rice<br/>
                          cinnamon<br/>
                          kokuto: cane sugar<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #straw-hat */}



    <div id="soba-arnold-palmer" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />      
          <div className='modal-content'>
          
          <div>
            <img src={`soba-arnold-palmer.jpg?v=${Date.now()}`} />
          </div>    
              
          <div className='modal-text'>
                  
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Soba Arnold Palmer</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="dessert-price">16</span>
                          </div>
                          <div className="description1">Yuzu, Lemon, Soba</div>
                          <div className="description2"></div>
                          
                          <br/>
                          <hr/>
                          <br/>

                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}         
      </div>
    </div>{/* #souchong-sour */}



    </div>

    )
}
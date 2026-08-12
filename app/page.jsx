'use client'

import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'

export default function Home() {

  function showModal(menuItem){
    closeModals()
    document.querySelector(`#${menuItem}`).style.display = 'grid'
  }
  function closeModals(){
    document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
  }

  return (

    <div className="webpage">
      
      <Navbar page='dinner' />

        <div className="letter-paper">


                                            
          <div className="menu-items">

            <div className='tasting-menu-flexbox' 
                  style={{maxWidth:'5.25in',
                          margin:'0 auto',
                          marginTop:'50px',
                          display:'flex',
                          // border:'1px solid red'
                  }}
            >
              
              <div className="tasting-left" style={{width:'150px',alignSelf:'flex-start'}}>
                Chef's Tasting Menu<br/>
                テイスティング
              </div>

              <div className="tasting-middle">
                    Akari's Tasting Menu presents two seasonal expressions, 
                    crafted with the finest ingredients selected daily from the 
                    Tokyo Toyosu Market. Named Tsuki (Moon) and Hana 
                    (Flower), each menu draws inspiration from enduring motifs 
                    in Japanese aesthetics that honour nature's perpetual cycle 
                    and the beauty found in every fleeting moment. 
              </div>

              <span className="tasting-right" style={{width:'20ch'}}></span>

            </div>{/* .tasting-menu-flexbox */}
            
            <div  className='tasting-menu-flexbox' 
                  onClick={()=>showModal('moon')}
                  style={{maxWidth:'5.25in',
                          margin:'0 auto',
                          cursor:'pointer',
                          display:'flex',
                          // border:'1px solid red'
                  }}
            >
              
              <div  className="tasting-left" 
                    style={{width:'150px',alignSelf:'flex-start'}}>
                Tsuki/Moon<br/>月
              </div>

              <div className="tasting-middle">
An individually served sushi-focused tasting 
menu highlighting the freshest seasonal 
produce.               </div>

              <span className="tasting-right" style={{width:'20ch',textAlign:'right'}}>288</span>

            </div>{/* .tasting-menu-flexbox */}
            
            <div  className='tasting-menu-flexbox' 
                  onClick={()=>showModal('flower')}
                  style={{maxWidth:'5.25in',
                          margin:'0 auto',
                          cursor:'pointer',
                          display:'flex',
                          // border:'1px solid red'
                  }}
            >
              
              <div  className="tasting-left" 
                    style={{width:'150px',alignSelf:'flex-start'}}>
                Hana/Flower<br/>花</div>

              <div className="tasting-middle">
                    A comprehensive tasting menu, transforming ingredients 
                    sourced at their peak into expertly crafted dishes.  
              </div>

              <span className="tasting-right" style={{width:'20ch',textAlign:'right'}}>388</span>

            </div>{/* .tasting-menu-flexbox */}
            
            


          </div>{/* .menu-items */}
          <div className='legal'>
            All prices are in USD and subject to 8.875% government tax. 
            Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness. 
            Please let us know if you have any 
            allergies or special dietary requirements, or if you require any further information. Our choice of suppliers and local 
            produce - including fish, meat, dairy, fruits and vegetables - is informed by our commitment to sustainability.
          </div>
        </div>{/* .letter-paper */}




      <br className='no-print' />





      <div className="letter-paper">


                                            
          <div className="menu-items">
            <div className="section">
              <div className="left-column">Soup<br/>椀物</div>

              <div className="right-column">
              
                <div  className="dinner-menu-item"
                      onClick={()=>showModal('miso-soup')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Miso Soup</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">10</span>
                  </div>
                  <div className="description1">Awase Miso, Seaweed, Tofu, Chives</div>
                  <div className="description2"></div>
                </div>




              </div>
            </div>

            <div className="section">
              <div className="left-column">Small Plates<br/>前菜</div>
              <div className="right-column">

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('edamame')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Chamame</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">10</span>
                  </div>
                  <div className="description1">Edamame, Shichimi Salt</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('nama-tofu')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Akari Tofu</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                  <div className="description1">House Made Tofu, Dashi, Shoyu, Ginger</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('shishitos')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Shishito Peppers</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">17</span>
                  </div>
                  <div className="description1">Bonito Flakes</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('goma-ae')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Goma Ae</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">17</span>
                  </div>
                  <div className="description1">Spinach, Shimeji Mushrooms, Sesame Soy</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('tsukemono-moriawase')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Tsukemono Moriawase</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">House Made Pickles</div>
                  <div className="description2"></div>
                </div>


                <div  className="dinner-menu-item"
                      onClick={()=>showModal('nasu-agebitashi')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Nasu Agebitashi</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">17</span>
                  </div>
                  <div className="description1">Chilled Eggplant, Ginger</div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      onClick={()=>showModal('hamachi-usuzukuri')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hamachi Usuzukuri</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">35</span>
                  </div>
                  <div className="description1">Yellowtail, Yuzu Sesame Ponzu, Crispy Garlic</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('yasai-shiraae')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Yasai Shiraae</span>
                      <span className="allergies">(D, GF)</span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Summer Vegetables, Tofu Dip</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('wagyu-tataki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">A5 Wagyu Tataki</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">34</span>
                  </div>
                  <div className="description1">A5 Miyazaki Wagyu, Grated Daikon Ponzu</div>
                  <div className="description2"></div>
                </div>






                <div  className="dinner-menu-item"
                      onClick={()=>showModal('shima-aji-tataki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Shimaaji Tataki</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">46</span>
                  </div>
                  <div className="description1">Seared Striped Jack, Tosazu Jelly</div>
                  <div className="description2"></div>
                </div>





                <div  className="dinner-menu-item"
                      onClick={()=>showModal('aigamo-roast')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Aigamo Roast</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">31</span>
                  </div>
                  <div className="description1">Duck Breast, Nanban Miso, Tokyo Negi</div>
                  <div className="description2"></div>
                </div>



              </div>
            </div>

           </div> {/* .menu-items */}

          <div className="legal">
            (D)Dairy (GF)Gluten Free (N)Nuts (V)Vegan
            <br/><br/>
            All prices are in USD and subject to 8.875% government tax. 
              Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness. 
              Please let us know if you have any 
            allergies or special dietary requirements, or if you require any further information. Our choice of suppliers and local 
            produce - including fish, meat, dairy, fruits and vegetables - is informed by our commitment to sustainability.
          </div>

       </div> {/* .letter-paper */}
    
      <br className='no-print' />




















      <div className="letter-paper mains">


                                            
          <div className="menu-items">

            <div className="section">
              <div className="left-column">Salad<br/>サラダ</div>
              <div className="right-column">

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('greenmarket-salad')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Green Market</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Summer Vegetables, Goma Miso</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Tofu</span>
                      <span className='allergies'>(V, GF)</span>
                    </span>
                    <span className="upgrade-price">38</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Warm Mushroom<span className='typo'>s</span></span>
                      <span className='allergies'>(V, GF)</span>
                    </span>
                    <span className="upgrade-price">40</span>
                  </div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('caesar-salad')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Caesar</span>
                      <span className="allergies">(D, GF)</span>
                    </span>
                    <span className="price">24</span>
                  </div>
                  <div className="description1">Yuzu Sesame, Ontama, Katsuo Bushi, Aonori</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Warm Mushrooms</span>
                      <span className='allergies'>(GF)</span>
                    </span>
                    <span className="upgrade-price">35</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Hokkaido "Unibushi"</span>
                      <span className='allergies'>(GF)</span>
                    </span>
                    <span className="upgrade-price">44</span>
                  </div>
                </div>


              </div>


            </div>



            <div className="section">
              <div className="left-column">Fried<br/>揚げ物</div>

              <div className="right-column">
              
                <div  className="dinner-menu-item"
                      onClick={()=>showModal('yasai-tempura')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Yasai Tempura</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">27</span>
                  </div>
                  <div className="description1">Summer Vegetables</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('tempura-moriawase')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Tempura Moriawase</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">37</span>
                  </div>
                  <div className="description1">Shrimp, Summer Vegetables</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('shrimp-tempura')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Ebi Tempura</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">41</span>
                  </div>
                  <div className="description1">Shrimp</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      onClick={()=>showModal('suzuki-tatsuta-age')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Suzuki Tatsutaage</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">48</span>
                  </div>
                  <div className="description1">Fried Branzino, Shiso Aioli</div>
                  <div className="description2"></div>
                </div>


                <div  className="dinner-menu-item"
                      onClick={()=>showModal('softshell-crab')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Soft Shell Crab Karaage</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">54</span>
                  </div>
                  <div className="description1">Fried Soft Shell Crab, Tomato Relish</div>
                  <div className="description2"></div>
                </div>






                <div  className="dinner-menu-item"
                      onClick={()=>showModal('lobster-tempura')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Lobster Tempura</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">66</span>
                  </div>
                  <div className="description1">Lobster, Yuzu Aioli</div>
                  <div className="description2"></div>
                </div>




              </div>
            </div>

            <div className="section">
              <div className="left-column">Fish<br/>魚</div>
              <div className="right-column">

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('gindara')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Gindara</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">50</span>
                  </div>
                  <div className="description1">Miso Black Cod</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('hamachi-kama')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hamachi Kama</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">52</span>
                  </div>
                  <div className="description1">Charcoal Grilled Yellowtail Collar</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('lobster-uni-ogonyaki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Lobster & Uni Ogonyaki</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">86</span>
                  </div>
                  <div className="description1">Grilled Lobster, Uni Miso, Lobster Oil</div>
                  <div className="description2"></div>
                </div>

              </div>
            </div>



           </div> {/* .menu-items */}

          <div className="legal">
            (D)Dairy (GF)Gluten Free (N)Nuts (V)Vegan
            <br/><br/>
            All prices are in USD and subject to 8.875% government tax. 
            Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness. 
            Please let us know if you have any 
            allergies or special dietary requirements, or if you require any further information. Our choice of suppliers and local 
            produce - including fish, meat, dairy, fruits and vegetables - is informed by our commitment to sustainability.
          </div>

       </div> {/* .letter-paper */}
    
      <br className='no-print' />













      <div className="letter-paper">


                                            
          <div className="menu-items">

            <div className="section">
              <div className="left-column">Meat<br/>肉</div>
              <div className="right-column">

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('jidori-chicken')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Shio Koji Jidori Sumibi Yaki</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">38</span>
                  </div>
                  <div className="description1">Charcoal Grilled Chicken, Yuzu Sesame Ponzu, Daikon Oroshi</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('kamo-miso-yaki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Kamo Miso Yaki</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">70</span>
                  </div>
                  <div className="description1">Charcoal Grilled Duck Breast, Shiso Miso</div>
                  <div className="description2"></div>
                </div>



                <div  className="dinner-menu-item"
                      onClick={()=>showModal('lamb-chops')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Moromi Lamb Sumibi Yaki</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">98</span>
                  </div>
                  <div className="description1">Moromi Marinated Lamb, Wasabi Oil</div>
                  <div className="description2"></div>
                </div>











                <div  className="dinner-menu-item"
                      onClick={()=>showModal('tenderloin')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">A5 Kobe Charcoal Grilled Tenderloin</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">220</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('sirloin')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">A5 Kobe Charcoal Grilled Sirloin</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">205</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>


              </div>


            </div>

            <div className="section">
              <div className="left-column">Market<br/>野菜</div>
              <div className="right-column">

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('tofu-miso-yaki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Tofu Miso Yaki</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">30</span>
                  </div>
                  <div className="description1">Charcoal Grilled Tofu, Shiso Miso</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      onClick={()=>showModal('grilled-vegetables')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Grilled Summer Vegetables</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">35</span>
                  </div>
                  <div className="description1">Yukari Salt, Shiso Miso</div>
                  <div className="description2"></div>
                </div>








                <div  className="dinner-menu-item"
                      onClick={()=>showModal('nasu-dengaku')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Nasu Dengaku</span>
                      <span className="allergies">(V, N, GF)</span>
                    </span>
                    <span className="price">38</span>
                  </div>
                  <div className="description1">Grilled Eggplant, Saikyo Miso</div>
                  <div className="description2"></div>
                </div>








              </div>


            </div>
























            <div className="section">
              <div className="left-column">Maki<br/>巻物</div>
              <div className="right-column sushi-rolls">

                <div className="dinner-menu-item"
                      onClick={()=>showModal('kappa-maki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Kappa</span>
                      <span className="allergies">(V)</span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Cucumber</div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('oshinko-maki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Oshinko</span>
                      <span className="allergies">(V)</span>
                    </span>
                    <span className="price">18</span>
                  </div>
                  <div className="description1">Pickled Daikon Radish</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('ume-shiso-maki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Ume Shiso</span>
                      <span className="allergies">(V)</span>
                    </span>
                    <span className="price">18</span>
                  </div>
                  <div className="description1">Sour Plum, Shiso, Cucumber</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('avocado-maki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Avocado</span>
                      <span className="allergies">(V)</span>
                    </span>
                    <span className="price">18</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('unagi-cucumber-maki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Eel Cucumber</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">21</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('tekka-maki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Tekka</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">21</span>
                  </div>
                  <div className="description1">Tuna</div>
                  <div className="description2"></div>
                </div>

              </div>
            </div>



           </div> {/* .menu-items */}
          <div className="legal">
            (D)Dairy (GF)Gluten Free (N)Nuts (V)Vegan
            <br/><br/>
            All prices are in USD and subject to 8.875% government tax. 
            Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness. 
            Please let us know if you have any 
            allergies or special dietary requirements, or if you require any further information. Our choice of suppliers and local 
            produce - including fish, meat, dairy, fruits and vegetables - is informed by our commitment to sustainability.
          </div>


       </div> {/* .letter-paper */}
    
      <br className='no-print' />












      <div className="letter-paper">


                                            
          <div className="menu-items">


            <div className="section">
              <div className="left-column">Sushi Roll<span className='typo'>s</span><br/>ロール</div>

              <div className="right-column">

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('vegetable-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Vegetable</span>
                      <span className="allergies">(V)</span>
                    </span>
                    <span className="price">25</span>
                  </div>
                  <div className="description1">Napa Cabbage, Japanese Burdock</div>
                  <div className="description2"></div>
                </div>

                <div className="dinner-menu-item"
                      onClick={()=>showModal('spicy-tuna-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Spicy Tuna</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">25</span>
                  </div>
                  <div className="description1">Spicy Sesame Aioli, Asparagus, Chives</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('negi-hama-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Negi Hama</span>
                      <span className="allergies typo">(GF)</span>
                    </span>
                    <span className="price">25</span>
                  </div>
                  <div className="description1">Hamachi, Scallion</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('salmon-avocado-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">*Salmon Avocado</span>
                      <span className="allergies typo">(GF)</span>
                    </span>
                    <span className="price">26</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('california-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">King Crab California</span>
                      <span className="allergies typo">(GF)</span>
                    </span>
                    <span className="price">36</span>
                  </div>
                  <div className="description1">Avocado, Cucumber</div>
                  <div className="description2"></div>
                </div>




                <div  className="dinner-menu-item"
                      onClick={()=>showModal('wagyu-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Miyazaki Wagyu</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">78</span>
                  </div>
                  <div className="description1">Seared Wagyu Beef, Garlic Chili, Sesame Oil</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('lobster-tempura-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Lobster Tempura</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">55</span>
                  </div>
                  <div className="description1">Napa Cabbage, Lobster Butter Aioli</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('spider-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Spider</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">45</span>
                  </div>
                  <div className="description1">Soft Shell Crab, Spicy Mayo</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('aman-ny-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Aman New York</span>
                      <span className="allergies typo">(GF)</span>
                    </span>
                    <span className="price">72</span>
                  </div>
                  <div className="description1">Toro, King Crab, Uni</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With 10 grams of Ossetra Caviar</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">132</span>
                  </div>

                </div>

              </div>{/* .right-column */}
            </div>{/* .section */}

            <div className="section">
              <div className="left-column">Sashimi & Nigiri<br/>刺⾝ / にぎり</div>

              <div className="right-column">
              
                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('hamachi')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hamachi (Yellowtail)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">13</span>
                  </div>
                </div>

                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('madai')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Madai (Red Snapper)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">13</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('kinme-dai')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Kinme Dai (Golden Eye Snapper)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">17</span>
                  </div>
                </div>

                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('akami')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Akami (Lean Tuna)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('chutoro')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Chutoro (Medium Fatty Tuna)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">23</span>
                  </div>
                </div>

                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('otoro')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Otoro (Fatty Tuna)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">29</span>
                  </div>
                </div>

                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('ora')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Ora King Salmon</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">14</span>
                  </div>
                </div>

                <div className="dinner-menu-item nigiri"
                      onClick={()=>showModal('unagi')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Unagi (Eel)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">13</span>
                  </div>
                </div>

                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('hotate')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hotate (Scallop)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">15</span>
                  </div>
                </div>



                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('shima-aji')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Shimaaji (Striped Jack)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                </div>


                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('ebi')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Botan Ebi (Shrimp)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                </div>

                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('santa-barbara-uni')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Santa Barbara Uni (Sea Urchin)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">MP:28</span>
                  </div>
                </div>

                <div  className="dinner-menu-item nigiri"
                      onClick={()=>showModal('hokkaido-uni')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Hokkaido Uni (Japanese Sea Urchin)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">MP:35</span>
                  </div>
                </div>

                <div className="dinner-menu-item nigiri">
                  <div className="name-price">
                    <span>
                      <span className="name">Chef's Selection of 5</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">60</span>
                  </div>
                </div>

                <div className="dinner-menu-item nigiri">
                  <div className="name-price">
                    <span>
                      <span className="name">Chef's Selection of 8</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">92</span>
                  </div>
                </div>






              </div>
            </div>



            
           </div> {/* .menu-items */}

          <div className="legal">
            (D)Dairy (GF)Gluten Free (N)Nuts (V)Vegan
            <br/><br/>
            All prices are in USD and subject to 8.875% government tax. 
            Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness. 
            Please let us know if you have any 
            allergies or special dietary requirements, or if you require any further information. Our choice of suppliers and local 
            produce - including fish, meat, dairy, fruits and vegetables - is informed by our commitment to sustainability.
          </div>

       </div> {/* .letter-paper */}

      <br className='no-print' />

      <div className="letter-paper">


                                            
          <div className="menu-items">




            <div className="section">
              <div className="left-column">Rice<br/>御飯</div>

              <div className="right-column">
              
                <div  className="dinner-menu-item"
                      onClick={()=>showModal('yakimeshi')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Yakimeshi</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">28</span>
                  </div>
                  <div className="description1">Vegetable Fried Rice</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Onsen Tamago</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">33</span>
                  </div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('unagi-gohan')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Unagi Gohan</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">55</span>
                  </div>
                  <div className="description1">Charcoal Grilled Eel</div>
                  <div className="description2"></div>
                </div>
























                <div  className="dinner-menu-item"
                      onClick={()=>showModal('yakishabu-gohan')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">A5 Kobe Yakishabu Gohan</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">84</span>
                  </div>
                  <div className="description1">Ontama, Takana</div>
                  <div className="description2"></div>
                </div>



              </div>
            </div>

            
            <div className="section">
              <div className="left-column">麺類<br/>Noodles</div>

              <div className="right-column">
            
                <div  className="dinner-menu-item"
                      onClick={()=>showModal('zaru-soba')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Zaru Soba</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">28</span>
                  </div>
                  <div className="description1">Cold Soba, Karajiru</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Vegetable Tempura</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">38</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Tempura Moriawase</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">42</span>
                  </div>


                </div>










                <div  className="dinner-menu-item"
                      onClick={()=>showModal('kake-soba')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Kake Soba</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">28</span>
                  </div>
                  <div className="description1">Hot Soba, Amajiru</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Kamo (Duck)</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">42</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Vegetable Tempura</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">38</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Tempura Moriawase</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">42</span>
                  </div>

                </div>




                <div  className="dinner-menu-item"
                      onClick={()=>showModal('kamatama-udon')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">A5 Kobe Kamatama Udon</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">84</span>
                  </div>
                  <div className="description1">Ontama, Mushrooms, Non-Soup Udon Noodles</div>
                  <div className="description2"></div>
                </div>




              </div>
            </div>

            
           </div> {/* .menu-items */}

          <div className="legal">
            (D)Dairy (GF)Gluten Free (N)Nuts (V)Vegan
            <br/><br/>
            All prices are in USD and subject to 8.875% government tax. 
            Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness. 
            Please let us know if you have any 
            allergies or special dietary requirements, or if you require any further information. Our choice of suppliers and local 
            produce - including fish, meat, dairy, fruits and vegetables - is informed by our commitment to sustainability.
          </div>

       </div> {/* .letter-paper */}

      <br className='no-print' />


























































    <div id="moon" className='modal'>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
      <div className='modal-content'>
        <div className='tasting-wrapper'>
          <div className='tasting-row'>
            <div className='tasting-left-micros'></div>
            <div className='tasting-right-micros' style={{background:'#779bda',fontWeight:'900'}}>Sushi Tasting $288 (Individual)<br/>Tsuki/Moon</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>Hassun or Cold Appetizer</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>2nd Course</div>
            <div className='tasting-right-micros'>Cooked Fish or Tempura</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>3rd Course</div>
            <div className='tasting-right-micros'>Sushi Platter 3pcs x3 or 9pcs<br/>Maki Roll(Half Roll)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>4th Course</div>
            <div className='tasting-right-micros'>Hand Roll<br/>Miso Soup</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>5th Course</div>
            <div className='tasting-right-micros'>Tamago</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>6th Course</div>
            <div className='tasting-right-micros'>Dessert</div>
          </div>
        </div>{/* .tasting-wrapper */}


      </div>{/* .modal-content */}
    </div>{/* #moon */}

    <div id="flower" className='modal'>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
      <div className='modal-content'>
        <div className='tasting-wrapper'>
          <div className='tasting-row'>
            <div className='tasting-left-micros'></div>
            <div className='tasting-right-micros' style={{background:'pink',fontWeight:'900'}}>
              Kitchen Tasting $388 (For 1)
              <br/>
              Hana/Flower
            </div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>Chawanmushi<br/>Shima Aji Tataki (3pc)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>2nd Course</div>
            <div className='tasting-right-micros'>Uni Soba<br/>Yasai Tempura (Half)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>3rd Course</div>
            <div className='tasting-right-micros'>Pre Platter<br/>Eel Q Hand Roll</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>4th Course</div>
            <div className='tasting-right-micros'>Gindara<br/>Miyazaki Steak or Moromi Lamb</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>5th Course</div>
            <div className='tasting-right-micros'>Dessert</div>
          </div>

          <br/>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <div className='hana-button' onClick={()=>showModal('flower')} >For 1</div>
            <div className='hana-button' onClick={()=>showModal('flower2')} >For 2</div>
            <div className='hana-button' onClick={()=>showModal('flower3')} >For 3</div>
            <div className='hana-button' onClick={()=>showModal('flower5')} >For 5</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div className='hana-button' onClick={()=>showModal('flower2noShellfish')} >For 2 No Shellfish</div>
          </div>
        </div>{/* .tasting-wrapper */}


      </div>{/* .modal-content */}
    </div>{/* #flower */}

    <div id="flower2" className='modal'>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
      <div className='modal-content'>
        <div className='tasting-wrapper'>
          <div className='tasting-row'>
            <div className='tasting-left-micros'></div>
            <div className='tasting-right-micros' style={{background:'pink',fontWeight:'900'}}>
              Kitchen Tasting $388 (For 2)
              <br/>
              Hana/Flower
            </div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>Chawanmushi (Individual)<br/>Shima Aji Tataki (6pc)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>2nd Course</div>
            <div className='tasting-right-micros'>Caviar Soba (Individual)<br/>Tempura Moriawase</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>3rd Course</div>
            <div className='tasting-right-micros'>Pre Platter (Individual)<br/>Wagyu Roll</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>4th Course</div>
            <div className='tasting-right-micros'>SSC<br/>Miyazaki Steak or Moromi Lamb</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>5th Course</div>
            <div className='tasting-right-micros'>Dessert</div>
          </div>

          <br/>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <div className='hana-button' onClick={()=>showModal('flower')} >For 1</div>
            <div className='hana-button' onClick={()=>showModal('flower2')} >For 2</div>
            <div className='hana-button' onClick={()=>showModal('flower3')} >For 3</div>
            <div className='hana-button' onClick={()=>showModal('flower5')} >For 5</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div className='hana-button' onClick={()=>showModal('flower2noShellfish')} >For 2 No Shellfish</div>
          </div>
        </div>{/* .tasting-wrapper */}


      </div>{/* .modal-content */}
    </div>{/* #flower2 */}

    <div id="flower2noShellfish" className='modal'>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
      <div className='modal-content'>
        <div className='tasting-wrapper'>
          <div className='tasting-row'>
            <div className='tasting-left-micros'></div>
            <div className='tasting-right-micros' style={{background:'pink',fontWeight:'900'}}>
              Kitchen Tasting $388 (For 2, No Shellfish)
              <br/>
              Hana/Flower
            </div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>Chawanmushi (Individual)<br/>Shima Aji Tataki (6pc)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>2nd Course</div>
            <div className='tasting-right-micros'>Caviar Soba (Individual)<br/>Yasai Tempura</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>3rd Course</div>
            <div className='tasting-right-micros'>Pre Platter (Individual)<br/>Wagyu Roll</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>4th Course</div>
            <div className='tasting-right-micros'>Gindara<br/>Miyazaki Steak or Moromi Lamb</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>5th Course</div>
            <div className='tasting-right-micros'>Dessert</div>
          </div>

          <br/>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <div className='hana-button' onClick={()=>showModal('flower')} >For 1</div>
            <div className='hana-button' onClick={()=>showModal('flower2')} >For 2</div>
            <div className='hana-button' onClick={()=>showModal('flower3')} >For 3</div>
            <div className='hana-button' onClick={()=>showModal('flower5')} >For 5</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div className='hana-button' onClick={()=>showModal('flower2noShellfish')} >For 2 No Shellfish</div>
          </div>
        </div>{/* .tasting-wrapper */}


      </div>{/* .modal-content */}
    </div>{/* #flower2noShellfish */}

    <div id="flower2" className='modal'>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
      <div className='modal-content'>
        <div className='tasting-wrapper'>
          <div className='tasting-row'>
            <div className='tasting-left-micros'></div>
            <div className='tasting-right-micros' style={{background:'pink',fontWeight:'900'}}>
              Kitchen Tasting $388 (For 2)
              <br/>
              Hana/Flower
            </div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>Chawanmushi (Individual)<br/>Shima Aji Tataki (6pc)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>2nd Course</div>
            <div className='tasting-right-micros'>Caviar Soba (Individual)<br/>Tempura Moriawase</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>3rd Course</div>
            <div className='tasting-right-micros'>Pre Platter (Individual)<br/>Wagyu Roll</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>4th Course</div>
            <div className='tasting-right-micros'>SSC<br/>Miyazaki Steak or Moromi Lamb</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>5th Course</div>
            <div className='tasting-right-micros'>Dessert</div>
          </div>

          <br/>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <div className='hana-button' onClick={()=>showModal('flower')} >For 1</div>
            <div className='hana-button' onClick={()=>showModal('flower2')} >For 2</div>
            <div className='hana-button' onClick={()=>showModal('flower3')} >For 3</div>
            <div className='hana-button' onClick={()=>showModal('flower5')} >For 5</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div className='hana-button' onClick={()=>showModal('flower2noShellfish')} >For 2 No Shellfish</div>
          </div>
        </div>{/* .tasting-wrapper */}


      </div>{/* .modal-content */}
    </div>{/* #flower2 */}

    <div id="flower3" className='modal'>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
      <div className='modal-content'>
        <div className='tasting-wrapper'>
          <div className='tasting-row'>
            <div className='tasting-left-micros'></div>
            <div className='tasting-right-micros' style={{background:'pink',fontWeight:'900'}}>
              Kitchen Tasting $388 (For 3)
              <br/>
              Hana/Flower
            </div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>Chawanmushi (Individual)<br/>Shima Aji Tataki (6pc)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>2nd Course</div>
            <div className='tasting-right-micros'>Caviar Soba (Individual)<br/>Tempura Moriawase (3pc Ebi)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>3rd Course</div>
            <div className='tasting-right-micros'>Pre Platter (Individual)<br/>Wagyu Roll<br/>Aman NY Roll</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>4th Course</div>
            <div className='tasting-right-micros'>Kamo Miso Yaki<br/>SSC<br/>Miyazaki Steak or Moromi Lamb</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>5th Course</div>
            <div className='tasting-right-micros'>Dessert</div>
          </div>

          <br/>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <div className='hana-button' onClick={()=>showModal('flower')} >For 1</div>
            <div className='hana-button' onClick={()=>showModal('flower2')} >For 2</div>
            <div className='hana-button' onClick={()=>showModal('flower3')} >For 3</div>
            <div className='hana-button' onClick={()=>showModal('flower5')} >For 5</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div className='hana-button' onClick={()=>showModal('flower2noShellfish')} >For 2 No Shellfish</div>
          </div>
        </div>{/* .tasting-wrapper */}


      </div>{/* .modal-content */}
    </div>{/* #flower3 */}

    <div id="flower5" className='modal'>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
      <div className='modal-content'>
        <div className='tasting-wrapper'>
          <div className='tasting-row'>
            <div className='tasting-left-micros'></div>
            <div className='tasting-right-micros' style={{background:'pink',fontWeight:'900'}}>
              Kitchen Tasting $388 (For 5)
              <br/>
              Hana/Flower
            </div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>2x Aigamo (5pc)<br/>2x Shima Aji Tataki (5pc)<br/>2x Hamachi Usuzukuri (5pc)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>2nd Course</div>
            <div className='tasting-right-micros'>Caviar Soba (Individual)<br/>2x Tempura Moriawase (5pc Ebi)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>3rd Course</div>
            <div className='tasting-right-micros'>Pre Platter (Individual)<br/>Aman NY Roll<br/>Lobster Roll<br/>Spider Roll</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>4th Course</div>
            <div className='tasting-right-micros'>2x Yakimeshi<br/>Gindara (5pc)<br/>2x Miyazaki Steak or Moromi Lamb</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>5th Course</div>
            <div className='tasting-right-micros'>Dessert</div>
          </div>

          <br/>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <div className='hana-button' onClick={()=>showModal('flower')} >For 1</div>
            <div className='hana-button' onClick={()=>showModal('flower2')} >For 2</div>
            <div className='hana-button' onClick={()=>showModal('flower3')} >For 3</div>
            <div className='hana-button' onClick={()=>showModal('flower5')} >For 5</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div className='hana-button' onClick={()=>showModal('flower2noShellfish')} >For 2 No Shellfish</div>
          </div>
        </div>{/* .tasting-wrapper */}


      </div>{/* .modal-content */}
    </div>{/* #flower5 */}

    <div id="miso-soup" className='modal'>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
      <div className='modal-content'>
            <div>
              <img src={`miso-soup.jpg?v={Date.now()}`} />
            </div>
            <div className='modal-text'>

            
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Miso Soup</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">10</span>
                  </div>
                  <div className="description1">Awase Miso, Seaweed, Tofu, Chives</div>
                  <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          kastuo dashi<br/>
                          awase miso<br/>
                          tofu<br/>
                          wakame seaweed<br/>
                          chives<br/>
                          sansho pepper
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}

      </div>{/* .modal-content */}
    </div>{/* #miso-soup */}

    <div id="surinagashi" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />
          <div className='modal-content'>
            <div>
              <img src='surinagashi.jpg' />
            </div>
            <div className='modal-text'>

              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Surinagashi</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">18</span>
                  </div>
                  <div className="description1">Green Pea, Tamago Tofu, White Asparagus</div>
                  <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          warm green pea soup<br/>
                          egg tofu<br/>
                          white asparagus<br/>
                          salted cherry blossom
                          <br/><br/>
              </div>
                        </div>{/* .modal-text */}

          </div>{/* .modal-content */}          
      </div>
    </div>{/* #surinagashi */}

    <div id="edamame" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />     
          <div className='modal-content'>
            <div>
              <img src={`edamame.jpg?v={Date.now()}`} />
            </div>
              <div className='modal-text'>
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Chamame</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">10</span>
                  </div>
                  <div className="description1">Edamame, Shichimi Salt</div>
                  <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          edamame<br/>
                          7-spice chili salt:<br/>
                          red chili, poppy seeds, white sesame, black sesame,<br/>
                          sansho pepper, aionori seaweed, shiso
                          <br/><br/>
              </div>
              </div>{/* .modal-text */}
          </div>{/* .modal-content */}                           
      </div>
    </div>{/* #edamame */}

    <div id="nama-tofu" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />
          <div className='modal-content'>
            <div>
              <img src={`nama-tofu.jpg?v={Date.now()}`} />
            </div>
            <div className='modal-text'>
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Akari Tofu</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                  <div className="description1">House Made Tofu, Dashi, Shoyu, Ginger</div>
                  <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          house made tofu<br/>
                          dashi nikiri soy sauce on the side<br/>
                          ginger paste, scallion, bonito powder
                          <br/><br/>
              </div>
              </div>{/* .modal-text */}
            </div>{/* .modal-content */}          
      </div>
    </div>{/* #nama-tofu */}

    <div id="shishitos" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
            <div>
              <img src={`shishitos.jpg?v={Date.now()}`} />
            </div>        
              <div className='modal-text'>
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Shishito Peppers</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">17</span>
                  </div>
                  <div className="description1">Bonito Flakes</div>
                  <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          shishito peppers<br/>
                          bonito flakes<br/>
                          soy sauce
                          <br/><br/>
              </div>
              </div>{/* .modal-text */}
            </div>{/* .modal-content */}
      </div>
    </div>{/* #shishitos */}

    <div id="goma-ae" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          <div>
            <img src={`goma-ae.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
          
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Goma Ae</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">17</span>
                  </div>
                  <div className="description1">Spinach, Shimeji Mushrooms, Sesame Soy</div>
                  <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          lightly blanched spinach<br/>
                          shimeji mushrooms<br/>
                          white sesame dressing<br/>
                          toasted white sesame seeds
                          <br/><br/>
              </div>
              </div>{/* .modal-text */}      
            </div>{/* .modal-content */} 

      </div>
    </div>{/* #goma-ae */}

    <div id="tsukemono-moriawase" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`tsukemono-moriawase.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Tsukemono Moriawase</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">House Made Pickles</div>
                  <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          house made japanese pickled vegetables
                          <br/><br/>
              </div>
              </div>{/* .modal-text */}                             
            </div>{/* .modal-content */} 
      </div>
    </div>{/* #tsukemono-moriawase */}

    <div id="hamachi-usuzukuri" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`hamachi-usuzukuri.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Hamachi Usuzukuri</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">35</span>
                  </div>
                  <div className="description1">Yellowtail, Yuzu Sesame Ponzu, Crispy Garlic</div>
                  <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          yellowtail (5pcs)<br/>
                          yuzu sesame ponzu<br/>
                          crispy garlic<br/>
                          cooked shishito peppers<br/>
                          radish/grated chili<br/>
                          shiso leaf
                          <br/><br/>
              </div>
              </div>{/* .modal-text */}               
            </div>{/* .modal-content */}     
      </div>
    </div>{/* #tsukemono-moriawase */}

    <div id="yasai-shiraae" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />      
          <div className='modal-content'>
          
          <div>
            <img src={`yasai-shiraae.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Yasai Shiraae</span>
                      <span className="allergies">(D, GF)</span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Summer Vegetables, Tofu Dip</div>
                  <div className="description2"></div>                          
                          <br/>
                          <hr/>
                          <br/>
                          seasonal vegetables<br/>
                          tofu/cream cheese dip<br/>
                          ponzu jelly
                          <br/><br/>
              </div>
              </div>{/* .modal-text */}                
            </div>{/* .modal-content */}
      </div>
    </div>{/* #yasai-shiraae */}

    <div id="wagyu-tataki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />     
          <div className='modal-content'>
          
          <div>
            <img src={`wagyu-tataki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                       
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">A5 Wagyu Tataki</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">34</span>
                  </div>
                  <div className="description1">A5 Miyazaki Wagyu, Grated Daikon Ponzu</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          A5 Wagyu Tataki (5pcs)<br/>
                          seared A5 wagyu beef<br/>
                          grated daikon radish<br/>
                          chopped onion<br/>
                          ponzu sauce<br/>
                          garlic chips<br/>
                          shiso leaf
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}    
      </div>
    </div>{/* #wagyu-tataki */}


    <div id="sakura-tai-ikomi" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src='sakura-tai-ikomi.jpg' />
          </div>
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Sakura Tai Ikomi</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">35</span>
                  </div>
                  <div className="description1">Spring Vegetable, Ume Jelly</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          white asparagus wrapped in cured cherry snapper<br/>
                          ume dashi jelly (ume=plum)
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}                 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #sakura-tai-ikomi */}

    <div id="aigamo-roast" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`aigamo-roast.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Aigamo Roast</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">31</span>
                  </div>
                  <div className="description1">Duck Breast, Nanban Miso, Tokyo Negi</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          grilled duck breast(5pcs)<br/>
                          nanban miso<br/>
                          Tokyo negi scallion<br/>
                          cooked shishitos
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}                 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #aigamo-roast */}

    <div id="greenmarket-salad" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />         
          <div className='modal-content'>
          
          <div>
            <img src={`greenmarket-salad.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Green Market</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Summer Vegetables, Goma Miso</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Tofu</span>
                      <span className='allergies'>(V, GF)</span>
                    </span>
                    <span className="upgrade-price">38</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Warm Mushrooms</span>
                      <span className='allergies'>(V, GF)</span>
                    </span>
                    <span className="upgrade-price">40</span>
                  </div>
                          <hr/>
                          <br/>
                          gem lettuce<br/>
                          sesame miso dressing<br/>
                          cherry tomato<br/>
                          radish<br/>
                          spring peas<br/>
                          micro pea shoots<br/>
                          wakame seaweed<br/>
                          shallot chips<br/><br/>
                          goma=sesame seed
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}      
          </div>{/* .modal-content */}       
      </div>
    </div>{/* #greenmarket-salad */}

    <div id="caesar-salad" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img src={`caesar-salad.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Caesar</span>
                      <span className="allergies">(D, GF)</span>
                    </span>
                    <span className="price">24</span>
                  </div>
                  <div className="description1">Yuzu Sesame, Ontama, Katsuo Bushi, Aonori</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Warm Mushrooms</span>
                      <span className='allergies'>(GF)</span>
                    </span>
                    <span className="upgrade-price">35</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Hokkaido "Unibushi"</span>
                      <span className='allergies'>(GF)</span>
                    </span>
                    <span className="upgrade-price">44</span>
                  </div>
                          <hr/>
                          <br/>
                          gem lettuce<br/>
                          yuzu sesame dressing<br/>
                          onsen tamago<br/>
                          katsuo bushi/bonito flakes<br/>
                          aonori seaweed<br/>
                          parmesan cheese<br/>
                          <span className='typo'>TOFU CROUTONS</span>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}                
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #caesar-salad */}


    <div id="yasai-tempura" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`yasai-tempura.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Yasai Tempura</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">27</span>
                  </div>
                  <div className="description1">Summer Vegetables</div>
                  <div className="description2"></div>                          
                          <hr/>
                          <br/>
                          8 seasonal vegetables<br/>
                          tempura sauce/grated daikon radish<br/>
                          mojio salt
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #yasai-tempura */}

    <div id="tempura-moriawase" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
             
          <div>
            <img src={`tempura-moriawase.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                         
            
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Tempura Moriawase</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">37</span>
                  </div>
                  <div className="description1">Shrimp, Summer Vegetables</div>
                  <div className="description2"></div>  
                          <hr/>
                          <br/>
                          2 ebi/shrimp<br/>
                          2 white fish or scallop wrapped in shiso leaf<br/>
                          5 seasonal vegetables<br/>
                          tempura sauce/grated daikon radish<br/>
                          mojio salt
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #tempura-moriawase */}

    <div id="shrimp-tempura" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`shrimp-tempura.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                              
            
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Ebi Tempura</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">41</span>
                  </div>
                  <div className="description1">Shrimp</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          5 shrimp tempura<br/>
                          tempura sauce/grated daikon radish<br/>
                          mojio salt
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}
      </div>
    </div>{/* #shrimp-tempura */}

    <div id="sakuramasu-katsu" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src='sakuramasu-katsu.jpg' />
          </div>
          <div className='modal-text'>
                 
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Sakuramasu Katsu</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">48</span>
                  </div>
                  <div className="description1">Cherry Trout, Asparagus</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          crispy fried cherry trout<br/>
                          asparagus<br/>
                          panko bread crumbs<br/>
                          bonito powder<br/>
                          aionori tartar sauce<br/>
                          ponzu/grated daikon radish<br/>
                          katsu = breaded, deep-fried
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}   
          </div>{/* .modal-content */}           
      </div>
    </div>{/* #sakuramasu-katsu */}

    <div id="lobster-tempura" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='lobster-tempura.jpg' />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Lobster Tempura</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">66</span>
                  </div>
                  <div className="description1">Lobster, Yuzu Aioli</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          lobster tempura (6-8pcs)<br/>
                          yuzu kosho aioli<br/>
                          shishito peppers
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}     
      </div>
    </div>{/* #lobster-tempura */}

    <div id="gindara" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
             
          <div>
            <img src={`gindara.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                       
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Gindara</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">50</span>
                  </div>
                  <div className="description1">Miso Black Cod</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          charcoal grilled miso marinated black cod<br/>
                          myoga / japanese ginger<br/>
                          renkon / lotus root<br/>
                          maruju / japanese sweet potato
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #gindara */}

    <div id="hamachi-kama" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`hamachi-kama.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Hamachi Kama</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">52</span>
                  </div>
                  <div className="description1">Charcoal Grilled Yellowtail Collar</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          charcoal grilled yellowtail collar<br/>
                          side of yuzu ponzu<br/>
                          myoga / japanese ginger<br/>
                          renkon / lotus root<br/>
                          maruju / japanese sweet potato
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}   
      </div>
    </div>{/* #hamachi-kama */}

    <div id="lobster-uni-ogonyaki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`lobster-uni-ogonyaki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                              
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Lobster & Uni Ogonyaki</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">86</span>
                  </div>
                  <div className="description1">Grilled Lobster, Uni Miso, Lobster Oil</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          charcoal grilled lobster(1tail+1claw)<br/>
                          uni/sea urchin<br/>
                          egg miso sauce<br/>
                          lobster oil<br/>
                          shredded shiso leaf
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}
      </div>
    </div>{/* #lobster-uni-ogonyaki */}

    <div id="jidori-chicken" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img src={`jidori-chicken.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Shio Koji Jidori Sumibi Yaki</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">38</span>
                  </div>
                  <div className="description1">Charcoal Grilled Chicken, Yuzu Sesame Ponzu, Daikon Oroshi</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          charcoal grilled chicken<br/>
                          yuzu sesame ponzu<br/>
                          daikon oroshi (grated daikon radish)
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #jidori-chicken */}

    <div id="tenderloin" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`tenderloin.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">A5 Kobe Charcoal Grilled Tenderloin</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">220</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          charcoal grilled<br/>
                          5oz A5 kobe beef tenderloin<br/>
                          grilled vegetables
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #tenderloin */}

    <div id="sirloin" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`sirloin.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">A5 Kobe Charcoal Grilled Sirloin</span>
                      <span className="allergies">(GF)</span>
                    </span>
                    <span className="price">205</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          charcoal grilled<br/>
                          5oz A5 kobe beef sirloin<br/>
                          grilled vegetables
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #sirloin */}

    <div id="kamo-miso-yaki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`kamo-miso-yaki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Kamo Miso Yaki</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">70</span>
                  </div>
                  <div className="description1">Charcoal Grilled Duck Breast, Shiso Miso</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          charcoal grilled duck breast<br/>
                          shiso miso<br/>
                          grilled vegetables
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #kamo-miso-yaki */}

    <div id="tofu-miso-yaki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`tofu-miso-yaki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Tofu Miso Yaki</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">30</span>
                  </div>
                  <div className="description1">Charcoal Grilled Tofu, Shiso Miso</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          charcoal grilled tofu<br/>
                          shiso miso<br/>
                          grilled vegetables
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #tofu-miso-yaki */}

    <div id="grilled-vegetables" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`grilled-vegetables.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Grilled Summer Vegetables</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">35</span>
                  </div>
                  <div className="description1">Yukari Salt, Shiso Miso</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          yukari salt<br/>
                          shiso miso
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #grilled-vegetables */}
































    <div id="hamachi" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`hamachi.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Hamachi (Yellowtail)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">13</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #hamachi */}

    <div id="same-karai" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`same-karai.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Samekarai (Sharkskin Flounder)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">20</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #same-karai */}

    <div id="ebi" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`ebi.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Botan Ebi (Shrimp)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #ebi */}

    <div id="madai" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src='madai.jpg' />
          </div>
          <div className='modal-text'>
                       
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Madai (Red Snapper)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">13</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #madai */}

    <div id="kinme-dai" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src='kinme-dai.jpg' />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Kinme Dai (Golden Eye Snapper)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">17</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #kinme-dai */}

    <div id="akami" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src='akami.jpg' />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Akami (Lean Tuna)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">16</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #akami */}

    <div id="chutoro" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src='chutoro.jpg' />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Chutoro (Medium Fatty Tuna)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">23</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}   
      </div>
    </div>{/* #chutoro */}

    <div id="otoro" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='otoro.jpg' />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Otoro (Fatty Tuna)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">29</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #otoro */}

    <div id="ora" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src='ora.jpg' />
          </div>
          <div className='modal-text'>
                        
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Ora King Salmon</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">14</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}    
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #ora */}

    <div id="unagi" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src='unagi.jpg' />
          </div>
          <div className='modal-text'>
                      
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Unagi (Eel)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">13</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}     
      </div>
    </div>{/* #unagi */}

    <div id="hotate" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='hotate.jpg' />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Hotate (Scallop)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}   
      </div>
    </div>{/* #hotate */}

    <div id="sakuramasu" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
           
          <div>
            <img src='sakuramasu.jpg' />
          </div>
          <div className='modal-text'>
                        
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Sakuramasu (Cherry Salmon)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}   
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #sakuramasu */}

    <div id="kasugodai" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='kasugodai.jpg' />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Kasugodai (Baby Sea Bream)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #kasugodai */}

    <div id="shima-aji" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`shima-aji.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                        
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Shimaaji (Striped Jack)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}    
      </div>
    </div>{/* #shima-aji */}

    <div id="santa-barbara-uni" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src='santa-barbara-uni.jpg' />
          </div>
          <div className='modal-text'>
                             
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Santa Barbara Uni (Sea Urchin)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">MP:28</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #santa-barbara-uni */}

    <div id="hokkaido-uni" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='hokkaido-uni.jpg' />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Hokkaido Uni (Japanese Sea Urchin)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">MP:35</span>
                  </div>
                          <hr/>
                          <br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}    
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #hokkaido-uni */}

    <div id="kappa-maki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`kappa-maki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Kappa</span>
                      <span className="allergies">(V)</span>
                    </span>
                    <span className="price">16</span>
                  </div>
                  <div className="description1">Cucumber</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          6pcs<br/>
                          cucumber
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}   
      </div>
    </div>{/* #kappa-maki */}

    <div id="oshinko-maki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`oshinko-maki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                      
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Oshinko</span>
                      <span className="allergies">(V)</span>
                    </span>
                    <span className="price">18</span>
                  </div>
                  <div className="description1">Pickled Daikon Radish</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          6pcs<br/>
                          pickled daikon radish
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}    
          </div>{/* .modal-content */}   
      </div>
    </div>{/* #oshinko-maki */}

    <div id="ume-shiso-maki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`ume-shiso-maki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Ume Shiso</span>
                      <span className="allergies">(V)</span>
                    </span>
                    <span className="price">18</span>
                  </div>
                  <div className="description1">Sour Plum, Shiso, Cucumber</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          6pcs<br/>
                          ume(sour plum)<br/>
                          shiso leaf<br/>
                          cucumber
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}     
      </div>
    </div>{/* #ume-shiso-maki */}

    <div id="avocado-maki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`avocado-maki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Avocado</span>
                      <span className="allergies">(V)</span>
                    </span>
                    <span className="price">18</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          6pcs<br/>
                          avocado<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #avocado-maki */}

    <div id="unagi-cucumber-maki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`unagi-cucumber-maki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Eel Cucumber</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">21</span>
                  </div>
                  <div className="description1"></div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          6pcs<br/>
                          eel<br/>
                          cucumber
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}   
      </div>
    </div>{/* #unagi-cucumber-maki */}

    <div id="tekka-maki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`tekka-maki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Tekka</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">21</span>
                  </div>
                  <div className="description1">Tuna</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          6pcs<br/>
                          tuna
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #tekka-maki */}

    <div id="vegetable-roll" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`vegetable-roll.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Vegetable</span>
                      <span className="allergies">(V)</span>
                    </span>
                    <span className="price">25</span>
                  </div>
                  <div className="description1">Napa Cabbage, Japanese Burdock</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          8pcs<br/>
                          napa cabbage(hakusai)<br/>
                          spinach<br/>
                          carrot<br/>
                          daikon radish<br/>
                          burdock<br/>
                          yuzu zest
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}   
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #vegetable-roll */}

    <div id="spicy-tuna-roll" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`spicy-tuna-roll.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Spicy Tuna</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">25</span>
                  </div>
                  <div className="description1">Spicy Sesame Aioli, Asparagus, Chives</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          8pcs<br/>
                          tuna<br/>
                          spicy sesame aioli<br/>
                          asparagus<br/>
                          chives<br/>
                          takuan(pickled daikon radish)<br/>
                          black & white sesame seeds
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #spicy-tuna-roll */}

    <div id="negi-hama-roll" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`negi-hama-roll.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                               
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Negi Hama</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">25</span>
                  </div>
                  <div className="description1">Hamachi, Scallion</div>
                  <div className="description2"></div>                          
                  <hr/>
                  <br/>

                          8pcs<br/>
                          negi / scallions<br/>
                          hamachi / yellowtail
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}
      </div>
    </div>{/* #negi-hama-roll */}

    <div id="salmon-avocado-roll" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='salmon-avocado-roll.jpg' />
          </div>
          <div className='modal-text'>
                            
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Salmon Avocado</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">26</span>
                  </div>
                  <div className="description1">Salmon, Avocado</div>
                  <div className="description2"></div>                          <hr/>
                          <br/>
                          8pcs<br/>
                          <div style={{color:'red'}}>missing from food bible</div>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #salmon-avocado-roll */}

    <div id="california-roll" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`california-roll.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                       
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">King Crab California</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">36</span>
                  </div>
                  <div className="description1">Avocado, Cucumber</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          8pcs<br/>
                          king crab<br/>
                          avocado<br/>
                          cucumber<br/>
                          shiso leaf<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}      
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #california-roll */}

    <div id="lobster-tempura-roll" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`lobster-tempura-roll.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
            
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Lobster Tempura Roll</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">55</span>
                  </div>
                  <div className="description1">Napa Cabbage, Lobster Butter Aioli</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          5pcs<br/>
                          pickled napa cabbage<br/>
                          teriyaki sauce<br/>
                          lobster butter aioli<br/>
                          fried shallots<br/>
                          chives
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}   
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #lobster-tempura-roll */}

    <div id="aman-ny-roll" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`aman-ny-roll.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Aman NY Roll</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">72</span>
                  </div>
                  <div className="description1">Toro, King Crab, Uni</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with 10 grams of Ossetra Caviar</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">132</span>
                  </div>
                          <hr/>
                          <br/>
                          5pcs<br/>
                          otoro / fatty tuna<br/>
                          king crab<br/>
                          japanese uni/sea urchin<br/>
                          cucumber<br/>
                          pickled lotus root
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}   
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #aman-ny-roll */}

    <div id="wagyu-roll" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`wagyu-roll.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Miyazaki Wagyu</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">78</span>
                  </div>
                  <div className="description1">Seared Wagyu Beef, Garlic Chili, Sesame Oil</div>
                  <div className="description2"></div>
                          <hr/>
                          <br/>
                          8pcs<br/>
                          seared A5 kobe/wagyu beef<br/>
                          nama garlic chili oil<br/>
                          fried shishito peppers<br/>
                          smoked pickled daikon radish<br/>
                          teriyaki sauce<br/>
                          chives<br/>
                          shallot chips
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}   
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #wagyu-roll */}

    <div id="yakimeshi" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`yakimeshi.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                        
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Yakimeshi</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">28</span>
                  </div>
                  <div className="description1">Vegetable Fried Rice</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Onsen Tamago</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">33</span>
                  </div>
                          <hr/>
                          <br/>
                          vegetable fried rice<br/>
                          seasonal vegetables<br/>
                          mushrooms<br/>
                          fried shallots<br/>
                          garlic chips
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}    
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #yakimeshi */}

    <div id="unagi-gohan" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`unagi-gohan.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Unagi Gohan</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">55</span>
                  </div>
                  <div className="description1">Charcoal Grilled Eel</div>
                  <div className="description2"></div> 
                          <hr/>
                          <br/>
                          charcoal grilled eel<br/>
                          over rice<br/>
                          teriyaki sauce<br/>
                          side of sansho pepper
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #unagi-gohan */}

    <div id="kake-soba" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src='kake-soba.jpg' />
          </div>
          <div className='modal-text'>
                            
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Kake Soba</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">28</span>
                  </div>
                  <div className="description1">Hot Soba, Amajiru</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Kamo (Duck)</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">42</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Vegetable Tempura</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">38</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>With Tempura Moriawase</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">42</span>
                  </div>
                          <hr/>
                          <br/>
                          hot soba noodles<br/>
                          amajiru(bonito broth/can sub kelp broth)<br/>
                          tokyo negi scallion<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #kake-soba */}

    <div id="kamatama-udon" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src={`kamatama-udon.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                      
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">A5 Kobe Kamatama Udon</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">84</span>
                  </div>
                  <div className="description1">Ontama, Mushrooms, Non-Soup Udon Noodles</div>
                  <div className="description2"></div>                          
                          <hr/>
                          <br/>
                          3oz A5 kobe striploin<br/>
                          non-soup udon noodles<br/>
                          ontama poached egg<br/>
                          mushrooms<br/>
                          microgreens<br/>
                          shredded chili garnish<br/>
                          side of chili oil
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}        
      </div>
    </div>{/* #kamatama-udon */}

    <div id="yakishabu-gohan" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />      
          <div className='modal-content'>
          
          <div>
            <img src={`yakishabu-gohan.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                        
            
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">A5 Kobe Yakishabu Gohan</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">84</span>
                          </div>
                          <div className="description1">Ontama, Takana</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          3 ounces A5 Kobe Striploin<br/>
                          thinly sliced, charcoal grilled<br/>
                          over rice<br/>
                          poached egg<br/>
                          takana(pickled mustard leaves)<br/>
                          garlic chips<br/>
                          chives<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #yakishabu-gohan */}

    <div id="shima-aji-tataki" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`shima-aji-tataki.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Shimaaji Tataki</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">46</span>
                          </div>
                          <div className="description1">Seared Striped Jack, Tosazu Jelly</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          5pcs seared shima aji/striped jack<br/>
                          tosazu jelly<br/>
                          shredded radish<br/>
                          shiso leaf<br/>
                          wakame seaweed<br/>
                          hanaho flowers<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #shima-aji-tataki */}

    <div id="nasu-agebitashi" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />     
          <div className='modal-content'>
          
          <div>
            <img src={`nasu-agebitashi.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Nasu Agebitashi</span>
                              <span className="allergies">(V, GF)</span>
                            </span>
                            <span className="price">17</span>
                          </div>
                          <div className="description1">Chilled Eggplant, Ginger</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          chilled eggplant<br/>
                          soy konbu broth<br/>
                          ginger<br/>
                          chives<br/>
                          shichimi<br/>
                          julienned chili<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #nasu-agebitashi */}

    <div id="suzuki-tatsuta-age" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />     
          <div className='modal-content'>
          
          <div>
            <img src={`suzuki-tatsuta-age.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Suzuki Tatsutaage</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">48</span>
                          </div>
                          <div className="description1">Fried Branzino, Shiso Aioli</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          crispy fried branzino 8pcs<br/>
                          ginger soy marinade<br/>
                          shiso aioli<br/>
                          shishito peppers<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}
      </div>
    </div>{/* #suzuki-tatsuta-age */}

    <div id="softshell-crab" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img src={`softshell-crab.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Soft Shell Crab Karaage</span>
                              <span className="allergies">(GF)</span>
                            </span>
                            <span className="price">54</span>
                          </div>
                          <div className="description1">Fried Soft Shell Crab, Tomato Relish</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          deep fried live softshell crab<br/>
                          ONE crab<br/>
                          potato starch<br/>
                          tomato relish<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */} 
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #softshell-crab */}

    <div id="lamb-chops" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img src={`lamb-chops.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Moromi Lamb Sumibi Yaki</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">98</span>
                          </div>
                          <div className="description1">Moromi Marinated Lamb, Wasabi Oil</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          charcoal grilled lamb chops<br/>
                          3-4 pieces<br/>
                          6-7 ounces<br/>
                          soy koji moromi<br/>
                          wasabi oil<br/>
                          mashed potatoes<br/>
                          grilled vegetables<br/>
                          medium rare unless otherwise requested<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #lamb-chops */}

    <div id="nasu-dengaku" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img src={`nasu-dengaku.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Nasu Dengaku</span>
                              <span className="allergies">(V, N, GF)</span>
                            </span>
                            <span className="price">38</span>
                          </div>
                          <div className="description1">Grilled Eggplant, Saikyo Miso</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          charcoal grilled eggplant<br/>
                          saikyo miso<br/>
                          tomato<br/>
                          zucchini<br/>
                          candied walnuts<br/>
                          hanaho flowers<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */} 
      </div>
    </div>{/* #nasu-dengaku */}

    <div id="zaru-soba" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />   
          <div className='modal-content'>
          
          <div>
            <img src={`zaru-soba.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                        
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Zaru Soba</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">28</span>
                          </div>
                          <div className="description1">Cold Soba, Karajiru,</div>
                          <div className="description2"></div>
                          <div className="upgrade">
                            <span>
                              <span className='upgrade-description'>With Vegetable Tempura</span>
                              <span className='allergies'></span>
                            </span>
                            <span className="upgrade-price">38</span>
                          </div>
                          <div className="upgrade">
                            <span>
                              <span className='upgrade-description'>With Tempura Moriawase</span>
                              <span className='allergies'></span>
                            </span>
                            <span className="upgrade-price">42</span>
                          </div>

                          
                          <hr/>
                          <br/>
                          cold soba/buckwheat noodles<br/>
                          karajiru dipping sauce<br/>
                          tokyo negi scallions<br/>
                          wasabi<br/>
                          nori seaweed<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}   
          </div>{/* .modal-content */}  
      </div>
    </div>{/* #zaru-soba */}

    <div id="spider-roll" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} /> 
          <div className='modal-content'>
          
          <div>
            <img src={`spider-roll.jpg?v={Date.now()}`} />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Spider Roll</span>
                              <span className="allergies"></span>
                            </span>
                            <span className="price">45</span>
                          </div>
                          <div className="description1">Soft Shell Crab, Spicy Mayo</div>
                          <div className="description2"></div>
                          
                          <hr/>
                          <br/>
                          5pcs<br/>
                          soft shell crab<br/>
                          pickled napa cabbage<br/>
                          spicy mayo<br/>
                          teriyaki sauce<br/>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}  
          </div>{/* .modal-content */}    
      </div>
    </div>{/* #spider-roll */}

    <NavbarFooter page='dinner' />
    {/* .webpage */}
    </div>    
  )
}



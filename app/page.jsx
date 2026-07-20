'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";

export default function Home() {

  function showModal(menuItem){
    document.querySelector(`#${menuItem}`).style.display = 'grid'
  }
  function closeModals(){
    document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
  }

  return (

    <div className="webpage">

      <div className='no-print' style={{width:'100%',textAlign:'center',marginTop:'15px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
          <path fill="#281E09" d="m51.9 30.5-.4-1c-.9.5-1 1.6-1.6 2.2-1.3 1.4-4.3 1.3-6 1.3-.6 3.3-.5 6.6-.8 10-.3 3.4-1.8 9-1 12.4.1.5.5.8.8 1.2l-.6.6.6 1.8c-.8.2-1-1.3-1.2-1.8a74.1 74.1 0 0 1 1-35.5c.6-2.3 1.5-4.4 2-6.7-1.8 1.5-3.7 2.8-5.4 4.4-2.3 2-6.3 5.1-8.1 7.2-1 1.1-1.9 2.8-3 4-.6.7-2 2.3-2.7 2.5-3.4 1.1-7.8-2.9-9.7-5.3l-6.7 5.7L9 33l-3.2 2.3c-.8.4.1-1-.6-.6-.9.5-1.2 2-2.5 1.2-.2.9 1.2.7 1.2 1-1 1.5-3.8 2-3.8-.3 0-3.3 9.2-10.1 11.4-12.7 1-.4 2.6.5 3.5.5.7 0 1.4-.4 2.2-.2 1.5.4 4.5 3.4 6.2 4 2 .6 2.8-.3 4.3-1.4 2.5-1.6 4.8-3.8 7.3-5.5 2-1.5 9.2-5.4 10.3-7.4 1.7-3 2.1-8.6 3.6-12 .2-.5.4-1 1-1.4 1.7 4.8.7 10.4 1 15.5 0 2.4.1 6.1.5 8.4.2.8 1 2.1 1 2.3 0 .2-.4.6-.4 1.2-.1 1.2.3 2.3.3 3.5v3.5c0 .3.2 1-.3 1-.2-1.7.2-3.8 0-5.4Zm-.9-5.4L49.7 7.2c-.7 1.2-1 2.7-1.5 4l-.6 2.3c-1.2 4.2-2 8.5-3 12.8 2.3-.6 4-1.3 6.4-1.2Zm34.5 5.1c.3-2.7 1.6-5.6 2-8.2l-3.8 2c-1.3 1.9-6.3 5-8.4 4.9-2.1-.1-4-1.6-5.8-2.3-2.2 1.2-7.4 10-10.2 5.8-.4-.6-1.4-3.3-1.3-4 0-1 2.6-2.2 3.3-3.2l.3.5 5.9-5.7c5.5.1 5.4 5.8 11.7 3.4 2-.8 8.6-5 10.2-4.8 2.2.2 0 2.7-.3 3.4l-1.6 5-2 7.7v-4.5Zm27.3-6.2 7.2.6c0 .5-.7.3-1 .3-.8 0-1.5-.3-2-.3-1.3 0-2.6.5-4 .3-.3.2 2.4 6.2 2.4 7.4 0 .4-1.3 3.8-1.6 3.8-.6-.2-.6-1-.9-1.3-.3-.4-1-.6-1.4-1.3-.8-1.3-2.3-8.2-2.7-8.4-1.5.1-3 .4-4.5.7-1.3.3-6.1 1.2-7 1.7-.4.2-.5 1-1 1.3-.7.3-1.6 0-2.1.3-.4.2-.9 3.7-2.6 3.6-.4-.5 1.6-3.8 1.6-4.5.1-.8-.5-1.9 0-2.8.3-.5 2.6-.7 3-.9.4-.2 3.4-4 4.4-4.7 1.5-1.3 3-2.8 5.2-2.5.6-1.7.2-4.5 3-3.7 1.7.5 3.3 8.5 4 10.4Zm-7.3-5-.1-1a19.6 19.6 0 0 0-7.1 5.8h1.4l-.9 1 9.6-1.1-1-5-1.9.4Z"></path>
        </svg>
      </div>

      <nav className='no-print'>
        <Link href='/' className='current-page'>Dinner</Link> | 
        <Link href='/dessert'>Dessert</Link> | 
        <Link href='/drinks'>Drinks</Link> | 
        <Link href='/sake'>Sake</Link>
      </nav>

      <br className='no-print' />
    
      <div className="letter-paper">


                                            
          <div className="menu-items">
            <div className="section">
              <div className="left-column">椀物<br/>Soup</div>

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
              <div className="left-column">前菜<br/>Small Plates</div>
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
                      <span className="name">Nama Tofu</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                  <div className="description1">Housemade Tofu, Dashi, Shoyu, Ginger</div>
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
                  <div className="description1">Housemade Pickles</div>
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
                      <span className="allergies">(GF, D)</span>
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
                  <div className="description1">Seared Striped<span style={{color:'red'}}>&diams;</span>Jack, Tosazu Jelly</div>
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

            <div className="section">
              <div className="left-column">サラダ<br/>Salad</div>
              <div className="right-column">

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('greenmarket-salad')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Greenmarket Salad</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Summer Vegetables, Goma Miso</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Tofu</span>
                      <span className='allergies'>(V, GF)</span>
                    </span>
                    <span className="upgrade-price">38</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Warm Mushrooms</span>
                      <span className='allergies' style={{color:'red'}}>(V, GF)</span>
                    </span>
                    <span className="upgrade-price">40</span>
                  </div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('caesar-salad')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Nama Caesar Salad</span>
                      <span className="allergies">(D, GF)</span>
                    </span>
                    <span className="price">24</span>
                  </div>
                  <div className="description1">Yuzu Sesame, Ontama, Katsuo Bushi, Aonori</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Warm Mushrooms</span>
                      <span className='allergies'>(<span style={{color:'red',fontSize:'inherit'}}>D</span>, GF)</span>
                    </span>
                    <span className="upgrade-price">35</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Hokkaido "Unibushi"</span>
                      <span className='allergies' style={{color:'red'}}>(D, GF)</span>
                    </span>
                    <span className="upgrade-price">44</span>
                  </div>
                </div>


              </div>


            </div>
           </div> {/* .menu-items */}

          <div className="legal">
            <div>(V) Vegan (N) Nuts (D) Dairy (GF) Gluten Free</div>
            <div>All prices are in USD and subject to a 20% service charge and 8.875% government tax</div>
            <div>Please let us know if you have any allergies or special dietary requirements, or if you require any further information</div>
            <div>Our choice of suppliers and local produce - including fish, meat, dairy, fruits and vegetables - is informed by our commitment to sustainability</div>
          </div>

       </div> {/* .letter-paper */}
    
      <br className='no-print' />




















      <div className="letter-paper mains">


                                            
          <div className="menu-items">
            <div className="section">
              <div className="left-column">揚げ物<br/>Fried</div>

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
                  <div className="description1">Ebi, Summer Vegetables</div>
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
                  <div className="description1">Shrimp Tempura</div>
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
              <div className="left-column">魚<br/>Fish</div>
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

            <div className="section">
              <div className="left-column">肉<br/>Meat</div>
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
                  <div className="description1">Charcoal Grilled Chicken,</div>
                  <div className="description2">Yuzu Sesame Ponzu, Daikon Oroshi</div>
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
              <div className="left-column">野菜<br/>Market</div>
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
                      <span className="allergies">(GF)</span>
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
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">38</span>
                  </div>
                  <div className="description1">Grilled Eggplant, Saikyo Miso</div>
                  <div className="description2"></div>
                </div>








              </div>


            </div>



           </div> {/* .menu-items */}

          <div className="legal">
            <div>(V) Vegan (N) Nuts (D) Dairy (GF) Gluten Free</div>
            <div>All prices are in USD and subject to a 20% service charge and 8.875% government tax</div>
            <div>Please let us know if you have any allergies or special dietary requirements, or if you require any further information</div>
            <div>Our choice of suppliers and local produce - including fish, meat, dairy, fruits and vegetables - is informed by our commitment to sustainability</div>
          </div> {/* .legal */}

       </div> {/* .letter-paper */}
    
      <br className='no-print' />













      <div className="letter-paper">


                                            
          <div className="menu-items">
            <div className="section">
              <div className="left-column">握り / 刺身<br/>Nigiri & Sashimi</div>

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
                      // onClick={()=>showModal('ebi')}
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
                      // onClick={()=>showModal('ebi')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Samekarai (Sharkskin Flounder)</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">20</span>
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
                      <span className="name">Chef's Selection of 5/8</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">60/92</span>
                  </div>
                </div>






              </div>
            </div>





















            <div className="section">
              <div className="left-column">巻物<br/>Sushi Roll</div>
              <div className="right-column sushi-rolls">

                <div className="dinner-menu-item"
                      onClick={()=>showModal('kappa-maki')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Kappa Maki</span>
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
                      <span className="name">Oshinko Maki</span>
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
                      <span className="name">Ume Shiso Maki</span>
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
                      <span className="name">Avocado Maki</span>
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
                      <span className="name">Eel Cucumber Maki</span>
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
                      <span className="name">Tekka Maki</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">21</span>
                  </div>
                  <div className="description1">Tuna</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('vegetable-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Vegetable Roll</span>
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
                      <span className="name">Spicy Tuna Roll</span>
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
                      <span className="name">Negi Hama Roll</span>
                      <span className="allergies"></span>
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
                      <span className="name">Salmon Avocado Roll</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">26</span>
                  </div>
                  <div className="description1">Salmon, Avocado</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('california-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">King Crab California Roll</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">36</span>
                  </div>
                  <div className="description1">Avocado, Cucumber</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('lobster-tempura-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Lobster Tempura Roll</span>
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
                      <span className="name">Spider Roll</span>
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

                </div>

                <div  className="dinner-menu-item"
                      onClick={()=>showModal('wagyu-roll')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Miyazaki Wagyu Roll</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">78</span>
                  </div>
                  <div className="description1">Seared Wagyu Beef, Nama Garlic Chili, Sesame Oil</div>
                  <div className="description2"></div>
                </div>

              </div>
            </div>



           </div> {/* .menu-items */}


       </div> {/* .letter-paper */}
    
      <br className='no-print' />












      <div className="letter-paper">


                                            
          <div className="menu-items">
            <div className="section">
              <div className="left-column">御飯 / 麺類<br/>Rice & Noodle</div>

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
                  <div className="description1">Vegetable Mixed Rice</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Onsen Tamago</span>
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
                      <span className='upgrade-description'>with Vegetable Tempura</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">38</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Tempura Moriawase</span>
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
                      <span className='upgrade-description'>with Kamo (Duck)</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">42</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Vegetable Tempura</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">38</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Tempura Moriawase</span>
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

            
           </div> {/* .menu-items */}

          <div className="legal">
            <div>(V) Vegan (N) Nuts (D) Dairy (GF) Gluten Free</div>
            <div>All prices are in USD and subject to a 20% service charge and 8.875% government tax</div>
            <div>Please let us know if you have any allergies or special dietary requirements, or if you require any further information</div>
            <div>Our choice of suppliers and local produce - including fish, meat, dairy, fruits and vegetables - is informed by our commitment to sustainability</div>
          </div>

       </div> {/* .letter-paper */}

      <br className='no-print' />


























































    <div id="miso-soup" className='modal'>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />          
      <div className='modal-content'>
            <div>
              <img src='miso-soup.jpg' />
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
              <img src='edamame.jpg' />
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
              <img src='nama-tofu.jpg' />
            </div>
            <div className='modal-text'>
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Nama Tofu</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">19</span>
                  </div>
                  <div className="description1">Housemade Tofu, Dashi, Shoyu, Ginger</div>
                  <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          house-made tofu<br/>
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
              <img src='shishitos.jpg' />
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
            <img src='goma-ae.jpg' />
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
            <img src='tsukemono-moriawase.jpg' />
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
                  <div className="description1">Housemade Pickles</div>
                  <div className="description2"></div>
                          <br/>
                          <hr/>
                          <br/>
                          housemade japanese pickled vegetables
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
            <img src='hamachi-usuzukuri.jpg' />
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
            <img src='yasai-shiraae.jpg' />
          </div>
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Yasai Shiraae</span>
                      <span className="allergies">(GF, D)</span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Summer Vegetables, Tofu Dip</div>
                  <div className="description2"></div>                          <br/>
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
            <img src='wagyu-tataki.jpg' />
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
            <img src='aigamo-roast.jpg' />
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
            <img src='greenmarket-salad.jpg' />
          </div>
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Greenmarket Salad</span>
                      <span className="allergies">(V, GF)</span>
                    </span>
                    <span className="price">29</span>
                  </div>
                  <div className="description1">Summer Vegetables, Goma Miso</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Tofu</span>
                      <span className='allergies'>(V, GF)</span>
                    </span>
                    <span className="upgrade-price">38</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Warm Mushrooms</span>
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
            <img src='caesar-salad.jpg' />
          </div>
          <div className='modal-text'>
          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Nama Caesar Salad</span>
                      <span className="allergies">(D, GF)</span>
                    </span>
                    <span className="price">24</span>
                  </div>
                  <div className="description1">Yuzu Sesame, Ontama, Katsuo Bushi, Aonori</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Warm Mushrooms</span>
                      <span className='allergies'>(D, GF)</span>
                    </span>
                    <span className="upgrade-price">35</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Hokkaido "Unibushi"</span>
                      <span className='allergies'>(D, GF)</span>
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
                          parmesan cheese
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
            <img src='yasai-tempura.jpg' />
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
            <img src='tempura-moriawase.jpg' />
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
                  <div className="description1">Ebi, Summer Vegetables</div>
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
            <img src='shrimp-tempura.jpg' />
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
                  <div className="description1">Shrimp Tempura</div>
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
            <img src='gindara.jpg' />
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
            <img src='hamachi-kama.jpg' />
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
            <img src='lobster-uni-ogonyaki.jpg' />
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
            <img src='jidori-chicken.jpg' />
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
                  <div className="description1">Charcoal Grilled Chicken,</div>
                  <div className="description2">Yuzu Sesame Ponzu, Daikon Oroshi</div>
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
            <img src='tenderloin.jpg' />
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
            <img src='sirloin.jpg' />
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
            <img src='kamo-miso-yaki.jpg' />
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
            <img src='tofu-miso-yaki.jpg' />
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
            <img src='grilled-vegetables.jpg' />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Grilled Summer Vegetables</span>
                      <span className="allergies">(GF)</span>
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
            <img src='hamachi.jpg' />
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

    <div id="ebi" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />  
          <div className='modal-content'>
          
          <div>
            <img src='ebi.jpg' />
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
            <img src='kappa-maki.jpg' />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Kappa Maki</span>
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
            <img src='oshinko-maki.jpg' />
          </div>
          <div className='modal-text'>
                      
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Oshinko Maki</span>
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
            <img src='ume-shiso-maki.jpg' />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Ume Shiso Maki</span>
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
            <img src='avocado-maki.jpg' />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Avocado Maki</span>
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
            <img src='unagi-cucumber-maki.jpg' />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Unagi Cucumber Maki</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">21</span>
                  </div>
                  <div className="description1">Eel, Cucumber</div>
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
            <img src='tekka-maki.jpg' />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Tekka Maki</span>
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
            <img src='vegetable-roll.jpg' />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Vegetable Roll</span>
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
            <img src='spicy-tuna-roll.jpg' />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Spicy Tuna Roll</span>
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
            <img src='negi-hama-roll.jpg' />
          </div>
          <div className='modal-text'>
                               
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Negi Hama Roll</span>
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
                      <span className="name">Salmon Avocado Roll</span>
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
            <img src='california-roll.jpg' />
          </div>
          <div className='modal-text'>
                       
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">King Crab California Roll</span>
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
            <img src='lobster-tempura-roll.jpg' />
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
            <img src='aman-ny-roll.jpg' />
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
            <img src='wagyu-roll.jpg' />
          </div>
          <div className='modal-text'>
                           
              
              MENU DESCRIPTION:
              <div className="right-column">
                  <div className="name-price">
                    <span>
                      <span className="name">Miyazaki Wagyu Roll</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">78</span>
                  </div>
                  <div className="description1">Seared Wagyu Beef, Nama Garlic Chili, Sesame Oil</div>
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
            <img src='yakimeshi.jpg' />
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
                  <div className="description1">Vegetable Mixed Rice</div>
                  <div className="description2"></div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Onsen Tamago</span>
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
            <img src='unagi-gohan.jpg' />
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
                      <span className='upgrade-description'>with Kamo (Duck)</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">42</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Vegetable Tempura</span>
                      <span className='allergies'></span>
                    </span>
                    <span className="upgrade-price">38</span>
                  </div>
                  <div className="upgrade">
                    <span>
                      <span className='upgrade-description'>with Tempura Moriawase</span>
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
            <img src='kamatama-udon.jpg' />
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
            <img src='yakishabu-gohan.jpg' />
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
            <img src='shima-aji-tataki.jpg' />
          </div>
          <div className='modal-text'>
                          
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Shima Aji Tataki</span>
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
            <img src='nasu-agebitashi.jpg' />
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
            <img src='suzuki-tatsuta-age.jpg' />
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
            <img src='softshell-crab.jpg' />
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
            <img src='lamb-chops.jpg' />
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
            <img src='nasu-dengaku.jpg' />
          </div>
          <div className='modal-text'>
                         
              
              MENU DESCRIPTION:
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name">Nasu Dengaku</span>
                              <span className="allergies">(V, GF)</span>
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
            <img src='zaru-soba.jpg' />
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
                              <span className='upgrade-description'>with Vegetable Tempura</span>
                              <span className='allergies'></span>
                            </span>
                            <span className="upgrade-price">38</span>
                          </div>
                          <div className="upgrade">
                            <span>
                              <span className='upgrade-description'>with Tempura Moriawase</span>
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
            <img src='spider-roll.jpg' />
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


    {/* .webpage */}
    </div>    
  )
}



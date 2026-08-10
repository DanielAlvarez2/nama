'use client'
import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter';

export default function SakeElmarPage(){

    function openModal(section,producer,bin,size,price,description,image){
        document.querySelector('#sake-modal').style.display = 'grid'
        document.querySelector('#sake-modal-section').innerText = section
        document.querySelector('#sake-modal-producer-name').innerHTML = producer
        document.querySelector('.sake-modal-bin-left').innerText = bin
        document.querySelector('.sake-modal-bin-mobile').innerText = bin
        document.querySelector('.sake-modal-size').innerHTML = size
        document.querySelector('.sake-modal-price').innerText = price
        document.querySelector('.sake-modal-description').innerHTML = description
        document.querySelector('#sake-modal-image').src = image

    }
    function closeModal(){
        document.querySelector('#sake-modal').style.display = 'none'
        document.querySelector('#sake-modal-section').innerText = ''
        document.querySelector('#sake-modal-producer-name').innerHTML = ''
        document.querySelector('.sake-modal-bin-left').innerText = ''
        document.querySelector('.sake-modal-bin-mobile').innerText = ''
        document.querySelector('.sake-modal-size').innerHTML = ''
        document.querySelector('.sake-modal-price').innerText = ''
        document.querySelector('.sake-modal-description').innerHTML = ''
        document.querySelector('#sake-modal-image').src = ''
    }

    return(
    <div className="webpage sake-webpage">

        <div id='sake-modal' className='no-print'>
            <div id='sake-modal-content' style={{width:'6in'}}>
                <AiTwotoneCloseCircle   
                                        className='close-button'
                                        onClick={closeModal} />
                <div style={{width:'100%',textAlign:'center'}}>
                    <img id='sake-modal-image' />
                </div>
                <br/>
                <div id='sake-modal-info'>
                    <h2 style={{width:'100%',textAlign:'center',marginBottom:'0px'}}>SAKE</h2>
                    <div className='sake-section'>
                        <h3 id='sake-modal-section'></h3>
                            <div className='sake-producer'>    
                                <div className='sake-producer-name'><span className='bin-left'></span>
                                    <span id='sake-modal-producer-name'></span>
                                </div>{/* .sake-producer-name */}
                                <div className='sake'>
                                    <div className='sake-flexbox-left'>
                                        <span className='bin-left sake-modal-bin-left'></span>
                                        <span className='sake-description sake-modal-description'></span>
                                    </div>{/* .sake-flexbox-left */}
                                    <div className='sake-flexbox-right'>
                                        <span className='bin-mobile sake-modal-bin-mobile'></span>
                                        <span className='sake-size sake-modal-size'></span>
                                        <span className='sake-price sake-modal-price'></span>
                                    </div>{/* .sake-flexbox-right */}
                                </div>{/* .sake */}
                            </div>{/* .sake-producer */}
                    </div>{/* .sake-section */}

                </div>{/* .sake-modal-info */}
            </div>{/* .sake-modal-content */}
        </div>{/* .sake-modal */}

      <Navbar page='sake' />
      
    
      <div className="letter-paper sake-page"
            // style={{backgroundImage:'url("scan-sake-1.jpg")',backgroundSize:'8.5in'}}
      >
        <div className='sake-content'
                style={{
                    // color:'blue',
                    // color:'transparent'
                }}
        >
            <h2>SAKE</h2>


            <div className='sake-section'>
                <h3>SPARKLING</h3>
                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                        <span>Masumi</span> 
                        </div>{/* .sake-producer-name */}
                        
                        <div className='sake' onClick={()=>openModal(   'SPARKLING',
                                                                        `<span style='text-decoration:line-through;'>Masumi</span> <span class='typo'>Miyasaka</span>`,
                                                                        '3001',
                                                                        '750 ml',
                                                                        '425',
                                                                        'Masumi Sparkling Grand Prix, Nagano',
                                                                        'masumi.jpg'
                                                        )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3001</span>
                                <span className='sake-description'>Masumi Sparkling Grand Prix, Nagano</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3001</span>
                                <span className='sake-size'>750 ml</span>
                                <span className='sake-price'>425</span>
                                <span className='sake-abv'>12%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}
            </div>{/* .sake-section */}
        

            <div className='sake-section'>
                <h3>NIGORI</h3>

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kamoizumi
                        </div>{/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    'NIGORI',
                                                                    'Kamoizumi',
                                                                    '3100',
                                                                    '500 ml',
                                                                    '90',
                                                                    'Summer Snow - Nigori Ginjo, Hiroshima',
                                                                    'summer-snow.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3100</span>
                                <span className='sake-description'>Summer Snow Nigori Ginjo, Hiroshima</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3100</span>
                                <span className='sake-size'>500 ml</span>
                                <span className='sake-price'>90</span>
                                <span className='sake-abv'>18.1%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Nagurayama
                        </div>{/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    'NIGORI',
                                                                    'Nagurayama',
                                                                    '3101',
                                                                    '720 ml',
                                                                    '125',
                                                                    'Snow White Nigori Ginjo, Fukushima',
                                                                    'snow-white.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3101</span>
                                <span className='sake-description'>Snow White Nigori Ginjo, Fukushima</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3101</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>125</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}


                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Rihaku
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'NIGORI',
                                                                    'Rihaku',
                                                                    '3601',
                                                                    '300 ml',
                                                                    '75',
                                                                    'Dreamy Clouds Nigori Tokubetsu, Shimane Prefecture',
                                                                    'rihaku-dreamy-clouds-300ml.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3601</span>
                                <span className='sake-description'>Dreamy Clouds Nigori Tokubetsu, Shimane Prefecture</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3601</span>
                                <span className='sake-size'>300 ml</span>
                                <span className='sake-price'>75</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'NIGORI',
                                                                    'Rihaku',
                                                                    '3102',
                                                                    '720 ml',
                                                                    '175',
                                                                    'Dreamy Clouds Nigori Tokubetsu Namazake, Shimane Prefecture',
                                                                    'dreamy-clouds-namazake.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3102</span>
                                <span className='sake-description'>Dreamy Clouds Nigori Tokubetsu Namazake, Shimane Prefecture</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3102</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>175</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                    </div>{/* .sake-producer */}


            </div>{/* .sake-section */}
        
        
            <div className='sake-section'>
                <h3>JUNMAI</h3>

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Asamaï Shuzō
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Asamaï Shuzō',
                                                                    '3211',
                                                                    '720 ml',
                                                                    '165',
                                                                    `Amanoto Heaven's Door Tokubetsu <span class='typo'>Junmai</span>, Akita`,
                                                                    'heavens-door.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3211</span>
                                <span className='sake-description'>Amanoto Heaven's Door Tokubetsu <span className='typo'>Junmai</span>, Akita</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3211</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>165</span>
                                <span className='sake-abv'>15.7%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Asamaï Shuzō',
                                                                    '3213',
                                                                    '720 ml',
                                                                    '185',
                                                                    `Amanoto Heaven's Door Tokubetsu <span class='typo'>Junmai</span> Namazake, Akita`,
                                                                    'heavens-door-namazake.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3213</span>
                                <span className='sake-description'>Amanoto Heaven's Door Tokubetsu <span className='typo'>Junmai</span> Namazake, Akita</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3213</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>185</span>
                                <span className='sake-abv'>15.7%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kato Sake Works
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Kato Sake Works',
                                                                    '3214',
                                                                    '750 ml',
                                                                    '140',
                                                                    'Pure Rice Junmai, New York',
                                                                    'pure-rice.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3214</span>
                                <span className='sake-description'>Pure Rice Junmai, New York</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3214</span>
                                <span className='sake-size'>750 ml</span>
                                <span className='sake-price'>140</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Kato Sake Works',
                                                                    '3215',
                                                                    '750 ml',
                                                                    '295',
                                                                    `Shizuku Droplets <span class='typo'>Junmai</span>, New York`,
                                                                    'shizuku-droplets.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3215</span>
                                <span className='sake-description'>Shizuku Droplets <span className='typo'>Junmai</span>, New York</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3215</span>
                                <span className='sake-size'>750 ml</span>
                                <span className='sake-price'>295</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                        Kenbishi
                        </div>{/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Kenbishi',
                                                                    '3204',
                                                                    '720 ml',
                                                                    '150',
                                                                    'Mizuho Junmai, Hyōgo',
                                                                    'kenbishi-mizuho.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3204</span>
                                <span className='sake-description'>Mizuho Junmai, Hyōgo</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3204</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>150</span>
                                <span className='sake-abv'>17.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kokuryu
                        </div>{/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Kokuryu',
                                                                    '3303',
                                                                    '720 ml',
                                                                    '295',
                                                                    'Kuzuryu Silk Dragon <span class="typo">Daiginjo</span>, Fukui',
                                                                    'silk-dragon.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3303</span>
                                <span className='sake-description'>Kuzuryu Silk Dragon <span className='typo'>Daiginjo</span>, Fukui</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3303</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>295</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Kokuryu',
                                                                    '3206',
                                                                    '720 ml',
                                                                    '135',
                                                                    'Kuzuryu <span class="typo">Nine-Headed Dragon</span> Junmai, Fukui',
                                                                    'nine-headed-dragon.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3206</span>
                                <span className='sake-description'>Kuzuryu <span className='typo'>Nine-Headed Dragon</span> Junmai, Fukui</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3206</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>135</span>
                                <span className='sake-abv'>14.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kurosawa
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Kurosawa',
                                                                    '3209',
                                                                    '720 ml',
                                                                    '90',
                                                                    'Junmai Kimoto, Nagano',
                                                                    'kurosawa.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3209</span>
                                <span className='sake-description'>Junmai Kimoto, Nagano</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3209</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>90</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Taka
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Taka',
                                                                    '3208',
                                                                    '720 ml',
                                                                    '135',
                                                                    'Noble Arrow Tokubetsu Junmai, Yamaguchi',
                                                                    'noble-arrow.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3208</span>
                                <span className='sake-description'>Noble Arrow Tokubetsu Junmai, Yamaguchi</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3208</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>135</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                        
                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Taka',
                                                                    '3205',
                                                                    '720 ml',
                                                                    '145',
                                                                    'Noble Arrow Namazake Tokubetsu Junmai, Yamaguchi',
                                                                    'noble-arrow-namazake.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3205</span>
                                <span className='sake-description'>Noble Arrow Namazake Tokubetsu Junmai, Yamaguchi</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3205</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>145</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Tenzan
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Tenzan',
                                                                    '3207',
                                                                    '720 ml',
                                                                    '170',
                                                                    'Shichida Natsujun <span class="typo">Junmai Namazume</span>, <span style="text-decoration:line-through">Yamagata</span> <span class="typo">Saga</span>',
                                                                    'tenzan.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3207</span>
                                <span className='sake-description'>
                                    Shichida Natsujun <span className='typo'>Junmai Namazume</span>, <span style={{textDecoration:'line-through'}}>Yamagata</span> <span className='typo'>Saga</span></span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3207</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>170</span>
                                <span className='sake-abv'>14%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Uchigasaki
                        </div>{/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Uchigasaki',
                                                                    '3201',
                                                                    '720 ml',
                                                                    '85',
                                                                    'Hoyo Sawayaka Summer Breeze Junmai, Miyagi',
                                                                    'summer-breeze.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3201</span>
                                <span className='sake-description'>Hoyo Sawayaka Summer Breeze Junmai, Miyagi</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3201</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>85</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}



            </div>{/* .sake-section */}




            <div className='sake-section'>
                <h3>DAIGINJO</h3>

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Dewazakura Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'DAIGINJO',
                                                                    'Dewazakura Shuzo',
                                                                    '3600',
                                                                    '300 ml',
                                                                    '85',
                                                                    'Sakura Boy Mini-Daiginjo, Yamagata',
                                                                    'sakura-boy.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3600</span>
                                <span className='sake-description'>
                                    Sakura Boy Mini-Daiginjo, Yamagata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3600</span>
                                <span className='sake-size'>300 ml</span>
                                <span className='sake-price'>85</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}
                    
            </div>{/* .sake-section */}
        
        





        </div>{/* .sake-content */}
        
        <footer>13</footer>
      
      
      
      
      </div>{/* .letter-paper .sake-page */}

      <br className='no-print' />

                        





















      <div className="letter-paper sake-page"
            // style={{backgroundImage:'url("scan-sake-1.jpg")',backgroundSize:'8.5in'}}
      >
        <div className='sake-content'
                style={{
                    // color:'blue',
                    // color:'transparent'
                }}
        >


            <div className='sake-section'>

                    
                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kokuryu
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'DAIGINJO',
                                                                    'Kokuryu',
                                                                    '3300',
                                                                    '720 ml',
                                                                    '395',
                                                                    'Ryu Gold Dragon <span class="typo">Daiginjo</span>, Fukui',
                                                                    'gold-dragon.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3300</span>
                                <span className='sake-description'>
                                    Ryu Gold Dragon <span className='typo'>Daiginjo</span>, Fukui
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3300</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>395</span>
                                <span className='sake-abv'>15.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Midorikawa
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'DAIGINJO',
                                                                    'Midorikawa',
                                                                    '3301',
                                                                    '720 ml',
                                                                    '750',
                                                                    'Daiginjo, Niigata',
                                                                    'midorikawa.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3301</span>
                                <span className='sake-description'>
                                    Daiginjo, Niigata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3301</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>750</span>
                                <span className='sake-abv'>17.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Suehiro
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'DAIGINJO',
                                                                    'Suehiro',
                                                                    '3302',
                                                                    '720 ml',
                                                                    '335',
                                                                    'Ken <span class="typo">Daiginjo</span>, Fukushima',
                                                                    'suehiro-ken.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3302</span>
                                <span className='sake-description'>
                                    Ken <span className='typo'>Daiginjo</span>, Fukushima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3302</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>335</span>
                                <span className='sake-abv'>15.9%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

            </div>{/* .sake-section */}
        

            <div className='sake-section'>
                <h3>JUNMAI DAIGINJO</h3>

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Akabu Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Akabu Shuzo',
                                                                    '3404',
                                                                    '720 ml',
                                                                    '655',
                                                                    `Gokujo no Kire <span class='typo'>Junmai Daiginjo</span>, Iwate`,
                                                                    'akabu.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3404</span>
                                <span className='sake-description'>
                                    Gokujo no Kire <span className='typo'>Junmai Daiginjo</span>, Iwate
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3404</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>655</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Asahi Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Asahi Shuzo',
                                                                    '3411',
                                                                    '750 ml',
                                                                    '365',
                                                                    'Senshin Junmai Daiginjo, Niigata',
                                                                    'asahi-senshin.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3411</span>
                                <span className='sake-description'>
                                    Senshin Junmai Daiginjo, Niigata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3411</span>
                                <span className='sake-size'>750 ml</span>
                                <span className='sake-price'>365</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Asahi Shuzo',
                                                                    '3405',
                                                                    '500 ml',
                                                                    '200',
                                                                    'Soujo Kubota Seppou, Niigata',
                                                                    'asahi-soujo.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3405</span>
                                <span className='sake-description'>
                                    Soujo Kubota Seppou <span className='typo'>Junmai Daiginjo</span>, Niigata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3405</span>
                                <span className='sake-size'>500 ml</span>
                                <span className='sake-price'>200</span>
                                <span className='sake-abv'>14%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Daishichi
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Daishichi',
                                                                    '3416',
                                                                    '720 ml',
                                                                    '270',
                                                                    'Minowamon Kimoto <span class="typo">Junmai Daiginjo</span>, Fukushima',
                                                                    'daishichi.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3416</span>
                                <span className='sake-description'>
                                    Minowamon Kimoto <span className='typo'>Junmai Daiginjo</span>, Fukushima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3416</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>270</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Dassai
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Dassai',
                                                                    '3418',
                                                                    '720 ml',
                                                                    '715',
                                                                    'Dassai 23 Hayata <span class="typo">Junmai Daiginjo</span>, Yamaguchi',
                                                                    'dassai-23-hayata.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3418</span>
                                <span className='sake-description'>
                                    Dassai 23 Hayata <span className='typo'>Junmai Daiginjo</span>, Yamaguchi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3418</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>715</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Dassai',
                                                                    '3606',
                                                                    '300 ml',
                                                                    '135',
                                                                    'Dassai 23 Junmai Daiginjo, Yamaguchi',
                                                                    'dassai-23-half-bottle.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3606</span>
                                <span className='sake-description'>
                                    Dassai 23 Junmai Daiginjo, Yamaguchi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3606</span>
                                <span className='sake-size'>300 ml</span>
                                <span className='sake-price'>135</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Dassai',
                                                                    '3400',
                                                                    '720 ml',
                                                                    '295',
                                                                    'Dassai 23 Junmai Daiginjo, Yamaguchi',
                                                                    'dassai-23.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3400</span>
                                <span className='sake-description'>
                                    Dassai 23 Junmai Daiginjo, Yamaguchi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3400</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>295</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Dewazakura Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Dewazakura Shuzo',
                                                                    '3421',
                                                                    '720 ml',
                                                                    '315',
                                                                    "Captain<span class='typo'>'</span>s Table Junmai Daiginjo Genshu, Yamagata",
                                                                    'captains-table.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3421</span>
                                <span className='sake-description'>
                                    Captain<span style={{color:'red'}}>'</span>s Table Junmai Daiginjo Genshu, Yamagata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3421</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>315</span>
                                <span className='sake-abv'>17%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Doi Shuzō
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Doi Shuzō',
                                                                    '3604',
                                                                    '300 ml',
                                                                    '90',
                                                                    'Takatenjin Soul of the Sensei Junmai Daiginjo, Shizuoka',
                                                                    'soul-of-the-sensei.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3604</span>
                                <span className='sake-description'>
                                    Takatenjin Soul of the Sensei Junmai Daiginjo, Shizuoka
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3604</span>
                                <span className='sake-size'>300 ml</span>
                                <span className='sake-price'>90</span>
                                <span className='sake-abv'>16.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Fukumitsuya
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Fukumitsuya',
                                                                    '3406',
                                                                    '720 ml',
                                                                    '335',
                                                                    'Kagatobi Sennichi Kakoi Junmai Daiginjo Koshu, Ishikawa',
                                                                    'fukumitsuya.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3406</span>
                                <span className='sake-description'>
                                    Kagatobi Sennichi Kakoi Junmai Daiginjo Koshu, Ishikawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3406</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>335</span>
                                <span className='sake-abv'>17.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Hakkaisan
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Hakkaisan',
                                                                    '3420',
                                                                    '720 ml',
                                                                    '450',
                                                                    '45 Kouwa Gura <span class="typo">Junmai Daiginjo</span>, Niigata',
                                                                    'hakkaisan-45.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3420</span>
                                <span className='sake-description'>
                                    45 Kouwa Gura <span className='typo'>Junmai Daiginjo</span>, Niigata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3420</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>450</span>
                                <span className='sake-abv'>17%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Hakkaisan',
                                                                    '3422',
                                                                    '800 ml',
                                                                    '895',
                                                                    'Kongoshin Winter Black Limited Edition <span class="typo">Junmai Daiginjo</span>, Niigata',
                                                                    'kongoshin.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3422</span>
                                <span className='sake-description'>
                                    Kongoshin Winter Black Limited Edition <span className='typo'>Junmai Daiginjo</span>, Niigata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3422</span>
                                <span className='sake-size'>800 ml</span>
                                <span className='sake-price'>895</span>
                                <span className='sake-abv'>17%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Hamakawa
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Hamakawa',
                                                                    '3414',
                                                                    '720 ml',
                                                                    '385',
                                                                    'Bijofu Yumebakari Dreamweaver Junmai Daiginjo, Kōchi',
                                                                    'dreamweaver.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3414</span>
                                <span className='sake-description'>
                                    Bijofu Yumebakari Dreamweaver Junmai Daiginjo, Kōchi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3414</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>385</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Higashiyama Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Higashiyama Shuzo',
                                                                    '3603',
                                                                    '300 ml',
                                                                    '75',
                                                                    'Konteki Pearls of Simplicity Junmai Daiginjo, Kyoto',
                                                                    'pearls-of-simplicity.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3603</span>
                                <span className='sake-description'>
                                    Konteki Pearls of Simplicity Junmai Daiginjo, Kyoto
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3603</span>
                                <span className='sake-size'>300 ml</span>
                                <span className='sake-price'>75</span>
                                <span className='sake-abv'>15.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Imanishi
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Imanishi',
                                                                    '3413',
                                                                    '720 ml',
                                                                    '360',
                                                                    'Mimurosugi Yamadanishiki Junmai Daiginjo, Nara',
                                                                    'mimurosugi.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3413</span>
                                <span className='sake-description'>
                                    Mimurosugi Yamadanishiki Junmai Daiginjo, Nara
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3413</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>195</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Isojiman Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Isojiman Shuzo',
                                                                    '3407',
                                                                    '720 ml',
                                                                    '360',
                                                                    '<span class="typo">Pride of Coast</span> <span style="text-decoration:line-through">50</span> Junmai Daiginjo 50, Shizuoka',
                                                                    'pride-of-coast.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3407</span>
                                <span className='sake-description'>
                                    <span className='typo'>Pride of Coast</span> Junmai Daiginjo 50, Shizuoka
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3407</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>360</span>
                                <span className='sake-abv'>16.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Izumibashi Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Izumibashi',
                                                                    '3403',
                                                                    '720 ml',
                                                                    '375',
                                                                    'Tokusen Junmai Daiginjo, Kanagawa',
                                                                    'izumibashi-tokusen.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3403</span>
                                <span className='sake-description'>
                                    Tokusen Junmai Daiginjo, Kanagawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3403</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>375</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}
                    
                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kamoizumi
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Kamoizumi',
                                                                    '3412',
                                                                    '500 ml',
                                                                    '115',
                                                                    'Autumn<span class="typo">al</span> Elixir Junmai Daiginjo, Hiroshima',
                                                                    'kamoizumi.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3412</span>
                                <span className='sake-description'>
                                    Autumn<span className='typo'>al</span> Elixir Junmai Daiginjo, Hiroshima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3412</span>
                                <span className='sake-size'>500 ml</span>
                                <span className='sake-price'>115</span>
                                <span className='sake-abv'>16.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

            </div>{/* .sake-section */}
        
        
        
        





        </div>{/* .sake-content */}
        
        <footer>14</footer>
      
      
      
      
      </div>{/* .letter-paper .sake-page */}

      <br className='no-print' />




















      <div className="letter-paper sake-page"
            // style={{backgroundImage:'url("scan-sake-1.jpg")',backgroundSize:'8.5in'}}
      >
        <div className='sake-content'
                style={{
                    // color:'blue',
                    // color:'transparent'
                }}
        >


            <div className='sake-section'>



                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kiku no Sato Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Kiku no Sato Shuzo',
                                                                    '3410',
                                                                    '720 ml',
                                                                    '1295',
                                                                    'Aratana <span class="typo">Junmai Daiginjo</span>, Tochigi',
                                                                    'aratana.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3410</span>
                                <span className='sake-description'>
                                    Aratana <span className='typo'>Junmai Daiginjo</span>, Tochigi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3410</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>1295</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kiyasho Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Kiyasho Shuzo',
                                                                    '3415',
                                                                    '720 ml',
                                                                    '595',
                                                                    'Jikon Nabari <span class="typo">Junmai Daiginjo</span>, Mie',
                                                                    'jikon-nabari.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3415</span>
                                <span className='sake-description'>
                                    Jikon Nabari <span className='typo'>Junmai Daiginjo</span>, Mie
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3415</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>595</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kojima
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Kojima',
                                                                    '3401',
                                                                    '720 ml',
                                                                    '440',
                                                                    'Toko Ultraluxe <span class="typo">Junmai Daiginjo Fukurotsuri</span>, Yamagata',
                                                                    'ultraluxe.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3401</span>
                                <span className='sake-description'>
                                    Toko Ultraluxe <span className='typo'>Junmai Daiginjo Fukurotsuri</span>, Yamagata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3401</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>440</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Niizawa
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Niizawa',
                                                                    '7041',
                                                                    '720 ml',
                                                                    '150',
                                                                    'Aman Hakurakusei Junmai Daiginjo, Miyagi',
                                                                    'aman-junmai-daiginjo.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>7041</span>
                                <span className='sake-description'>
                                    Aman Hakurakusei Junmai Daiginjo, Miyagi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>7041</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>150</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Ohmine Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Ohmine Shuzo',
                                                                    '3417',
                                                                    '720 ml',
                                                                    '550',
                                                                    '2grain Yamadanishiki, Yamaguchi',
                                                                    '2-grain.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3417</span>
                                <span className='sake-description'>
                                    2grain Yamadanishiki, Yamaguchi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3417</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>550</span>
                                <span className='sake-abv'>14%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Sanyohai
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Sanyohai',
                                                                    '3409',
                                                                    '720 ml',
                                                                    '415',
                                                                    '<span style="text-decoration:line-through"}}>Banshu</span> <span class="typo">Bansyu-</span>Ikkon Yamada Nishiki Junmai Daiginjo, Hyōgo',
                                                                    'banshu-ikkon.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3409</span>
                                <span className='sake-description'>
                                    <span style={{textDecoration:'line-through'}}>Banshu</span> <span className='typo'>Bansyu-</span>Ikkon Yamada Nishiki Junmai Daiginjo, Hyōgo
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3409</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>415</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Shimizu Seizaburo Shoten
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Shimizu Seizaburo Shoten',
                                                                    '3402',
                                                                    '720 ml',
                                                                    '575',
                                                                    'Zaku Selection N Junmai Daiginjo <span class="typo">Genshu</span>, Mie',
                                                                    'selection-n.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3402</span>
                                <span className='sake-description'>
                                    Zaku Selection N Junmai Daiginjo <span className='typo'>Genshu</span>, Mie
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3402</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>575</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Shimizu Seizaburo Shoten',
                                                                    '3408',
                                                                    '<span class="typo">750 ml</span>',
                                                                    '305',
                                                                    'Zaku Kaizan Ittekisui Junmai Daiginjo, Mie',
                                                                    'kaizan-ittekisui.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3408</span>
                                <span className='sake-description'>
                                    Zaku Kaizan Ittekisui Junmai Daiginjo, Mie
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3408</span>
                                <span className='sake-size typo'>750 ml</span>
                                <span className='sake-price'>305</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Shimizu Seizaburo Shoten',
                                                                    '7042',
                                                                    '300 ml',
                                                                    '60',
                                                                    'Zaku Miyabi no Tomo Amanemu <span class="typo">Junmai Daiginjo</span>, Mie',
                                                                    'zaku-miyabi-no-tomo.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>7042</span>
                                <span className='sake-description'>
                                    Zaku Miyabi no Tomo Amanemu <span className='typo'>Junmai Daiginjo</span>, Mie
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>7042</span>
                                <span className='sake-size'>300 ml</span>
                                <span className='sake-price'>60</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Suigei
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Suigei',
                                                                    '3419',
                                                                    '720 ml',
                                                                    '890',
                                                                    'Daito Junmai Daiginjo, Kōchi',
                                                                    'suigei-daito.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3419</span>
                                <span className='sake-description'>
                                    Daito Junmai Daiginjo, Kōchi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3419</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>890</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Tamanohikari
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI DAIGINJO',
                                                                    'Tamanohikari',
                                                                    '3607',
                                                                    '300 ml',
                                                                    '70',
                                                                    'Bizen-Ōmachi Junmai Daiginj<span class="typo">ō</span>, Kyoto',
                                                                    'tamanohikari.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3607</span>
                                <span className='sake-description'>
                                    Bizen-Ōmachi Junmai Daiginj<span className='typo'>ō</span>, Kyoto    
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3607</span>
                                <span className='sake-size'>300 ml</span>
                                <span className='sake-price'>70</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}



            </div>{/* .sake-section */}
        

            <div className='sake-section'>
                <h3>GINJO</h3>

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Honke Matsuura
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'GINJO',
                                                                    'Honke Matsuura',
                                                                    '3203',
                                                                    '720 ml',
                                                                    '160',
                                                                    'Narutotai <span class="typo">Ginjo</span> Nama Genshu, Tokushima',
                                                                    'narutotai.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3203</span>
                                <span className='sake-description'>
                                    Narutotai <span className='typo'>Ginjo</span> Nama Genshu, Tokushima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3203</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>160</span>
                                <span className='sake-abv'>18.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}



            </div>{/* .sake-section */}
        
        
            <div className='sake-section'>
                <h3>JUMAI GINJO</h3>

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            <span style={{textDecoration:'line-through',fontSize:'inherit'}}>Hirataka</span> <span className='typo'>Hirako Shuzo</span>
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI GINJO',
                                                                    '<span style="text-decoration:line-through;font-size:inherit"}}>Hirataka</span> <span class="typo">Hirako Shuzo</span>',
                                                                    '3216',
                                                                    '720 ml',
                                                                    '160',
                                                                    'Hitakami Yasuke Houjun Karakuchi Junmai Ginjo, Miyagi',
                                                                    'hitakami.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3216</span>
                                <span className='sake-description'>
                                    Hitakami Yasuke Houjun Karakuchi Junmai Ginjo, Miyagi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3216</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>160</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Imada
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI GINJO',
                                                                    'Imada',
                                                                    '3210',
                                                                    '720 ml',
                                                                    '195',
                                                                    `Moon on the Water <span class='typo'>Junmai Ginjo</span>, Hiroshima`,
                                                                    'moon-on-the-water.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3210</span>
                                <span className='sake-description'>
                                    Moon on the Water <span className='typo'>Junmai Ginjo</span>, Hiroshima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3210</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>195</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI GINJO',
                                                                    'Imada',
                                                                    '3212',
                                                                    '720 ml',
                                                                    '215',
                                                                    `Moon on the Water Namazake <span class='typo'>Junmai Ginjo</span>, Hiroshima`,
                                                                    'moon-on-the-water-namazake.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3212</span>
                                <span className='sake-description'>
                                    Moon on the Water Namazake <span className='typo'>Junmai Ginjo</span>, Hiroshima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3212</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>215</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}





                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kiyasho Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI GINJO',
                                                                    'Kiyasho Shuzo',
                                                                    '3202',
                                                                    '720 ml',
                                                                    '295',
                                                                    'Jikon Junmai Ginjo Senbon Nishiki, Mie',
                                                                    'jikon-senbon-nishiki.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3202</span>
                                <span className='sake-description'>
                                    Jikon Junmai Ginjo Senbon Nishiki, Mie
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3202</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>295</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Niizawa
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI GINJO',
                                                                    'Niizawa',
                                                                    '7040',
                                                                    '720 ml',
                                                                    '105',
                                                                    'Aman Hakurakusei Junmai Ginjo, Miyagi',
                                                                    'aman-junmai-ginjo.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>7040</span>
                                <span className='sake-description'>
                                    Aman Hakurakusei Junmai Ginjo, Miyagi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>7040</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>105</span>
                                <span className='sake-abv'>15.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}


            </div>{/* .sake-section */}
        
        
        
        
            <div className='sake-section'>
                <h3>SPECIALTY</h3>

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Daishichi
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Daishichi',
                                                                    '4007',
                                                                    '720 ml',
                                                                    '1375',
                                                                    'Myoka Rangyoku <span class="typo">Heavenly Flower Junmai Daiginjo</span> Genshu Kimoto, Fukushima',
                                                                    'heavenly-flower.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4007</span>
                                <span className='sake-description'>
                                    Myoka Rangyoku <span className='typo'>Junmai Daiginjo</span> Genshu Kimoto, Fukushima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4007</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>1375</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}
            </div>{/* .sake-section */}




        </div>{/* .sake-content */}
        
        <footer>15</footer>
      
      
      
      
      </div>{/* .letter-paper .sake-page */}

      <br className='no-print' />














      <div className="letter-paper sake-page"
            // style={{backgroundImage:'url("scan-sake-1.jpg")',backgroundSize:'8.5in'}}
      >
        <div className='sake-content'
                style={{
                    // color:'blue',
                    // color:'transparent'
                }}
        >



            <div className='sake-section'>
                


                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Daishinsyu Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Daishinsyu',
                                                                    '4010',
                                                                    '720 ml',
                                                                    '450',
                                                                    'Equilibrium <span class="typo">Junmai Daiginjo</span>, Nagano',
                                                                    'equilibrium.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4010</span>
                                <span className='sake-description'>
                                    Equilibrium <span className='typo'>Junmai Daiginjo</span>, Nagano
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4010</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>450</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Dassai
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Dassai',
                                                                    '4014',
                                                                    '720 ml',
                                                                    '1695',
                                                                    'Beyond Junmai Daiginjo, Yamaguchi',
                                                                    'dassai-beyond.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4014</span>
                                <span className='sake-description'>
                                    Beyond Junmai Daiginjo, Yamaguchi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4014</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>1695</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Heiwa Shuzō
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Heiwa Shuzo',
                                                                    '4004',
                                                                    '720 ml',
                                                                    '1625',
                                                                    'KID Muryozan 30 Junmai Daiginjo, Wakayama',
                                                                    'kid.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4004</span>
                                <span className='sake-description'>
                                    KID Muryozan 30 Junmai Daiginjo, Wakayama
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4004</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>1625</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Isojiman Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Isojiman Shuzo',
                                                                    '4003',
                                                                    '720 ml',
                                                                    '2995',
                                                                    'Grazioso 33 Nakadori 2024 <span class="typo">Junmai Daiginjo</span>, Shizuoka',
                                                                    'grazioso.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4003</span>
                                <span className='sake-description'>
                                    Grazioso 33 Nakadori 2024 <span className='typo'>Junmai Daiginjo</span>, Shizuoka
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4003</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>2995</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kikuhime
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Kikuhime',
                                                                    '4016',
                                                                    '720 ml',
                                                                    '1565',
                                                                    'Kurogin Daiginjo Koshu, Ishikawa',
                                                                    'kurogin.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4016</span>
                                <span className='sake-description'>
                                    Kurogin Daiginjo Koshu, Ishikawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4016</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>1565</span>
                                <span className='sake-abv'>17.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Kikuhime',
                                                                    '4011',
                                                                    '720 ml',
                                                                    '645',
                                                                    'BY Library Release Daiginjo Koshu, Ishikawa',
                                                                    'by.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4011</span>
                                <span className='sake-description'>
                                    BY Library Release Daiginjo Koshu, Ishikawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4011</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>645</span>
                                <span className='sake-abv'>17.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Masuda
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Masuda',
                                                                    '4018',
                                                                    '750 ml',
                                                                    '750',
                                                                    `Black Samurai <span class='typo'>Junmai Daiginjo</span>, Toyama`,
                                                                    'black-samurai.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4018</span>
                                <span className='sake-description'>
                                    Black Samurai <span className='typo'>Junmai Daiginjo</span>, Toyama
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4018</span>
                                <span className='sake-size'>750 ml</span>
                                <span className='sake-price'>750</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Niizawa
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Niizawa',
                                                                    '4000',
                                                                    '720 ml',
                                                                    '2790',
                                                                    'Aman<span class="typo">,</span> Subarashi <span class="typo">Super Junmai Daiginjo</span>, Miyagi',
                                                                    'subarashi.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4000</span>
                                <span className='sake-description'>
                                    Aman<span className='typo'>,</span> Subarashi <span className='typo'>Super Junmai Daiginjo</span>, Miyagi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4000</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>2790</span>
                                <span className='sake-abv'>16%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Noguchi Naohiko
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Noguchi Naohiko',
                                                                    '4012',
                                                                    '770 ml',
                                                                    '2150',
                                                                    'Limited Edition N.01 Vintage Junmai Daiginjo Muroka Nama Genshu, Ishikawa',
                                                                    'noguchi-naohiko.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4012</span>
                                <span className='sake-description'>
                                    Limited Edition N.01 Vintage Junmai Daiginjo Muroka Nama Genshu, Ishikawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4012</span>
                                <span className='sake-size'>770 ml</span>
                                <span className='sake-price'>2150</span>
                                <span className='sake-abv'>17%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Shiraiwa K.K.
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Shiraiwa K.K.',
                                                                    '4005',
                                                                    '720 ml',
                                                                    '750',
                                                                    `Iwa 5 Assemblage 5 <span class='typo'>Junmai Daiginjo</span>, Toyama`,
                                                                    'iwa-5.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4005</span>
                                <span className='sake-description'>
                                    Iwa 5 Assemblage 5 <span className='typo'>Junmai Daiginjo</span>, Toyama
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4005</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>750</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Sōtō
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Sōtō',
                                                                    '4013',
                                                                    '720 ml',
                                                                    '395',
                                                                    'Omachi Kimoto Mitobe Limited Edition <span class="typo">Junmai Daiginjo</span>, Yamagata',
                                                                    'soto.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4013</span>
                                <span className='sake-description'>
                                    Omachi Kimoto Mitobe Limited Edition <span className='typo'>Junmai Daiginjo</span>, Yamagata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4013</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>395</span>
                                <span className='sake-abv'>15.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Tatenokawa Shuzō
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SPECIALTY',
                                                                    'Tatenokawa Shuzō',
                                                                    '4015',
                                                                    '720 ml',
                                                                    '985',
                                                                    'Eighteen 18% Junmai Daiginjo, Yamagata',
                                                                    '18.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4015</span>
                                <span className='sake-description'>
                                    Eighteen 18% Junmai Daiginjo, Yamagata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4015</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>985</span>
                                <span className='sake-abv'>15.5%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Yoshida Shuzō
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    "SPECIALTY",
                                                                    'Yoshida Shuzō',
                                                                    '4008',
                                                                    '720 ml',
                                                                    '995',
                                                                    'Tedorigawa Mangekyo <span class="typo">Kaleidoscope Junmai Daiginjo</span>, Ishikawa',
                                                                    'kaleidoscope.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4008</span>
                                <span className='sake-description'>
                                    Tedorigawa Mangekyo <span className='typo'>Junmai Daiginjo</span>, Ishikawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4008</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>995</span>
                                <span className='sake-abv'>15%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}



            </div>{/* .sake-section */}
        
        
            <div className='sake-section'>
                <h3>SWEET</h3>

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Dassai
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SWEET',
                                                                    'Dassai',
                                                                    '3502',
                                                                    '720 ml',
                                                                    '750',
                                                                    'Dassai 23 Junmai Daiginjo Umeshu, Wakayama',
                                                                    'dassai-23-plum-wine.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3502</span>
                                <span className='sake-description'>
                                    Dassai 23 Junmai Daiginjo Umeshu, Wakayama
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3502</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>750</span>
                                <span className='sake-abv'>8%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Izumibashi Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SWEET',
                                                                    'Izumibashi Shuzo',
                                                                    '3503',
                                                                    '500 ml',
                                                                    '170',
                                                                    'Umeshu Yamada <span style="text-decoration:line-through">Jyuro</span> <span class="typo">Juro</span> Junmai Daiginjo, Kanagawa',
                                                                    'yamada-juro.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3503</span>
                                <span className='sake-description'>
                                    Umeshu Yamada <span style={{textDecoration:'line-through'}}>Jyuro</span> <span className='typo'>Juro</span> Junmai Daiginjo, Kanagawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3503</span>
                                <span className='sake-size'>500 ml</span>
                                <span className='sake-price'>170</span>
                                <span className='sake-abv'>10%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Katsuyama
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SWEET',
                                                                    'Katsuyama',
                                                                    '3501',
                                                                    '720 ml',
                                                                    '280',
                                                                    'Lei Junmai Ginjo, Miyagi',
                                                                    'katsuyama.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3501</span>
                                <span className='sake-description'>
                                    Lei Junmai Ginjo, Miyagi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3501</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>280</span>
                                <span className='sake-abv'>12%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                    </div>{/* .sake-producer */}


                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Yachiya
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SWEET',
                                                                    'Yachiya',
                                                                    '3504',
                                                                    '720 ml',
                                                                    '195',
                                                                    'Kagatsuru Umeshu, Ishikawa',
                                                                    'kagatsuru-umeshu.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3504</span>
                                <span className='sake-description'>
                                    Kagatsuru Umeshu, Ishikawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3504</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>195</span>
                                <span className='sake-abv'>11%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Yamamoto Honke
                        </div>{/* .sake-producer-name */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'SWEET',
                                                                    'Yamamoto Honke',
                                                                    '3500',
                                                                    '500 ml',
                                                                    '110',
                                                                    'Yuzu Omoi <span class="typo">Tokubetsu Junmai</span>, Kyoto',
                                                                    'yuzu-omoi.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3500</span>
                                <span className='sake-description'>
                                    Yuzu Omoi <span className='typo'>Tokubetsu Junmai</span>, Kyoto
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3500</span>
                                <span className='sake-size'>500 ml</span>
                                <span className='sake-price'>110</span>
                                <span className='sake-abv'>7%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                    </div>{/* .sake-producer */}





            </div>{/* .sake-section */}
        
        
        
        





        </div>{/* .sake-content */}
        
        <footer>16</footer>
      
      
      
      
      </div>{/* .letter-paper .sake-page */}

      <br className='no-print' />




    <NavbarFooter page='sake' />                                                                



    {/* .webpage */}
    </div>        
    )
}
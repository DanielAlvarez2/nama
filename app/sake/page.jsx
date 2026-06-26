'use client'
import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";

export default function Sake(){

    function openModal(section,producer,bin,size,price,description,image){
        document.querySelector('#sake-modal').style.display = 'grid'
        document.querySelector('#sake-modal-section').innerText = section
        document.querySelector('#sake-modal-producer-name').innerHTML = producer
        document.querySelector('.sake-modal-bin-left').innerText = bin
        document.querySelector('.sake-modal-bin-mobile').innerText = bin
        document.querySelector('.sake-modal-size').innerText = size
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
        document.querySelector('.sake-modal-size').innerText = ''
        document.querySelector('.sake-modal-price').innerText = ''
        document.querySelector('.sake-modal-description').innerHTML = ''
        document.querySelector('#sake-modal-image').src = ''
    }

    return(
    <div className="webpage sake-webpage">

        <div id='sake-modal'>
            <div id='sake-modal-content' style={{width:'6in'}}>
                <AiTwotoneCloseCircle   
                                        className='close-button'
                                        onClick={closeModal} />
                <div style={{width:'100%',textAlign:'center'}}>
                    <img id='sake-modal-image' />
                </div>
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

      <div style={{width:'100%',textAlign:'center',paddingTop:'15px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
          <path fill="#281E09" d="m51.9 30.5-.4-1c-.9.5-1 1.6-1.6 2.2-1.3 1.4-4.3 1.3-6 1.3-.6 3.3-.5 6.6-.8 10-.3 3.4-1.8 9-1 12.4.1.5.5.8.8 1.2l-.6.6.6 1.8c-.8.2-1-1.3-1.2-1.8a74.1 74.1 0 0 1 1-35.5c.6-2.3 1.5-4.4 2-6.7-1.8 1.5-3.7 2.8-5.4 4.4-2.3 2-6.3 5.1-8.1 7.2-1 1.1-1.9 2.8-3 4-.6.7-2 2.3-2.7 2.5-3.4 1.1-7.8-2.9-9.7-5.3l-6.7 5.7L9 33l-3.2 2.3c-.8.4.1-1-.6-.6-.9.5-1.2 2-2.5 1.2-.2.9 1.2.7 1.2 1-1 1.5-3.8 2-3.8-.3 0-3.3 9.2-10.1 11.4-12.7 1-.4 2.6.5 3.5.5.7 0 1.4-.4 2.2-.2 1.5.4 4.5 3.4 6.2 4 2 .6 2.8-.3 4.3-1.4 2.5-1.6 4.8-3.8 7.3-5.5 2-1.5 9.2-5.4 10.3-7.4 1.7-3 2.1-8.6 3.6-12 .2-.5.4-1 1-1.4 1.7 4.8.7 10.4 1 15.5 0 2.4.1 6.1.5 8.4.2.8 1 2.1 1 2.3 0 .2-.4.6-.4 1.2-.1 1.2.3 2.3.3 3.5v3.5c0 .3.2 1-.3 1-.2-1.7.2-3.8 0-5.4Zm-.9-5.4L49.7 7.2c-.7 1.2-1 2.7-1.5 4l-.6 2.3c-1.2 4.2-2 8.5-3 12.8 2.3-.6 4-1.3 6.4-1.2Zm34.5 5.1c.3-2.7 1.6-5.6 2-8.2l-3.8 2c-1.3 1.9-6.3 5-8.4 4.9-2.1-.1-4-1.6-5.8-2.3-2.2 1.2-7.4 10-10.2 5.8-.4-.6-1.4-3.3-1.3-4 0-1 2.6-2.2 3.3-3.2l.3.5 5.9-5.7c5.5.1 5.4 5.8 11.7 3.4 2-.8 8.6-5 10.2-4.8 2.2.2 0 2.7-.3 3.4l-1.6 5-2 7.7v-4.5Zm27.3-6.2 7.2.6c0 .5-.7.3-1 .3-.8 0-1.5-.3-2-.3-1.3 0-2.6.5-4 .3-.3.2 2.4 6.2 2.4 7.4 0 .4-1.3 3.8-1.6 3.8-.6-.2-.6-1-.9-1.3-.3-.4-1-.6-1.4-1.3-.8-1.3-2.3-8.2-2.7-8.4-1.5.1-3 .4-4.5.7-1.3.3-6.1 1.2-7 1.7-.4.2-.5 1-1 1.3-.7.3-1.6 0-2.1.3-.4.2-.9 3.7-2.6 3.6-.4-.5 1.6-3.8 1.6-4.5.1-.8-.5-1.9 0-2.8.3-.5 2.6-.7 3-.9.4-.2 3.4-4 4.4-4.7 1.5-1.3 3-2.8 5.2-2.5.6-1.7.2-4.5 3-3.7 1.7.5 3.3 8.5 4 10.4Zm-7.3-5-.1-1a19.6 19.6 0 0 0-7.1 5.8h1.4l-.9 1 9.6-1.1-1-5-1.9.4Z"></path>
        </svg>
      </div>

      <nav>
        <Link href='/'>Dinner</Link> | 
        <Link href='/dessert-menu'>Dessert</Link> | 
        <Link href='/drinks'>Drinks</Link> | 
        <Link href='/sake' style={{textDecoration:'underline',cursor:'default'}}>Sake</Link>
      </nav>
    
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
                        Masumi
                        </div>{/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(   'SPARKLING',
                                                                        'Masumi',
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
                                <span className='sake-description'>Summer Snow <span className='typo'>-</span> Nigori Ginjo, Hiroshima</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3100</span>
                                <span className='sake-size'>500 ml</span>
                                <span className='sake-price'>90</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kikusui
                        </div>{/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    'NIGORI',
                                                                    'Kikusui',
                                                                    '3602',
                                                                    '300 ml',
                                                                    '60',
                                                                    'Perfect Snow Nigori Genshu, Niigata',
                                                                    'perfect-snow.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3602</span>
                                <span className='sake-description'>Perfect Snow Nigori Genshu, Niigata</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3602</span>
                                <span className='sake-size'>300 ml</span>
                                <span className='sake-price'>60</span>
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
                                                                    '115',
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
                                <span className='sake-price'>115</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Rihaku
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3103</span>
                                <span className='sake-description'>Dreamy Clouds Nigori Tokubetsu, Shimane Prefecture</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3103</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>165</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3102</span>
                                <span className='sake-description'>Dreamy Clouds Nigori Tokubetsu Namazake, Shimane Prefecture</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3102</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>175</span>
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
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3211</span>
                                <span className='sake-description'>Amanoto Heaven's Door Tokubetsu, Akita</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3211</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>165</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3213</span>
                                <span className='sake-description'>Amanoto Heaven's Door Tokubetsu Namazake, Akita</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3213</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>185</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kato <span style={{color:'red',fontSize:'inherit'}}>Sake</span> Works
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3214</span>
                                <span className='sake-description'>Pure Rice Junmai, New York</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3214</span>
                                <span className='sake-size'>750 ml</span>
                                <span className='sake-price'>140</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3215</span>
                                <span className='sake-description'>Shizuku Droplets, New York</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3215</span>
                                <span className='sake-size'>750 ml</span>
                                <span className='sake-price'>295</span>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake' onClick={()=>openModal(
                                                                    'JUNMAI',
                                                                    'Kokuryu',
                                                                    '3206',
                                                                    '720 ml',
                                                                    '135',
                                                                    'Kuzuryu Junmai <span class="typo">Nine-Headed Dragon</span>, Fukui',
                                                                    'nine-headed-dragon.jpg'
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3206</span>
                                <span className='sake-description'>Kuzuryu Junmai <span className='typo'>Nine-Headed Dragon</span>, Fukui</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3206</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>135</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kurosawa
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3209</span>
                                <span className='sake-description'>Junmai Kimoto, Nagano</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3209</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>90</span>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Uchigasaki
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3201</span>
                                <span className='sake-description'>Hoyo Sawayaka Summer Breeze Junmai, Miyagi</span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3201</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>85</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}



            </div>{/* .sake-section */}
        
        





        </div>{/* .sake-content */}
        
        <footer>13</footer>
      
      
      
      
      </div>{/* .letter-paper .sake-page */}






















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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}
                    
                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kokuryu
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3300</span>
                                <span className='sake-description'>
                                    Ryu Gold Dragon, Fukui
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3300</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>395</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Midorikawa
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Suehiro
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3302</span>
                                <span className='sake-description'>
                                    Ken, Fukushima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3302</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>335</span>
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
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3404</span>
                                <span className='sake-description'>
                                    Gokujo no Kire, Iwate
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3404</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>655</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Asahi Shuzo
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3405</span>
                                <span className='sake-description'>
                                    Souju Kubota Seppou, Niigata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3405</span>
                                <span className='sake-size'>500 ml</span>
                                <span className='sake-price'>200</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Daishichi
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3416</span>
                                <span className='sake-description'>
                                    Minowamon Kimoto, Fukushima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3416</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>250</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Dassai
                        </div>{/* .sake-producer-name */}

                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3418</span>
                                <span className='sake-description'>
                                    Dassai 23 Hayata, Yamaguchi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3418</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>715</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Dewazakura Shuzo
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Doi Shuzō
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Fukumitsuya
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Hakkaisan
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3420</span>
                                <span className='sake-description'>
                                    45 Kouwa Gura, Niigata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3420</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>450</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3422</span>
                                <span className='sake-description'>
                                    Kongoshin Winter Black Limited Edition, Niigata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3422</span>
                                <span className='sake-size'>800 ml</span>
                                <span className='sake-price'>895</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Hamakawa
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Higashiyama Shuzo
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Imanishi
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3413</span>
                                <span className='sake-description'>
                                    Mimurosugi Yamadanishiki Junmai Daiginjo, Nara
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3413</span>
                                <span className='sake-size'>7200 ml</span>
                                <span className='sake-price'>195</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Isojiman Shuzo
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3407</span>
                                <span className='sake-description'>
                                    50 Junmai Daiginjo, Shizuoka
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3407</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>360</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}


            </div>{/* .sake-section */}
        
        
        
        





        </div>{/* .sake-content */}
        
        <footer>14</footer>
      
      
      
      
      </div>{/* .letter-paper .sake-page */}





















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
                            Izumibashi Shuzo
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3404</span>
                                <span className='sake-description'>
                                    Tokusen Junmai Daiginjo, Kanagawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3404</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>375</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}
                    
                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kamoizumi
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3412</span>
                                <span className='sake-description'>
                                    Autumn Elixir Junmai Daiginjo, Hiroshima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3412</span>
                                <span className='sake-size'>500 ml</span>
                                <span className='sake-price'>115</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kiku no Sato Shuzo
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3410</span>
                                <span className='sake-description'>
                                    Aratana, Tochigi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3410</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>1295</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kiyasho Shuzo
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3415</span>
                                <span className='sake-description'>
                                    Jikon Nabari, Mie
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3415</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>595</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kojima
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3401</span>
                                <span className='sake-description'>
                                    Toko Ultraluxe, Yamagata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3401</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>440</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Niizawa
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Ohmine Shuzo<span style={{color:'red',fontSize:'inherit'}}>u</span>
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3417</span>
                                <span className='sake-description'>
                                    2Grain <span style={{color:'red',fontSize:'inherit'}}>Yamadanishiki</span>, Yamaguchi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3417</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>550</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Sanyohai
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3409</span>
                                <span className='sake-description'>
                                    Banshu Ikkon <span style={{color:'red',fontSize:'inherit'}}>Yamada Nishiki</span> Junmai Daiginjo, Hyōgo
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3409</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>415</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Shimizu Seizaburo Shoten
                        </div>{/* .sake-producer-name */}

                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3402</span>
                                <span className='sake-description'>
                                    Zaku Selection N Junmai Daiginjo, Mie
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3402</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>575</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3408</span>
                                <span className='sake-description'>
                                    Zaku Kaizan Ittekisui Junmai Daiginjo, Mie
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3408</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>305</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>7042</span>
                                <span className='sake-description'>
                                    Za<span style={{color:'red',fontSize:'inherit'}}>K</span>u Miyabi no Tomo Amanemu, Mie
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>7042</span>
                                <span className='sake-size'>300 ml</span>
                                <span className='sake-price'>60</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Suigei
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Tamanohikari
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3607</span>
                                <span className='sake-description'>
                                    Bizen-Ōmachi Junmai Daiginj<span style={{color:'red',fontSize:'inherit'}}>ō</span>, Kyoto    
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3607</span>
                                <span className='sake-size'>300 ml</span>
                                <span className='sake-price'>70</span>
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
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3203</span>
                                <span className='sake-description'>
                                    Narutotai Nama Genshu, Tokushima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3203</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>160</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}



            </div>{/* .sake-section */}
        
        
            <div className='sake-section'>
                <h3>JUMAI GINJO</h3>

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Hirataka
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left' style={{color:'red',fontSize:'inherit'}}>3210</span>
                                <span className='sake-description'>
                                    Hitakami Yasuke Houjun Karakuchi Junmai Ginjo, Miyagi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile' style={{color:'red',fontSize:'inherit'}}>3210</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>160</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Imada
                        </div>{/* .sake-producer-name */}

                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left' style={{color:'red',fontSize:'inherit'}}>3210</span>
                                <span className='sake-description'>
                                    Moon on the Water, Hiroshima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile' style={{color:'red',fontSize:'inherit'}}>3210</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>195</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3212</span>
                                <span className='sake-description'>
                                    Moon on the Water Namazake, Hiroshima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3212</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>215</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}



                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Katsuyama
                        </div>{/* .sake-producer-name */}

                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                    </div>{/* .sake-producer */}


                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kiyasho Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                    </div>{/* .sake-producer */}



            </div>{/* .sake-section */}
        
        
        
        





        </div>{/* .sake-content */}
        
        <footer>15</footer>
      
      
      
      
      </div>{/* .letter-paper .sake-page */}















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
                            Niizawa
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4007</span>
                                <span className='sake-description'>
                                    Myoka Rangyoku Genshu Kimoto, Fukushima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4007</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>1375</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Daishinsyu Shuzo
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4010</span>
                                <span className='sake-description'>
                                    Equilibrium, Nagano
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4010</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>450</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Dassai
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Heiwa Shuz<span style={{color:'red',fontSize:'inherit'}}>ō</span>
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Isojiman Shuz<span style={{color:'red',fontSize:'inherit'}}>o</span>
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4003</span>
                                <span className='sake-description'>
                                    Grazioso 33 Nakadori 2024, Shizuoka
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4003</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>2995</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Kikuhime
                        </div>{/* .sake-producer-name */}

                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Masuda
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4018</span>
                                <span className='sake-description'>
                                    Black Samurai, Toyama
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4018</span>
                                <span className='sake-size'>750 ml</span>
                                <span className='sake-price'>750</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Niizawa
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4000</span>
                                <span className='sake-description'>
                                    Aman, Subarashi, Miyagi
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4000</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>2790</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Noguchi Naohiko
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Shiraiwa K.K.
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4005</span>
                                <span className='sake-description'>
                                    Iwa 5 Assemblage 5, Toyama
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4005</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>750</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Sōtō
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4013</span>
                                <span className='sake-description'>
                                    Omachi Kimoto Mitobe Limited Edition, Yamagata
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4013</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>395</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Tatenokawa Shuzō
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Yoshida Shuzō
                        </div>{/* .sake-producer-name */}
                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>4008</span>
                                <span className='sake-description'>
                                    Tedorigawa Mangekyo, Ishikawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4008</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>995</span>
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
                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}

                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Izumibashi Shuzo
                        </div>{/* .sake-producer-name */}

                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3503</span>
                                <span className='sake-description'>
                                    Umeshu Yamada Jyuro Junmai Daiginjo, Kanagawa
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3503</span>
                                <span className='sake-size'>500 ml</span>
                                <span className='sake-price'>170</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}



                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Yamamoto Honke
                        </div>{/* .sake-producer-name */}

                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>3500</span>
                                <span className='sake-description'>
                                    Yuzu Omoi, Kyoto
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>3500</span>
                                <span className='sake-size'>500 ml</span>
                                <span className='sake-price'>110</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                    </div>{/* .sake-producer */}





            </div>{/* .sake-section */}
        
        
        
        





        </div>{/* .sake-content */}
        
        <footer>16</footer>
      
      
      
      
      </div>{/* .letter-paper .sake-page */}









    {/* .webpage */}
    </div>        
    )
}
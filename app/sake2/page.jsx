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

        <div className='no-print' id='sake-modal'>
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

      <div className='no-print' style={{width:'100%',textAlign:'center',paddingTop:'15px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
          <path fill="#281E09" d="m51.9 30.5-.4-1c-.9.5-1 1.6-1.6 2.2-1.3 1.4-4.3 1.3-6 1.3-.6 3.3-.5 6.6-.8 10-.3 3.4-1.8 9-1 12.4.1.5.5.8.8 1.2l-.6.6.6 1.8c-.8.2-1-1.3-1.2-1.8a74.1 74.1 0 0 1 1-35.5c.6-2.3 1.5-4.4 2-6.7-1.8 1.5-3.7 2.8-5.4 4.4-2.3 2-6.3 5.1-8.1 7.2-1 1.1-1.9 2.8-3 4-.6.7-2 2.3-2.7 2.5-3.4 1.1-7.8-2.9-9.7-5.3l-6.7 5.7L9 33l-3.2 2.3c-.8.4.1-1-.6-.6-.9.5-1.2 2-2.5 1.2-.2.9 1.2.7 1.2 1-1 1.5-3.8 2-3.8-.3 0-3.3 9.2-10.1 11.4-12.7 1-.4 2.6.5 3.5.5.7 0 1.4-.4 2.2-.2 1.5.4 4.5 3.4 6.2 4 2 .6 2.8-.3 4.3-1.4 2.5-1.6 4.8-3.8 7.3-5.5 2-1.5 9.2-5.4 10.3-7.4 1.7-3 2.1-8.6 3.6-12 .2-.5.4-1 1-1.4 1.7 4.8.7 10.4 1 15.5 0 2.4.1 6.1.5 8.4.2.8 1 2.1 1 2.3 0 .2-.4.6-.4 1.2-.1 1.2.3 2.3.3 3.5v3.5c0 .3.2 1-.3 1-.2-1.7.2-3.8 0-5.4Zm-.9-5.4L49.7 7.2c-.7 1.2-1 2.7-1.5 4l-.6 2.3c-1.2 4.2-2 8.5-3 12.8 2.3-.6 4-1.3 6.4-1.2Zm34.5 5.1c.3-2.7 1.6-5.6 2-8.2l-3.8 2c-1.3 1.9-6.3 5-8.4 4.9-2.1-.1-4-1.6-5.8-2.3-2.2 1.2-7.4 10-10.2 5.8-.4-.6-1.4-3.3-1.3-4 0-1 2.6-2.2 3.3-3.2l.3.5 5.9-5.7c5.5.1 5.4 5.8 11.7 3.4 2-.8 8.6-5 10.2-4.8 2.2.2 0 2.7-.3 3.4l-1.6 5-2 7.7v-4.5Zm27.3-6.2 7.2.6c0 .5-.7.3-1 .3-.8 0-1.5-.3-2-.3-1.3 0-2.6.5-4 .3-.3.2 2.4 6.2 2.4 7.4 0 .4-1.3 3.8-1.6 3.8-.6-.2-.6-1-.9-1.3-.3-.4-1-.6-1.4-1.3-.8-1.3-2.3-8.2-2.7-8.4-1.5.1-3 .4-4.5.7-1.3.3-6.1 1.2-7 1.7-.4.2-.5 1-1 1.3-.7.3-1.6 0-2.1.3-.4.2-.9 3.7-2.6 3.6-.4-.5 1.6-3.8 1.6-4.5.1-.8-.5-1.9 0-2.8.3-.5 2.6-.7 3-.9.4-.2 3.4-4 4.4-4.7 1.5-1.3 3-2.8 5.2-2.5.6-1.7.2-4.5 3-3.7 1.7.5 3.3 8.5 4 10.4Zm-7.3-5-.1-1a19.6 19.6 0 0 0-7.1 5.8h1.4l-.9 1 9.6-1.1-1-5-1.9.4Z"></path>
        </svg>
      </div>

      <nav className='no-print'>
        <Link href='/'>Dinner</Link> | 
        <Link href='/dessert-menu'>Dessert</Link> | 
        <Link href='/drinks'>Drinks</Link> | 
        <Link href='/sake' style={{textDecoration:'underline',cursor:'default'}}>Sake</Link>
      </nav>

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
            <h2>SAKE</h2>


        

            <div className='sake-section'>
                <h3>NIGORI</h3>

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
                                <span className='sake-description'>Amanoto Heaven's Door Tokubetsu <span className='typo'>Junmai</span>, Akita</span>
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
                                <span className='sake-description'>Amanoto Heaven's Door Tokubetsu <span className='typo'>Junmai</span> Namazake, Akita</span>
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
                                <span className='sake-description'>Shizuku Droplets <span className='typo'>Junmai</span>, New York</span>
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



            </div>{/* .sake-section */}
        
            <div className='sake-section'>
                <h3>JUMAI DAIGINJO</h3>


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




            </div>{/* .sake-section */}
        

        
        
            <div className='sake-section'>
                <h3>JUMAI GINJO</h3>


                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Imada
                        </div>{/* .sake-producer-name */}

                        <div className='sake'>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left typo'>3210</span>
                                <span className='sake-description'>
                                    Moon on the Water <span className='typo'>Junmai Ginjo</span>, Hiroshima
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile typo'>3210</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>195</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}

                        <div className='sake'>
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
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}






            </div>{/* .sake-section */}
        
        
            <div className='sake-section'>
                <h3>SPECIALTY</h3>


                    <div className='sake-producer'>    
                        <div className='sake-producer-name'><span className='bin-left'></span>
                            Masuda
                        </div>{/* .sake-producer-name */}

                        <div className='sake'>
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
                                    Iwa 5 Assemblage 5 <span className='typo'>Junmai Daiginjo</span>, Toyama
                                </span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>4005</span>
                                <span className='sake-size'>720 ml</span>
                                <span className='sake-price'>750</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    </div>{/* .sake-producer */}




            </div>{/* .sake-section */}





        </div>{/* .sake-content */}
        
        <footer></footer>
      
      
      
      
      </div>{/* .letter-paper .sake-page */}

      <br className='no-print' />



























    {/* .webpage */}
    </div>        
    )
}
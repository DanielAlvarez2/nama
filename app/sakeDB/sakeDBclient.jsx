'use client'
import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter';
import {useState} from 'react'

export default function SakePage(props){

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

    const [previousProducer, setPreviousProducer] = useState('')

    let currentProducer = ''


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
            style={{height:'auto'}}
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

                {currentProducer = ''}
                {
                  props.allSakes.filter(sake=>sake.section == 'Sparkling').map(sake=>

                      <div className='sake-producer' key={sake._id}>    
                        
                            {
                              sake.producer != currentProducer && 
                                <div className='sake-producer-name'>
                                    <span className='bin-left'></span>
                                    <span style={{fontWeight:'900'}} dangerouslySetInnerHTML={{__html:(currentProducer = sake.producer)}}></span>
                                </div>
                            }{
                                
                            // setCurrentProducer(sake.producer)
                            }
                        {/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    `${sake.section}`,
                                                                    `${sake.producer}`,
                                                                    `${sake.bin}`,
                                                                    `${sake.size}`,
                                                                    `${sake.price}`,
                                                                    `${sake.name}`,
                                                                    `${sake.cloudinary_secure_url}`
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>{sake.bin}</span>
                                <span className='sake-description' dangerouslySetInnerHTML={{__html:sake.name}}></span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>{sake.bin}</span>
                                <span className='sake-size' dangerouslySetInnerHTML={{__html:sake.size}}></span>
                                <span className='sake-price'>{sake.price}</span>
                                <span className='sake-abv'>{sake.abv}%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    {/* .sake-producer */}                                                                       
                    </div>

                  )
                }

           
            </div>{/* .sake-section */}
        

            <div className='sake-section'>
                <h3>NIGORI</h3>

                {currentProducer = ''}
                {
                  props.allSakes.filter(sake=>sake.section == 'Nigori').map(sake=>

                      <div className='sake-producer' key={sake._id}>    
                        
                            {
                              sake.producer != currentProducer && 
                                <div className='sake-producer-name'>
                                    <span className='bin-left'></span>
                                    <span style={{fontWeight:'900'}} dangerouslySetInnerHTML={{__html:(currentProducer = sake.producer)}}></span>
                                </div>
                            }{
                                
                            // setCurrentProducer(sake.producer)
                            }
                        {/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    `${sake.section}`,
                                                                    `${sake.producer}`,
                                                                    `${sake.bin}`,
                                                                    `${sake.size}`,
                                                                    `${sake.price}`,
                                                                    `${sake.name}`,
                                                                    `${sake.cloudinary_secure_url}`
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>{sake.bin}</span>
                                <span className='sake-description' dangerouslySetInnerHTML={{__html:sake.name}}></span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>{sake.bin}</span>
                                <span className='sake-size' dangerouslySetInnerHTML={{__html:sake.size}}></span>
                                <span className='sake-price'>{sake.price}</span>
                                <span className='sake-abv'>{sake.abv}%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    {/* .sake-producer */}                                                                       
                    </div>

                  )
                }





            </div>{/* .sake-section */}
        
        
            <div className='sake-section'>
                <h3>JUNMAI</h3>

                {currentProducer = ''}
                {
                  props.allSakes.filter(sake=>sake.section == 'Junmai').map(sake=>

                      <div className='sake-producer' key={sake._id}>    
                        
                            {
                              sake.producer != currentProducer && 
                                <div className='sake-producer-name'>
                                    <span className='bin-left'></span>
                                    <span style={{fontWeight:'900'}} dangerouslySetInnerHTML={{__html:(currentProducer = sake.producer)}}></span>
                                </div>
                            }{
                                
                            // setCurrentProducer(sake.producer)
                            }
                        {/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    `${sake.section}`,
                                                                    `${sake.producer}`,
                                                                    `${sake.bin}`,
                                                                    `${sake.size}`,
                                                                    `${sake.price}`,
                                                                    `${sake.name}`,
                                                                    `${sake.cloudinary_secure_url}`
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>{sake.bin}</span>
                                <span className='sake-description' dangerouslySetInnerHTML={{__html:sake.name}}></span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>{sake.bin}</span>
                                <span className='sake-size' dangerouslySetInnerHTML={{__html:sake.size}}></span>
                                <span className='sake-price'>{sake.price}</span>
                                <span className='sake-abv'>{sake.abv}%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    {/* .sake-producer */}                                                                       
                    </div>

                  )
                }





            </div>{/* .sake-section */}




            <div className='sake-section'>
                <h3>DAIGINJO</h3>

                {currentProducer = ''}
                {
                  props.allSakes.filter(sake=>sake.section == 'Daiginjo').map(sake=>

                      <div className='sake-producer' key={sake._id}>    
                        
                            {
                              sake.producer != currentProducer && 
                                <div className='sake-producer-name'>
                                    <span className='bin-left'></span>
                                    <span style={{fontWeight:'900'}} dangerouslySetInnerHTML={{__html:(currentProducer = sake.producer)}}></span>
                                </div>
                            }{
                                
                            // setCurrentProducer(sake.producer)
                            }
                        {/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    `${sake.section}`,
                                                                    `${sake.producer}`,
                                                                    `${sake.bin}`,
                                                                    `${sake.size}`,
                                                                    `${sake.price}`,
                                                                    `${sake.name}`,
                                                                    `${sake.cloudinary_secure_url}`
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>{sake.bin}</span>
                                <span className='sake-description' dangerouslySetInnerHTML={{__html:sake.name}}></span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>{sake.bin}</span>
                                <span className='sake-size' dangerouslySetInnerHTML={{__html:sake.size}}></span>
                                <span className='sake-price'>{sake.price}</span>
                                <span className='sake-abv'>{sake.abv}%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    {/* .sake-producer */}                                                                       
                    </div>

                  )
                }
                    
            </div>{/* .sake-section */}
        













            <div className='sake-section'>
                <h3>JUNMAI DAIGINJO</h3>

                {currentProducer = ''}
                {
                  props.allSakes.filter(sake=>sake.section == 'Junmai Daiginjo').map(sake=>

                      <div className='sake-producer' key={sake._id}>    
                        
                            {
                              sake.producer != currentProducer && 
                                <div className='sake-producer-name'>
                                    <span className='bin-left'></span>
                                    <span style={{fontWeight:'900'}} dangerouslySetInnerHTML={{__html:(currentProducer = sake.producer)}}></span>
                                </div>
                            }{
                                
                            // setCurrentProducer(sake.producer)
                            }
                        {/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    `${sake.section}`,
                                                                    `${sake.producer}`,
                                                                    `${sake.bin}`,
                                                                    `${sake.size}`,
                                                                    `${sake.price}`,
                                                                    `${sake.name}`,
                                                                    `${sake.cloudinary_secure_url}`
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>{sake.bin}</span>
                                <span className='sake-description' dangerouslySetInnerHTML={{__html:sake.name}}></span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>{sake.bin}</span>
                                <span className='sake-size' dangerouslySetInnerHTML={{__html:sake.size}}></span>
                                <span className='sake-price'>{sake.price}</span>
                                <span className='sake-abv'>{sake.abv}%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    {/* .sake-producer */}                                                                       
                    </div>

                  )
                }
                    
            </div>{/* .sake-section */}
        











            <div className='sake-section'>
                <h3>GINJO</h3>

                {currentProducer = ''}
                {
                  props.allSakes.filter(sake=>sake.section == 'Ginjo').map(sake=>

                      <div className='sake-producer' key={sake._id}>    
                        
                            {
                              sake.producer != currentProducer && 
                                <div className='sake-producer-name'>
                                    <span className='bin-left'></span>
                                    <span style={{fontWeight:'900'}} dangerouslySetInnerHTML={{__html:(currentProducer = sake.producer)}}></span>
                                </div>
                            }{
                                
                            // setCurrentProducer(sake.producer)
                            }
                        {/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    `${sake.section}`,
                                                                    `${sake.producer}`,
                                                                    `${sake.bin}`,
                                                                    `${sake.size}`,
                                                                    `${sake.price}`,
                                                                    `${sake.name}`,
                                                                    `${sake.cloudinary_secure_url}`
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>{sake.bin}</span>
                                <span className='sake-description' dangerouslySetInnerHTML={{__html:sake.name}}></span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>{sake.bin}</span>
                                <span className='sake-size' dangerouslySetInnerHTML={{__html:sake.size}}></span>
                                <span className='sake-price'>{sake.price}</span>
                                <span className='sake-abv'>{sake.abv}%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    {/* .sake-producer */}                                                                       
                    </div>

                  )
                }
                    
            </div>{/* .sake-section */}
        















            <div className='sake-section'>
                <h3>JUNMAI GINJO</h3>

                {currentProducer = ''}
                {
                  props.allSakes.filter(sake=>sake.section == 'Junmai Ginjo').map(sake=>

                      <div className='sake-producer' key={sake._id}>    
                        
                            {
                              sake.producer != currentProducer && 
                                <div className='sake-producer-name'>
                                    <span className='bin-left'></span>
                                    <span style={{fontWeight:'900'}} dangerouslySetInnerHTML={{__html:(currentProducer = sake.producer)}}></span>
                                </div>
                            }{
                                
                            // setCurrentProducer(sake.producer)
                            }
                        {/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    `${sake.section}`,
                                                                    `${sake.producer}`,
                                                                    `${sake.bin}`,
                                                                    `${sake.size}`,
                                                                    `${sake.price}`,
                                                                    `${sake.name}`,
                                                                    `${sake.cloudinary_secure_url}`
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>{sake.bin}</span>
                                <span className='sake-description' dangerouslySetInnerHTML={{__html:sake.name}}></span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>{sake.bin}</span>
                                <span className='sake-size' dangerouslySetInnerHTML={{__html:sake.size}}></span>
                                <span className='sake-price'>{sake.price}</span>
                                <span className='sake-abv'>{sake.abv}%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    {/* .sake-producer */}                                                                       
                    </div>

                  )
                }
                    
            </div>{/* .sake-section */}
        
















            <div className='sake-section'>
                <h3>SPECIALTY</h3>

                {currentProducer = ''}
                {
                  props.allSakes.filter(sake=>sake.section == 'Specialty').map(sake=>

                      <div className='sake-producer' key={sake._id}>    
                        
                            {
                              sake.producer != currentProducer && 
                                <div className='sake-producer-name'>
                                    <span className='bin-left'></span>
                                    <span style={{fontWeight:'900'}} dangerouslySetInnerHTML={{__html:(currentProducer = sake.producer)}}></span>
                                </div>
                            }{
                                
                            // setCurrentProducer(sake.producer)
                            }
                        {/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    `${sake.section}`,
                                                                    `${sake.producer}`,
                                                                    `${sake.bin}`,
                                                                    `${sake.size}`,
                                                                    `${sake.price}`,
                                                                    `${sake.name}`,
                                                                    `${sake.cloudinary_secure_url}`
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>{sake.bin}</span>
                                <span className='sake-description' dangerouslySetInnerHTML={{__html:sake.name}}></span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>{sake.bin}</span>
                                <span className='sake-size' dangerouslySetInnerHTML={{__html:sake.size}}></span>
                                <span className='sake-price'>{sake.price}</span>
                                <span className='sake-abv'>{sake.abv}%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    {/* .sake-producer */}                                                                       
                    </div>

                  )
                }
                    
            </div>{/* .sake-section */}
        

















            <div className='sake-section'>
                <h3>SWEET</h3>

                {currentProducer = ''}
                {
                  props.allSakes.filter(sake=>sake.section == 'Sweet').map(sake=>

                      <div className='sake-producer' key={sake._id}>    
                        
                            {
                              sake.producer != currentProducer && 
                                <div className='sake-producer-name'>
                                    <span className='bin-left'></span>
                                    <span style={{fontWeight:'900'}} dangerouslySetInnerHTML={{__html:(currentProducer = sake.producer)}}></span>
                                </div>
                            }{
                                
                            // setCurrentProducer(sake.producer)
                            }
                        {/* .sake-producer-name */}
                        <div className='sake' onClick={()=>openModal(
                                                                    `${sake.section}`,
                                                                    `${sake.producer}`,
                                                                    `${sake.bin}`,
                                                                    `${sake.size}`,
                                                                    `${sake.price}`,
                                                                    `${sake.name}`,
                                                                    `${sake.cloudinary_secure_url}`
                                                                    )}>
                            <div className='sake-flexbox-left'>
                                <span className='bin-left'>{sake.bin}</span>
                                <span className='sake-description' dangerouslySetInnerHTML={{__html:sake.name}}></span>
                            </div>{/* .sake-flexbox-left */}
                            <div className='sake-flexbox-right'>
                                <span className='bin-mobile'>{sake.bin}</span>
                                <span className='sake-size' dangerouslySetInnerHTML={{__html:sake.size}}></span>
                                <span className='sake-price'>{sake.price}</span>
                                <span className='sake-abv'>{sake.abv}%abv</span>
                            </div>{/* .sake-flexbox-right */}
                        </div>{/* .sake */}
                    {/* .sake-producer */}                                                                       
                    </div>

                  )
                }
                    
            </div>{/* .sake-section */}
        




        </div>{/* .sake-content */}
        
      
      
      
      
      </div>{/* .letter-paper .sake-page */}

      <br className='no-print' />

                        

























































    <NavbarFooter page='sake' />                                                                



    {/* .webpage */}
    </div>        
    )
}
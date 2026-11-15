'use client'

import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function SakeABVclient(props){

    function openModal(section,producer,bin,size,price,description,image,staffInfo,abv){
        document.querySelector('#sake-modal').style.display = 'grid'
        document.querySelector('#sake-modal-section').innerText = section
        document.querySelector('#sake-modal-producer-name').innerHTML = producer
        document.querySelector('.sake-modal-bin-left').innerText = bin
        document.querySelector('.sake-modal-bin-mobile').innerText = bin
        document.querySelector('.sake-modal-size').innerHTML = size
        document.querySelector('.sake-modal-price').innerText = price
        document.querySelector('.sake-modal-staff-info').innerText = staffInfo
        document.querySelector('.sake-modal-description').innerHTML = description
        document.querySelector('#sake-modal-image').src = image
        document.querySelector('.sake-modal-abv').innerHTML = `${abv}% abv`
    }
    function closeModal(){
        document.querySelector('#sake-modal').style.display = 'none'
        document.querySelector('#sake-modal-section').innerText = ''
        document.querySelector('#sake-modal-producer-name').innerHTML = ''
        document.querySelector('.sake-modal-bin-left').innerText = ''
        document.querySelector('.sake-modal-bin-mobile').innerText = ''
        document.querySelector('.sake-modal-size').innerHTML = ''
        document.querySelector('.sake-modal-price').innerText = ''
        document.querySelector('.sake-modal-staff-info').innerText = ''
        document.querySelector('.sake-modal-description').innerHTML = ''
        document.querySelector('#sake-modal-image').src = ''
        document.querySelector('.sake-modal-abv').innerHTML = ``
    }

  return(
    <>
    {/* <h1>Sake ABV</h1> */}
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
                                      
                                      <div className='sake'>
                                          <div className='sake-flexbox-left'>
                                              <span className='bin-left sake-modal-bin-left'></span>
                                              <span className='sake-modal-abv sake-description sake-modal-description'></span>
                                          </div>{/* .sake-flexbox-left */}
                                      </div>{/* .sake */}
      
                                      <br/>
      
                                      <div className='sake-modal-staff-info'></div>
                                  </div>{/* .sake-producer */}
                          </div>{/* .sake-section */}
      
                      </div>{/* .sake-modal-info */}
                  </div>{/* .sake-modal-content */}
              </div>{/* .sake-modal */}

    <div style={{ position:'relative',
                  minWidth:'100%',
                  minHeight:'2000px',
                  }}>

      
      <div style={{height:'1px',background:'red',position:'absolute',bottom:'1550px',width:'6250px'}}></div>

      {props.allSakes.filter(sake=>sake.sequence && !sake.eightySix).map(sake=>
                              <div  key={sake._id}
                                    className="sake-abv-chart" 
                                    onClick={()=>openModal( sake.section.toUpperCase(),
                                                            sake.producer,
                                                            sake.bin,
                                                            sake.size,
                                                            sake.price,
                                                            sake.name,
                                                            sake.cloudinary_secure_url,
                                                            sake.staffInfo,
                                                            sake.abv)}
                                    style={{
                                            cursor:'pointer',
                                            position:'absolute',
                                            bottom:`${sake.abv*100}px`,
                                            left:`${sake.price*2}px`,
                                            border:'2px solid black'}}
                              >
                                <img src={sake.cloudinary_secure_url} style={{width:'30px'}} />
                              </div>
                            )}
    </div>
    </>

  )
}
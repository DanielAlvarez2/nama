'use client'

import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'
import {useRouter} from 'next/navigation'
import { useEffect } from 'react';

export default function DinnerClient(props) {

    const router = useRouter()
    useEffect(()=> router.refresh(),[])
    function openDinnerModal(name1,
                              allergies,
                              description1,
                              price,
                              upgrade1,
                              upgrade2,
                              upgrade3,
                              price1,
                              price2,
                              price3,
                              typos,
                              staffInfo,
                              img_src
    ){
      document.querySelector('#modal-dinner-name1').innerHTML = name1
      document.querySelector('#modal-dinner-description1').innerHTML = description1
      document.querySelector('#modal-dinner-upgrade1').innerHTML = upgrade1
      document.querySelector('#modal-dinner-upgrade2').innerHTML = upgrade2
      document.querySelector('#modal-dinner-upgrade3').innerHTML = upgrade3
      document.querySelector('#modal-dinner-price1').innerHTML = price1
      document.querySelector('#modal-dinner-price2').innerHTML = price2
      document.querySelector('#modal-dinner-price3').innerHTML = price3
      document.querySelector('#modal-dinner-typos').innerHTML = typos ? typos : ''
      document.querySelector('#modal-dinner-staff-info').innerHTML = staffInfo
      document.querySelector('#modal-dinner-img').src = img_src ? img_src : `no-image.jpg?v={Date.now()}`
      document.querySelector('#modal-dinner-price').innerHTML = price
      document.querySelector('#modal-dinner-allergies').innerHTML = allergies ? `(${allergies})` : ''
      document.querySelector('#modal-dinner').style.display = 'grid'
    }//openDinnerModal()



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
                produce.               
              </div>

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


                  {
                    props.allItems.filter(item=>item.section == 'Soup').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                      </div>
                    )
                  }


              




              </div>
            </div>

            <div className="section">
              <div className="left-column">Small Plates<br/>前菜</div>
              <div className="right-column">



                  {
                    props.allItems.filter(item=>item.section == 'Small Plates').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                      </div>
                    )
                  }



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


                  {
                    props.allItems.filter(item=>item.section == 'Salad').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                      </div>
                    )
                  }





              </div>


            </div>



            <div className="section">
              <div className="left-column">Fried<br/>揚げ物</div>

              <div className="right-column">

                  {
                    props.allItems.filter(item=>item.section == 'Fried').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                      </div>
                    )
                  }




              </div>
            </div>

            <div className="section">
              <div className="left-column">Fish<br/>魚</div>
              <div className="right-column">


                  {
                    props.allItems.filter(item=>item.section == 'Fish').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                      </div>
                    )
                  }




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

                  {
                    props.allItems.filter(item=>item.section == 'Meat').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                      </div>
                    )
                  }







              </div>


            </div>

            <div className="section">
              <div className="left-column">Market<br/>野菜</div>
              <div className="right-column">

                  {
                    props.allItems.filter(item=>item.section == 'Market').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                      </div>
                    )
                  }

              </div>


            </div>
























            <div className="section">
              <div className="left-column">Maki<br/>巻物</div>
              <div className="right-column sushi-rolls">

                  {
                    props.allItems.filter(item=>item.section == 'Maki').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                        <div className='typo'>{data.typos}</div>
                      </div>
                    )
                  }



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

                  {
                    props.allItems.filter(item=>item.section == 'Sushi Rolls').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                        <div className='typo'>{data.typos}</div>
                      </div>
                    )
                  }


              </div>{/* .right-column */}
            </div>{/* .section */}

            <div className="section">
              <div className="left-column">Sashimi & Nigiri<br/>刺⾝ / にぎり</div>

              <div className="right-column">

                  {
                    props.allItems.filter(item=>item.section == 'Sashimi & Nigiri').map(data=>
                      <div  className="dinner-menu-item"
                            style={{marginBottom:'2px'}}
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                        <div className='typo'>{data.typos}</div>
                      </div>
                    )
                  }








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

                  {
                    props.allItems.filter(item=>item.section == 'Rice').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                        <div className='typo'>{data.typos}</div>
                      </div>
                    )
                  }




              </div>
            </div>



















            
            <div className="section">
              <div className="left-column">Noodles<br/>麺類</div>

              <div className="right-column">

                  {
                    props.allItems.filter(item=>item.section == 'Noodles').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1">{data.description1}</div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                        <div className='typo'>{data.typos}</div>
                      </div>
                    )
                  }








              </div>
            </div>

















            <div className="section">
              <div className="left-column">Hot Pot<br/>鍋</div>

              <div className="right-column">

                  {
                    props.allItems.filter(item=>item.section == 'Hot Pot').map(data=>
                      <div  className="dinner-menu-item"
                            key={data._id}
                            onClick={()=>openDinnerModal(                              
                              data.name1,
                              data.allergies,
                              data.description1,
                              data.price,
                              data.upgrade1,
                              data.upgrade2,
                              data.upgrade3,
                              data.price1,
                              data.price2,
                              data.price3,
                              data.typos,
                              data.staffInfo,
                              data.cloudinary_secure_url
                            )}
                      >
                        <div className="name-price">
                          <span>
                            <span className="name">{data.name1}</span>
                            {data.allergies && <span className="allergies">({data.allergies})</span>}
                          </span>
                          <span className="price">{data.price}</span>
                        </div>
                        <div className="description1" dangerouslySetInnerHTML={{__html:data.description1}}></div>
                        {/* <div className="description1">{data.description1}</div> */}
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade1}</span>
                          <span>{data.price1}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade2}</span>
                          <span>{data.price2}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                          <span>{data.upgrade3}</span>
                          <span>{data.price3}</span>
                        </div>
                        <div className='typo'>{data.typos}</div>
                      </div>
                    )
                  }

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
            <div className='tasting-right-micros'>Hassun</div>
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
            <div className='tasting-right-micros'>Hand Roll<br/>Miso Soup<br/>Tamago</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>5th Course</div>
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
              Hana/Flower Tasting $388 (For 1)            
            </div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>Chawanmushi (Hot, Individual)<br/>Katsuo Tataki (3pc)</div>
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
            <div className='tasting-right-micros'>Gindara (1pc)<br/>Miyazaki Steak or Sukiyaki</div>
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
              Hana/Flower Tasting $388 (For 2)
            </div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>Chawanmushi (Hot, Individual)<br/>Katsuo Tataki (6pc)</div>
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
            <div className='tasting-right-micros'>Lobster Uni<br/>Miyazaki Steak or Sukiyaki</div>
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
              Hana/Flower Tasting $388 (For 3)
            </div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>Chawanmushi (Hot, Individual)<br/>Katsuo Tataki (6pc)</div>
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
            <div className='tasting-right-micros'>Kamo Miso Yaki<br/>Lobster Uni<br/>Miyazaki Steak or Sukiyaki</div>
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
              Hana/Flower Tasting $388 (For 5)
            </div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>1st Course</div>
            <div className='tasting-right-micros'>2x Aigamo (5pc)<br/>2x Katsuo Tataki (5pc)<br/>2x Kue Usuzukuri (5pc)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>2nd Course</div>
            <div className='tasting-right-micros'>Caviar Soba (Individual)<br/>2x Tempura Moriawase (5pc Ebi)</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>3rd Course</div>
            <div className='tasting-right-micros'>Pre Platter (Individual)<br/>Aman NY Roll<br/>Lobster Roll<br/>Wagyu Roll</div>
          </div>
          <div className='tasting-row'>
            <div className='tasting-left-micros'>4th Course</div>
            <div className='tasting-right-micros'>2x Yakimeshi<br/>Gindara (5pc)<br/>2x Miyazaki Steak or Sukiyaki</div>
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












































    <NavbarFooter page='dinner' />


    <div id="modal-dinner" className='modal'>
      <div>
          <AiTwotoneCloseCircle className="close-button" onClick={closeModals} />    
          <div className='modal-content'>
          
          <div>
            <img id='modal-dinner-img' />
          </div>      
          <div className='modal-text'>
          
              <br/><br/>
              MENU DESCRIPTION:<br/><br/>
              <div className="right-column">
                          <div className="name-price">
                            <span>
                              <span className="name" id='modal-dinner-name1'></span>
                              <span className="allergies" id='modal-dinner-allergies'></span>
                            </span>
                            <span className="price" id='modal-dinner-price'></span>
                          </div>
                          <div className="description1" id='modal-dinner-description1'></div>
                          <div style={{display:'flex',justifyContent:'space-between'}}>
                            <span id='modal-dinner-upgrade1'></span>
                            <span id='modal-dinner-price1'></span>
                          </div>
                          <div style={{display:'flex',justifyContent:'space-between'}}>
                            <span id='modal-dinner-upgrade2'></span>
                            <span id='modal-dinner-price2'></span>
                          </div>
                          <div style={{display:'flex',justifyContent:'space-between'}}>
                            <span id='modal-dinner-upgrade3'></span>
                            <span id='modal-dinner-price3'></span>
                          </div>
                          <div id='modal-dinner-typos' className='typo'></div>
                          <br/>
                          <hr/>
                          <br/>
                            <div id='modal-dinner-staff-info' style={{whiteSpace:'pre-line'}}></div>
                          <br/><br/>
              </div>
            </div>{/* .modal-text */}
          </div>{/* .modal-content */}      
      </div>
    </div>{/* #modal-dinner */}



    {/* .webpage */}
    </div>    
  )
}



'use client'
import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import DessertForm from './DessertForm.jsx';
import DessertItem from './DessertItem.jsx';
import DessertNavbar from './DessertNavbar.jsx';
import DessertNavbarTop from './DessertNavbarTop.jsx';
import DessertNavbarBottom from './DessertNavbarBottom.jsx';
import {addDessert,editDessert} from '@/app/actions.js'
import {addDessertWine,editDessertWine} from '@/app/actions.js'
import DessertWineForm from './DessertWineForm.jsx';
import NavbarMenuManager from '@/components/NavbarMenuManager.jsx';
import NavbarFooterMenuManager from '@/components/NavbarFooterMenuManager.jsx';
import {useState} from 'react'

export default function DessertClient(props){

    const [dessertPage, setDessertPage] = useState('Desserts')

    return(
            <div className='webpage'>

              <NavbarMenuManager page='dessert' />
              <DessertNavbarTop dessertPage={dessertPage} setDessertPage={setDessertPage} />

              {
                dessertPage == 'Desserts' &&
              <div id='dessert-page-desserts'>
                <div className="small-paper" style={{height:'auto'}}>
                  
                    <div className="menu-items">
                      <div className="section section-dessert">
                        <div  className="left-column"
                              id='desserts-section'
                        >
                          Desserts<br/>デザート
                        </div>

                        <div className="right-column">
                        
                          {props.desserts.map(data=>{
                            return(
                              <div key={data._id}>
                                <DessertItem  id={data._id.toString()}
                                              name={data.name} 
                                              allergies={data.allergies}
                                              description1={data.description1}
                                              description2={data.description2}
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.maxSequence}
                                              cloudinary_secure_url={data.cloudinary_secure_url}
                                              cloudinary_public_id={data.cloudinary_public_id}
                                />
                                
                              </div>
                            )
                          })}


                        </div>{/* .right-column */}
                      </div>{/* .section */}


                    </div>{/* .menu-items */}


                </div>{/* .small-paper */}

                <br/>

                <DessertForm  addDessert={addDessert}
                                editDessert={editDessert}
                />

              {/* #dessert-page-desserts */}
              </div>

              }












              {
                dessertPage == 'Dessert Wines' &&

              <div id='dessert-page-dessert-wines'>

                <div className="small-paper" style={{height:'auto'}}>
                  
                    <div className="menu-items">
                      <div className="section section-dessert">
                        <div  className="left-column"
                              id='desserts-section'
                        >
                          Dessert & Fortified Wines By The Glass<br/>
                          デザートワイン
                        </div>

                        <div className="right-column">
                        
                          {props.desserts.map(data=>{
                            return(
                              <div key={data._id}>
                                <DessertItem  id={data._id.toString()}
                                              name={data.name} 
                                              allergies={data.allergies}
                                              description1={data.description1}
                                              description2={data.description2}
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.maxSequence}
                                              cloudinary_secure_url={data.cloudinary_secure_url}
                                              cloudinary_public_id={data.cloudinary_public_id}
                                />
                                
                              </div>
                            )
                          })}


                        </div>{/* .right-column */}
                      </div>{/* .section */}


                    </div>{/* .menu-items */}


                </div>{/* .small-paper */}
                <br/>
                <DessertWineForm  addDessertWine={addDessertWine}
                                  editDessertWine={editDessertWine}                    
                                  />

              {/* #dessert-page-dessert-wines */}
              </div>
              }

              <DessertNavbarBottom />
              <NavbarFooterMenuManager page='dessert' />

            </div>

    )
}
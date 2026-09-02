'use client'
import DessertForm from './DessertForm.jsx';
import DessertItem from './DessertItem.jsx';
import DessertWineItem from './DessertWineItem.jsx';
import DessertMenuCoffeesTeasItem from './DessertMenuCoffeesTeasItem.jsx';
import DessertNavbarTop from './DessertNavbarTop.jsx';
import {addMenuItem,editMenuItem} from '@/app/actions.js'
import {addDessertWine,editDessertWine} from '@/app/actions.js'
import {addDessertMenuCoffeeTea,editDessertMenuCoffeeTea} from '@/app/actions.js'
import DessertWineForm from './DessertWineForm.jsx';
import DessertMenuCoffeesTeasForm from './DessertMenuCoffeesTeasForm.jsx'
import NavbarMenuManager from '@/components/NavbarMenuManager.jsx';
import NavbarFooterMenuManager from '@/components/NavbarFooterMenuManager.jsx';
import {useState} from 'react'

export default function DessertClient2(props){

    const [dessertPage, setDessertPage] = useState('Desserts')
    const desserts = props.menuItems.filter(item=>item.menu == 'dessert' && item.section == 'desserts')
    const maxSequenceDesserts = desserts.length ? desserts[desserts.length - 1].sequence : 0

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
                        
                          {desserts.map(data=>{
                            return(
                              <div key={data._id}>
                                <DessertItem  id={data._id}
                                              name={data.name1} 
                                              allergies={data.allergies}
                                              description1={data.description1}
                                              description2={data.description2}
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={maxSequenceDesserts}
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

                <DessertForm  
                // addMemuItem={addMenuItem}
                              // editDessert={editDessert}
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
                        
                          {props.dessertWines.map(data=>{
                            return(
                              <div key={data._id}>
                                <DessertWineItem  id={data._id.toString()}
                                                  vintage={data.vintage} 
                                                  name1={data.name1} 
                                                  name2={data.name2} 
                                                  typos={data.typos}
                                                  price={data.price}
                                                  staffInfo={data.staffInfo}
                                                  sequence={data.sequence}
                                                  maxSequenceDessertWines={props.maxSequenceDessertWines}
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




















              {
                dessertPage == 'Coffee & Tea' &&

              <div id='dessert-page-dessert-wines'>

                <div className="small-paper" style={{height:'auto'}}>
                  
                    <div className="menu-items">
                      <div className="section section-dessert">
                        <div  className="left-column"
                              id='desserts-section'
                        >
                          Coffee & Tea<br/>
                          コーヒーと紅茶
                        </div>

                        <div className="right-column">
                        
                          {props.coffeesTeas.map(data=>{
                            return(
                              <div key={data._id}>
                                <DessertMenuCoffeesTeasItem id={data._id.toString()}                                                  
                                                            name={data.name} 
                                                            price={data.price}
                                                            sequence={data.sequence}
                                                            maxSequenceDessertMenuCoffeesTeas={props.maxSequenceDessertMenuCoffeesTeas}
                                />
                                
                              </div>
                            )
                          })}


                        </div>{/* .right-column */}
                      </div>{/* .section */}


                    </div>{/* .menu-items */}


                </div>{/* .small-paper */}
                <br/>
                <DessertMenuCoffeesTeasForm addDessertMenuCoffeeTea={addDessertMenuCoffeeTea}
                                            editDessertMenuCoffeeTea={editDessertMenuCoffeeTea}                    
                                  />

              {/* #dessert-page-dessert-wines */}
              </div>
              }








              {/* <DessertNavbarBottom dessertPage={dessertPage} setDessertPage={setDessertPage} /> */}
              <NavbarFooterMenuManager page='dessert' />

            </div>

    )
}
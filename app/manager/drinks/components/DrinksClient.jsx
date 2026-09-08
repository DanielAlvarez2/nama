'use client'

import NavbarMenuManager from '@/components/NavbarMenuManager';
import NavbarFooterMenuManager from '@/components/NavbarFooterMenuManager';
import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import CocktailForm from './CocktailForm.jsx'
import MocktailForm from './MocktailForm.jsx'
import BeerForm from './BeerForm.jsx'
import SakeForm from './SakeForm.jsx'
import ChampagneForm from './ChampagneForm.jsx'
import WhitesForm from './WhitesForm.jsx'
import RedsForm from './RedsForm.jsx'
import RoseForm from './RoseForm.jsx'
import WineItem from './WineItem.jsx'
import CoffeeItem from './CoffeeItem.jsx'
import CoffeeForm from './CoffeeForm.jsx'
import SakeItem from './SakeItem.jsx'
import BeerItem from './BeerItem.jsx'
import CocktailItem from './CocktailItem.jsx'
import MocktailItem from './MocktailItem.jsx'
import {useState} from 'react'

export default function DrinksClient(props){

    const [drinkPage, setDrinkPage] = useState('cocktails')

    function showModal(menuItem){
        document.querySelector(`#${menuItem}`).style.display = 'grid'
    }
    function closeModals(){
        document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
    }

    function handleDrinkPageUpdate(value){
      setDrinkPage(value)
    }

    return(
    <div className='webpage'>

      <NavbarMenuManager page='drinks' />

            <div style={{width:'100%',textAlign:'center'}}>
                <select onChange={(e)=>handleDrinkPageUpdate(e.target.value)}>
                    <option value='cocktails'>Cocktails</option>
                    <option value='mocktails'>Mocktails</option>
                    <option value='beer'>Beer</option>
                    <option value='sake'>Sake</option>
                    <option value='champagne'>Champagne</option>
                    <option value='whites'>White Wines</option>
                    <option value='rose'>Rosé Wine</option>
                    <option value='reds'>Red Wines</option>
                    <option value='coffee'>Coffee & Tea</option>
                </select>
            </div>
            <br/>





















      {
        drinkPage == 'cocktails' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">
                <span className='name'>Specialty Cocktails</span>
                <br/>
                スペシャルティカクテル
              </div>
                

              <div className="right-column">
              
                          {props.allDrinks.filter(item=>item.section == 'cocktails').map(data=>{
                            return(
                              <div key={data._id}>
                                <CocktailItem id={data._id}
                                              name1={data.name1} 
                                              description1={data.description1}
                                              description2={data.description2}
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allDrinks.filter(item=>item.section == data.section) ? props.allDrinks.filter(item=>item.section == data.section)[props.allDrinks.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      <br className='no-print' />

      <CocktailForm />
          
          </>
      }




















      {
        drinkPage == 'mocktails' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column"></div>
                <div><span className='name'>Non-Alcoholic Cocktails</span><br/>ノンアルコールカクテル</div>
                

              <div className="right-column">
              

                          {props.allDrinks.filter(item=>item.section == 'mocktails').map(data=>{
                            return(
                              <div key={data._id}>
                                <MocktailItem id={data._id}
                                              name1={data.name1} 
                                              description1={data.description1}
                                              description2={data.description2}
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allDrinks.filter(item=>item.section == data.section) ? props.allDrinks.filter(item=>item.section == data.section)[props.allDrinks.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      <br className='no-print' />

      <MocktailForm />
          
          </>
      }





















      {
        drinkPage == 'beer' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Beer<br/>ビール</div>                

              <div className="right-column">
              

                          {props.allDrinks.filter(item=>item.section == 'beer').map(data=>{
                            return(
                              <div key={data._id}>
                                <BeerItem id={data._id}
                                              name1={data.name1} 
                                              description1={data.description1}
                                              description2={data.description2}
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allDrinks.filter(item=>item.section == data.section) ? props.allDrinks.filter(item=>item.section == data.section)[props.allDrinks.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      <br className='no-print' />

      <BeerForm />
          
          </>
      }






















      {
        drinkPage == 'sake' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Sake by the Glass<br/>グラスでの酒</div>

              <div className="right-column">
              

                          {props.allDrinks.filter(item=>item.section == 'sake').map(data=>{
                            return(
                              <div key={data._id}>
                                <SakeItem id={data._id}
                                              name1={data.name1} 
                                              description1={data.description1}
                                              description2={data.description2}
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allDrinks.filter(item=>item.section == data.section) ? props.allDrinks.filter(item=>item.section == data.section)[props.allDrinks.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      <br className='no-print' />

      <SakeForm />
          
          </>
      }






















      {
        drinkPage == 'champagne' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Wines by the Glass<br/>グラスワイン</div>
              <div className="left-column">Champagne<br/>シャンパン</div>

              <div className="right-column">
              

                          {props.allDrinks.filter(item=>item.section == 'champagne').map(data=>{
                            return(
                              <div key={data._id}>
                                <WineItem id={data._id}
                                              vintage={data.vintage} 
                                              name1={data.name1} 
                                              name2={data.name2} 
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allDrinks.filter(item=>item.section == data.section) ? props.allDrinks.filter(item=>item.section == data.section)[props.allDrinks.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      <br className='no-print' />

      <ChampagneForm />
          
          </>
      }



















      {
        drinkPage == 'whites' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Wines by the Glass<br/>グラスワイン</div>
              <div className="left-column">White<br/>白ワイン</div>
              <div className="right-column">
              

                          {props.allDrinks.filter(item=>item.section == 'whites').map(data=>{
                            return(
                              <div key={data._id}>
                                <WineItem id={data._id}
                                              vintage={data.vintage} 
                                              name1={data.name1} 
                                              name2={data.name2} 
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allDrinks.filter(item=>item.section == data.section) ? props.allDrinks.filter(item=>item.section == data.section)[props.allDrinks.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      <br className='no-print' />

      <WhitesForm />
          
          </>
      }





















      {
        drinkPage == 'rose' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Wines by the Glass<br/>グラスワイン</div>
              <div className="left-column">Rosé<br/>ロゼワイン</div>

              <div className="right-column">
              

                          {props.allDrinks.filter(item=>item.section == 'rose').map(data=>{
                            return(
                              <div key={data._id}>
                                <WineItem id={data._id}
                                              vintage={data.vintage} 
                                              name1={data.name1} 
                                              name2={data.name2} 
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allDrinks.filter(item=>item.section == data.section) ? props.allDrinks.filter(item=>item.section == data.section)[props.allDrinks.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      <br className='no-print' />

      <RoseForm />
          
          </>
      }
























      {
        drinkPage == 'reds' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Wines by the Glass<br/>グラスワイン</div>
              <div className="left-column">Red<br/>赤ワイン</div>


              <div className="right-column">
              

                          {props.allDrinks.filter(item=>item.section == 'red').map(data=>{
                            return(
                              <div key={data._id}>
                                <WineItem id={data._id}
                                              vintage={data.vintage} 
                                              name1={data.name1} 
                                              name2={data.name2} 
                                              typos={data.typos}
                                              price={data.price}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allDrinks.filter(item=>item.section == data.section) ? props.allDrinks.filter(item=>item.section == data.section)[props.allDrinks.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      <br className='no-print' />

      <RedsForm />
          
          </>
      }

























      {
        drinkPage == 'coffee' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Coffee & Tea<br/>コーヒーとお茶</div>

              <div className="right-column">
              

                          {props.allDrinks.filter(item=>item.section == 'coffee').map(data=>{
                            return(
                              <div key={data._id}>
                                <CoffeeItem id={data._id}
                                              name1={data.name1} 
                                              price={data.price}
                                              sequence={data.sequence}
                                              maxSequence={props.allDrinks.filter(item=>item.section == data.section) ? props.allDrinks.filter(item=>item.section == data.section)[props.allDrinks.filter(item=>item.section == data.section).length - 1].sequence : 0}
                                />
                                
                              </div>
                            )
                          })}

              </div>{/* .right-column */}
            </div>{/* .section */}

          </div>{/* .menu-items */}

      </div>{/* .small-paper */}

      <br className='no-print' />

      <CoffeeForm />
          
          </>
      }
































      <br className='no-print' />
      <NavbarFooterMenuManager page='drinks' />

    </div>

    )
}
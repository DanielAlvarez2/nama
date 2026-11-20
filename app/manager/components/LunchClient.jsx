'use client'

import NavbarMenuManager from '@/components/NavbarMenuManager';
import NavbarFooterMenuManager from '@/components/NavbarFooterMenuManager';
import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import SoupForm from './SoupForm.jsx'
import LunchForm from './LunchForm.jsx'
import SmallPlatesForm from './SmallPlatesForm.jsx'
import DinnerItem from './DinnerItem.jsx'
import {useState} from 'react'

export default function LunchClient(props){

    const [lunchPage, setLunchPage] = useState('First Course')

    function handleLunchPageUpdate(value){
      setLunchPage(value)
    }

    return(
    <div className='webpage'>

      <NavbarMenuManager page='lunch' />

            <div style={{width:'100%',textAlign:'center'}}>
                <select onChange={(e)=>handleLunchPageUpdate(e.target.value)}>
                    <option value='First Course'>First Course</option>
                    <option value='Second Course'>Second Course</option>
                    <option value='Desserts'>Desserts</option>
                    <option value='Snacks'>Snacks</option>
                    <option value='Salad'>Salad</option>
                    <option value='Mains'>Mains</option>
                    <option value='Donburi'>Donburi</option>
                    <option value='Sashimi & Nigiri'>Sashimi & Nigiri</option>
                    <option value='Maki'>Maki</option>
                    <option value='Sushi Rolls'>Sushi Rolls</option>
                </select>
            </div>
            <br/>





















      {
        lunchPage == 'First Course' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
             <div className="left-column">First Course - Prix Fixe<br/>椀物</div>
                

              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'First Course').map(data=>{
                            return(
                              <div key={data._id}>
                                <DinnerItem   
                                              section={data.section}
                                              id={data._id}
                                              name1={data.name1} 
                                              allergies={data.allergies} 
                                              description1={data.description1}
                                              upgrade1={data.upgrade1}
                                              upgrade2={data.upgrade2}
                                              upgrade3={data.upgrade3}
                                              price={data.price}
                                              price1={data.price1}
                                              price2={data.price2}
                                              price3={data.price3}
                                              typos={data.typos}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allItems.filter(item=>item.section == data.section) ? props.allItems.filter(item=>item.section == data.section)[props.allItems.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      {/* <SoupForm /> */}
      <LunchForm section='First Course' />
          
          </>
      }























      {
        lunchPage == 'Second Course' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Second Course - Prix Fixe<br/>前菜</div>                

              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Second Course').map(data=>{
                            return(
                              <div key={data._id}>
                                <DinnerItem   
                                              section={data.section}
                                              id={data._id}
                                              name1={data.name1} 
                                              allergies={data.allergies} 
                                              description1={data.description1}
                                              upgrade1={data.upgrade1}
                                              upgrade2={data.upgrade2}
                                              upgrade3={data.upgrade3}
                                              price={data.price}
                                              price1={data.price1}
                                              price2={data.price2}
                                              price3={data.price3}
                                              typos={data.typos}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allItems.filter(item=>item.section == data.section) ? props.allItems.filter(item=>item.section == data.section)[props.allItems.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      {/* <SmallPlatesForm /> */}
      <LunchForm section='Second Course' />
          
          </>
      }















      {
        lunchPage == 'Desserts' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Desserts - Prix Fixe<br/>サラダ</div>
                

              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Desserts').map(data=>{
                            return(
                              <div key={data._id}>
                                <DinnerItem   
                                              section={data.section}
                                              id={data._id}
                                              name1={data.name1} 
                                              allergies={data.allergies} 
                                              description1={data.description1}
                                              upgrade1={data.upgrade1}
                                              upgrade2={data.upgrade2}
                                              upgrade3={data.upgrade3}
                                              price={data.price}
                                              price1={data.price1}
                                              price2={data.price2}
                                              price3={data.price3}
                                              typos={data.typos}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allItems.filter(item=>item.section == data.section) ? props.allItems.filter(item=>item.section == data.section)[props.allItems.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      <LunchForm section={'Desserts'} />
          
          </>
      }























      {
        lunchPage == 'Snacks' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Snacks<br/>揚げ物</div>                

              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Snacks').map(data=>{
                            return(
                              <div key={data._id}>
                                <DinnerItem   
                                              section={data.section}
                                              id={data._id}
                                              name1={data.name1} 
                                              allergies={data.allergies} 
                                              description1={data.description1}
                                              upgrade1={data.upgrade1}
                                              upgrade2={data.upgrade2}
                                              upgrade3={data.upgrade3}
                                              price={data.price}
                                              price1={data.price1}
                                              price2={data.price2}
                                              price3={data.price3}
                                              typos={data.typos}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allItems.filter(item=>item.section == data.section) ? props.allItems.filter(item=>item.section == data.section)[props.allItems.filter(item=>item.section == data.section).length - 1].sequence : 0}
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

      <LunchForm section={'Snacks'} />
          
          </>
      }
























      {
        lunchPage == 'Salad' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Salad<br/>魚</div>                        

              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Salad').map(data=>{
                            return(
                              <div key={data._id}>
                                <DinnerItem   
                                              section={data.section}
                                              id={data._id}
                                              name1={data.name1} 
                                              allergies={data.allergies} 
                                              description1={data.description1}
                                              upgrade1={data.upgrade1}
                                              upgrade2={data.upgrade2}
                                              upgrade3={data.upgrade3}
                                              price={data.price}
                                              price1={data.price1}
                                              price2={data.price2}
                                              price3={data.price3}
                                              typos={data.typos}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allItems.filter(item=>item.section == data.section) ? props.allItems.filter(item=>item.section == data.section)[props.allItems.filter(item=>item.section == data.section).length - 1].sequence : 0}
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
      <LunchForm section={'Salad'} />
          </>
      }



























      {
        lunchPage == 'Mains' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Mains<br/>肉</div>


              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Mains').map(data=>{
                            return(
                              <div key={data._id}>
                                <DinnerItem   
                                              section={data.section}
                                              id={data._id}
                                              name1={data.name1} 
                                              allergies={data.allergies} 
                                              description1={data.description1}
                                              upgrade1={data.upgrade1}
                                              upgrade2={data.upgrade2}
                                              upgrade3={data.upgrade3}
                                              price={data.price}
                                              price1={data.price1}
                                              price2={data.price2}
                                              price3={data.price3}
                                              typos={data.typos}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allItems.filter(item=>item.section == data.section) ? props.allItems.filter(item=>item.section == data.section)[props.allItems.filter(item=>item.section == data.section).length - 1].sequence : 0}
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
      <LunchForm section={'Mains'} />
          </>
      }
























      {
        lunchPage == 'Donburi' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Donburi<br/>野菜</div>



              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Donburi').map(data=>{
                            return(
                              <div key={data._id}>
                                <DinnerItem   
                                              section={data.section}
                                              id={data._id}
                                              name1={data.name1} 
                                              allergies={data.allergies} 
                                              description1={data.description1}
                                              upgrade1={data.upgrade1}
                                              upgrade2={data.upgrade2}
                                              upgrade3={data.upgrade3}
                                              price={data.price}
                                              price1={data.price1}
                                              price2={data.price2}
                                              price3={data.price3}
                                              typos={data.typos}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allItems.filter(item=>item.section == data.section) ? props.allItems.filter(item=>item.section == data.section)[props.allItems.filter(item=>item.section == data.section).length - 1].sequence : 0}
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
      <LunchForm section={'Donburi'} />
          </>
      }








      {
        lunchPage == 'Sashimi & Nigiri' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Sashimi & Nigiri<br/>刺⾝ / にぎり</div>




              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Sashimi & Nigiri').map(data=>{
                            return(
                              <div key={data._id}>
                                <DinnerItem   
                                              section={data.section}
                                              id={data._id}
                                              name1={data.name1} 
                                              allergies={data.allergies} 
                                              description1={data.description1}
                                              upgrade1={data.upgrade1}
                                              upgrade2={data.upgrade2}
                                              upgrade3={data.upgrade3}
                                              price={data.price}
                                              price1={data.price1}
                                              price2={data.price2}
                                              price3={data.price3}
                                              typos={data.typos}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allItems.filter(item=>item.section == data.section) ? props.allItems.filter(item=>item.section == data.section)[props.allItems.filter(item=>item.section == data.section).length - 1].sequence : 0}
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
      <LunchForm section={'Sashimi & Nigiri'} />
          </>
      }















      {
        lunchPage == 'Maki' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Maki<br/>巻物</div>



              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Maki').map(data=>{
                            return(
                              <div key={data._id}>
                                <DinnerItem   
                                              section={data.section}
                                              id={data._id}
                                              name1={data.name1} 
                                              allergies={data.allergies} 
                                              description1={data.description1}
                                              upgrade1={data.upgrade1}
                                              upgrade2={data.upgrade2}
                                              upgrade3={data.upgrade3}
                                              price={data.price}
                                              price1={data.price1}
                                              price2={data.price2}
                                              price3={data.price3}
                                              typos={data.typos}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allItems.filter(item=>item.section == data.section) ? props.allItems.filter(item=>item.section == data.section)[props.allItems.filter(item=>item.section == data.section).length - 1].sequence : 0}
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
      <LunchForm section={'Maki'} />
          </>
      }



























      {
        lunchPage == 'Sushi Rolls' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Sushi Roll<span className='typo'>s</span><br/>ロール</div>



              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Sushi Rolls').map(data=>{
                            return(
                              <div key={data._id}>
                                <DinnerItem   
                                              section={data.section}
                                              id={data._id}
                                              name1={data.name1} 
                                              allergies={data.allergies} 
                                              description1={data.description1}
                                              upgrade1={data.upgrade1}
                                              upgrade2={data.upgrade2}
                                              upgrade3={data.upgrade3}
                                              price={data.price}
                                              price1={data.price1}
                                              price2={data.price2}
                                              price3={data.price3}
                                              typos={data.typos}
                                              staffInfo={data.staffInfo}
                                              sequence={data.sequence}
                                              maxSequence={props.allItems.filter(item=>item.section == data.section) ? props.allItems.filter(item=>item.section == data.section)[props.allItems.filter(item=>item.section == data.section).length - 1].sequence : 0}
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
      <LunchForm section={'Sushi Rolls'} />
          </>
      }



















      <br className='no-print' />
      <NavbarFooterMenuManager page='lunch' />

    </div>

    )
}
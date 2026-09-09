'use client'

import NavbarMenuManager from '@/components/NavbarMenuManager';
import NavbarFooterMenuManager from '@/components/NavbarFooterMenuManager';
import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import SoupForm from './SoupForm.jsx'
import DinnerForm from './DinnerForm.jsx'
import SmallPlatesForm from './SmallPlatesForm.jsx'
import DinnerItem from './DinnerItem.jsx'
import {useState} from 'react'

export default function DinnerClient(props){

    const [dinnerPage, setDinnerPage] = useState('Soup')

    function handleDinnerPageUpdate(value){
      setDinnerPage(value)
    }

    return(
    <div className='webpage'>

      <NavbarMenuManager page='dinner' />

            <div style={{width:'100%',textAlign:'center'}}>
                <select onChange={(e)=>handleDinnerPageUpdate(e.target.value)}>
                    <option value='Soup'>Soup</option>
                    <option value='Small Plates'>Small Plates</option>
                    <option value='Salad'>Salad</option>
                    <option value='Fried'>Fried</option>
                    <option value='Fish'>Fish</option>
                    <option value='Meat'>Meat</option>
                    <option value='Market'>Market</option>
                    <option value='Maki'>Maki</option>
                    <option value='Sushi Rolls'>Sushi Rolls</option>
                    <option value='Sashimi & Nigiri'>Sashimi & Nigiri</option>
                    <option value='Rice'>Rice</option>
                    <option value='Noodles'>Noodles</option>
                </select>
            </div>
            <br/>





















      {
        dinnerPage == 'Soup' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
             <div className="left-column">Soup<br/>椀物</div>
                

              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Soup').map(data=>{
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
      <DinnerForm section='Soup' />
          
          </>
      }























      {
        dinnerPage == 'Small Plates' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Small Plates<br/>前菜</div>                

              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Small Plates').map(data=>{
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
      <DinnerForm section='Small Plates' />
          
          </>
      }















      {
        dinnerPage == 'Salad' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Salad<br/>サラダ</div>
                

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

      <DinnerForm section={'Salad'} />
          
          </>
      }























      {
        dinnerPage == 'Fried' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Fried<br/>揚げ物</div>                

              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Fried').map(data=>{
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

      <DinnerForm section={'Fried'} />
          
          </>
      }
























      {
        dinnerPage == 'Fish' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Fish<br/>魚</div>                        

              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Fish').map(data=>{
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
      <DinnerForm section={'Fish'} />
          </>
      }



























      {
        dinnerPage == 'Meat' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Meat<br/>肉</div>


              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Meat').map(data=>{
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
      <DinnerForm section={'Meat'} />
          </>
      }
























      {
        dinnerPage == 'Market' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Market<br/>野菜</div>



              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Market').map(data=>{
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
      <DinnerForm section={'Market'} />
          </>
      }























      {
        dinnerPage == 'Maki' && 
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
      <DinnerForm section={'Maki'} />
          </>
      }



























      {
        dinnerPage == 'Sushi Rolls' && 
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
      <DinnerForm section={'Sushi Rolls'} />
          </>
      }

























      {
        dinnerPage == 'Rice' && 
          <>
      <div className="small-paper" style={{paddingTop:'25px',height:'auto'}}>
        
          <div className="menu-items">

            <div  className="section section-dessert"
                  style={{marginBottom:'0px'}}
            >
              <div className="left-column">Rice<br/>御飯</div>



              <div className="right-column">
              
                          {props.allItems.filter(item=>item.section == 'Rice').map(data=>{
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
      <DinnerForm section={'Rice'} />
          </>
      }








































































































































































































      <br className='no-print' />
      <NavbarFooterMenuManager page='dinner' />

    </div>

    )
}
import Link from 'next/link'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import DessertForm from './components/DessertForm.jsx';
import DessertItem from './components/DessertItem.jsx';
import {addDessert,editDessert} from '@/app/actions.js'
import {addDessertWine,editDessertWine} from '@/app/actions.js'
import connectMongoDB from '@/libs/mongodb'
import Dessert from '@/models/Dessert.js'
import DessertWine from '@/models/DessertWine.js'
import DessertWineForm from './components/DessertWineForm.jsx';
import NavbarMenuManager from '@/components/NavbarMenuManager.jsx';
import NavbarFooterMenuManager from '@/components/NavbarFooterMenuManager.jsx';

export const dynamic = 'force-dynamic'

export default async function ManagerDessertPage(){
    
      await connectMongoDB()
      const desserts = await Dessert.find().sort({sequence:1})
      const maxSequence = await Dessert.find().sort({sequence:-1})

      // const [editMode, setEditMode] = useState(false)

    function showModal(menuItem){
        document.querySelector(`#${menuItem}`).style.display = 'grid'
    }
    function closeModals(){
        document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
    }

    return(
    <div className='webpage'>

      <NavbarMenuManager page='dessert' />

      <div className="small-paper" style={{height:'auto'}}>
        
          <div className="menu-items">
            <div className="section section-dessert">
              <div  className="left-column"
                    id='desserts-section'
              >
                デザート<br/>Desserts
              </div>

              <div className="right-column">
              
                {desserts.map(data=>{
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
                                    maxSequence={maxSequence[0].sequence}
                                    cloudinary_secure_url={data.cloudinary_secure_url}
                                    cloudinary_public_id={data.cloudinary_public_id}
                      />
                      
                    </div>
                  )
                })}


              </div>{/* .right-column */}
            </div>{/* .section */}











            <div className="section section-dessert">
              <div className="left-column">デザートのお供に<br/>
                Dessert & Fortified Wines By The Glass</div>

              <div className="right-column">
              
                <div  className="dinner-menu-item"
                    //   onClick={()=>showModal('chateau-suduiraut')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Château Suduiraut</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">24</span>
                  </div>
                  <div className="description1">Sauternes, Bordeaux</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                    //   onClick={()=>showModal('domaine-de-rancy')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Domaine de Rancy</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">32</span>
                  </div>
                  <div className='name2'>Rivesaltes, Ambré, Vin Doux Naturel</div>
                  <div className="description1">Roussillon, France 2000</div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                    //   onClick={()=>showModal('weingut-sattlerhof')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Weingut Sattlerhof</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">38</span>
                  </div>
                  <div className='name2'>Beerenauslese</div>
                  <div className="description1">Südsteiermark, Austria <span className='typo'>2021</span></div>
                  <div className="description2"></div>
                </div>

                <div  className="dinner-menu-item"
                    //   onClick={()=>showModal('grahams-port')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">Graham's Port, Quinta dos Malvedos</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">40</span>
                  </div>
                  <div className='name2'></div>
                  <div className="description1">Vintage Port, Douro, Portugal, 2005</div>
                  <div className="description2"></div>
                </div>


              </div>{/* .right-column */}
            </div>{/* .section */}
          </div>{/* .menu-items */}









          <div className="legal legal-dessert">
            <div>(V) Vegan (N) Nuts (D) Dairy (GF) Gluten Free</div>
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase<br/>
            your risk of foodborne illness. Kindly inform server of any dietary restriction.
          </div>
      </div>{/* .small-paper */}
      
      <br className='no-print'/>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div className='small-paper'>
          <div className="menu-items">
            <div className="section section-dessert">
              <div className="left-column">Coffee & Tea</div>

              <div className="right-column">
              


                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Drip Coffee</span>
                    <span className="price">10</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Iced Coffee</span>
                    <span className="price">11</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Espresso</span>
                    <span className="price">8</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Cappuccino</span>
                    <span className="price">12</span>
                  </div>
                </div>


                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Latte</span>
                    <span className="price">12</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Matcha Latte</span>
                    <span className="price">12</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Iced Matcha Latte</span>
                    <span className="price">15</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Matcha Bowl</span>
                    <span className="price">16</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Iced Green Tea</span>
                    <span className="price">15</span>
                  </div>
                </div>

                <div  className="dinner-menu-item">
                  <div className="name-price">
                    <span className="name">Iced Black Tea</span>
                    <span className="price">15</span>
                  </div>
                </div>

                <div  className="dinner-menu-item"
                      style={{marginBottom:'10px',marginTop:'50px'}}
                >
                  <div className="name-price">
                    <span className="name">Kettl Teas</span>
                    <span className="price">16</span>
                  </div>
                </div>
                Sencha Jou<br/>
                Genmaimatcha<br/>
                Gyokuro<br/>
                Houjicha<br/>
                Yame Black<br/>
                Yame Oolong<br/>

                <br/><br/>

                <div  className="dinner-menu-item"
                      style={{marginBottom:'10px'}}
                >
                  <div className="name-price">
                    <span className="name">Soba and Tis<span style={{color:'red'}}>s</span>anes</span>
                    <span className="price">16</span>
                  </div>
                </div>
                Soba Tea<br/>
                Chamomile<br/>
                Peppermint<br/>


            </div>{/* .right-column */}
          </div>{/* .section */}
        </div>{/* .menu-items */}
      </div>{/* .small-paper */}























          









        <DessertForm  addDessert={addDessert}
                      editDessert={editDessert}
        />

        <DessertWineForm  addDessertWine={addDessertWine}
                          editDessertWine={editDessertWine}
        
        />

              <NavbarFooterMenuManager page='dessert' />

    </div>

    )
}
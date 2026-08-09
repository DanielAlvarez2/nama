import Link from 'next/link'
import Navbar from '@/components/Navbar.jsx'

export default function PageNotFound404(){

    return(
    <div className='webpage'>


      <Navbar />

      <div className="small-paper" style={{height:'auto',paddingTop:"90px"}}>
        
          <div className="menu-items">
            <div className="section section-dessert">
              <div className="left-column">
                <span className='typo'>ERROR:</span>
                <br/>
                Page Not Found
              </div>

              <div className="right-column">
              
                <Link href='/' style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                <div  className="dinner-menu-item"
                    //   onClick={()=>showModal('yuzu-crepe-cake')}
                >
                  <div className="name-price">
                    <span>
                      <span className="name">The Page You Were Looking For<br/>Could Not Be Found</span>
                      <span className="allergies"></span>
                    </span>
                    <span className="price">404</span>
                  </div>
                  <div className="description1">Click Here to Return to Menus</div>
                  <div className="description2"></div>
                </div>
                </Link>

              </div>{/* .right-column */}
            </div>{/* .section */}









          </div>{/* .menu-items */}









      </div>{/* .small-paper */}























    {/* .webpage */}
    </div>

    )
}
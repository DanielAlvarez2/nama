export const dynamic = 'force-dynamic'

import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'

export default async function QuizPage(props){

    const randomSake = props.allSakeBottles[Math.floor(Math.random() * props.allSakeBottles.length)]
    // const randomSake = props.allSakeBottles[Math.random() * props.allSakeBottles.length]
console.log(randomSake)
    return(

<>
    <div className='webpage sake-webpage'>

      <Navbar />
    
      <div  className="letter-paper sake-page" 
            style={{display:'flex',flexDirection:'column',padding:'0',height:'auto',alignItems:'center',paddingBottom:'50px'}}
            // style={{backgroundImage:'url(akari-dessert-1.jpg)',backgroundSize:'5.5in'}}
      >
        <br/>
        <h1>Sake Quiz</h1>
        <br/>


        <div  >
            <div  style={{width:'6in'}}>
                <div style={{width:'100%',textAlign:'center'}}>
                    <img 
                        style={{maxHeight:'75vh',marginBottom:'10vh'}}
                        src={randomSake.cloudinary_secure_url ? randomSake.cloudinary_secure_url : null} />
                </div>
                <br/>
                <div id='sake-modal-info'>
                    <div className='sake-section'>
                        <h3 id='sake-modal-section'></h3>
                            <div className='sake-producer'>    
                                <div className='sake-producer-name'><span className='bin-left'></span>
                                    <span id='sake-modal-producer-name'>{randomSake.producer}</span>
                                </div>{/* .sake-producer-name */}
                                <div className='sake'>
                                    <div className='sake-flexbox-left'>
                                        <span className='bin-left sake-modal-bin-left'>{randomSake.bin}</span>
                                        <span className='sake-description sake-modal-description'>{randomSake.name}</span>
                                    </div>{/* .sake-flexbox-left */}
                                    <div className='sake-flexbox-right'>
                                        <span className='bin-mobile sake-modal-bin-mobile'>{randomSake.bin}</span>
                                        <span className='sake-size sake-modal-size'>{randomSake.size}</span>
                                        <span className='sake-price sake-modal-price'>{randomSake.price}</span>
                                    </div>{/* .sake-flexbox-right */}
                                </div>{/* .sake */}
                            </div>{/* .sake-producer */}
                    </div>{/* .sake-section */}

                </div>{/* .sake-modal-info */}
            </div>{/* .sake-modal-content */}
        </div>{/* .sake-modal */}


      </div> {/* .dessert-menu-page */}
      <NavbarFooter />
    </div> {/* .webpage */}
</>

    ) // return
} // QuizPage()
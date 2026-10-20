'use client'

import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'
import {useState} from 'react'

export default function QuizPage(props){

    const [randomSake, setRandomSake] = useState(props.allSakeBottles[Math.floor(Math.random() * props.allSakeBottles.length)])

    function next(id){
        let nextSake
        document.querySelector('.sake-quiz-page').scrollIntoView({behavior:'smooth'})
        do{
            nextSake = props.allSakeBottles[Math.floor(Math.random() * props.allSakeBottles.length)]
        }while(!nextSake.sequence || !nextSake.cloudinary_secure_url || nextSake.eightySix || nextSake._id == id)
        setTimeout(()=>setRandomSake(nextSake),300)
    }

    return(

<>
    <div className='webpage sake-webpage sake-quiz-page'>

      <Navbar />
    
      <div  className="letter-paper sake-page" 
            style={{display:'flex',flexDirection:'column',padding:'0',height:'auto',alignItems:'center',paddingBottom:'50px'}}
            // style={{backgroundImage:'url(akari-dessert-1.jpg)',backgroundSize:'5.5in'}}
      >
        <br/>
        <h1 id='sake-quiz-heading'>Sake Quiz</h1>
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
                        <h3 id='sake-modal-section' dangerouslySetInnerHTML={{__html:randomSake.section.toUpperCase()}}></h3>
                            <div className='sake-producer'>    
                                <div className='sake-producer-name'><span className='bin-left'></span>
                                    <span id='sake-modal-producer-name' dangerouslySetInnerHTML={{__html:randomSake.producer}}></span>
                                </div>{/* .sake-producer-name */}
                                <div className='sake'>
                                    <div className='sake-flexbox-left'>
                                        <span className='bin-left sake-modal-bin-left' dangerouslySetInnerHTML={{__html:randomSake.bin}}></span>
                                        <span className='sake-description sake-modal-description' dangerouslySetInnerHTML={{__html:randomSake.name}}></span>
                                    </div>{/* .sake-flexbox-left */}
                                    <div className='sake-flexbox-right'>
                                        <span className='bin-mobile sake-modal-bin-mobile' dangerouslySetInnerHTML={{__html:randomSake.bin}}></span>
                                        <span className='sake-size sake-modal-size' dangerouslySetInnerHTML={{__html:randomSake.size}}></span>
                                        <span className='sake-price sake-modal-price' dangerouslySetInnerHTML={{__html:randomSake.price}}></span>
                                    </div>{/* .sake-flexbox-right */}
                                </div>{/* .sake */}
                            </div>{/* .sake-producer */}
                    </div>{/* .sake-section */}
                </div>{/* .sake-modal-info */}
            </div>{/* .sake-modal-content */}
        </div>{/* .sake-modal */}

<div style={{marginTop:'50px',
            border:'1px solid black',
            borderRadius:'5px',
            background:'white',
            cursor:'pointer',
            padding:'5px 10px'}}
    onClick={()=>next(randomSake._id)}
            >
    NEXT &rarr;
</div>

      </div> {/* .dessert-menu-page */}
      <NavbarFooter />
    </div> {/* .webpage */}
</>

    ) // return
} // QuizPage()
export const dynamic = 'force-dynamic'

import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'

export default async function QuizPage(props){

    const randomSake = props.allSakeBottles[Math.floor(Math.random() * props.allSakeBottles.length)]
    // const randomSake = props.allSakeBottles[Math.random() * props.allSakeBottles.length]
console.log(randomSake)
    return(

<>
    <div className='webpage'>

      <Navbar />
    
      <div  className="dessert-menu-page" 
            style={{display:'flex',flexDirection:'column',padding:'0'}}
            // style={{backgroundImage:'url(akari-dessert-1.jpg)',backgroundSize:'5.5in'}}
      >
        <h1>Sake Quiz</h1>

        <img 
          src={randomSake.cloudinary_secure_url ? randomSake.cloudinary_secure_url : null}  
          style={{maxHeight:'75vh',objectFit:'contain'}}
          />

      </div> {/* .dessert-menu-page */}
      <NavbarFooter />
    </div> {/* .webpage */}
</>

    ) // return
} // QuizPage()
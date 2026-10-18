export const dynamic = 'force-dynamic'

import Navbar from '@/components/Navbar.jsx'
import NavbarFooter from '@/components/NavbarFooter.jsx'

export default async function QuizPage(){

    return(

<>
    <div className='webpage'>

      <Navbar page='dessert' />
    
      <div  className="dessert-menu-page" 
            style={{display:'flex',flexDirection:'column'}}
            // style={{backgroundImage:'url(akari-dessert-1.jpg)',backgroundSize:'5.5in'}}
      >
        <h1>Quiz</h1>

        <h2>Sake Bottles</h2>
      </div> {/* .dessert-menu-page */}
      <NavbarFooter page='dessert' />
    </div> {/* .webpage */}
</>

    ) // return
} // QuizPage()
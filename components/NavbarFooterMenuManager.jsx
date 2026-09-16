import Logo from './Logo.jsx'
import NavbarLinksMenuManager from './NavbarLinksMenuManager.jsx'
import Link from 'next/link'

export default function NavbarMenuManager({page}){
    
    return(
        
            <div  className='no-print' 
                  style={{width:'100%',textAlign:'center',marginTop:'15px'}}>
                <NavbarLinksMenuManager page={page} />
                <br/>
                <h1 style={{color:'red'}}>MENU MANAGER</h1>
                <Link href='/'><Logo /></Link>
                <br/><br/>        
            </div>
        
    )
}
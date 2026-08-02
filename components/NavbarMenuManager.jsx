import Logo from './Logo.jsx'
import NavbarLinksMenuManager from './NavbarLinksMenuManager.jsx'

export default function NavbarMenuManager({page}){
    
    return(
        
            <div  className='no-print' 
                  style={{width:'100%',textAlign:'center',marginTop:'15px'}}>
                <Logo />
                <h1 style={{color:'red'}}>MENU MANAGER</h1>
                <NavbarLinksMenuManager page={page} />
                <br/>        
            </div>
        
    )
}
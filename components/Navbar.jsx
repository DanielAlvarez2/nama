import Logo from './Logo.jsx'
import NavbarLinks from './NavbarLinks.jsx'
import Link from 'next/link'

export default function Navbar({page}){
    
    return(
        
            <div  className='no-print' 
                  style={{width:'100%',textAlign:'center',marginTop:'15px'}}>
                <Link href='/'><Logo /></Link>
                <NavbarLinks page={page} />
                <br/>        
            </div>
        
    )
}
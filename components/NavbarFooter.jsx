import Logo from './Logo.jsx'
import NavbarLinks from './NavbarLinks.jsx'
import Link from 'next/link'

export default function NavbarFooter({page}){
    
    return(
    
            <div  className='no-print' 
                  style={{width:'100%',textAlign:'center',marginBottom:'15px'}}>
                <br/>        
                <NavbarLinks page={page} />
                <br/>
                <Link href='/'><Logo /></Link>
            </div>
        
    )
}
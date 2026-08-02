import Link from 'next/link'

export default function NavbarLinks({page}){
    return(
            <nav>
                <Link href='/' className={page == 'dinner' ? 'current-page' : ''}>Dinner</Link> | 
                <Link href='/dessert' className={page == 'dessert' ? 'current-page' : ''} >Dessert</Link> | 
                <Link href='/drinks' className={page == 'drinks' ? 'current-page' : ''}>Drinks</Link> | 
                <Link href='/sake' className={page == 'sake' ? 'current-page' : ''}>Sake</Link>
            </nav>
        
    )
}
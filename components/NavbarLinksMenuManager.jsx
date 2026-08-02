import Link from 'next/link'

export default function NavbarLinksMenuManager({page}){
    return(
            <nav>
                <Link href='/manager' className={page == 'dinner' ? 'current-page' : ''}>Dinner</Link> | 
                <Link href='/manager/dessert' className={page == 'dessert' ? 'current-page' : ''} >Dessert</Link> | 
                <Link href='/manager/drinks' className={page == 'drinks' ? 'current-page' : ''}>Drinks</Link> | 
                <Link href='/manager/sake' className={page == 'sake' ? 'current-page' : ''}>Sake</Link>
            </nav>
        
    )
}
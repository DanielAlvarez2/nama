import DessertNavbar from './DessertNavbar.jsx'
export default function DessertNavbarTop(props){
    return(
        <>
            <DessertNavbar dessertPage={props.dessertPage} setDessertPage={props.setDessertPage} />
            <br/>
        </>
    )
}
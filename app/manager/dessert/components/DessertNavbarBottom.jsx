import DessertNavbar from './DessertNavbar.jsx'
export default function DessertNavbarTop(props){
    return(
        <>
            <br/>
            <DessertNavbar dessertPage={props.dessertPage} setDessertPage={props.setDessertPage} />
        </>
    )
}
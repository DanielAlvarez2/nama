export default function DessertNavbar(props){
    function handleDessertPageUpdate(value){
        if (value == 'Desserts') props.setDessertPage('Desserts')
        if (value == 'Dessert Wines') props.setDessertPage('Dessert Wines')
        if (value == 'Coffee & Tea') props.setDessertPage('Coffee & Tea')
    }
    return(<div style={{width:'100%',textAlign:'center'}}>
                <select onChange={(e)=>handleDessertPageUpdate(e.target.value)}>
                    <option value='Desserts' >Desserts</option>
                    <option value='Dessert Wines'>Dessert Wines</option>
                    <option value='Coffee & Tea'>Coffee & Tea</option>
                </select>
            </div>
    )
}
import DessertClient from './components/DessertClient.jsx';
import mongoose from 'mongoose'
import connectMongoDB from '@/libs/mongodb'
import Dessert from '@/models/Dessert.js'
import DessertWine from '@/models/DessertWine.js'

export const dynamic = 'force-dynamic'

export default async function ManagerDessertPage(){
    
      await connectMongoDB()
      const desserts = JSON.parse(JSON.stringify(await Dessert.find().sort({sequence:1})))
      const dessertWines = JSON.parse(JSON.stringify(await DessertWine.find().sort({sequence:1})))
      const dessertsArray = await Dessert.find().sort({sequence:-1})
      const dessertWinesArray = await DessertWine.find().sort({sequence:-1})
      const maxSequenceDessertWines = dessertWinesArray[0] ? dessertWinesArray[0].sequence : 0
      const maxSequence = dessertsArray[0].sequence
      
      

      // const [editMode, setEditMode] = useState(false)

    function showModal(menuItem){
        document.querySelector(`#${menuItem}`).style.display = 'grid'
    }
    function closeModals(){
        document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
    }

    return(
            <DessertClient  desserts={desserts} 
                            dessertWines={dessertWines} 
                            maxSequence={maxSequence} 
                            maxSequenceDessertWines={maxSequenceDessertWines} 
                            />
    )
}
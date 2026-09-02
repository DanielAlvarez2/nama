import DessertClient2 from '../dessert/components/DessertClient2.jsx';
import connectMongoDB from '@/libs/mongodb'
import MenuItem from '@/models/MenuItem.js'

export const dynamic = 'force-dynamic'

export default async function ManagerDessertPage2(){
    
      await connectMongoDB()
      const menuItems = JSON.parse(JSON.stringify(await MenuItem.find().sort({sequence:1})))
      
      const desserts = menuItems.filter(item=>item.menu == 'dessert' && item.section == 'desserts')
      const dessertWines = menuItems.filter(item=>item.menu == 'dessert' && item.section == 'dessert wines')
      const coffeeTea = menuItems.filter(item=>item.menu == 'dessert' && item.section == 'coffee tea')

      const menuItemsArray = await MenuItem.find().sort({sequence:-1})
      const dessertsArray = menuItemsArray.filter(item=>item.menu == 'dessert' && item.section == 'desserts')
      const dessertWinesArray = menuItemsArray.filter(item=>item.menu == 'dessert' && item.section == 'dessert wines')
      const coffeeTeaArray = menuItemsArray.filter(item=>item.menu == 'dessert' && item.section == 'coffee tea')

      const maxSequenceDesserts = dessertsArray[0] ? dessertsArray[0].sequence : 0
      const maxSequenceDessertWines = dessertWinesArray[0] ? dessertWinesArray[0].sequence : 0
      const maxSequenceCoffeeTea = coffeeTeaArray[0] ? coffeeTeaArray[0].sequence : 0
      
      

      // const [editMode, setEditMode] = useState(false)

    function showModal(menuItem){
        document.querySelector(`#${menuItem}`).style.display = 'grid'
    }
    function closeModals(){
        document.querySelectorAll('.modal').forEach(item=>item.style.display = 'none')
    }

    return(
            <DessertClient2 menuItems={menuItems} />
    )
}
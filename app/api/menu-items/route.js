const menuItems = []

export async function POST(request){
    const {name} = await request.json()
    const newMenuItem = {id:Date.now().toString(), name}
    
}
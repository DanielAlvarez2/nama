'use client'

import {useState} from 'react'
import {useRouter} from 'next/navigation'
export default function AddMenuItem(){
    const [name,setName] = useState('')
    const router = useRouter()

    async function addMenuItem(formData){
        // const response = await fetch('/api/menu-items',{
        //     method:'POST',
        //     headers:{'Content-Type':'application/json'},
        //     body:JSON.stringify(formData.get('name'))
        // })
        // if(response.ok){
        //     router.push('/')
        // }else{
        //     alert('error')
        // }
    }

    return(
        <div className='webpage' style={{display:'grid',placeContent:'center'}}>
            <form action={addMenuItem}>
                <h1>Add Menu Item</h1>
                <br/><br/>
                <label>
                    Name:<br/>
                    <input  type='text'
                            name='name'  
                            id='name'
                            required
                            />
                </label>

                <br/><br/>
                <button type='submit'
                        style={{cursor:'pointer',
                                padding:'10px',
                                borderRadius:'10px'

                        }}
                >
                    + Add Menu Item
                </button>
            </form>
        {/* .webpage */}
        </div>
    )
}
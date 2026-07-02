'use client'

import {addDessert} from '@/app/actions.js'

export default function DessertForm(){
    return(
        <>
            <form action={addDessert}>
                <h1>ADD NEW DESSERT</h1>
                <br/><br/>

                <input  type='hidden' 
                        name='id' 
                        id='id-dessert' />

                <label>
                    Name: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            name='name'
                            id='name-dessert'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Allergies:<br/>
                    <input  type='text' 
                            name='allergies'
                            id='allergies-dessert'
                            style={{width:'35%'}} />
                </label>
                <br/><br/>

                <label>
                    Description Line 1:<br/>
                    <input  type='text' 
                            name='description1'
                            id='description1-dessert'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Description Line 2:<br/>
                    <input  type='text' 
                            name='description2'
                            id='description2-dessert'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Price: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            name='price'
                            id='price-dessert'
                            style={{width:'35%'}} />
                </label>
                <br/><br/>

                <label>
                    Image File: (optional)<br/>
                    <input  type='file' 
                            name='image-file'
                            id='image-file-dessert'
                    />
                </label>
                <br/><br/>

                <br/><br/>
                <button>+ New Dessert</button>
                

            </form>
        </>
    )
}
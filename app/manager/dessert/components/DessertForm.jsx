'use client'

export default function DessertForm(){
    return(
        <>
            <form>
                <h1>ADD NEW DESSERT</h1>
                <br/><br/>

                <label>
                    Name: <span className="required">*REQUIRED</span><br/>
                    <input type='text' style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Allergies:<br/>
                    <input type='text' style={{width:'35%'}} />
                </label>
                <br/><br/>

                <label>
                    Description Line 1:<br/>
                    <input type='text' style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Description Line 2:<br/>
                    <input type='text' style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Price: <span className="required">*REQUIRED</span><br/>
                    <input type='text' style={{width:'35%'}} />
                </label>
                <br/><br/>

                <br/><br/>
                <button>+ Add New Dessert</button>
                <br/>

            </form>
        </>
    )
}
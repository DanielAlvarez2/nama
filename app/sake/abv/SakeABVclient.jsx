export default function SakeABVclient(props){
  return(
    <>
    {/* <h1>Sake ABV</h1> */}
    <div style={{position:'relative',minWidth:'100%',minHeight:'300vh'}}>

      {props.allSakes.map(sake=>
                              <div  key={sake._id}
                                    className="sake-abv-chart" 
                                    style={{
                                            position:'absolute',
                                            left:`${sake.abv*150}px`,
                                            bottom:`${sake.price*5}px`,
                                            border:'2px solid black'}}
                              >
                                <img src={sake.cloudinary_secure_url} style={{width:'30px'}} />
                              </div>
                            )}
    </div>
    </>

  )
}
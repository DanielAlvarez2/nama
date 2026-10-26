'use client'

import NavbarMenuManager from "@/components/NavbarMenuManager"
import NavbarFooterMenuManager from "@/components/NavbarFooterMenuManager"
import {useState} from 'react'
import {useEditModeContext} from '@/context/EditModeContext'
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import {resetSakeFridge} from '@/app/actions.js'
import {toggleFridgeStocked} from '@/app/actions.js'


// import {useExistingImageContext} from '@/context/ExistingImageContext'
import {addSakeBottle,
        deleteSakeBottle,
        updateSakeBottle,
        moveSakeBottleDown,
        moveSakeBottleUp,
        eightySix,
        archiveSakeBottle,
        unarchiveSakeBottle} from '@/app/actions.js'
import { TiDeleteOutline } from "react-icons/ti";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";

export default function SakeFridgeClient(props){


  const [sakePage, setSakePage] = useState('Sparkling')
  const allSakesDescendingSequence = props.allSakes.toReversed()
  const allSakesArchive = props.allSakes.filter(sake=>sake.sequence == 0).sort((a,b)=>b.archivedAt - a.archivedAt)
  // console.log('allSakesArchive:')
  // console.log(allSakesArchive)

    function handlePageUpdate(value){
      setSakePage(value)
    }

    // const {editMode,setEditMode} = useEditModeContext()   
    const [editMode, setEditMode] = useState(false)
    const [existingImage,setExistingImage] = useState('')
    // const {existingImage,setExistingImage} = useExistingImageContext()

    const [previewImage, setPreviewImage] = useState('')
    // const [existingImage, setExistingImage] = useState()

    function handleFileInputChange(e){
        const file = e.target.files[0]
        if(file.size > 4500000){
            document.querySelector('#image-file').value = ''
            alert(`
Image file is too large.
Resize to smaller dimensions and try again.

Maximum Recommended Dimensions:
  1000x1000 pixels
`)
            return
        }

        previewFile(file)
    }
    function previewFile(file){
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = ()=> setPreviewImage(reader.result)
    }

    async function handleSubmit(formData){
        if (!formData.get('name').trim() || 
            !formData.get('price').trim() ||
            !formData.get('bin').trim() ||
            !formData.get('size').trim() ||
            !formData.get('producer').trim()
          ) {
            alert('Please Fill Out All Required Fields')
            setTimeout(()=>{
                document.querySelector('#name').value = formData.get('name')
                document.querySelector('#bin').value = formData.get('bin')
                document.querySelector('#abv').value = formData.get('abv')
                document.querySelector('#size').value = formData.get('size')
                document.querySelector('#price').value = formData.get('price')
                document.querySelector('#producer').value = formData.get('producer')
                document.querySelector('#staff-info').value = formData.get('staffInfo')
            },10)
            return
        }
        document.querySelector('#uploading-button').style.display = 'block'
        document.querySelector('#submit-button-form').style.display = 'none'        
        if(editMode){
            await updateSakeBottle(formData)
            setEditMode(false)
            setTimeout(()=>{
              document.getElementById(`${formData.get('id')}`).scrollIntoView({behavior:'smooth'})
            },10)                     
        }else{
            await addSakeBottle(formData)
            setTimeout(()=>{
              document.querySelector('#last-entry').scrollIntoView({behavior:'smooth'})
            },10)        
          }
          resetForm()
    }

    function resetForm(){
        document.querySelector('#delete-image-checkbox') && (document.querySelector('#delete-image-checkbox').checked = false)
        document.querySelector('#id').value = ''
        document.querySelector('#name').value = ''
        document.querySelector('#producer').value = ''
        document.querySelector('#price').value = ''
        document.querySelector('#bin').value = ''
        document.querySelector('#abv').value = ''
        document.querySelector('#size').value = ''
        document.querySelector('#staff-info').value = ''
        // document.querySelector('#current-img').src = ''
        document.querySelector('#current-image-url').value = ''
        document.querySelector('#current-image-id').value = ''
        // document.querySelector('#image-text').textContent = ''
        // document.querySelector('#current-image-label').style.display = 'none'
        // document.querySelector('#form h1').textContent = 'ADD SAKE BOTTLE'
        document.querySelector('#sake-bottle-form').style.background = 'lightgreen'
        // document.querySelector('#submit-button-form').innerHTML = `+ Sake Bottle`
        setEditMode(false)
        document.querySelector('#image-file').value = ''
        setPreviewImage('')
        setExistingImage(null)
        document.querySelector('#uploading-button').style.display = 'none'
        document.querySelector('#submit-button-form').style.display = 'block'   
    }

function toggleCheckbox(){
    if(document.querySelector('#delete-image-checkbox').checked == true){
        document.querySelector('#delete-icon').style.color = 'red'
        document.querySelector('#image-file').value = ''
        setPreviewImage('')
    }else{
        document.querySelector('#delete-icon').style.color = 'transparent'
    }
}

function populateEditForm(id,
                          producer,
                          name,
                          bin,
                          size,
                          price,
                          abv,
                          staffInfo,
                          secure_url,
                          public_id){
  resetForm()
  setEditMode(true)
  document.querySelector('#id').value = id
  document.querySelector('#producer').value = producer
  document.querySelector('#name').value = name
  document.querySelector('#bin').value = bin
  document.querySelector('#size').value = size
  document.querySelector('#price').value = price
  document.querySelector('#abv').value = abv ? abv : ''
  document.querySelector('#staff-info').value = staffInfo ? staffInfo : ''
  document.querySelector('#current-image-url').value = secure_url ? secure_url : ''
  document.querySelector('#current-image-id').value = public_id ? public_id : ''
  if(secure_url){
    setExistingImage(secure_url)
  }
  setTimeout(()=>{
    document.querySelector('#sake-bottle-form').scrollIntoView({behavior:'smooth'})
  },10)        

}

  return(
    <div className='webpage'>

      <NavbarMenuManager page='sake' />

      <br/>
      <div style={{textAlign:'center'}}>
        <div onClick={resetSakeFridge} style={{background:'red',color:'white',display:'inline-block',padding:'5px 15px',borderRadius:'5px',cursor:'pointer'}}>RESET</div>
      </div>
      <br/><br/>
              

        <div className="small-paper" style={{height:'auto'}}>
          <br/>
          <h1>SAKE FRIDGE</h1>
          <br/><br/>

          <h1>SPARKLING</h1>
          <br/>
          {props.allSakes.filter(sake=>sake.section == 'Sparkling' && sake.sequence).map(sake=>
           

            
            <div key={sake._id} style={{display:'flex',alignItems:'center'}}>
              {sake.fridgeStocked ? 
                <ImCheckboxChecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
                :
                <ImCheckboxUnchecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
              }
              <div id={sake._id} style={{border:'1px solid grey',
                                                        width:'100%',
                                                        margin:'10px 10px',
                                                        padding:'10px 10px'}}>
                
                <div className={`sake-flexbox ${sake.eightySix && 'eighty-six'}`} 
                      style={{display:'flex',width:'100%'}}>

                  <div className="sake-info" style={{width:'100%',paddingRight:'10px'}}>
                      <div style={{fontWeight:'900'}}  dangerouslySetInnerHTML={{__html:sake.producer}}></div>
                      <div dangerouslySetInnerHTML={{__html:sake.name}}></div>
                      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <span dangerouslySetInnerHTML={{__html:sake.bin}}></span>
                        <span dangerouslySetInnerHTML={{__html:sake.size}}></span>
                        <span>{sake.price}</span>
                      </div>
                        {sake.abv && <div>{sake.abv}%abv</div>}
                        <br/>



                      <span className="item-button archive-button"
                            style={{border:'1px solid black',background:'black',color:'white'}}
                            onClick={()=>eightySix(sake._id,'SakeBottle','/manager/sake')}
                            >86</span>

                      
                    </div>{/* .sake-info */}
                  
                  {
                    sake.cloudinary_secure_url && 
                      <img src={sake.cloudinary_secure_url} height='100px' />
                  }
                  </div>{/* .sake-flexbox */}

              {/* .key */}
              </div> 
            </div>
            
          )}

          <h1>NIGORI</h1>
          <br/>
          {props.allSakes.filter(sake=>sake.section == 'Nigori' && sake.sequence).map(sake=>
             

            
            <div key={sake._id} style={{display:'flex',alignItems:'center'}}>
              {sake.fridgeStocked ? 
                <ImCheckboxChecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
                :
                <ImCheckboxUnchecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
              }
              <div id={sake._id} style={{border:'1px solid grey',
                                                        width:'100%',
                                                        margin:'10px 10px',
                                                        padding:'10px 10px'}}>
                
                <div className={`sake-flexbox ${sake.eightySix && 'eighty-six'}`} 
                      style={{display:'flex',width:'100%'}}>

                  <div className="sake-info" style={{width:'100%',paddingRight:'10px'}}>
                      <div style={{fontWeight:'900'}}  dangerouslySetInnerHTML={{__html:sake.producer}}></div>
                      <div dangerouslySetInnerHTML={{__html:sake.name}}></div>
                      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <span dangerouslySetInnerHTML={{__html:sake.bin}}></span>
                        <span dangerouslySetInnerHTML={{__html:sake.size}}></span>
                        <span>{sake.price}</span>
                      </div>
                        {sake.abv && <div>{sake.abv}%abv</div>}
                        <br/>



                      <span className="item-button archive-button"
                            style={{border:'1px solid black',background:'black',color:'white'}}
                            onClick={()=>eightySix(sake._id,'SakeBottle','/manager/sake')}
                            >86</span>

                      
                    </div>{/* .sake-info */}
                  
                  {
                    sake.cloudinary_secure_url && 
                      <img src={sake.cloudinary_secure_url} height='100px' />
                  }
                  </div>{/* .sake-flexbox */}

              {/* .key */}
              </div> 
            </div>
            
          )}

          <h1>JUNMAI</h1>
          <br/>
          {props.allSakes.filter(sake=>sake.section == 'Junmai' && sake.sequence).map(sake=>
            <div key={sake._id} style={{display:'flex',alignItems:'center'}}>
              {sake.fridgeStocked ? 
                <ImCheckboxChecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
                :
                <ImCheckboxUnchecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
              }
              <div id={sake._id} style={{border:'1px solid grey',
                                                        width:'100%',
                                                        margin:'10px 10px',
                                                        padding:'10px 10px'}}>
                
                <div className={`sake-flexbox ${sake.eightySix && 'eighty-six'}`} 
                      style={{display:'flex',width:'100%'}}>

                  <div className="sake-info" style={{width:'100%',paddingRight:'10px'}}>
                      <div style={{fontWeight:'900'}}  dangerouslySetInnerHTML={{__html:sake.producer}}></div>
                      <div dangerouslySetInnerHTML={{__html:sake.name}}></div>
                      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <span dangerouslySetInnerHTML={{__html:sake.bin}}></span>
                        <span dangerouslySetInnerHTML={{__html:sake.size}}></span>
                        <span>{sake.price}</span>
                      </div>
                        {sake.abv && <div>{sake.abv}%abv</div>}
                        <br/>



                      <span className="item-button archive-button"
                            style={{border:'1px solid black',background:'black',color:'white'}}
                            onClick={()=>eightySix(sake._id,'SakeBottle','/manager/sake')}
                            >86</span>

                      
                    </div>{/* .sake-info */}
                  
                  {
                    sake.cloudinary_secure_url && 
                      <img src={sake.cloudinary_secure_url} height='100px' />
                  }
                  </div>{/* .sake-flexbox */}

              {/* .key */}
              </div> 
            </div>
          )}

          <h1>DAIGINJO</h1>
          <br/>
          {props.allSakes.filter(sake=>sake.section == 'Daiginjo' && sake.sequence).map(sake=>
            <div key={sake._id} style={{display:'flex',alignItems:'center'}}>
              {sake.fridgeStocked ? 
                <ImCheckboxChecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
                :
                <ImCheckboxUnchecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
              }
              <div id={sake._id} style={{border:'1px solid grey',
                                                        width:'100%',
                                                        margin:'10px 10px',
                                                        padding:'10px 10px'}}>
                
                <div className={`sake-flexbox ${sake.eightySix && 'eighty-six'}`} 
                      style={{display:'flex',width:'100%'}}>

                  <div className="sake-info" style={{width:'100%',paddingRight:'10px'}}>
                      <div style={{fontWeight:'900'}}  dangerouslySetInnerHTML={{__html:sake.producer}}></div>
                      <div dangerouslySetInnerHTML={{__html:sake.name}}></div>
                      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <span dangerouslySetInnerHTML={{__html:sake.bin}}></span>
                        <span dangerouslySetInnerHTML={{__html:sake.size}}></span>
                        <span>{sake.price}</span>
                      </div>
                        {sake.abv && <div>{sake.abv}%abv</div>}
                        <br/>



                      <span className="item-button archive-button"
                            style={{border:'1px solid black',background:'black',color:'white'}}
                            onClick={()=>eightySix(sake._id,'SakeBottle','/manager/sake')}
                            >86</span>

                      
                    </div>{/* .sake-info */}
                  
                  {
                    sake.cloudinary_secure_url && 
                      <img src={sake.cloudinary_secure_url} height='100px' />
                  }
                  </div>{/* .sake-flexbox */}

              {/* .key */}
              </div> 
            </div>
          )}

          <h1>JUNMAI DAIGINJO</h1>
          <br/>
          {props.allSakes.filter(sake=>sake.section == 'Junmai Daiginjo' && sake.sequence).map(sake=>
            <div key={sake._id} style={{display:'flex',alignItems:'center'}}>
              {sake.fridgeStocked ? 
                <ImCheckboxChecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
                :
                <ImCheckboxUnchecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
              }
              <div id={sake._id} style={{border:'1px solid grey',
                                                        width:'100%',
                                                        margin:'10px 10px',
                                                        padding:'10px 10px'}}>
                
                <div className={`sake-flexbox ${sake.eightySix && 'eighty-six'}`} 
                      style={{display:'flex',width:'100%'}}>

                  <div className="sake-info" style={{width:'100%',paddingRight:'10px'}}>
                      <div style={{fontWeight:'900'}}  dangerouslySetInnerHTML={{__html:sake.producer}}></div>
                      <div dangerouslySetInnerHTML={{__html:sake.name}}></div>
                      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <span dangerouslySetInnerHTML={{__html:sake.bin}}></span>
                        <span dangerouslySetInnerHTML={{__html:sake.size}}></span>
                        <span>{sake.price}</span>
                      </div>
                        {sake.abv && <div>{sake.abv}%abv</div>}
                        <br/>



                      <span className="item-button archive-button"
                            style={{border:'1px solid black',background:'black',color:'white'}}
                            onClick={()=>eightySix(sake._id,'SakeBottle','/manager/sake')}
                            >86</span>

                      
                    </div>{/* .sake-info */}
                  
                  {
                    sake.cloudinary_secure_url && 
                      <img src={sake.cloudinary_secure_url} height='100px' />
                  }
                  </div>{/* .sake-flexbox */}

              {/* .key */}
              </div> 
            </div>
          )}

          <h1>GINJO</h1>
          <br/>
          {props.allSakes.filter(sake=>sake.section == 'Ginjo' && sake.sequence).map(sake=>
            <div key={sake._id} style={{display:'flex',alignItems:'center'}}>
              {sake.fridgeStocked ? 
                <ImCheckboxChecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
                :
                <ImCheckboxUnchecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
              }
              <div id={sake._id} style={{border:'1px solid grey',
                                                        width:'100%',
                                                        margin:'10px 10px',
                                                        padding:'10px 10px'}}>
                
                <div className={`sake-flexbox ${sake.eightySix && 'eighty-six'}`} 
                      style={{display:'flex',width:'100%'}}>

                  <div className="sake-info" style={{width:'100%',paddingRight:'10px'}}>
                      <div style={{fontWeight:'900'}}  dangerouslySetInnerHTML={{__html:sake.producer}}></div>
                      <div dangerouslySetInnerHTML={{__html:sake.name}}></div>
                      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <span dangerouslySetInnerHTML={{__html:sake.bin}}></span>
                        <span dangerouslySetInnerHTML={{__html:sake.size}}></span>
                        <span>{sake.price}</span>
                      </div>
                        {sake.abv && <div>{sake.abv}%abv</div>}
                        <br/>



                      <span className="item-button archive-button"
                            style={{border:'1px solid black',background:'black',color:'white'}}
                            onClick={()=>eightySix(sake._id,'SakeBottle','/manager/sake')}
                            >86</span>

                      
                    </div>{/* .sake-info */}
                  
                  {
                    sake.cloudinary_secure_url && 
                      <img src={sake.cloudinary_secure_url} height='100px' />
                  }
                  </div>{/* .sake-flexbox */}

              {/* .key */}
              </div> 
            </div>
          )}

          <h1>JUNMAI GINJO</h1>
          <br/>
          {props.allSakes.filter(sake=>sake.section == 'Junmai Ginjo' && sake.sequence).map(sake=>
            <div key={sake._id} id={sake._id} style={{border:'1px solid grey',
                                                      
                                                      margin:'10px 10px',
                                                      padding:'10px 10px'}}>
              
              <div className={`sake-flexbox ${sake.eightySix && 'eighty-six'}`} 
                    style={{display:'flex',width:'100%'}}>

                <div className="sake-info" style={{width:'100%',paddingRight:'10px'}}>
                    <div style={{fontWeight:'900'}}  dangerouslySetInnerHTML={{__html:sake.producer}}></div>
                    <div dangerouslySetInnerHTML={{__html:sake.name}}></div>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                      <span dangerouslySetInnerHTML={{__html:sake.bin}}></span>
                      <span dangerouslySetInnerHTML={{__html:sake.size}}></span>
                      <span>{sake.price}</span>
                    </div>
                      {sake.abv && <div>{sake.abv}%abv</div>}
                      <br/>



                    <span className="item-button archive-button"
                          style={{border:'1px solid black',background:'black',color:'white'}}
                          onClick={()=>eightySix(sake._id,'SakeBottle','/manager/sake')}
                          >86</span>

                  </div>{/* .sake-info */}
                
                {
                  sake.cloudinary_secure_url && 
                    <img src={sake.cloudinary_secure_url} height='100px' />
                }
                </div>{/* .sake-flexbox */}

            {/* .key */}
            </div> 
          )}

          <h1>SPECIALTY</h1>
          <br/>
          {props.allSakes.filter(sake=>sake.section == 'Specialty' && sake.sequence).map(sake=>
            <div key={sake._id} style={{display:'flex',alignItems:'center'}}>
              {sake.fridgeStocked ? 
                <ImCheckboxChecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
                :
                <ImCheckboxUnchecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
              }
              <div id={sake._id} style={{border:'1px solid grey',
                                                        width:'100%',
                                                        margin:'10px 10px',
                                                        padding:'10px 10px'}}>
                
                <div className={`sake-flexbox ${sake.eightySix && 'eighty-six'}`} 
                      style={{display:'flex',width:'100%'}}>

                  <div className="sake-info" style={{width:'100%',paddingRight:'10px'}}>
                      <div style={{fontWeight:'900'}}  dangerouslySetInnerHTML={{__html:sake.producer}}></div>
                      <div dangerouslySetInnerHTML={{__html:sake.name}}></div>
                      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <span dangerouslySetInnerHTML={{__html:sake.bin}}></span>
                        <span dangerouslySetInnerHTML={{__html:sake.size}}></span>
                        <span>{sake.price}</span>
                      </div>
                        {sake.abv && <div>{sake.abv}%abv</div>}
                        <br/>



                      <span className="item-button archive-button"
                            style={{border:'1px solid black',background:'black',color:'white'}}
                            onClick={()=>eightySix(sake._id,'SakeBottle','/manager/sake')}
                            >86</span>

                      
                    </div>{/* .sake-info */}
                  
                  {
                    sake.cloudinary_secure_url && 
                      <img src={sake.cloudinary_secure_url} height='100px' />
                  }
                  </div>{/* .sake-flexbox */}

              {/* .key */}
              </div> 
            </div>
          )}

          <h1>SWEET</h1>
          <br/>
          {props.allSakes.filter(sake=>sake.section == 'Sweet' && sake.sequence).map(sake=>
            <div key={sake._id} style={{display:'flex',alignItems:'center'}}>
              {sake.fridgeStocked ? 
                <ImCheckboxChecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
                :
                <ImCheckboxUnchecked onClick={()=>toggleFridgeStocked(sake._id)} size='25' style={{marginLeft:'10px'}} />
              }
              <div id={sake._id} style={{border:'1px solid grey',
                                                        width:'100%',
                                                        margin:'10px 10px',
                                                        padding:'10px 10px'}}>
                
                <div className={`sake-flexbox ${sake.eightySix && 'eighty-six'}`} 
                      style={{display:'flex',width:'100%'}}>

                  <div className="sake-info" style={{width:'100%',paddingRight:'10px'}}>
                      <div style={{fontWeight:'900'}}  dangerouslySetInnerHTML={{__html:sake.producer}}></div>
                      <div dangerouslySetInnerHTML={{__html:sake.name}}></div>
                      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <span dangerouslySetInnerHTML={{__html:sake.bin}}></span>
                        <span dangerouslySetInnerHTML={{__html:sake.size}}></span>
                        <span>{sake.price}</span>
                      </div>
                        {sake.abv && <div>{sake.abv}%abv</div>}
                        <br/>



                      <span className="item-button archive-button"
                            style={{border:'1px solid black',background:'black',color:'white'}}
                            onClick={()=>eightySix(sake._id,'SakeBottle','/manager/sake')}
                            >86</span>

                      
                    </div>{/* .sake-info */}
                  
                  {
                    sake.cloudinary_secure_url && 
                      <img src={sake.cloudinary_secure_url} height='100px' />
                  }
                  </div>{/* .sake-flexbox */}

              {/* .key */}
              </div> 
            </div>
          )}












          <div id='last-entry' style={{scrollMarginTop:'100px'}}></div>        
        </div>{/* .small-paper */}
        <br/><br/>
         











      
         



         
      <NavbarFooterMenuManager page='sake' />
    {/* .webpage */}
    </div> 
             

  )
}
'use client'

import NavbarMenuManager from "@/components/NavbarMenuManager"
import NavbarFooterMenuManager from "@/components/NavbarFooterMenuManager"
import {useState} from 'react'
import {useEditModeContext} from '@/context/EditModeContext'
// import {useExistingImageContext} from '@/context/ExistingImageContext'
import {addSakeBottle,deleteSakeBottle,updateSakeBottle} from '@/app/actions.js'
import { TiDeleteOutline } from "react-icons/ti";

export default function SakeClient(props){

  const [sakePage, setSakePage] = useState('Sparkling')

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
              document.querySelector('#sake-bottle-form').scrollIntoView({behavior:'smooth'})
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
              
            <div style={{width:'100%',textAlign:'center'}}>
                <select onChange={(e)=>handlePageUpdate(e.target.value)}>
                    <option value='Sparkling'>Sparkling</option>
                    <option value='Nigori'>Nigori</option>
                    <option value='Junmai'>Junmai</option>
                    <option value='Daiginjo'>Daiginjo</option>
                    <option value='Junmai Daiginjo'>Junmai Daiginjo</option>
                    <option value='Ginjo'>Ginjo</option>
                    <option value='Junmai Ginjo'>Junmai Ginjo</option>
                    <option value='Specialty'>Specialty</option>
                    <option value='Sweet'>Sweet</option>
                </select>
            </div>
            <br/>          

        <div className="small-paper" style={{height:'auto'}}>
          <br/>
          <h1>SAKE BOTTLES</h1>
          <br/>
          <h1>SECTION: {sakePage}</h1>
          <br/>
          {props.allSakes.filter(sake=>sake.section == sakePage).map(sake=>
            <div key={sake._id} style={{border:'1px solid grey',margin:'10px 10px',padding:'10px 10px'}}>
              
              <div className="sake-flexbox" style={{display:'flex',width:'100%'}}>

                <div className="sake-info" style={{width:'100%',paddingRight:'10px'}}>
                    <div style={{fontWeight:'900'}}>{sake.producer}</div>
                    {sake.name}<br/>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                      <span>{sake.bin}</span>
                      <span>{sake.size}</span>
                      <span>{sake.price}</span>
                    </div>
                    <span className="item-button edit-button"
                          onClick={()=>populateEditForm(      
                                    sake._id,
                                    sake.producer,
                                    sake.name,
                                    sake.bin,
                                    sake.size,
                                    sake.price,
                                    sake.abv,
                                    sake.staffInfo,                                                    
                                    sake.cloudinary_secure_url,
                                    sake.cloudinary_public_id,
                                          )}
                          >EDIT</span>
                    <span className="item-button delete-button"
                          onClick={()=>{
                                        if(confirm(`
      Are you sure you want to permanently delete this menu item:
                    
        ${sake.producer}                                
        ${sake.name}                                
                                          `)){
                                              deleteSakeBottle(sake._id,sake.section,'/manager/sake')
                                              }else{
                                                return
                                              }
                                            }}
                                        >DELETE</span>
                    
                  </div>{/* .sake-info */}
                
                <img src={sake.cloudinary_secure_url} height='100px' />
                </div>{/* .sake-flexbox */}

            {/* .key */}
            </div> 


)
}
          <div id='last-entry' style={{scrollMarginTop:'100px'}}></div>        
        </div>{/* .small-paper */}
        <br/><br/>
         








            <form   action={handleSubmit}
                    style={{background:editMode ? 'lightblue':'#90ee90'}}
                    id='sake-bottle-form'
            >
                <h1>SAKE BOTTLE</h1>
                <h1>{editMode ? 'EDIT' : 'ADD'}: {sakePage}</h1>
                <br/><br/>

                <input  type='hidden' 
                        name='id' 
                        id='id' />

                <input  type='hidden' 
                        name='menu'
                        value='wine'
                />

                <input  type='hidden' 
                        name='section'
                        value={sakePage}
                />

                <input  type='hidden'
                        name='path'
                        value='/manager/sake'
                />

                <label>
                    Producer: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            autoComplete="off"
                            required
                            name='producer'
                            id='producer'
                            style={{width:'100%'}} />
                </label>
                <br/><br/>

                <label>
                    Name: <span className="required">*REQUIRED</span><br/>
                    <textarea   style={{width:'100%',height:'100px'}}
                                id='name'
                                required
                                name='name' />                    
                </label>
                <br/><br/>

                <label>
                    Bin#: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            name='bin'
                            autoComplete="off"
                            id='bin'
                            required
                            style={{width:'35%'}} />
                </label>
                <br/><br/>

                <label>
                    Size: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            name='size'
                            autoComplete="off"
                            id='size'
                            required
                            style={{width:'35%'}} />
                </label>
                <br/><br/>

                <label>
                    Price: <span className="required">*REQUIRED</span><br/>
                    <input  type='text' 
                            name='price'
                            required
                            autoComplete="off"
                            id='price'
                            style={{width:'35%'}} />
                </label>
                <br/><br/>

                <label>
                    abv%:<br/>
                    <input  type='text' 
                            name='abv'
                            // required
                            autoComplete="off"
                            id='abv'
                            style={{width:'35%'}} />
                </label>
                <br/><br/>

                <label>
                    Staff Info:<br/>
                    <textarea   style={{width:'100%',height:'150px'}}
                                id='staff-info'
                                name='staffInfo' />
                </label>
                <br/><br/>

                {existingImage && 
                    <label id='current-image-label'>
                        Current Image:<br/>
                        <div style={{position:'relative'}}>
                            <img    id='current-img' 
                                    src={existingImage ? existingImage : null}
                                    style={{maxWidth:'100%',maxHeight:'300px',display:'block',margin:'0 auto'}}
                            />
                            <TiDeleteOutline    size={150} 
                                                id='delete-icon'
                                                style={{color:'transparent',
                                                        position:'absolute',
                                                        bottom:'50%',
                                                        left:'50%',
                                                        transform:'translate(-50%,50%)',
                                                        // transform:'translateY(50%)',
                                                }}
                            />
                        </div>
                       
                       <br/>
                    </label>
                }
                        <input  type='hidden'
                                id='current-image-url' 
                                name='current-image-url' />
                        <input  type='hidden'
                                id='current-image-id' 
                                name='current-image-id' />

                <label>
                    <div id='image-text' style={{fontSize:'20px'}}>
                    {existingImage && <>Replace </>}
                    Image File: (optional)<br/></div>
                    <input  type='file' 
                            name='image-file'
                            id='image-file'
                            onChange={handleFileInputChange}
                    />
                </label>
                <br/><br/>

                <input  type='hidden'
                        defaultValue={previewImage} 
                        name='preview-image' />

                {previewImage &&    <div style={{width:'100%',textAlign:'center'}}> 
                                        <img src={previewImage} style={{maxWidth:'100%',maxHeight:'300px'}} />
                                    </div>}
                {editMode && existingImage &&
                    <span style={{fontSize:'20px',display:'flex',alignItems:'center'}}>
                        <br/><br/>
                        <input  type='checkbox' 
                                onClick={toggleCheckbox}
                                id='delete-image-checkbox'
                                name='delete-image-checkbox' />  
                        &nbsp;Delete Current Image (optional)
                    </span>
                    }
                <br/><br/>
                <div style={{display:'flex'}}>
                    <button id='uploading-button' disabled className="blinking" style={{cursor:'wait',display:'none'}}>UPLOADING...</button>                    
                    <button id='submit-button-form' type='submit'>{editMode ? <>&#8710;</> : '+'} {sakePage}</button>
                    <button type='button'
                            onClick={()=>{
                              resetForm()
                              setTimeout(()=>{
                                document.querySelector('#sake-bottle-form').scrollIntoView({behavior:'smooth'})
                              },10)                     
                            }} 
                            style={{background:'red'}}>Cancel</button>
                </div>
                

            </form>
     







         
      <NavbarFooterMenuManager page='sake' />
    {/* .webpage */}
    </div> 
             

  )
}
'use client'

import { createContext,useContext,useState } from "react"

const EditModeContext = createContext()

export function EditModeProvider({children}){
    const [editMode, setEditMode] = useState(false)
    const updateEditMode = ()=> setEditMode()
    
    return(
        <EditModeContext.Provider value={{editMode, updateEditMode}}>
            {children}
        </EditModeContext.Provider>
    )
}

export function useEditMode(){
    const context = useContext(EditModeContext)
    return context
}
'use client'

import { createContext,useContext,useState } from "react"

const EditModeContext = createContext()

export function EditModeProvider({children}){
    const [editMode, setEditMode] = useState(false)
    
    return(
        <EditModeContext.Provider value={{editMode, setEditMode}}>
            {children}
        </EditModeContext.Provider>
    )
}

export function useEditModeContext(){
    return useContext(EditModeContext)
}
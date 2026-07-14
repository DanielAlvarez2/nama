'use client'

import { createContext,useContext,useState } from "react"

const ExistingImageContext = createContext()

export function ExistingImageProvider({children}){
    const [existingImage, setExistingImage] = useState(null)
    
    return(
        <ExistingImageContext.Provider value={{existingImage, setExistingImage}}>
            {children}
        </ExistingImageContext.Provider>
    )
}

export function useExistingImageContext(){
    return useContext(ExistingImageContext)
}
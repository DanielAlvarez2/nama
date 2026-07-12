'use client'

import { useEditMode } from "@/context/EditModeContext"

export default function EditModeToggle(){
    const {editMode, toggleEditMode} = useEditMode()

    return(
        <>{alert('editMode: ' + editMode)}</>
    )
}
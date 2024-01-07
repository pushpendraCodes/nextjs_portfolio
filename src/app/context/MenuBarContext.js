
"use client"
const { createContext, useState } = require("react");
export  const MenuContext =  createContext()



export const MenuContextProvider = ({children})=>{
    const[isOpen ,setOpen]=useState(false)

    return <MenuContext.Provider  value={{isOpen,setOpen}} >{children}</MenuContext.Provider>
}
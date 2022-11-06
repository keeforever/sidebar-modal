import { createContext,useContext,useState } from "react";

const AppContext=createContext();

const AppProvider = ({children}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  // Modal click handler
  const modalHandler=()=>{
    // open-close event
    setIsModalOpen(!isModalOpen)
  }
  // Side Bar click handler
  const sideBarHandler=()=>{
    // open-close event
    setIsSideBarOpen(!isSideBarOpen)
  }
  return (
    <AppContext.Provider value={{
    isModalOpen,
    isSideBarOpen,
    modalHandler,
    sideBarHandler
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext=()=>{
   
  return  useContext(AppContext)
}

export {AppProvider,AppContext}
 

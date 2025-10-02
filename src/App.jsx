
import './App.css'
import NavBar from './components/NavBar'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Communication from './components/Communication'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {

  let footerSticky = true;
  const [sticky, setsticky] = useState();
  useEffect(() => {
    if (footerSticky) {
      setsticky("sticky")
    }
    else {
      setsticky("")
    }
  }, [footerSticky])

  return (

    <SidebarProvider className="h-full">
      <AppSidebar />
      <div className="w-full min-h-full flex flex-col">
        <NavBar className="w-full h-16 grow-0" />
        <Communication style={{maxHeight:"calc(100vh-128px)",}} className="overflow-scroll" />
        <Footer className="w-full h-16 grow-0" sticky={sticky} />
      </div>
    </SidebarProvider>
  )
}

export default App

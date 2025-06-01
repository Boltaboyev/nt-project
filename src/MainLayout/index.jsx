import { useState } from "react"
import { useMediaQuery, useTheme } from "@mui/material"
import MainContent from "../components/main"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"


export default function ProfilePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [copied, setCopied] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleCopyUsername = () => {
    navigator.clipboard.writeText("otabek")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isMobile={isMobile}
        handleDrawerToggle={handleDrawerToggle}
      />

      <div className="flex">
        <Sidebar isMobile={isMobile} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

        <MainContent isMobile={isMobile} copied={copied} handleCopyUsername={handleCopyUsername} />
      </div>
    </div>
  )
}
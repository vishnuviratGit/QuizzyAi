import {BookTemplate, LayoutDashboard} from "lucide-react"

export const sidebarTopElements = [
    {
      label: "Dashboard",
      to: "/teacher/dashboard",
      icon: <LayoutDashboard/>
    },
    {
       label: "Templates",
       to: "/teacher/templates",
       icon: <BookTemplate/>
    }
]   
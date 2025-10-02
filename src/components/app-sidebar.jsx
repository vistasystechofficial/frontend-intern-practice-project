import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import logo from '../../public/logo.png'
import { LuChartColumn } from "react-icons/lu";
import { GoPeople } from "react-icons/go";

import { MdAccessTime } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { LuProjector } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { LuCircleHelp } from "react-icons/lu";

import { LuFileText } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: LuChartColumn,
    },
    {
        title: "HRIS",
        url: "#",
        icon: GoPeople,
    },
    {
        title: "AMS",
        url: "#",
        icon: MdAccessTime,
    },
    {
        title: "Monitoring",
        url: "#",
        icon: FiAlertTriangle,
    },
    {
        title: "Projects",
        url: "#",
        icon: LuProjector,
    },
    {
        title: "Clients",
        url: "#",
        icon: GoPeople,
    },
    {
        title: "Communication",
        url: "#",
        icon: LuMessageSquare,
    },
    {
        title: "Help Desk",
        url: "#",
        icon: LuCircleHelp,
    },
    {
        title: "Reports",
        url: "#",
        icon: LuFileText,
    },
    {
        title: "Admin Logs",
        url: "#",
        icon: LuFileText,
    },
    {
        title: "Settings",
        url: "#",
        icon: LuSettings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <img className="p-6 h-" src={logo} alt="" />
                            <hr />
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
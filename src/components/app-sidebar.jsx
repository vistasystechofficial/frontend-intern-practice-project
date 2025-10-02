import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import logo from '/logo.png'
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
    SidebarMenuAction
} from "@/components/ui/sidebar"
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: '/',
        icon: LuChartColumn,
    },
    {
        title: "HRIS",
        url: '/hris',
        icon: GoPeople,
    },
    {
        title: "AMS",
        url: "/ams",
        icon: MdAccessTime,
    },
    {
        title: "Monitoring",
        url: "/monitoring",
        icon: FiAlertTriangle,
    },
    {
        title: "Projects",
        url: "/projects",
        icon: LuProjector,
    },
    {
        title: "Clients",
        url: "/clients",
        icon: GoPeople,
    },
    {
        title: "Communication",
        url: "/communication",
        icon: LuMessageSquare,
    },
    {
        title: "Help Desk",
        url: "/helpdesk",
        icon: LuCircleHelp,
    },
    {
        title: "Reports",
        url: "/reports",
        icon: LuFileText,
    },
    {
        title: "Admin Logs",
        url: "/adminlogs",
        icon: LuFileText,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: LuSettings,
    },
]

export function AppSidebar() {
    const location = useLocation();

    const [curUrl,setCurUrl] = useState("/");
    useEffect(()=>{
        setCurUrl(location.pathname)
    },[location.pathname])
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
                                    
                                        <NavLink className={curUrl===item.url?"text-blue-600 font-medium":""}  to={item.url} 
                                        >
                                            <item.icon />
                                            {item.title}
                                        </NavLink>
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
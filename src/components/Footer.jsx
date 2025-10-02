// import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { IoMdNotificationsOutline } from "react-icons/io";
import { Badge } from "@/components/ui/badge"
import { MdLogout } from "react-icons/md";
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from 'react-router-dom';

const Footer = ({ sticky }) => {
    // const [sticky, setsticky] = useState();
    // useEffect(() => {
    //     if (footerSticky) {
    //         setsticky("sticky")
    //     }
    //     else {
    //         setsticky("")
    //     }
    // }, footerSticky)

    return (
        <div className={`${sticky} bottom-0 bg-white px-10 justify-between w-full py-3   border`}>
            <div className="items-center text-center w-full">
                <p>ALl rights reserved@Vista Systech</p>
            </div>
        </div>
    );
};

export default Footer;
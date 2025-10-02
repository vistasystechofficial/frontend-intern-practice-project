import React from 'react';
import { Button } from "@/components/ui/button"
import { IoMdNotificationsOutline } from "react-icons/io";
import { Badge } from "@/components/ui/badge"
import dp from '../../public/dp.jpg'
import { MdLogout } from "react-icons/md";
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="flex sticky top-0 bg-white px-10 justify-between w-full py-3 overflow-hidden">
            <div className="flex items-center">
                <SidebarTrigger />
                <Link to={'/'} > <p className='text-xl font-semibold ml-6'>ProductivityPro
                </p> </Link>
            </div>

            <div className='flex'>
                <div className='flex gap-10 justify-between items-center'>
                    <div>
                        <Link><IoMdNotificationsOutline className='text-2xl font-semibold' /></Link>
                    </div>
                    <div className='flex flex-col items-end'>
                        <Link>admin@demo.com</Link>
                        <Badge variant="" className="bg-blue-100 text-blue-700">Admin</Badge>
                    </div>
                    <Avatar className="rounded-lg ">
                        <AvatarImage src={dp} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* <div>
                        <Link><img className='h-8 w-8' src={dp} alt="" /></Link>
                    </div> */}
                    <div>
                        <Link><MdLogout className='text-3xl font-bold' /></Link>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default NavBar;
import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { IoSettingsOutline } from "react-icons/io5";
const DashBoard = () => {
    return (
        <div style={{ height: "calc(100vh - 128px)" }} className='p-10 bg-[#f9f9fa] w-full overflow-y-scroll'>
            <div>
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h3 className='text-2xl font-bold mb-2'>Admin Dashboard</h3>
                        <p className='text-gray-400'>Comprehensive overview of employee activities</p>
                    </div>
                    <div className='text-xl font-semibold'>
                        <Button variant="outline"><IoSettingsOutline className='mr-2' />Report Settings</Button>
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
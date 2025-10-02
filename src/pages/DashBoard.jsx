import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { IoSettingsOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { LuBuilding } from "react-icons/lu";
import { LuFileText } from "react-icons/lu";
import { GoPeople } from "react-icons/go";

const DashBoard = () => {
    return (
        <div style={{ height: "calc(100vh - 128px)" }} className='p-10 bg-[#f9f9fa] w-full overflow-y-scroll'>
            <div>
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h3 className='text-2xl font-bold mb-2'>Admin Dashboard</h3>
                        <p className='text-gray-400'>Comprehensive overview of employee activities</p>
                    </div>
                    <div className='text-xl font-semibold flex gap-3'>
                        <Button variant="outline"><IoSettingsOutline className='mr-2' />Report Settings</Button>
                        <Button variant="outline"><FiCalendar className='mr-2' />Schedule Report</Button>
                    </div>
                </div>
                <div className='flex justify-between gap-5 w-full'>
                    <div className='flex gap-3 items-center rounded-lg border bg-white p-7 w-full'>
                        <div className=''>
                            <div className='bg-blue-200 text-blue-700 p-4 rounded-lg '>
                                <LuBuilding className='text-xl m-0 p-0' />
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold text-xl'>3</h4>
                            <p className='text-sm text-gray-500'>Active Companies</p>
                            <p className='text-xs text-green-500'>+1 this month</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center bg-white rounded-lg border p-7 w-full'>
                        <div className=''>
                            <div className='bg-green-200 text-green-700 p-4 rounded-lg '>
                                <LuFileText className='text-xl m-0 p-0' />
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold text-xl'>1247</h4>
                            <p className='text-sm text-gray-500'>Reports Generated</p>
                            <p className='text-xs text-green-500'>+18% vs last month</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center rounded-lg border bg-white p-7 w-full'>
                        <div className=''>
                            <div className='bg-purple-200 text-purple-700 p-4 rounded-lg '>
                                <GoPeople className='text-xl m-0 p-0' />
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold text-xl'>3</h4>
                            <p className='text-sm text-gray-500'>Active Companies</p>
                            <p className='text-xs text-green-500'>+1 this month</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center rounded-lg border bg-white p-7 w-full'>
                        <div className=''>
                            <div className='bg-blue-200 text-blue-700 p-4 rounded-lg '>
                                <LuBuilding className='text-xl m-0 p-0' />
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold text-xl'>3</h4>
                            <p className='text-sm text-gray-500'>Active Companies</p>
                            <p className='text-xs text-green-500'>+1 this month</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;
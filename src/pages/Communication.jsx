import React from 'react';
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Button } from "@/components/ui/button"
import { LuDownload } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const Communication = () => {
    console.log(window.location.pathname);
    return (
        <div style={{height:"calc(100vh - 128px)"}} className='p-10 bg-[#f9f9fa] w-full overflow-y-scroll'>
            <div className='flex justify-between items-center mb-6'>
                <div>
                    <h3 className='text-2xl font-bold mb-2'>Communication Center</h3>
                    <p className=''>Manage email templates, campaigns, and notification settings</p>
                </div>
                <div className='text-xl font-semibold'>
                    <Button variant="outline" className="mr-3"><LuDownload className='mr-2' />Export Data</Button>
                    <Button><FaPlus className='mr-2' />Create Template</Button>
                </div>
            </div>


            <Tabs defaultValue="campaign">
                <TabsList className="w-full mb-6">
                    <TabsTrigger value="templates" className="">Templates</TabsTrigger>
                    <TabsTrigger value="campaign">Campaigns</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="templates"><div className='p-4 relative flex gap-4 bg-white '>
                    <CiSearch className='absolute left-7 text-xl font-semibold text-gray-400 top-6' />
                    <Input type="text" className="pl-10 text-xl" placeholder="Search Templates..." />
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="allCat">All Categories</SelectItem>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
                            <SelectItem value="performance">Performance</SelectItem>
                            <SelectItem value="projects">Projects</SelectItem>
                            <SelectItem value="security">Security</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="allStatus">AllStatus</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                    <div className='grid grid-cols-3 gap-10 mt-6  '>
                        <div className='bg-white p-6 border rounded-lg'>
                            <h4 className='text-xl font-semibold mb-1'>Welcome Email</h4>
                            <p className='mb-4 text-gray-400 text-sm'>Welcome to our Employee Monitoring System</p>
                            <div className='mb-3'>
                                <Badge variant="" className="bg-green-100 text-green-700 mr-3">active</Badge>
                                <Badge variant="" className="bg-white outline text-black mr-3">email</Badge>
                                <Badge variant="" className="bg-blue-100 text-slate-300 mr-3">onboarding</Badge>
                            </div>
                            <p className='text-xs text-gray-400 mb-4'>Last used: Jan 15, 2024</p>
                            <div className='ml-3 flex text-xl gap-5'>
                                <FaEye />
                                <FaRegEdit />
                                <RiDeleteBin5Line />
                            </div>
                        </div>
                        <div className='bg-white p-6 border rounded-lg'>
                            <h4 className='text-xl font-semibold mb-1'>Welcome Email</h4>
                            <p className='mb-4 text-gray-400 text-sm'>Welcome to our Employee Monitoring System</p>
                            <div className='mb-3'>
                                <Badge variant="" className="bg-green-100 text-green-700 mr-3">active</Badge>
                                <Badge variant="" className="bg-white outline text-black mr-3">email</Badge>
                                <Badge variant="" className="bg-blue-100 text-slate-300 mr-3">onboarding</Badge>
                            </div>
                            <p className='text-xs text-gray-400 mb-4'>Last used: Jan 15, 2024</p>
                            <div className='ml-3 flex text-xl gap-5'>
                                <FaEye />
                                <FaRegEdit />
                                <RiDeleteBin5Line />
                            </div>
                        </div>
                        <div className='bg-white p-6 border rounded-lg'>
                            <h4 className='text-xl font-semibold mb-1'>Welcome Email</h4>
                            <p className='mb-4 text-gray-400 text-sm'>Welcome to our Employee Monitoring System</p>
                            <div className='mb-3'>
                                <Badge variant="" className="bg-green-100 text-green-700 mr-3">active</Badge>
                                <Badge variant="" className="bg-white outline text-black mr-3">email</Badge>
                                <Badge variant="" className="bg-blue-100 text-slate-300 mr-3">onboarding</Badge>
                            </div>
                            <p className='text-xs text-gray-400 mb-4'>Last used: Jan 15, 2024</p>
                            <div className='ml-3 flex text-xl gap-5'>
                                <FaEye />
                                <FaRegEdit />
                                <RiDeleteBin5Line />
                            </div>
                        </div>
                        <div className='bg-white p-6 border rounded-lg'>
                            <h4 className='text-xl font-semibold mb-1'>Welcome Email</h4>
                            <p className='mb-4 text-gray-400 text-sm'>Welcome to our Employee Monitoring System</p>
                            <div className='mb-3'>
                                <Badge variant="" className="bg-green-100 text-green-700 mr-3">active</Badge>
                                <Badge variant="" className="bg-white outline text-black mr-3">email</Badge>
                                <Badge variant="" className="bg-blue-100 text-slate-300 mr-3">onboarding</Badge>
                            </div>
                            <p className='text-xs text-gray-400 mb-4'>Last used: Jan 15, 2024</p>
                            <div className='ml-3 flex text-xl gap-5'>
                                <FaEye />
                                <FaRegEdit />
                                <RiDeleteBin5Line />
                            </div>
                        </div>

                    </div></TabsContent>
                <TabsContent value="campaign">
                    <div className='bg-white p-4 border rounded-lg'>
                        <div className='flex justify-between items-center mb-5'>
                            <div>
                                <h3 className='text-lg font-semibold'>Email Campaign</h3>
                                <p className='text-sm text-gray-400'>Create and manage email campaigns for employee communication</p>
                            </div>
                            <div>
                                <Button><FaPlus className='mr-2' />New Campaign</Button>
                            </div>
                        </div>
                        <div className='border rounded-lg p-4 mb-4'>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-5 items-center mb-4'>
                                        <h5 className='text-md font-semibold'>Q1 Performance Goals</h5>
                                        <Badge variant="" className="bg-blue-100 text-blue-700 mr-3 rounded-2xl">sent</Badge>
                                    </div>
                                    <div className='flex gap-4'>
                                        <Button variant="outline"><FaEye /></Button>
                                        <Button variant="outline"><FaRegEdit /></Button>
                                        <Button variant="outline"><HiOutlineDotsHorizontal /></Button>
                                    </div>
                                </div>
                                <div className='flex justify-around mb-4'>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-blue-700'>45</p>
                                        <p className='text-sm text-gray-400'>Recipients</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-green-700'>38</p>
                                        <p className='text-sm text-gray-400'>Opened</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-purple-700'>22</p>
                                        <p className='text-sm text-gray-400'>Recipients</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-orange-700'>58%</p>
                                        <p className='text-sm text-gray-400'>Click Rate</p>
                                    </div>

                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-gray-600'>Template: Performance Review Reminder</p>
                                    <p className='text-gray-600'>Sent: Jan 10, 2024 15:00</p>
                                </div>
                            </div>
                        </div>
                        <div className='border rounded-lg p-4 mb-4'>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-5 items-center mb-4'>
                                        <h5 className='text-md font-semibold'>Q1 Performance Goals</h5>
                                        <Badge variant="" className="bg-blue-100 text-blue-700 mr-3 rounded-2xl">sent</Badge>
                                    </div>
                                    <div className='flex gap-4'>
                                        <Button variant="outline"><FaEye /></Button>
                                        <Button variant="outline"><FaRegEdit /></Button>
                                        <Button variant="outline"><HiOutlineDotsHorizontal /></Button>
                                    </div>
                                </div>
                                <div className='flex justify-around mb-4'>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-blue-700'>45</p>
                                        <p className='text-sm text-gray-400'>Recipients</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-green-700'>38</p>
                                        <p className='text-sm text-gray-400'>Opened</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-purple-700'>22</p>
                                        <p className='text-sm text-gray-400'>Recipients</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-orange-700'>58%</p>
                                        <p className='text-sm text-gray-400'>Click Rate</p>
                                    </div>

                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-gray-600'>Template: Performance Review Reminder</p>
                                    <p className='text-gray-600'>Sent: Jan 10, 2024 15:00</p>
                                </div>
                            </div>
                        </div>
                        <div className='border rounded-lg p-4 mb-4'>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-5 items-center mb-4'>
                                        <h5 className='text-md font-semibold'>Q1 Performance Goals</h5>
                                        <Badge variant="" className="bg-blue-100 text-blue-700 mr-3 rounded-2xl">sent</Badge>
                                    </div>
                                    <div className='flex gap-4'>
                                        <Button variant="outline"><FaEye /></Button>
                                        <Button variant="outline"><FaRegEdit /></Button>
                                        <Button variant="outline"><HiOutlineDotsHorizontal /></Button>
                                    </div>
                                </div>
                                <div className='flex justify-around mb-4'>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-blue-700'>45</p>
                                        <p className='text-sm text-gray-400'>Recipients</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-green-700'>38</p>
                                        <p className='text-sm text-gray-400'>Opened</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-purple-700'>22</p>
                                        <p className='text-sm text-gray-400'>Recipients</p>
                                    </div>
                                    <div className='text-center'>
                                        <p className='text-2xl font-bold text-orange-700'>58%</p>
                                        <p className='text-sm text-gray-400'>Click Rate</p>
                                    </div>

                                </div>
                                <div className='flex justify-between'>
                                    <p className='text-gray-600'>Template: Performance Review Reminder</p>
                                    <p className='text-gray-600'>Sent: Jan 10, 2024 15:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="settings">
                    <div>
                        <div>
                            c
                        </div>
                    </div>
                </TabsContent>
            </Tabs>


        </div>
    );
};

export default Communication;
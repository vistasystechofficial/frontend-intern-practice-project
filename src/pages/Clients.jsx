import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import { LuDownload } from "react-icons/lu";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import GenericTable from '../components/GenericTable';
const Clients = () => {
    const [isLoading, setIsLoading] = useState(false);
    const columnName = [
        { label: "Name", key: "name" },
        { label: "Company", key: "company" },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "Country", key: "country" },
        { label: "Projects", key: "projects" },
        { label: "Status", key: "status" },
        { label: "Actions", key: "actions" },
    ];
    const data = [
        {
            id: 1,
            name: "John Doe",
            company: "Acme Corp",
            email: "john@acme.com",
            phone: "+1 555-1234",
            country: "USA",
            projects: 2,
            status: "Active",
        },
        {
            id: 2,
            name: "Jane Smith",
            company: "—",
            email: "jane@gmail.com",
            phone: "+44 20 1234 5678",
            country: "UK",
            projects: 1,
            status: "Suspended",
        },
        {
            id: 3,
            name: "Globex",
            company: "Globex Ltd",
            email: "info@globex.com",
            phone: "+49 30 123456",
            country: "Germany",
            projects: 3,
            status: "Inactive",
        },
        {
            id: 4,
            name: "Vista",
            company: "Vista Ltd",
            email: "info@vista.com",
            phone: "+49 30 123456",
            country: "Oman",
            projects: 3,
            status: "Suspended",
        },
        {
            id: 5,
            name: "Ringo",
            company: "Ringo Ltd",
            email: "info@ringo.com",
            phone: "121414131",
            country: "Japan",
            projects: 3,
            status: "Suspended",
        },

    ];

   

    const handleEdit = id => {
        console.log("Edit id"+id);
    }
    const handleView = id => {
        console.log("View id"+id);
    }
    const handleDelete = id => {
        console.log("Delete id"+id);
    }
    return (
        <div style={{ height: "calc(100vh - 128px)" }} className='p-10 bg-[#f9f9fa] w-full overflow-y-scroll'>
            <div>
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h3 className='text-2xl font-bold mb-2'>Clients</h3>
                        <p className='text-gray-400'>Total Clients:</p>
                    </div>
                    <div className='text-xl font-semibold'>
                        <Button variant="outline" className="mr-3"><LuDownload className='mr-2' />Export</Button>
                        <Button><FaPlus className='mr-2' />Add New Client</Button>
                    </div>
                </div>
                <div className='p-4 relative flex gap-4 bg-white '>
                    <Input type="text" className="pl-3 text-xl w-[310px]" placeholder="Search by name, email, or company" />
                    <Select>
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all-status">All</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                            <SelectItem value="suspended">Suspended</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all-country">All</SelectItem>
                            <SelectItem value="usa">USA</SelectItem>
                            <SelectItem value="uk">UK</SelectItem>
                            <SelectItem value="germany">Germany</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="allyesno">All</SelectItem>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <GenericTable data={data} columnName={columnName} handleDelete={handleDelete} handleEdit={handleEdit} handleView={handleView}></GenericTable>
        </div>
    );
};

export default Clients;
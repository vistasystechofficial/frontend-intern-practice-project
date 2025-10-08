import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import GenericTable from '../components/GenericTable';
import { useQuery, useQueryClient } from '@tanstack/react-query';
const AMS = () => {

    const queryClient = useQueryClient();
    const columnName = [
        { label: "Employee", key: "name" },
        { label: "Department", key: "department" },
        { label: "Date", key: "date" },
        { label: "Check In", key: "checkIn" },
        { label: "Check Out", key: "checkOut" },
        { label: "Status", key: "status" },
        { label: "Source", key: "source" },
        { label: "Hours", key: "hours" },
        { label: "Actions", key: "actions" },
    ];
    const fetchAmsData = async () => {
        const response = await fetch('/ams.json');
        if (!response.ok) {
            throw new Error('Failed to fetch ams.json');
        }
        return response.json();
    };
    const { data, isLoading } = useQuery({
        queryKey: ['getAMSData'], queryFn: fetchAmsData
    });

    console.log(data);
    // const data = [
    //     {
    //         name: "Alice Owner",
    //         employeeId: "ACME-001",
    //         department: "Executive",
    //         date: "Oct 7, 2025",
    //         checkIn: "--:--",
    //         checkOut: "--:--",
    //         status: "Absent",
    //         source: "N/A",
    //         hours: "0.0h"
    //     },
    //     {
    //         name: "Basic Ali",
    //         employeeId: "VS:1234",
    //         department: "Eng.",
    //         date: "Oct 7, 2025",
    //         checkIn: "--:--",
    //         checkOut: "--:--",
    //         status: "Absent",
    //         source: "N/A",
    //         hours: "0.0h"
    //     },
    //     {
    //         name: "Betty Admin",
    //         employeeId: "ACME-003",
    //         department: "Operations",
    //         date: "Oct 7, 2025",
    //         checkIn: "--:--",
    //         checkOut: "--:--",
    //         status: "Absent",
    //         source: "N/A",
    //         hours: "0.0h"
    //     },
    //     {
    //         name: "Bob Admin",
    //         employeeId: "ACME-002",
    //         department: "Administration",
    //         date: "Oct 7, 2025",
    //         checkIn: "--:--",
    //         checkOut: "--:--",
    //         status: "Absent",
    //         source: "N/A",
    //         hours: "0.0h"
    //     },
    //     {
    //         name: "Charlie Employee",
    //         employeeId: "ACME-004",
    //         department: "Engineering",
    //         date: "Oct 7, 2025",
    //         checkIn: "--:--",
    //         checkOut: "--:--",
    //         status: "Absent",
    //         source: "N/A",
    //         hours: "0.0h"
    //     }
    // ];

    const handleEdit = id => {
        console.log("Edit id" + id);
    }
    const handleView = id => {
        console.log("View id" + id);
    }
    return (
        <div style={{ height: "calc(100vh - 128px)" }} className='p-10 bg-[#f9f9fa] w-full overflow-y-scroll'>
            <div>
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h3 className='text-2xl font-bold mb-2'>Dashboard Analytics & Reporting 📊</h3>
                        <p className='text-gray-400'>Advanced attendance insights and actionable analytics</p>
                    </div>
                    <div className='text-xl font-semibold'>
                        <Button><FaPlus className='mr-2' />Create Template</Button>
                    </div>
                </div>
            </div>
            <GenericTable data={data} columnName={columnName} handleEdit={handleEdit} handleView={handleView} isLoading={isLoading}></GenericTable>
        </div>
    );
};

export default AMS;
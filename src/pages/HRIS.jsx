import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
const HRIS = () => {
    return (
        <div style={{ height: "calc(100vh - 128px)" }} className='p-10 bg-[#f9f9fa] w-full overflow-y-scroll'>
            <div>
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h3 className='text-2xl font-bold mb-2'>HR Dashboard</h3>
                        <p className='text-gray-400'>Company-wide HR insights and management</p>
                    </div>
                    <div className='text-xl font-semibold'>
                        <Button><FaPlus className='mr-2' />Create Template</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRIS;
import React, { useEffect, useRef, useState } from 'react';
import { LuEye } from "react-icons/lu";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { LuClock } from "react-icons/lu";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
const GenericTable = ({ data, columnName, handleDelete, handleEdit, handleView, isLoading }) => {
    const [numberOfRows, setNumberOfRows] = useState(4);
    
    const tableRowPerPage = [4, 8, 12]
    // let numOfPAges = Math.ceil((data.length) / numberOfRows);
    // useEffect(() => {
    //     setStartIndex(0);
    //     setEndIndex(numberOfRows);
    //     //numOfPAges = Math.ceil((data.length) / numberOfRows);

    // }, [numberOfRows])

    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(numberOfRows);
    const getStatusBadgeColor = (status) => {
        if (status === "Active") {
            return "bg-green-100 text-green-700 rounded-lg";
        }
        else if (status === "Suspended") {
            return "bg-yellow-100 text-yellow-700 rounded-lg";
        }
        else if (status === "Inactive") {
            return "bg-slate-200 text-slate-700 rounded-lg"
        }
        else if (status === "Absent") {
            return "bg-red-100 text-red-700 rounded-lg"
        }
        else if (status === "Present") {
            return "bg-green-100 text-green-700 rounded-lg"
        }
        else if (status === "On Leave") {
            return "bg-orange-100 text-orange-700 rounded-lg"
        }
    }

    const handleRowNumber = value => {
        setNumberOfRows(value);
        setStartIndex(0);
        setEndIndex(value);
    }
    return (<>
        <div className='bg-white p-8 rounded-lg mt-8 border'>
            <Table>
                <TableCaption></TableCaption>
                <TableHeader>
                    <TableRow>
                        {columnName.map((col) => (
                            <TableHead key={col.key} className=" h-14 text-gray-600">{col.label}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                {isLoading ? <TableBody>
                    {
                        Array.from({ length: numberOfRows }).map((_, i) => (
                            <TableRow key={i}>
                                {columnName.map(() => (
                                    <TableCell><div className="h-4 w-24 bg-gray-200 rounded animate-pulse" /></TableCell>
                                ))}

                            </TableRow>))}</TableBody> :
                    <TableBody>

                        {data.length > 0 ? (
                            data.slice(startIndex, endIndex).map((row, rowIdx) => (
                                <TableRow key={rowIdx} className="h-12">
                                    {columnName.map((col, colIdx) => {
                                        if (col.key === 'actions') {
                                            return <TableCell key={row[col.key]} className="flex gap-4 text-lg items-center h-12">
                                                {handleView && <button onClick={() => handleView(row.id)}><LuEye /></button>}
                                                {handleEdit && <button onClick={() => handleEdit(row.id)}><BiEdit /></button>}
                                                {handleDelete && <button onClick={() => handleDelete(row.id)}><RiDeleteBin5Line /></button>}
                                            </TableCell>
                                        }
                                        if (col.key === 'status') {
                                            return <TableCell key={row[col.key]} >
                                                <Badge className={`${getStatusBadgeColor(row.status)}`}>{row[col.key]}</Badge>
                                            </TableCell>
                                        }

                                        if (col.key === 'source') {
                                            return <TableCell key={row[col.key]} >
                                                <Badge className="bg-white rounded-lg outline text-black">{row[col.key]}</Badge>
                                            </TableCell>
                                        }
                                        if (col.key === 'checkIn' || col.key === 'checkOut') {
                                            return <TableCell key={colIdx} className="">
                                                <div className='flex items-center gap-1'>
                                                    <LuClock className='text-slate-400' />
                                                    {row[col.key]}
                                                </div>
                                            </TableCell>
                                        }

                                        return <TableCell key={colIdx} className="">
                                            {row[col.key]}
                                        </TableCell>
                                    })}

                                </TableRow>
                            ))) : (<TableRow><TableCell className="font-medium">No Data</TableCell></TableRow>)}
                    </TableBody>}
            </Table>
            {isLoading ? <></> :
                <Pagination className="flex justify-end">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious className={
                                startIndex === 0 ? "pointer-events-none opacity-50" : "border"
                            } onClick={() => {
                                setStartIndex(startIndex - numberOfRows);
                                setEndIndex(endIndex - numberOfRows);
                            }}
                            />
                        </PaginationItem>

                        {
                            [...Array(Math.ceil((data.length) / numberOfRows))].map((_, index) => {
                                if (index >= 4) {
                                    return <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                }

                                return < PaginationItem >
                                    <PaginationLink className={
                                        ((index + 1) * numberOfRows) === endIndex ? "pointer-events-none opacity-50" : "border"} onClick={() => {
                                            setEndIndex((index + 1) * numberOfRows);
                                            setStartIndex((index + 1) * numberOfRows - numberOfRows);

                                        }} >{index + 1}</PaginationLink>
                                </PaginationItem>

                            })

                        }
                        <PaginationItem>
                            <PaginationNext onClick={() => {
                                setStartIndex(startIndex + numberOfRows);
                                setEndIndex(endIndex + numberOfRows);
                            }} className={
                                endIndex > data.length ? "pointer-events-none opacity-50" : "border"
                            } />
                        </PaginationItem>
                        <PaginationItem>
                            <Select value={"" + numberOfRows + ""} onValueChange={handleRowNumber}>
                                <SelectTrigger className="w-[60px]">
                                    <SelectValue placeholder="" />
                                </SelectTrigger >
                                <SelectContent >
                                    <SelectGroup>
                                        {
                                            tableRowPerPage.map((num) =>
                                                <SelectItem value={"" + num + ""}>{num}</SelectItem>
                                            )
                                        }

                                        {/* <SelectItem value="4">4</SelectItem>
                                <SelectItem value="6">6</SelectItem> */}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination >}
        </div>
    </>
    );
};

export default GenericTable;
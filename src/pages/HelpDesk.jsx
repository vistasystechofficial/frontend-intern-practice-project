import React from 'react';
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const HelpDesk = () => {
    const url = window.location.pathname;
    console.log(url);
    return (
        <div style={{ height: "calc(100vh - 128px)" }} className='p-10 bg-[#f9f9fa] w-full overflow-y-scroll'>
            <div>
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h3 className='text-2xl font-bold mb-2'>Help Desk</h3>
                        <p className='text-gray-400'>Submit tickets and get support from our team</p>
                    </div>
                    <div className='text-xl font-semibold'>
                        <Dialog>
                            <form>
                                <DialogTrigger asChild>
                                    <Button><FaPlus className='mr-2' />Create Ticket</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[575px]">
                                    <DialogHeader>
                                        <DialogTitle>Create New Support Ticket</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid gap-4">
                                        <div className="grid gap-1">
                                            <Label htmlFor="ticket-title">Ticket Title *</Label>
                                            <Input className="focus:ring-2 focus:border-black focus:border-2" id="ticket-title" name="ticket-title" placeholder="Brief description of the issue" />
                                        </div>
                                        <div className='grid grid-cols-2 gap-4'>
                                            <div className="grid gap-1">

                                                <Label htmlFor="category">Category *</Label>
                                                <Select>
                                                    <SelectTrigger className="w-full focus:ring-2">
                                                        <SelectValue placeholder="Select Category" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="technical-issue">Technical Issue</SelectItem>
                                                        <SelectItem value="billing">Billing & Licensing</SelectItem>
                                                        <SelectItem value="feature-request">Feature Request</SelectItem>
                                                        <SelectItem value="account-management">Account Management</SelectItem>
                                                        <SelectItem value="other">other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div><div className="grid gap-1">

                                                <Label htmlFor="category">Priority</Label>
                                                <Select>
                                                    <SelectTrigger className="w-full focus:ring-2">
                                                        <SelectValue placeholder="Select Priority" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="low">Low</SelectItem>
                                                        <SelectItem value="medium">Medium</SelectItem>
                                                        <SelectItem value="high">High</SelectItem>
                                                        <SelectItem value="urgent">Urgent</SelectItem>

                                                    </SelectContent>
                                                </Select>
                                            </div>

                                        </div>
                                        <div className="grid gap-1">
                                            <Label htmlFor="description">Description *</Label>
                                            <textarea className='border rounded-lg p-2 h-28 focus:ring-2' id="description" name="description" placeholder="Brief description of the issue" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="outline">Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit">Create Ticket</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </form>
                        </Dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpDesk;
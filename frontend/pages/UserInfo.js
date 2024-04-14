import React from 'react';
import { Button } from "@/components/ui/button"
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"

export function UserInfo() {
    return (
        <Card className="mx-auto max-w-sm justify-center">
            <CardHeader>
            <CardTitle className="text-2xl">User Information</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid gap-4 justify-center">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="w-24">Name</Label>
                            <Input type="name" id="name" placeholder="Enter your name" className="w-64" required style={{ width: "300px", height: "40px" }}/>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="year" className="w-24">Class Year</Label>
                            <Select className="w-64">
                                <SelectTrigger id="year">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="2025">2025</SelectItem>
                                    <SelectItem value="2026">2026</SelectItem>
                                    <SelectItem value="2027">2027</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="time" className="w-24">Housing Time</Label>
                            <form className="max-w-[8rem] mx-auto">
                                <div className="relative">
                                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <input type="time" id="time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" required style={{ width: "300px", height: "40px" }}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
            <Button>Confirm</Button>
            </CardFooter>
        </Card>
    )
}
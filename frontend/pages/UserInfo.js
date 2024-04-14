'use client';
import React from 'react';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/router';
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


function UserInfo() {
    const router = useRouter();
    const handleSubmit = (event) => {
        event.preventDefault();
        router.push('/Pomona'); 
    };

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">User Information</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 justify-center">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="w-24">Name</Label>
                            <Input type="text" id="name" placeholder="Enter your name" className="w-64" required style={{ width: "300px", height: "40px" }}/>
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
                            <Input type="time" id="time" className="block w-full p-3" min="09:00" max="18:00" required/>
                        </div>
                    </div>
                    <CardFooter className="flex justify-center">
                        <Button type="submit" className="w-full">
                            Confirm
                        </Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}

export default UserInfo;

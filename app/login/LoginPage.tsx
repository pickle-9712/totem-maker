"use client"

import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"

export default function LoginPage() {
    return(
        <div className="flex min-h-screen items-center justify-center">
            <Card className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"> 
                <Label className="text-xl w-full justify-center">Login</Label>
                <Label className="">Username</Label>
                <Input></Input>
                <Label className="">Password</Label>
                <Input></Input>
                <Button>Log In</Button>
            </Card>
        </div>
    )

}
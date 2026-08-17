"use client"

import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"



export default function HomePage() {
    const[preview, setPreview] = useState<string | null>(null)

    function imageChanged(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]
        if(file && file.type.startsWith("image/")) {
            setPreview(URL.createObjectURL(file))
        }
        console.log(file)
    }

    function generateClicked() {
        console.log(preview)
    }



    return(
        <div className="flex justify-center p-5">
            <Card className="w-full max-w-2xl">
                <CardHeader className="flex justify-center">
                    <Label className="text-2xl">Totem Maker</Label>
                </CardHeader>
                <CardContent className="">
                    <p>Input an image to generate a resource pack that turns your Minecraft Totem of Undying into that image.</p>
                    <div className="flex flex-col items-center">
                        <Card className="flex items-center justify-center mt-4 bg-gray-50 w-48 h-48 shadow-md">
                            <CardContent className="w-full">
                                {preview && (
                                    <img
                                        src={preview}
                                        alt="Uploaded Preview"
                                        className=""
                                    >
                                    </img>
                                )}
                                <Input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={imageChanged}
                                    className="text-[0px] file:mr-0 file:text-sm"
                                />
                            </CardContent>
                        </Card>
                        <Button onClick={generateClicked} className="w-48 mt-2">Generate Pack</Button>
                    </div>
                </CardContent>
            </Card>
        </div>  
    ) 
}
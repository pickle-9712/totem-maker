"use client"

import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useRef } from "react"
import JSZip from "jszip"


export default function HomePage() {
    const[preview, setPreview] = useState<string | null>(null)
    const[imageFile, setImageFile] = useState<File | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    let packName = "minecraft-totem-pack"

    function imageChanged(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]
        if(file && file.type.startsWith("image/")) {
            setPreview(URL.createObjectURL(file))
            setImageFile(file)
        }
        console.log(file)
    }

    async function generateClicked() {
        if (!imageFile) {
            alert("No image was uploaded.")
            return
        }
        const zip = new JSZip()
        const packMcMeta = {
            "pack": {
                "pack_format": 3,
                "min_format": 3,
                "max_format": 999,
                "description": ""
            }
        }
        zip.file("pack.mcmeta", JSON.stringify(packMcMeta, null, 2))
        zip.file("assets/minecraft/textures/item/totem_of_undying.png", imageFile)
        const blob = await zip.generateAsync({ type: "blob" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = packName+".zip"

        link.click()
        URL.revokeObjectURL(url)
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
                            <CardContent className="w-full flex flex-col items-center justify-center">
                                {preview && (
                                    <img
                                        src={preview}
                                        alt="Uploaded Preview"
                                        className="max-h-34"
                                    >
                                    </img>
                                )}
                                <Input 
                                    ref={inputRef}
                                    type="file" 
                                    accept="image/*" 
                                    onChange={imageChanged}
                                    className="hidden"
                                />
                                <Button 
                                type="button"
                                variant="outline"
                                onClick={() => inputRef.current?.click()}
                                >
                                    Upload Image
                                </Button>
                            </CardContent>
                        </Card>
                        <Button onClick={generateClicked} className="w-48 mt-2">Generate Pack</Button>
                    </div>
                </CardContent>
            </Card>
        </div>  
    ) 
    }
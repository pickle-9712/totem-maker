"use client"

import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { useState, useRef } from "react"
import JSZip from "jszip"
import { Select,SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function HomePage() {
    const[preview, setPreview] = useState<string | null>(null)
    const[imageFile, setImageFile] = useState<File | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [packFormat, setPackFormat] = useState<string | null>(null)
    const [packDescription, setPackDescription] = useState<string | null>(null)
    const [useTotemIcon, setUseTotemIcon] = useState(false)
    const packVersions = [
        {label:"1.11-1.12.2",value:"3"},
        {label:"1.13-1.14.4",value:"4"},
        {label:"1.15-1.16.1",value:"5"},
        {label:"1.16.2-1.16.5",value:"6"},
        {label:"1.17-1.17.1",value:"7"},
        {label:"1.18-1.18.2",value:"8"},
        {label:"1.19-1.19.2",value:"9"},
        {label:"1.19.3",value:"12"},
        { label: "1.20-1.20.1", value: "15"},
        { label: "1.20.2", value: "18"},
        { label: "1.20.3-1.20.4", value: "22"},
        { label: "1.20.5-1.20.6", value: "32"},
        { label: "1.21-1.21.1", value: "34"},
        { label: "1.21.2-1.21.3", value: "42"},
        { label: "1.21.4", value: "46"},
        { label: "1.21.5", value: "55"},
        { label: "1.21.6", value: "63"},
        { label: "1.21.7-1.21.8", value: "64"},
        { label: "1.21.9-1.21.10", value: "69.0"},
        { label: "1.21.11", value: "75.0"},
        { label: "26.1-26.1.2", value: "84.0"},
        { label: "26.2", value: "88.0"},
    ]
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
                "pack_format": Number(packFormat),
                "min_format": 3,
                "max_format": 999,
                "description": packDescription
            }
        }
        zip.file("pack.mcmeta", JSON.stringify(packMcMeta, null, 2))
        zip.file("assets/minecraft/textures/item/totem_of_undying.png", imageFile)
        if(useTotemIcon) {
            zip.file("pack.png", imageFile)
        }
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
                        <div className="mt-5 w-48 flex justify-center">
                            <Select 
                                items={packVersions}
                                value={packFormat}
                                onValueChange={(value) => setPackFormat(value)}
                                >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select the version for your resource pack"></SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {packVersions.map((version) => (
                                            <SelectItem key={version.value} value={version.value}>
                                                {version.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mt-2 mb-2 w-48 flex justify-center">
                            <Input
                                placeholder="Description"
                                onChange={(event) => setPackDescription(event.target.value)}
                            />
                        </div>
                        <div className="mt-2 mb-2 w-48 flex items-center justify-between">
                                <Label>Use Totem As Pack Icon</Label>
                                <Switch
                                    checked={useTotemIcon}
                                    onCheckedChange={setUseTotemIcon }
                                />
                        </div>
                        <Button onClick={generateClicked} className="w-48 mt-2">Generate Pack</Button>
                    </div>
                </CardContent>
            </Card>
        </div>  
    ) 
    }
"use client"

import Button from "@/app/Button";
import { useState } from "react";

export default function page(){
    const [count, setCount] = useState(0)
    return ( 
        <div>
            <div>Totem Generator</div>
            <Button>Hello</Button>
            <Button variant="outline">Hi</Button>
            <Button variant="danger">Generate</Button>
            <div>
                <button onClick={() => {
                    setCount(count+1);
                    console.log(count);
                    }}>{count}</button>
            </div>
        </div>
    )
}
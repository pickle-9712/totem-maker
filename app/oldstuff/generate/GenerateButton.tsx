"use client"

import Button from "@/app/Button"
import { useState } from "react";


export default function page() {

    const [value, setValue] = useState(0);

    function random() {
        console.log("random number generated")
        setValue(Math.random);
    }



    return(

        <div>
            <label>{value}</label>
            <Button onClick={random}>Generate</Button>
        </div>
           )
}
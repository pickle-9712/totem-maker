"use client"
import Button from "../Button"
import { useState } from "react";

export default function page() {
    //let value = 0;
    const [value, setValue] = useState(0);

    const [value1, setValue1] = useState(false);

    function swap() {
        console.log("swap");
        if(value1 == false) {
            setValue1(true);
        }
        if(value1 == true) {
            setValue1(false);
        }
    }

    function add() {
        console.log("add");
        setValue(value+1);

    }

    function subtract() {
        console.log("subtract");
        setValue(value-1);
    }


    return(
        <div>
            <div>
                <Button variant="danger" onClick={subtract}>Subtract</Button>
                <label>{value}</label>
                <Button onClick={add}>Add</Button>
            </div>
            
            <div>
                <Button variant={value1 ? "default": "danger"} onClick={swap}>{value1 ? "true": "false"}</Button>
            </div>
        </div>
    )
}

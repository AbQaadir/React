// Single Selection

// Multiple Selection


import {useState} from "react";
import data from "./data";

export default function Accordian(){

    const [selected, setSelected] = useState(null);



    return (
        <div className={"wrapper"}>
            <div className="accordian">
                {
                    data && data.length > 0 &&
            </div>

        </div>
    )
}
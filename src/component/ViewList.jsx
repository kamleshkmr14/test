import React, { useState } from "react";
//import Select from "react-select"
import data from "./data.json"
//import { Link, Route } from 'react-router-dom';
function ViewList() {
    const [val, setVal] = useState("");
    const [cityd, setCityd] = useState([{"pin":"","street":"","landmark":""}])

    const[flag,setFlag]=useState(false)
    const ShowList=() => {
        data.map((cdata) => {
           
            if (cdata.Name === val) {
                
                setCityd(cdata)
                setFlag(true)
            }
            return (cityd)
        })
    }

    return (
        <div className="main-container">
            <div className="top_header">
                <span>View List</span>
            </div>
            <div className="drop_item">
                <span>City</span>
                <select onClick={(e) => setVal(e.target.value)}>
                    {data.map((detail, index) => {
                        return <option key={index} >{detail.Name}</option>
                    })}
                </select>
            </div>
            <div className="action_btn">
                <button onClick={()=>setFlag(false)}>Clear</button>
                <button onClick={ShowList}>Run</button>

            </div>
            {flag &&<div>
            <div className="table_container">
            <table>
                <thead className="tblhd">
                    <tr>
                        <th>NAME</th>
                        <th>POSTAL</th>
                        <th>STREET</th>
                        <th>LANDMARK</th>
                    </tr>
                </thead>
                <tbody>
                    {cityd.area.map((det, ind) => {
                        return<tr key={ind}> 
                        <td >{cityd.Name}</td>
                        <td >{det.pin}</td>
                        <td >{det.street}</td>
                        <td >{det.landmark}</td>
                    </tr>})}
                </tbody>
            </table>
                    </div>
                   <div className="export_btn"><button>EXPORT</button></div></div>}
        </div>

    );
}
export default ViewList;
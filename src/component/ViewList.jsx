 import React,{useState} from "react";
 //import Select from "react-select"
 import data from "./data.json"
 import { Link, Route } from 'react-router-dom';

function ViewList(){
    let [value, setValue] = useState("");
    const ShowList = (value) => {
        return(
            <div className="table_container">
            <table>
                <thead class="tblhd">
                    <tr>
                        <th>NAME</th>
                        <th>POSTAL</th>
                        <th>STREET</th>
                        <th>LANDMARK</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((det, ind) => {
                        return<tr> 
                        <td>{}</td>
                        <td>{det.area.pin}</td>
                        <td>{det.area.street}</td>
                        <td>{det.area.landmark}</td>
                    </tr>})}
                </tbody>
            </table>
        </div>
        )
        }
    
    return(
        <div className="main-container">
        <div className="top_header">
         <span>View List</span>
        </div>
        <div className="drop_item">
            <span>City</span>
            <select onClick={(e) => setValue(e.target.value)}>
                {data.map((detail,index)=>{
                return <option key={index} >{detail.Name}</option> 
            })}
            </select>
            <h4>{value}</h4>
        </div>
        <div className="action_btn">
            <button>Clear</button>
            <button onClick={ShowList}>Run</button>

           {/* <Link to="/ShowList"> <button >RUN</button></Link>
            <Route path="/ShowList"> <ShowList /></Route>*/}
        </div>
           </div>
    );
}
export default ViewList;
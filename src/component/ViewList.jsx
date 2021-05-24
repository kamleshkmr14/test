 import React,{useState} from "react";
 import data from "./data.json"
 import ShowList from "./ShowList"
 import { Link, Route } from 'react-router-dom';

function ViewList(){
    let [value, setValue] = useState("Patna");
    return(
        <div class="main-container">
        <div class="top_header">
            <span>View List</span>
        </div>
        <div class="drop_item">
            <span>City</span>
            <select>
                {data.map((detail,index)=>{
                return <option value={detail.id}>{detail.Name}</option>
                
            })}
            </select>
        </div>

        <div class="action_btn">
            <button>Clear</button>
            <Link to="/ShowList"> <button >RUN</button></Link>
            <Route path="/ShowList"> <ShowList /></Route>
        </div>

           </div>
    );
}
export default ViewList;
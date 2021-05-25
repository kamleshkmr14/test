 import React,{useState} from "react";
 import data from "./data.json"
 import ShowList from "./ShowList"
 import { Link, Route } from 'react-router-dom';

function ViewList(){
    let [value, setValue] = useState();
    return(
        <div className="main-container">
        <div className="top_header">
            <span>View List</span>
        </div>
        <div className="drop_item">
            <span>City</span>
            <select onChange={()=>setValue()}>
                {data.map((detail,index)=>{
                return <option key={index}>{detail.Name}</option>
                
            })}
            </select> <p>{value}</p>
        </div>

        <div className="action_btn">
            <button>Clear</button>
            <Link to="/ShowList"> <button >RUN</button></Link>
            <Route path="/ShowList"> <ShowList /></Route>
        </div>

           </div>
    );
}
export default ViewList;
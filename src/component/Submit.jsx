import React from "react"
import data from "./data.json"
export default function Submit() {
    return(
        <div class="main-container">
        <div class="top_header">
            <span>Submit</span></div>
        <div class="main-container">
        <div class="top_header">
            <span>Name</span></div>
            <input type ="text"/><br/>
        </div>
        <div class="main-container">
            <div class="top_header">
             Deatils|Summery</div>
        Notes <br/>
        <textarea name="notes">Enter text here...</textarea><br/>
        <h4>Status</h4>
        <input type="radio" id="Yes" name="Status" value="Yes"/>
            <label for="Yes">Yes</label>
        <input type="radio" id="NO" name="Status" value="No"/>
            <label for="No">NO</label><br/><ul>           {data.map((detail,index)=>{
                return <li value={detail.id}>{detail.Name}</li>
                
            })}</ul>
        </div>
 
        </div>
    );
}
import React,{useEffect} from "react"
export default function ViewList() {
    useEffect(() => {
        document.title = "View List"
     }, []);
    return(
        <div className="container">
        <span><label>City</label></span>
        <select>
            <option>option1</option>
            <option>option2</option>
        </select>
        <br/><br/><button>Clear</button>&nbsp;
        <button>Run</button>
        </div>
    );
}
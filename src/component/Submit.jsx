import React,{useEffect} from "react"
export default function Submit() {
    useEffect(() => {
        document.title = "Submit"
     }, []);
    return(
        <>
        <div className="container">
            <input type ="text"/><br/>
        </div>
        </>
    );
}
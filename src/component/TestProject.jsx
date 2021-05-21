import React,{useEffect} from "react"
import './TestProject.css'
export default function TestProject() {
    useEffect(() => {
        document.title = "Test Project"
     }, []);
    return(
        <div className="container">
        <br/><br/><button>Submit</button>
        <br/><br/><button>View List</button>
        <br/><br/><button>Help</button><br/>
        </div>
    );
}
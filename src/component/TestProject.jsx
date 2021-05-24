import React, { useEffect } from "react";
import { Link, Route } from 'react-router-dom';
import ViewList from "./ViewList";
export default function TestProject() {
    useEffect(() => {
        document.title = "Test Project"
    }, []);

    return (

        <div className="main-container">
            <div className="top_header">
                <span>Test Project</span></div>
                <div className="btn_list">
                    <button>Submit</button>
                        <Link to="/ViewList"><button>View List</button></Link>
                    <button>Help</button>
                    <Route path="/ViewList"> <ViewList /></Route>
                </div>
            </div>
    );
}
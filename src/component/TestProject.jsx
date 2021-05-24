import React, { useEffect } from "react";
import { Link, Route } from 'react-router-dom';
import ViewList from "./ViewList";
import Submit from "./Submit"
export default function TestProject() {
    useEffect(() => {
        document.title = "Test Project"
    }, []);

    return (

        <div className="main-container">
            <div className="top_header">
                <span>Test Project</span></div>
                <div className="btn_list">
                <Link to="/Submit"><button>Submit</button></Link>
                <Link to="/ViewList"><button>View List</button></Link>
                <button>Help</button>
                    <Route path="/ViewList"> <ViewList /></Route>
                    <Route path="/Submit"> <Submit /></Route>
                </div>
            </div>
    );
}
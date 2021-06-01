import React from "react"
import data from "./data.json"
import './submit.css';
export default function Submit() {
    return(
        <div className="main-container">
      <div className="top_header">
        <span>Submit</span>
      </div>
      <div className="name_box">
        <span>NAME</span>
        <div>
          <input type="text" name="name" id="name_input" />
        </div>
        <a href="https://www.google.com/">Link</a>
      </div>

      <div className="details_box">
        <div className="btn_grp">
          <button>DETAILS</button>
          <button>SUMMARY</button>
        </div>

        <div className="notes_box">
          <label htmlFor="notes">Notes</label>
          <textarea id="notes" name="notes" rows="4"></textarea>
        </div>

        <div className="radio_grp">
          <span>Status</span>
          <div>
              <span>
                  <input type="radio" id="yes" name="status" value="yes" />
                  <label htmlFor="yes">Yes</label>
              </span>
              <span>
                  <input type="radio" id="no" name="status" value="no" />
                  <label htmlFor="no">No</label>
              </span>
          </div>
        </div>

        <div className="list_box">
            <div className="list_a">
                <span>List A</span>
                <div className="list_a_box">
                    <span>DRAG</span>
                    <span>AND</span>
                    <span>DROP</span>
                    <span>FEATURE</span><br/>
                </div>
            </div>
            <div className="list_b">
                <span>List B</span>
                <div className="list_b_btn_grp">
                {data.map((detail,index)=>{return <button key={index}>{detail.Name}</button> })}
                
                </div>
            </div>
        </div>
    </div>
    <div className="action_btn">
        <button>Cancel</button>
        <button>Save</button>
    </div>
    </div>
    );
}
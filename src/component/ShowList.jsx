import React from "react";
import data from "./data.json"
function ShowList() {
    return (
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
                    {data.map((detail, index) => {
                        return<tr> 
                        <td>{detail.Name}</td>
                        <td>{detail.area.pin}</td>
                        <td>{detail.area.street}</td>
                        <td>{detail.area.landmark}</td>
                    </tr>})}
                </tbody>
            </table>
        </div>
    );
}
export default ShowList;
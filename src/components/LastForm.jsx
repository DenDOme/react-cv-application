import { useState } from "react";
import '../assets/topForm.css'

function LastForm({mode}){
    const [cv ,setCV] = useState({company: '', position: '', responsibilities: '', startDate: '', endDate: '' });

    if(mode){
        return (
            <div className="form">
                <label htmlFor="company">Company</label>
                <input
                    id="company"
                    type="text"
                    value={cv.company}
                    onChange={(event) => {setCV({...cv, company : event.target.value})}}
                />
                <label htmlFor="position">Position</label>
                <input
                    id="position"
                    type="text"
                    value={cv.position}
                    onChange={(event) => {setCV({...cv, position: event.target.value})}}
                />
                <label htmlFor="responsibilities">Main responsibilities of job</label>
                <input
                    id="responsibilities"
                    type="text"
                    value={cv.responsibilities}
                    onChange={(event) => {setCV({...cv, responsibilities: event.target.value})}}
                />
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="startDate">Start date of job</label>
                        <input
                            id="startDate"
                            type="date"
                            value={cv.startDate}
                            onChange={(event) => {setCV({...cv, startDate: event.target.value})}}
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="endDate">End date of job</label>
                        <input
                            id="endDate"
                            type="date"
                            value={cv.endDate}
                            onChange={(event) => {setCV({...cv, end: event.target.value})}}
                        />
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                <h3>Company</h3>            
                <p>{cv.company}</p>
                <h3>Position</h3>            
                <p>{cv.position}</p>
                <h3>Main responsibilities</h3>            
                <p>{cv.responsibilities}</p>
                <h3>Start Date</h3>            
                <p>{cv.startDate}</p>
                <h3>End Date</h3>            
                <p>{cv.endDate}</p>
            </div>
        )
    }
}

export default LastForm
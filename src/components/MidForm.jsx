import { useState } from 'react'
import '../assets/topForm.css'

function MidForm({mode}){
    const [cv ,setCV] = useState({school: '', title: '', date: ''})

    if(mode){
        return (
            <div className='form'>
                <label htmlFor="school">School</label>
                <input
                    id="school"
                    type="text"
                    value={cv.school}
                    onChange={(event) => {setCV({...cv, school : event.target.value})}}
                />
                <label htmlFor="title">Title of study</label>
                <input
                    id="title"
                    type="text"
                    value={cv.title}
                    onChange={(event) => {setCV({...cv, title: event.target.value})}}
                />
                <label htmlFor="date">Date of study</label>
                <input
                    id="date"
                    type="date"
                    value={cv.date}
                    onChange={(event) => {setCV({...cv, date: event.target.value})}}
                />
            </div>
        )
    }
    else{
        return (
            <div>
                <h3>School</h3>
                <p>{cv.school}</p>
                <h3>Title of study</h3>
                <p>{cv.title}</p>
                <h3>Date of study</h3>
                <p>{cv.date}</p>
            </div>
        )
    }
}

export default MidForm
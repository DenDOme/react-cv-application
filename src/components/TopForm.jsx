import { useState } from "react";
import '../assets/topForm.css'

function TopForm({mode}){
    const [cv, setCV] = useState({username: '', email: '', phone: ''});
    
    if(mode){
        return(
            <div className="form">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={cv.username}
                    onChange={(event) => {setCV({...cv, username : event.target.value})}}
                />
                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    type="email"
                    value={cv.email}
                    onChange={(event) => {setCV({...cv, email: event.target.value})}}
                />
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    type="tel"
                    value={cv.phone}
                    onChange={(event) => {setCV({...cv, phone: event.target.value})}}
                />
                
            </div>
        )
    }

    else{
        return (
            <div>
                <h3>Username</h3>
                <p>{cv.username}</p>
                <h3>E-mail</h3>
                <p>{cv.email}</p>
                <h3>Phone</h3>
                <p>{cv.phone}</p>
            </div>
        )
    }
}

export default TopForm
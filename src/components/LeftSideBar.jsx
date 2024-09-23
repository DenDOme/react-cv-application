import { useState, useEffect } from "react";
import '../assets/LeftSideBar.css'

function LeftSideBar({cv, handleCvChange, addItemsToArray}){


    
    return (
        <div className="left-side-bar">
            <input 
                type="text"
                value={cv.username}
                onChange={(e)=>{handleCvChange(e, 'username')}}
                placeholder="Enter username"
            />
            <input 
                type="text"
                value={cv.email}
                onChange={(e)=>{handleCvChange(e, 'email')}}
                placeholder="Enter email"
            />
            <input 
                type="text"
                value={cv.phone}
                onChange={(e)=>{handleCvChange(e, 'phone')}}
                placeholder="Enter phone number"
            />
            <div>
                {cv.schools.map((item, index) => {
                    return (
                        <div key={index}>
                            <input
                                type="text"
                                value={item.school}
                                onChange={(e)=>{handleCvChange(e, 'schools', index,'school')}}
                            />
                            <input
                                type="text"
                                value={item.title}
                                onChange={(e)=>{handleCvChange(e, 'schools', index,'title')}}
                            />
                            <input
                                type="text"
                                value={item.date}
                                onChange={(e)=>{handleCvChange(e, 'schools', index,'date')}}
                            />
                        </div>
                    )
                })}
                <button onClick={()=>{addItemsToArray({school: '', title: '', date: ''}, 'schools')}}>Add School</button>
            </div>
            
        </div>
    )
}

export default LeftSideBar
import { useState, useEffect } from "react";
import '../assets/LeftSideBar.css'
import TopButtons from "./TopButtons";

function LeftSideBar({cv, handleCvChange, addItemsToArray, resetAll, importExample}){


    
    return (
        <div>
            <div className="left-side-bar">
                <TopButtons resetAll={resetAll} importExample={importExample} />
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
                    <div className="left-side-top">
                        <h3>Add School</h3>
                        <button className="" onClick={()=>{addItemsToArray({school: '', title: '', date: ''}, 'schools')}}></button>
                    </div>
                    <div className="column">
                    {cv.schools.map((item, index) => {
                        return (
                            <div className="column-item" key={index}>
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
                    </div>
                    
                </div>
                
                <div>
                    <h3>Add Company</h3>
                    <div className="column">
                    {cv.companies.map((item, index) => {
                        return (
                            <div className="column-item" key={index}>
                                <input
                                    type="text"
                                    value={item.company}
                                    onChange={(e)=>{handleCvChange(e, 'companies', index,'company')}}
                                />
                                <input
                                    type="text"
                                    value={item.position}
                                    onChange={(e)=>{handleCvChange(e, 'companies', index,'position')}}
                                />
                                <input
                                    type="text"
                                    value={item.responsibilities}
                                    onChange={(e)=>{handleCvChange(e, 'companies', index,'responsibilities')}}
                                />
                                <input
                                    type="date"
                                    value={item.startDate}
                                    onChange={(e)=>{handleCvChange(e, 'companies', index,'startDate')}}
                                />
                                <input
                                    type="date"
                                    value={item.endDate}
                                    onChange={(e)=>{handleCvChange(e, 'companies', index,'endDate')}}
                                />
                            </div>
                        )
                    })}
                    </div>
                    <button onClick={()=>{addItemsToArray({company: '', position: '', responsibilities: '', startDate: '', endDate: '' }, 'companies')}}>Add Company</button>
                </div>
                
            </div>
        </div>
    )
}

export default LeftSideBar
import React from 'react'


const name = "Chinu"
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

export default function Challenge02(){
    return(
        <>
            <div className="container">
                <h1>{name}</h1>
                <p>Current Date : {currDate}</p>
                <p>Current Time : {currTime}</p>
            </div>
        </>
    )
}
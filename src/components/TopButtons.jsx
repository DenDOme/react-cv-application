import { useState, useEffect } from "react";

function TopButtons({importExample, resetAll}){


    return (
        <>
            <button onClick={() => {resetAll()}}>Reset All</button>
            <button onClick={() => {importExample()}}>Import example</button>
        </>
    )
}

export default TopButtons
function Button({mode, func}){

    if(mode){
        return (
            <button onClick={func}> CONFIRM</button>
        )
    }
    else{
        return (
            <button onClick={func}> UPDATE</button>
        )
    }

}

export default Button
import '../assets/RightSideBar.css'

function RightSideBar({cv}){
    return (
        <div className="cv">
            <div className="cv-top">
                <h3 className="cv-username">{cv.username}</h3>
                <div className="cv-top__row">
                    <a href="">{cv.email}</a>
                    <a href="">{cv.phone}</a>
                </div>
            </div>
            <div className="cv-main">
                <div className="cv-main__school">
                    {cv.schools.map((item,index) => {
                        return(
                        <div key={index}>
                            <p>{item.school}</p>
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                        </div>
                        )
                    })}
                </div>
                <div className="cv-main__company">
                    {cv.companies.map((item,index) => {
                        return(
                        <div key={index}>
                            <p>{item.school}</p>
                            <p>{item.title}</p>
                            <p>{item.date}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RightSideBar
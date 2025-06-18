import React from "react"

const Info = () => {
    return (
        <div className="about_info grid">

            <div className="about_box">
                <i className="bx bx-award about_icon"></i>
                <h3 className="about_title">
                    Education
                </h3>
                <span className="about_subtitle">
Final-Year  | Data Analytics Focus
                </span>
            </div>

            <div className="about_box">
              
                <i class='bx bx-code-alt about_icon'></i>
                <h3 className="about_title">
                    Completed
                </h3>
                <span className="about_subtitle">5 + Projects</span>
            </div>

            <div className="about_box">
                
                <h3 className="about_title">
                    Languages :
                </h3>
                <div>
                <p className="about_subtitle">English</p>
                <p className="about_subtitle">Telugu</p>
                <p className="about_subtitle">Hindi</p>
               </div>
              
            </div>

        </div>
    )
}
export default Info
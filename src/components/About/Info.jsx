import React from "react"

const Info = () => {
    return (
        <div className="about_info grid">

            <div className="about_box">
                <i className="bx bx-award about_icon"></i>
                <h3 className="about_title">
                    Experience
                </h3>
                <span className="about_subtitle"> 2 Years Working</span>
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
                <h3 className="about_title">
                   English
                </h3>
                <h3 className="about_title">
                    Telugu
                </h3>
                <h3 className="about_title">
                    Hindi
                </h3>
              
            </div>

        </div>
    )
}
export default Info
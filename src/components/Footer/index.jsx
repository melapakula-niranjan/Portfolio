import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
              
                <h1 className="footer_title">
                    Niranjan
                </h1>
              
                <ul className="footer_list">
                    <li className="
            ">
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li className="
            ">
                        <a href="#skills" className="footer_link">Skills</a>
                    </li>

                    <li className="
            ">
                        <a href="#about" className="footer_link">Projects</a>
                    </li>
                </ul>
                <div className="footer_social">
                    <a href="https://github.com/melapakula-niranjan" className="footer_social_link" target="_blank">

                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/niranjan-melapakula-46448424b/" className="footer_social_link" target="_blank">

                    <i class='bx bxl-linkedin-square'></i>
                    </a>
                </div>
                <span className="footer_copy">
                    &#169; Niranjan all rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer

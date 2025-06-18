import React from "react"
import Info from "./Info"
import "./about.css"

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>
            <div className="about_container container grid">
                <img src="/assets/Niranjan.jpg" alt="my-image" className="about_img" />
                <div className="about_data">
                    <Info />
                    <p className="about_description">

                    I’m a creative data enthusiast who loves tackling real-world challenges with analytical thinking and innovative solutions. I enjoy uncovering patterns, building predictive models, and turning complex data into impactful insights using Python, SQL, and R. Passionate about solving problems through code, storytelling with data, and designing intelligent solutions that drive decisions.
                    </p>
                    <a download href="/assets/Niranjan  CV Resume.pdf" className="button1">
                        Download CV<i class='bx bxs-report bx-flashing' ></i>
                    </a>
                    <a download href="/assets/Niranjan(ASAC) Ressume.pdf" className="button1 btn2">
                      Resume<i class='bx bxs-report bx-flashing' ></i>
                    </a>
                    
                </div>

            </div>
        </section>
    )
}
export default About
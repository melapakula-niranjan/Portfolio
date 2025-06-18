import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    const [ToogleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">
                what i offer
            </span>
            <div className="services_container container grid">
                <div className="services_content">
                    <div className="">
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">Frontend Developer</h3>
                    </div>
                    <span className="services_button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services_button_icon">
                        </i>
                    </span>
                    <div className={ToogleState === 1 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={() => toggleTab(0)}>

                            </i>
                            <h3 className="services_modal_title">
                        Frontend Developer

                            </h3>
                            <p className="services_modal_description">
                           I’m a final-year Computer Science student skilled in creating responsive and user-friendly web interfaces.
                            </p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                       Develop interactive and modern UI components.

                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                   Build and style web pages using HTML, CSS, JavaScript, and React.


                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                   Collaborate on UX design to enhance user experience.

                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                  Focus on performance, accessibility, and cross-browser compatibility.
                                    </p>
                                </li>

                                



                            </ul>
                        </div>
                    </div>



                </div>


                <div className="services_content">
                    <div className="">
                        <i className="bx bx-terminal services_icon"></i>
                        <h3 className="services_title">Data Analyst</h3>
                    </div>
                    <span className="services_button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services_button_icon">
                        </i>
                    </span>
                    <div className={ToogleState === 3 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={() => toggleTab(0)}>

                            </i>
                            <h3 className="services_modal_title">
                            Data Analyst
                            </h3>
                            <p className="services_modal_description">
                            I’m a final-year Computer Science student passionate about turning data into actionable insights.

                            </p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Analyze datasets to uncover patterns and trends.

                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                  Build dashboards and reports using tools like Power BI and Tableau.

                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Write SQL queries to extract, clean, and transform data.

                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                 Use Python and R for statistical analysis and predictive modeling.

                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                   Communicate findings clearly to support data-driven decisions.
                                    </p>
                                </li>



                            </ul>
                        </div>
                    </div>



                </div>

                <div className="services_content">
                    <div className="">
                        <i className="bx bxs-data services_icon"></i>
                        <h3 className="services_title">Database Designer</h3>
                    </div>
                    <span className="services_button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services_button_icon">
                        </i>
                    </span>
                    <div className={ToogleState === 2 ? "services_modal active_modal" : "services_modal"}>
                        <div className="services_modal_content">
                            <i className="uil uil-times services_modal_close" onClick={() => toggleTab(0)}>

                            </i>
                            <h3 className="services_modal_title">
                            Database Designer
                            </h3>
                            <p className="services_modal_description">
                           Final-year Computer Science student with strong database skills and hands-on project experience.

                            </p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    I design and implement database structures.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Optimize database performance and queries
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Ensure data integrity and security.
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Create and manage database documentation
                                    </p>
                                </li>

                                <li className="services_modal_service">
                                    <i className="uil uil-check-circle services_modal_icon">

                                    </i>
                                    <p className="services_modal_info">
                                    Provide data migration and integration solutions
                                    </p>
                                </li>



                            </ul>
                        </div>
                    </div>



                </div>

            </div>
        </section>
    )
}

export default Services

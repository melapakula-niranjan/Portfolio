import React, { useState } from 'react'
import "./qualification.css"
const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (

    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">
        My Personal Journey
      </span>
      <div className="qualification_container container">

        <div className="qualification_tabs_side">
          <div className="qualification_tabs">
            <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" :
              "qualification_button  button--flex"
            } onClick={() => toggleTab(1)}>
              <i className="uil uil-graduation-cap qualification_icon">

              </i>
              Education
            </div>
          </div>

          <div className="qualification_tabs">
            <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" :
              "qualification_button  button--flex"
            } onClick={() => toggleTab(2)}>
              <i className="bx bx-line-chart qualification_icon">

              </i>
              Experience
            </div>
          </div>
        </div>

        <div className="qualification_sections">
          <div className={toggleState === 1 ? "qualification_content qualification_content_active"
            : "qualification_content"
          }>

            {/* <div className="qualification_data">

              <div className="">
                <h3 className="qualification_title">
                Full Stack Developer (MERN)
                </h3>
                <span className="qualification_subtitle">
                  NxtWave
                </span>
                <div className="qualification_calander">
                  <i className="uil uil-calendar-alt calander_icon">

                  </i>
                  2022-Present
                </div>
              </div>



              <div className="">
                <span className="qualification_rounder">

                </span>
                <span className="qualification_line">

                </span>
              </div>
              
            </div> */}

            <div className="qualification_data">
              <div className="">

              </div>

              <div className="">
                <span className="qualification_rounder">

                </span>
                <span className="qualification_line">

                </span>
              </div>
              <div className="">
                <h3 className="qualification_title">
                 Computer Science Engineering
                </h3>
                <span className="qualification_subtitle">
                Alliance University,Banglore
                </span>
                <span className="qualification_subtitle">
                7.9 CGPA
                </span>
                <div className="qualification_calander">
                  <i className="uil uil-calendar-alt calander_icon">

                  </i>
                  2022-2026
                </div>
              </div>




            </div>

            <div className="qualification_data">

              <div className="">
                <h3 className="qualification_title">
                  INTER
                </h3>
                <span className="qualification_subtitle">
                  Sri Chaithanya Jr college
                </span>
                <span className="qualification_subtitle">
                  75.84 %
                </span>
                <div className="qualification_calander">
                  <i className="uil uil-calendar-alt calander_icon">

                  </i>
                  2020-2022
                </div>
              </div>



              <div className="">
                <span className="qualification_rounder">

                </span>
                <span className="qualification_line">

                </span>
              </div>
            </div>

            <div className="qualification_data">
              <div className="">

              </div>

              <div className="">
                <span className="qualification_rounder">

                </span>
                <span className="qualification_line">

                </span>
              </div>
              <div className="">
                <h3 className="qualification_title">
                  SSC
                </h3>
                <span className="qualification_subtitle">
                  Keshava Reddy EM High School
                </span>
                <span className="qualification_subtitle">
                 88.1 %
                </span>
                <div className="qualification_calander">
                  <i className="uil uil-calendar-alt calander_icon">

                  </i>
                  2019-2020
                </div>
              </div>




            </div>


          </div>

          <div className={toggleState === 2 ? "qualification_content qualification_content_active"
            : "qualification_content"
          }>

            

            <div className="qualification_data">

              <div className="">
                <h3 className="qualification_title">
                 Searching for Oppurnities
                </h3>
                <span className="qualification_subtitle">
                  
                </span>
                <div className="qualification_calander">
                  <i className="uil uil-calendar-alt calander_icon">

                  </i>
                  Present
                </div>
              </div>



              <div className="">
                <span className="qualification_rounder">

                </span>
                <span className="qualification_line">

                </span>
              </div>
            </div>

            <div className="qualification_data">
              <div className="">

              </div>

              <div className="">
                <span className="qualification_rounder">

                </span>
                <span className="qualification_line">

                </span>
              </div>
              <div className="">
                <h3 className="qualification_title">
                   5 + Projects
                </h3>
                <span className="qualification_subtitle">
                  
                </span>
                <div className="qualification_calander">
                  2024-2025
                </div>
              </div>




            </div>


          </div>

        </div>

      </div>
    </section>

  )
}

export default Qualification


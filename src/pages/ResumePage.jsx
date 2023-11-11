
import { useState } from "react";

export default function ResumePage() {
    const [section, setSection]=useState(false)
    console.log(section);
    return (
        
      <div>
        <div><a href="#resume" onClick={() => setSection(!section)}><h1 id="resume">RESUME</h1></a></div>
        { section ?
            <div className="textion">
                <div>
                    <h2>Work Experience:</h2>
                    
                    <h4>University of Washington Bothell School of Science, Technology, Engineering & Mathematics</h4>
                    (Oct - Nov 2023)
                    <h4>UX Graduate Project Assistant</h4>
                    <p>Helped maintain project documentation, including research findings, design iterations, and project 
                    timelines. Conduct literature reviews, competitive analyses, and user interviews to inform project decisions.
                    Compile and analyze user feedback through surveys, usability testing, and other research methods.
                    Work closely with Software Engineers to generate insights that contribute to design improvements.</p>

                    <h4>University of Washington Bothell School of Business</h4> 
                    (Feb 2023 - August 2023)
                    <h4>Event Coordinator:</h4>
                    <p>Spearheaded the planning and execution of the Tax Ethics Conference, granting CPE/CPA Credits certified through the Washington State Board of Accountancy.
                    Provided administrative support to the School of Business, utilizing HR knowledge, graphic design, site management, and correspondence with stakeholders.
                    Led the organization and execution of the Mentorship Edge Program, including graphic design, web development, and events. Also served on the Scholarship Committee.
                    Managed event budgets and other purchases for the School of Business.</p>
                    
                    <h4>University of Washington School of Law</h4> 
                    (Jan 2022 - Sep 2022) 
                    <h4>HR Coordinator:</h4>
                    <p>Delivered administrative support during the hiring process, including drafting offer letters, creating job ads, and corresponding with candidates.
                    Scheduled interviews and established candidate webpages for Academic Faculty and Dean Review.
                    Audited I-9 authorization for new hires to ensure compliance with regulations.
                    Managed employee transactions in Workday Systems through HCM Initiate 2 Role.</p> 


                    <h4>University of Washington</h4> 
                    (Oct 2021 - Jan 2022) 
                    <h4>International Freshman Application Processor:</h4>
                    <p>Updated client records with personal data, including residency and visa information.
                    Managed documentation of grade calculations and workload flow.
                    Wrote professional correspondence and verified past educational history to ensure admission standards.</p>

                    <h4>Boston University </h4>
                    (Sep 2017 - Mar 2020) 
                    <h4>Interlibrary Loan Assistant:</h4>
                    <p>Mediated and assisted in providing research resources to university and art museum libraries nationally and globally.
                    Excelled in office management, compiling and maintaining records.
                    Achieved cost-savings through functional solutions to packaging and shipping problems.</p>

                    <h2>Skills:</h2>
                    <h4>HR/Administration:</h4> 
                    <p>Offer letters, job postings, onboarding, timecard processing, coordination of meetings.</p>

                    <h4>Event Coordination:</h4> 
                    <p>Planning, budget management, graphic design, web development.</p>

                    <h4>Communication:</h4> 
                    <p>Correspondence with stakeholders, professional writing.</p>

                    <h4>Software Proficiency:</h4> 
                    <p>Full Stack Development, Microsoft Office, SPSS, Adobe Suite, Mailchimp, Zoom, Workday.</p>
                    <h4>Personal Attributes:</h4>
                    <p>Adaptable team player with an outgoing, positive demeanor.
                    Proven organization and communication skills.
                    Jamie Han's diverse experience and skill set make her a valuable asset with a strong foundation in Web Development, UX Testing, HR, event coordination, and administration.
                    </p>
                    <ul>
                    <h2>EDUCATION</h2>
                    <h3 style={{color:"red"}}>BOSTON UNIVERSITY</h3>
                    <p>Bachelor of Arts in Psychology</p>
                    <h3 style={{color:"blue"}}>UCLA Extension Full Stack Development</h3>
                    <p>Certfication</p>
                    </ul>
                </div>    
            </div> : null
        }
      </div>
    );
  }
  
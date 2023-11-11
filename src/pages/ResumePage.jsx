
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
                    <h2>JAMIE HAN</h2>
                    <ul>
                    Jamie possesses a Bachelor of Arts in Psychology from Boston University and 6+ years of HR/Administrative experience working with Boston University and University of Washington.
                    In her current position as an Event Coordinator with UW, Jamie drafted offer letters, created job postings, submitted onboarding documentation, processed timecards in Workday, and coordinated faculty meetings.
                    Offering additional experience as an International Freshmen Application Processor with UW, Jamie was auditing documentation, verifying education, and providing administrative support.
                    Jamie is an adaptable team player with an outgoing, positive demeanor, and proven organization and communication skills.
                    Proficient in Microsoft Office (Outlook, Excel, PowerPoint, Word, Teams), HTML, Python, SPSS, Adobe Photoshop, Adobe InDesign, Mailchimp, Zoom, and Workday.
                    </ul>
                    <ul>
                    <h2>WORK EXPERIENCE</h2>
                    <h2>UNIVERSITY OF WASHINGTON SCHOOL OF LAW</h2>                                      January 2022 - September 2022
                    <h3>HR Coordinator</h3>
                    Delivered Administrative Support to the UW Law HR Department during the hiring process- drafted offer letters, created job ads for internal and external sites, established correspondence with potential Professorial, Work-study and Research candidates
                    Scheduled candidate and director interviews, established candidate webpages for Academic Faculty and Dean Review
                    Audited I-9 authorization for New Hires (both international and US National) to ensure UW compliance with I-9 regulations
                    Hired, terminated, and retired employees in Workday Systems through HCM Initiate 2 Role
                    </ul>
                    <ul>
                    <h2>UNIVERSITY OF WASHINGTON SEATTLE</h2>                                            October 2021 - January 2022
                    <h3>International Freshman Application Processor</h3>
                    Updated client records with personal data, including relevant residency and visa information
                    Maintained formal documentation of grade calculation and managing backend workload flow for coworkers and superiors.
                    Wrote professional correspondence for relevant parties, including between different organizations, leagues, and members.
                    Verified past educational history by former schools and educational institutes to ensure applicants meet admission standards.
                    </ul>
                    
                    <ul>
                    <h2>EDUCATION</h2>
                    <h3>BOSTON UNIVERSITY</h3>
                    <ul>Bachelor of Arts in Psychology</ul>
                    <ul>UCLA Extension Full Stack Development</ul>
                    </ul>
                </div>    
            </div> : null
        }
      </div>
    );
  }
  
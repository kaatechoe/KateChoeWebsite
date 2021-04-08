import './Resume.css';

function Resume() {
    return (
        <div className="Resume">
            <div className="titleRow">
                <div className="column">
                    <h1>Resume</h1>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <h2>Education</h2>
                </div>
                <div className="dateColumn">
                    <p>2015 - 2019</p>
                </div>
                <div className="column3">
                    <h2>University of California, Los Angeles | Bachelor's Degree</h2>
                    <p>B.A. Linguistics and Computer Science / Cognitive Science Minor</p>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <h2>Work Experience</h2>
                </div>
                <div className="dateColumn">
                    <p>August 2019 - Present</p>
                </div>
                <div className="column3">
                    <h2>Programmer Analyst</h2>
                    <p>Technical consultant working in the telecommunications, media, and technology industry.</p>
                    <ul className="accomplishments">
                        <li a className="bullet">
                            Developed multiple proof of concepts to the client which led to projects using that technology.
                        </li>
                        <li a className="bullet">
                            Performed production support to client applications, working to reduce the number of overall issues by 30%.
                        </li>
                        <li a className="bullet">
                            Joined multiple employee resource groups, planning social events for Capgemini employees and becoming a team lead. 
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row3">
                <div className="column">
                    <h2>Skills + Expertise</h2>
                </div>
                <div className="dateColumn">
                    <p className="hide"></p>
                    <p>November 2019</p>
                    <p>March 2020</p>
                    <p>November 2020</p>
                </div>
                <div className="column3">
                    <h2>Certifications</h2>
                    <p>SAP Certified Application Associate | SAP Cloud Platform Integration</p>
                    <p>SAP Certified Application Associate | SAP Analytics Cloud</p>
                    <p>SCRUM | Professional Scrum Master</p>
                    <h2>Languages</h2>
                    <p>Python, React, C++</p>
                </div>
            </div>
        </div>
    );
}

export default Resume;
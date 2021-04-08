import './Project.css';
import credit from '../Images/credit-card.jpeg';
import website from '../Images/website.png';

function Project() {
    return (
        <div className="Projects">
            <div className="titleRow">
                <div className="project-column">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="row">
                <div className="project-column">
                    <h2>Credit Card Frontend</h2>
                    <p className='project-par'>My first React project! Created a credit card form frontend in React. During this project I gained a better understanding of React, Javascript, HTML/CSS, as well as learning to set up projects in GitHub. From this project, I learned more about the components, and would apply this concept more in my next project.</p>
                </div>
                <div className="project-column3">
                    <img className="project-image" src={credit} alt="credit card"/>
                </div>
            </div>
            <div className="row">
                <div className="project-column">
                    <h2>Kate Choe website</h2>
                    <p className='project-par'>My second React project!</p>
                </div>
                <div className="project-column3">
                    <img className="project-image" src={website} alt="computer"/>
                </div>
            </div>
        </div>
    )
}

export default Project;
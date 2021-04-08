import { Link } from "react-router-dom";

function Navigation() {
    return (
        /*<div className="Navigation">
            <h4>Home</h4>
            <h4>|</h4>
            <h4>Resume</h4>
            <h4>|</h4>
            <h4>Projects</h4>
            <h4>|</h4>
            <h4>Contact</h4>
        </div>*/
        <div className="Navigation">
            <p className='nav-link'>
                <Link to ="/" style={{textDecoration: 'none', color:'#3a3a3a'}}>Home</Link>
            </p>
            <p className='nav-link'>|</p>
            <p className='nav-link'>
                <Link to="/resume" style={{textDecoration: 'none', color:'#3a3a3a'}} >Resume</Link>
            </p>
            <p className='nav-link'>|</p>
            <p className='nav-link'>
                <Link to="/projects" style={{textDecoration: 'none', color:'#3a3a3a'}} >Projects</Link>
            </p>
        </div>
    );
}

export default Navigation;
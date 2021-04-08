import './Footer.css';
import linkedin from '../Images/linkedin.png';
import github from '../Images/github.png';

function Footer() {
    return (
        <div className="Footer">
            <ul>
                <li>
                    <div className='footer-title'>Phone</div>
                    <div>213-703-0991</div>
                </li>
                <li>
                    <div className='footer-title'>Email</div>
                    <div>kaatechoe@gmail.com</div>
                </li>
                <li>
                    <div className='footer-title'>Follow Me</div>
                    <div>
                        <a href="https://www.linkedin.com/in/kate-choe/">
                            <img className='footer-logo' src={linkedin} alt="linkedin logo"></img>
                        </a>
                        <a href="https://github.com/kaatechoe">
                            <img className='footer-logo' src={github} alt="github logo"></img>
                        </a>
                    </div>
                </li>
            </ul>
        </div>


        
    )
}

export default Footer;
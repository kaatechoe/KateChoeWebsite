import './Home.css';
import picture from '../Images/profile-pic.jpeg';

const Homepage = () => {
    return (
        <div className='home-page'>
            <div className='home'>
                <div className="profile-pic">
                    <img src={picture} alt="laptop with code on it"/>
                </div>
                <div className="profile">
                    <h1 className="hello">Hello</h1>
                    <h5>A Bit About Me</h5>
                    <p>My name is Kate Choe and I am a software developer constantly learning and trying to be better. Hope you enjoy this site!</p>

                </div>
            </div>
        </div>
    )
};
export default Homepage;
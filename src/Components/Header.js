import Name from './Name.js';
import Navigation from './Navigation.js';
import './Header.css';


function Header() {
    return (
        <div className="Header">
            <Name/>
            <Navigation/>
        </div>
        
    )
}

export default Header;
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav()  {
    return (
        <nav className="nav">
            <img className="nav__logo" alt="logo" />
            <div className="nav__container">
                <h4>This is going to be our NavBar</h4>
            </div>
        </nav>
    )
}

export default Nav;
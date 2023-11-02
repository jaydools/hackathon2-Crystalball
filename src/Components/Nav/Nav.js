import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav()  {
    return (
        <nav className="nav">
            <div className="left">
                <h4 className='left__text'> DOM Dynasty: Crystal Ball</h4>
            </div>
            <div className='right'>
                <ul className='right__li'>
                    <li className='right__li--1'>About</li>
                    <li className='right__li--2'>Other Projects</li>
                    <li className='right__li--3'>Contribute</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav()  {
    return (
        <nav className="nav">
            <div className="left">
                <img className="left__logo" alt="logo" />
                <h4 className='left__text'> DOM Dynasty</h4>
            </div>
            <div className='right'>
                <ul className='right__li'>
                    <li className='right__li--1'>Link1</li>
                    <li className='right__li--2'>Link2</li>
                    <li className='right__li--3'>Link3</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
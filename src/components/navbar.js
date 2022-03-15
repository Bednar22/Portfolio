import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <>
            <div className='menu'>
                <img className='menu-image' src='../mblogo.png' />
                <div>
                    <NavLink className='menu-button' to='/'>
                        Home
                    </NavLink>
                    <NavLink className='menu-button' to='about'>
                        About
                    </NavLink>
                    <NavLink className='menu-button' to='projects'>
                        Projects
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;

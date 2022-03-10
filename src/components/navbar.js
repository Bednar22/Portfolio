import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <>
            <div className='menu'>
                <img className='menu-image' src='../mblogo.png' />
                <div>
                    <Link className='menu-button' to='/'>
                        Home
                    </Link>
                    <Link className='menu-button' to='about'>
                        About
                    </Link>
                    <Link className='menu-button' to='projects'>
                        Projects
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;

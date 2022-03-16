import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import '../App.css';

const Navbar = () => {
    return (
        <>
            <Box className='menu' sx={{ mb: 8 }}>
                <img className='menu-image' src='../mblogo.png' />
                <Box>
                    <NavLink className='menu-button' to='/'>
                        Home
                    </NavLink>
                    <NavLink className='menu-button' to='about'>
                        About
                    </NavLink>
                    <NavLink className='menu-button' to='projects'>
                        Projects
                    </NavLink>
                </Box>
            </Box>
        </>
    );
};

export default Navbar;

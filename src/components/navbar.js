import { NavLink, Link } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import '../App.css';

const Navbar = () => {
    return (
        <>
            <Box className='menu' sx={{ mb: 8 }}>
                <Link to='/'>
                    <img className='menu-image' src='../mblogo.png' />
                </Link>
                <Stack direction='row'>
                    <NavLink className='menu-button' to='/'>
                        Home
                    </NavLink>
                    <NavLink className='menu-button' to='about'>
                        About
                    </NavLink>
                    <NavLink className='menu-button' to='projects'>
                        Projects
                    </NavLink>
                </Stack>
            </Box>
        </>
    );
};

export default Navbar;

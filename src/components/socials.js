import { Box, Stack, IconButton, Typography, Avatar, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { grey, blue } from '@mui/material/colors';

export const Socials = (props) => {
    return (
        <>
            <Typography variant='h6' sx={{ mb: 0 }}>
                My socials and CV:
            </Typography>
            <Stack direction='row' justifyContent='center' spacing={2} sx={{ mt: 0 }}>
                <IconButton>
                    <GitHubIcon sx={{ color: grey[900] }} fontSize='large'></GitHubIcon>
                </IconButton>
                <IconButton>
                    <LinkedInIcon sx={{ color: blue[800] }} fontSize='large'></LinkedInIcon>
                </IconButton>
                <IconButton>
                    <FacebookIcon sx={{ color: blue[600] }} fontSize='large'></FacebookIcon>
                </IconButton>
                <IconButton
                    sx={{ color: grey[900], backgroundColor: grey[100], ':hover': { backgroundColor: grey[200] } }}
                >
                    {/* <Avatar sx={{ color: grey[900], backgroundColor: 'white', border: '2px solid black' }}>CV</Avatar> */}
                    CV
                </IconButton>
            </Stack>
        </>
    );
};

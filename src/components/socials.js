import { Stack, IconButton, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { grey, blue } from '@mui/material/colors';

export const Socials = (props) => {
    return (
        <>
            <Typography variant='h6' sx={{ mb: 0 }}>
                My socials and CV:
            </Typography>
            <Stack direction='row' justifyContent='center' spacing={2} sx={{ mt: 0 }}>
                <IconButton>
                    <Link href='https://github.com/Bednar22'>
                        <GitHubIcon sx={{ color: grey[900] }} fontSize='large'></GitHubIcon>
                    </Link>
                </IconButton>
                <IconButton>
                    <Link href='https://www.linkedin.com/in/maciej-bednarski-704097233/'>
                        <LinkedInIcon sx={{ color: blue[800] }} fontSize='large'></LinkedInIcon>
                    </Link>
                </IconButton>
                <IconButton>
                    <Link href='https://www.facebook.com/maciek.bednarski.33'>
                        <FacebookIcon sx={{ color: blue[600] }} fontSize='large'></FacebookIcon>
                    </Link>
                </IconButton>
                <IconButton
                    sx={{ color: grey[900], backgroundColor: grey[100], ':hover': { backgroundColor: grey[200] } }}
                >
                    CV
                </IconButton>
            </Stack>
        </>
    );
};

import '../App.css';
import myphoto from '../japngciete.png';
import { Avatar, Container, Grid, Paper, Typography, Stack } from '@mui/material';
import { Box } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import useWindowDimensions from './windowDimension';
const Homepage = () => {
    const { height, width } = useWindowDimensions();
    return (
        <>
            <Container maxWidth='md'>
                <Box className='BorderCorner_wrap'>
                    <Box className='BorderCorner'>
                        <Box className='bordercorner-inside' p={2}>
                            <Grid container direction='row' textAlign='center' justifyContent='center'>
                                <Grid sm={6} md={8}>
                                    <Stack spacing={2}>
                                        <Typography variant='h3'>Hi, I am Maciek!</Typography>

                                        {width > 500 ? (
                                            <>
                                                <Typography align='left'>
                                                    I am studying Computer Science at the Wrocław University of Science
                                                    and Technology
                                                </Typography>
                                                <Typography align='left'>
                                                    I am interested in creating web applications. I have solid
                                                    theoretical and practical foundations in HTML, CSS and
                                                    Javascript(especially React). You can find more informations HERE.
                                                </Typography>
                                            </>
                                        ) : (
                                            ''
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid sm={6} md={4}>
                                    <img
                                        src={myphoto}
                                        width='200vw'
                                        alt='ja'
                                        style={{ borderRadius: '50%' }}
                                        sx={{ pb: 1 / 5 }}
                                    ></img>
                                </Grid>
                                {width <= 500 ? (
                                    <>
                                        <Grid item sm={10}>
                                            <Stack spacing={1}>
                                                <Typography align='left'>
                                                    I am studying Computer Science at the Wrocław University of Science
                                                    and Technology
                                                </Typography>
                                                <Typography align='left'>
                                                    I am interested in creating web applications. I have solid
                                                    theoretical and practical foundations in HTML, CSS and
                                                    Javascript(especially React). You can find more informations HERE.
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </>
                                ) : (
                                    ''
                                )}
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Container>
            {/* <h1>
                width: {width} ~ height: {height}
            </h1> */}
        </>
    );
};

export default Homepage;

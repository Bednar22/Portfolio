import '../App.css';
import myphoto from '../japngciete.png';
import { Container, Grid, Typography, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import useWindowDimensions from './windowDimension';
import { Socials } from './socials';
import { blue } from '@mui/material/colors';

const Homepage = () => {
    const { height, width } = useWindowDimensions();
    return (
        <>
            <Container maxWidth='md'>
                <Box className='BorderCorner_wrap'>
                    <Box className='BorderCorner'>
                        <Box className='bordercorner-inside' p={2}>
                            <Grid container direction='row' textAlign='center' justifyContent='center'>
                                <Grid item sm={6} md={8}>
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
                                                    Javascript(especially React). You can find more informations{' '}
                                                    <Link to='about' className='home-link'>
                                                        here
                                                    </Link>
                                                    .
                                                </Typography>
                                                <Socials></Socials>
                                            </>
                                        ) : (
                                            ''
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <img
                                        src={myphoto}
                                        width='250vw'
                                        alt='ja'
                                        style={{ borderRadius: '50%' }}
                                        sx={{ pb: 1 / 5 }}
                                    ></img>
                                </Grid>
                                {width <= 500 ? (
                                    <>
                                        <Grid item sm={10} sx={{ mt: 2 }}>
                                            <Stack spacing={1}>
                                                <Typography align='justify'>
                                                    I am studying Computer Science at the Wrocław University of Science
                                                    and Technology
                                                </Typography>
                                                <Typography align='justify'>
                                                    I am interested in creating web applications. I have solid
                                                    theoretical and practical foundations in HTML, CSS and Javascript
                                                    (especially React). More about me{' '}
                                                    <Link sx={{ color: blue[800], decoration: 'none' }} to='about'>
                                                        here
                                                    </Link>
                                                    .
                                                </Typography>
                                                <Socials></Socials>
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
        </>
    );
};

export default Homepage;

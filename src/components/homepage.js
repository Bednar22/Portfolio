import '../App.css';
import myphoto from '../ja.jpeg';
import { Avatar, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
const Homepage = () => {
    return (
        <>
            <Box className='BorderCorner_wrap'>
                <Box className='BorderCorner'>
                    <Box className='bordercorner-inside' elevation={0}>
                        <Grid container>
                            <Grid xs={8}>
                                <Typography variant='h2'>Hi,I am Maciek!</Typography>
                            </Grid>
                            <Grid xs={4}>
                                <Avatar sx={{ width: 200, height: 200 }} src={myphoto} alt='me' />
                            </Grid>

                            {/* <img src={myphoto} alt='me' /> */}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Homepage;

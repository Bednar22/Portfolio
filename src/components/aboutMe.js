import React from 'react';
import { Grid } from '@mui/material';
const AboutMe = (props) => {
    return (
        <>
            <h1>ABOUT</h1>
            <Grid container>
                <Grid item xs={8} md={4} xl={4} style={{ border: '2px solid red' }}>
                    Technologies
                </Grid>
                <Grid item xs={8} md={4} xl={4} style={{ border: '2px solid red' }}>
                    Other skills
                </Grid>
                <Grid item xs={8} md={4} xl={4} style={{ border: '2px solid red' }}>
                    Hobbys
                </Grid>
            </Grid>
        </>
    );
};

export default AboutMe;

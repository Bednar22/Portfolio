import React from 'react';
import { Card, CardHeader, CardContent, Grid, List, Divider, ListSubheader, Paper, Typography } from '@mui/material';
import { ListElement } from './listElement';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { grey } from '@mui/material/colors';

const techSkills = [
    {
        title: 'HTML and CSS',
        subtitle: 'hehe',
    },
    {
        title: 'HTML and CSS',
        subtitle: '',
    },
];

const otherSkills = [
    {
        title: 'English',
        subtitle: 'I am comfortable with speaking and writing (B2 confirmed)',
    },
    {
        title: 'German',
        subtitle: 'I know well basics, understand most of it but I am not best speaker/writer ',
    },
];

const hobbys = [
    {
        title: 'Sport',
        subtitle: 'Running, football and all other kinds of sport',
    },
];

const AboutMe = (props) => {
    return (
        <>
            <Card sx={{ mb: 4 }}>
                <CardHeader title='Quick note about me'></CardHeader>

                <CardContent>
                    <Typography variant='p'>
                        This year I graduated at the Wroclaw University of Science and Technology in the main field of
                        studies: Control Engineering and Robotics. During first-leve studies I was more interested in
                        programming, so I chose programming oriented specialization and now I am continuing education to
                        get master's degree in Computer Science. I have no commercial work experience, but I took part
                        in projects that simulated commercial enviroment. Apart from programming I like doing all kind
                        of sports and spending some time playing board/computer games.
                    </Typography>
                </CardContent>
            </Card>
            <Grid container direction='row' spacing={2} justifyContent='center'>
                <Grid item xs={11} md={4} xl={4}>
                    <Paper sx={{ mb: 2 }}>
                        <List
                            subheader={
                                <ListSubheader sx={{ fontSize: 20, color: grey[900] }} component='div'>
                                    Tech skills
                                </ListSubheader>
                            }
                        >
                            {techSkills.map((item) => {
                                return <ListElement title={item.title} subtitle={item.subtitle}></ListElement>;
                            })}
                        </List>
                    </Paper>
                </Grid>
                {/* <Divider orientation='vertical' flexItem></Divider> */}
                <Grid item xs={8} md={4} xl={4}>
                    <Paper sx={{ mb: 2 }}>
                        <List
                            subheader={
                                <ListSubheader sx={{ fontSize: 20, color: grey[900] }} component='div'>
                                    Other skills
                                </ListSubheader>
                            }
                        >
                            {otherSkills.map((item) => {
                                return <ListElement title={item.title} subtitle={item.subtitle}></ListElement>;
                            })}
                        </List>
                    </Paper>
                </Grid>
                {/* <Divider orientation='vertical' flexItem></Divider> */}
                <Grid item xs={8} md={4} xl={4}>
                    <Paper sx={{ mb: 2 }}>
                        <List
                            subheader={
                                <>
                                    <ListSubheader sx={{ fontSize: 20, color: grey[900] }} component='div'>
                                        Hobbys
                                    </ListSubheader>
                                </>
                            }
                        >
                            {hobbys.map((item) => {
                                return <ListElement title={item.title} subtitle={item.subtitle}></ListElement>;
                            })}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default AboutMe;

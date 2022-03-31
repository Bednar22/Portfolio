import React, { useEffect, useState, useRef } from 'react';
import { Card, CardHeader, CardContent, Grid, List, ListSubheader, Paper, Typography } from '@mui/material';
import { ListElement } from './listElement';
import { grey } from '@mui/material/colors';
import useWindowDimensions from './windowDimension';

const techSkills = [
    {
        title: 'HTML and CSS',
        subtitle: '',
    },
    {
        title: 'Javascript (React, Express)',
        subtitle:
            'Asynchronous javascript, JSX; React hooks; frameworks-Material UI, Materialize CSS; REST api in express',
    },
    {
        title: 'Git',
        subtitle: 'Everyday use in individual projects and experience in small groups of 4-5 people',
    },
    {
        title: 'Databases',
        subtitle: 'Most experience with MongoDB, but also used a bit relational databases',
    },
    {
        title: 'Python',
        subtitle: 'Fundamental knowledge, learning Django',
    },
];

const otherSkills = [
    {
        title: 'English',
        subtitle: 'Fluent in spoken and written English (B2 confirmed)',
    },
    {
        title: 'German',
        subtitle: 'Good basic knowlegde but not comfortable in speaking and writing yet',
    },
    {
        title: 'Problem solving',
        subtitle: '',
    },
    {
        title: 'Effective communication',
        subtitle: '',
    },
    {
        title: 'Teamwork',
        subtitle: '',
    },
];

const hobbys = [
    {
        title: 'Sport',
        subtitle: 'Running, football and all other kinds of sport',
    },
    {
        title: 'Games',
        subtitle: 'As a competetive person I like playing board and computer games',
    },
    {
        title: 'Movies and TV series',
        subtitle: 'Especially fantasy/thrilers/mystery',
    },
];

const AboutMe = (props) => {
    const { height, width } = useWindowDimensions();
    const [ph, setPh] = useState();
    const ref = useRef(null);

    useEffect(() => {
        if (width > 500) {
            setPh(ref.current.clientHeight);
        }
    }, [width]);

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
                    <Paper ref={ref} sx={{ mb: 4 }}>
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
                <Grid item xs={11} md={4} xl={4}>
                    <Paper sx={{ mb: 2, height: ph }}>
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
                <Grid item xs={11} md={4} xl={4}>
                    <Paper sx={{ mb: 2, height: ph }}>
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

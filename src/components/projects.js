import SingleProject from './singleProject';
import { Grid, Typography, Stack, Paper, Container, Box, Divider } from '@mui/material';
import graphic from '../together.png';
import '../App.css';
import useWindowDimensions from './windowDimension';

const projects = [
    {
        title: 'Training Planner',
        description:
            'Project was created in colaboration with Nokia during 6th semester of engineering studies. Main goal of app was to easly manage trainings in Nokia corporation. We worked as a team of 5 people in Scrum methodology and used CI/CD practices. ',
        gitLink: ' https://github.com/nokia-wroclaw/innovativeproject-training-planner',
        herokuLink: 'link2',
        tags: ['Javascript', 'React', 'Express', 'MongoDB', 'Materialize CSS', 'Docker', 'CD/CI', 'Scrum'],
    },
    {
        title: 'BikeShop',
        description:
            'BikeShop is web application created as my engineering project to pass final exam. I was inspired by working in a small warehouse and wanted to create online shop with management panel. Main goal is to optimize process of gathering and packing products by using some algotithms.',
        gitLink: 'https://github.com/Bednar22/Inzynierka',
        herokuLink: 'link2',
        tags: ['Javascript', 'React', 'Express', 'MongoDB', 'Material-UI', 'Algorithms'],
    },
    {
        title: 'Germe',
        description:
            'Germe is a small, individual project, that was created to improve my coding and language skills. I wanted to make appearance using pure CSS and learn some about styling and transitions. It is still in development and I am going to finish this project soon. ',
        gitLink: 'https://github.com/Bednar22/Germe',
        herokuLink: 'link2',
        tags: ['Javascript', 'React', 'CSS'],
    },
    {
        title: 'png-is-my-favourite-file-type',
        description:
            'Project created with my friend during "E-media" course. It should enable user to exctract/delete metadata from a .png file, encrypt file using RSA technique. ',
        gitLink: 'https://github.com/starmarek/png-is-my-favourite-file-type',
        herokuLink: '',
        tags: ['Python', 'RSA encryption'],
    },
    {
        title: 'Leaser - in progress',
        description:
            'In this semester we started a project, that should simulate a start-up. We want to create an app that will allow people to rent or exchange things. We work in a small team of 5 people and I am responsible for front-end of the application. ',
        gitLink: '',
        herokuLink: '',
        tags: ['React', 'Material-UI', '.NET', 'Scrum'],
    },
];

const Projects = () => {
    const { height2, width2 } = useWindowDimensions();

    return (
        <>
            <Container maxWidth='lg'>
                <Paper sx={{ p: 4, mb: 5, pb: 1 }}>
                    <Stack
                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                        spacing={{ xs: 2, sm: 2, md: 4 }}
                        justifyContent='center'
                        alignItems='center'
                        sx={{ mb: 5 }}
                    >
                        <Box sx={{ mb: 2 }}>
                            <Typography variant='h5'>Here you can find some examples of my projects</Typography>
                            <Divider sx={{ mb: 2, mt: 2 }}></Divider>
                            <Typography variant='p'>
                                I feel most comfortable using <span className='color-text'>MERN stack</span> in my
                                applictions - <span className='color-text'>React</span> library to create front-end,{' '}
                                <span className='color-text'>Node</span> with{' '}
                                <span className='color-text'>express</span> to create back-end and{' '}
                                <span className='color-text'>MongoDB</span> as a database. Apart from these web
                                technologies I tried <span className='color-text'>Angular</span> and{' '}
                                <span className='color-text'>.NET</span> but do not use them on daily basis. During my
                                studies I also learned <span className='color-text'>C++</span> and{' '}
                                <span className='color-text'>Python</span>.
                            </Typography>
                        </Box>
                        <Box>
                            {width2 < 500 ? (
                                <img className='projects-mobile' src={graphic} alt='projects' /> //mobile
                            ) : (
                                <img className='projects-image' src={graphic} alt='projects' /> //dekstop
                            )}
                        </Box>
                    </Stack>
                </Paper>
            </Container>
            <Grid container justifyContent='center' rowSpacing={{ xs: 2, sm: 2, md: 3, xl: 3 }}>
                {projects.map((item, index) => {
                    return (
                        <Grid item sm={10} xs={10} md={9} xl={8} key={index}>
                            <SingleProject
                                title={item.title}
                                description={item.description}
                                gitLink={item.gitLink}
                                herokuLink={item.herokuLink}
                                tags={item.tags}
                            ></SingleProject>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default Projects;

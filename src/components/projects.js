import SingleProject from './singleProject';
import { Grid, Typography, Stack, Paper } from '@mui/material';
import graphic from '../together.png';
const projects = [
    {
        title: 'Training Planner',
        description: 'Krotki opis',
        gitLink: ' https://github.com/nokia-wroclaw/innovativeproject-training-planner',
        herokuLink: 'link2',
        tags: ['Javascript', 'React', 'Express', 'MongoDB', 'MaterializeCSS', 'Docker', 'CD/CI'],
    },
    {
        title: 'BikeShop',
        description: 'Krotki opis',
        gitLink: 'https://github.com/Bednar22/Inzynierka',
        herokuLink: 'link2',
        tags: ['Javascript', 'React', 'Express', 'MongoDB', 'Material-UI', 'Algorithms'],
    },
    {
        title: 'Germe',
        description: 'Germe is a small project, that was created to ',
        gitLink: 'https://github.com/Bednar22/Germe',
        herokuLink: 'link2',
        tags: ['Javascript', 'React', 'CSS'],
    },
];

const Projects = () => {
    return (
        <>
            <Grid container justifyContent='center' rowSpacing={{ xs: 2, sm: 2, md: 3, xl: 3 }}>
                <Grid xs={8} sm={8} md={10} xl={8}>
                    <Paper sx={{ p: 3 }}>
                        <Stack direction='row'>
                            <Typography variant='h4' sx={{ mr: 2 }}>
                                Here are some samples of my projects
                            </Typography>
                            <img width={500} height={250} src={graphic} alt='projects' />
                        </Stack>
                    </Paper>
                </Grid>

                {projects.map((item) => {
                    return (
                        <Grid item xs={8} md={10} xl={8}>
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

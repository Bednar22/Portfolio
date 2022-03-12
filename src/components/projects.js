import SingleProject from './singleProject';
import { Grid } from '@mui/material';

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
            <Grid container spacing={2} justifyContent='center'>
                {projects.map((item) => {
                    return (
                        <Grid item xs={8} md={8}>
                            <SingleProject
                                title={item.title}
                                description={item.description}
                                gitLink={item.gitLink}
                                herokuLink={item.herokuLink}
                            ></SingleProject>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default Projects;

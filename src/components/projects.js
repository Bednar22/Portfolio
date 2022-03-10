import SingleProject from './singleProject';
import { Grid } from '@mui/material';

const projects = {
    data: [
        { title: 'Training Planner', description: 'Krotki opis', linkGit: 'link', linkHeroku: 'link2' },
        {
            title: 'BikeShop',
            description: 'Krotki opis',
            linkGit: 'link',
            linkHeroku: 'link2',
        },
        {
            title: 'Germe',
            description: 'Krotki opis',
            linkGit: 'link',
            linkHeroku: 'link2',
        },
    ],
};

const Projects = () => {
    return (
        <>
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={8} md={8}>
                    <SingleProject title='Training Planner' description='Krótki opis apki'></SingleProject>
                </Grid>
            </Grid>
        </>
    );
};

export default Projects;

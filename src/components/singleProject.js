import { Card, CardHeader, CardContent, Typography, IconButton, Tooltip, Link, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { grey } from '@mui/material/colors';
const SingleProject = ({ title, description, gitLink, herokuLink, tags }) => {
    return (
        <>
            <Card sx={{ mb: 2, p: 2 }}>
                <CardHeader
                    title={title}
                    action={
                        <>
                            {herokuLink && (
                                <Tooltip title='App demo' disableInteractive>
                                    <Link href={herokuLink}>
                                        <IconButton>
                                            <OpenInBrowserIcon sx={{ color: grey[900] }} fontSize='large' />
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                            )}
                            {gitLink && (
                                <Tooltip title='Github repository' disableInteractive>
                                    <Link href={gitLink}>
                                        <IconButton>
                                            <GitHubIcon sx={{ color: grey[900] }} fontSize='large' />
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                            )}
                        </>
                    }
                ></CardHeader>
                <CardContent>
                    <Typography>{description}</Typography>
                </CardContent>
                {tags.map((item, index) => {
                    return (
                        <>
                            <Chip sx={{ mx: 1, mb: 1 }} label={item} key={index} />
                        </>
                    );
                })}
            </Card>
        </>
    );
};

export default SingleProject;

import { Card, CardHeader, CardContent, Typography, IconButton, Tooltip, Link, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
const SingleProject = ({ title, description, gitLink, herokuLink, tags }) => {
    return (
        <>
            <Card sx={{ mb: 2 }}>
                <CardHeader
                    title={title}
                    action={
                        <>
                            <Tooltip title='App demo' disableInteractive>
                                <Link href={herokuLink}>
                                    <IconButton>
                                        <OpenInBrowserIcon fontSize='large' />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                            <Tooltip title='Github repository' disableInteractive>
                                <Link href={gitLink}>
                                    <IconButton>
                                        <GitHubIcon fontSize='large' />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        </>
                    }
                ></CardHeader>
                <CardContent>
                    <Typography>{description}</Typography>
                </CardContent>
                {tags.map((item) => {
                    return (
                        <>
                            <Chip sx={{ mx: 1, mb: 2, mt: 2 }} label={item} />
                        </>
                    );
                })}
            </Card>
        </>
    );
};

export default SingleProject;

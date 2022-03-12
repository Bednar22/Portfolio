import { Card, CardHeader, CardContent, Typography, IconButton, Tooltip, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
const SingleProject = ({ title, description, gitLink, herokuLink }) => {
    return (
        <>
            <Card>
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
            </Card>
        </>
    );
};

export default SingleProject;

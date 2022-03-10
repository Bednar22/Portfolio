import { Card, CardHeader, CardContent, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
const SingleProject = (props) => {
    return (
        <>
            <Card>
                <CardHeader
                    title={props.title}
                    action={
                        <IconButton>
                            <GitHubIcon fontSize='large' />
                        </IconButton>
                    }
                ></CardHeader>
                <CardContent>
                    <Typography>{props.description}</Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default SingleProject;

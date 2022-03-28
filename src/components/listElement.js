import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { grey } from '@mui/material/colors';
export const ListElement = ({ title, subtitle }) => {
    return (
        <>
            <ListItem>
                <ListItemIcon>
                    <FiberManualRecordIcon sx={{ color: grey[900] }} fontSize='small'></FiberManualRecordIcon>
                </ListItemIcon>
                <ListItemText primary={title} secondary={subtitle} />
            </ListItem>
        </>
    );
};

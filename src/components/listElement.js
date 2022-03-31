import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { grey } from '@mui/material/colors';
export const ListElement = ({ title, subtitle }) => {
    return (
        <>
            <ListItem alignItems='center'>
                <ListItemIcon>
                    <FiberManualRecordIcon sx={{ color: grey[900], fontSize: 16 }}></FiberManualRecordIcon>
                </ListItemIcon>
                <ListItemText
                    primary={<Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>}
                    secondary={subtitle}
                />
            </ListItem>
        </>
    );
};

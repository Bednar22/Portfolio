import React from 'react';
import { Divider, Grid, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Paper } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { grey } from '@mui/material/colors';
const AboutMe = (props) => {
    return (
        <>
            <Grid container direction='row' spacing={2}>
                <Grid item xs={8} md={4} xl={4}>
                    <Paper>
                        <List
                            subheader={
                                <ListSubheader sx={{ fontSize: 20, color: grey[900] }} component='div'>
                                    Tech skills
                                </ListSubheader>
                            }
                        >
                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon
                                        sx={{ color: grey[900] }}
                                        fontSize='small'
                                    ></FiberManualRecordIcon>
                                </ListItemIcon>
                                <ListItemText>First</ListItemText>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                {/* <Divider orientation='vertical' flexItem></Divider> */}
                <Grid item xs={8} md={4} xl={4}>
                    <Paper>
                        <List
                            subheader={
                                <ListSubheader sx={{ fontSize: 20, color: grey[900] }} component='div'>
                                    Other skills
                                </ListSubheader>
                            }
                        >
                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon
                                        sx={{ color: grey[900] }}
                                        fontSize='small'
                                    ></FiberManualRecordIcon>
                                </ListItemIcon>
                                <ListItemText>Second</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon
                                        sx={{ color: grey[900] }}
                                        fontSize='small'
                                    ></FiberManualRecordIcon>
                                </ListItemIcon>
                                <ListItemText>Second</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon
                                        sx={{ color: grey[900] }}
                                        fontSize='small'
                                    ></FiberManualRecordIcon>
                                </ListItemIcon>
                                <ListItemText>Second</ListItemText>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                {/* <Divider orientation='vertical' flexItem></Divider> */}
                <Grid item xs={8} md={4} xl={4}>
                    <Paper>
                        <List
                            subheader={
                                <>
                                    <ListSubheader sx={{ fontSize: 20, color: grey[900] }} component='div'>
                                        Hobbys
                                    </ListSubheader>
                                </>
                            }
                        >
                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon
                                        sx={{ color: grey[900] }}
                                        fontSize='small'
                                    ></FiberManualRecordIcon>
                                </ListItemIcon>
                                <ListItemText>Third</ListItemText>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default AboutMe;

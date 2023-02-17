import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import { ThumbDown, ThumbDownAlt } from '@mui/icons-material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Avatar, Grid, IconButton, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Post = (props) => {
    const { id, title, description, user_id, created_at, likes, unlikes, views, comments } = props
    
    const users = useSelector(state => state.user.users)
    const user = users?.filter(s => s.id === user_id)[0]

    return (
        <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Grid container style={{ display: 'flex', justifyContent: 'space-between'}} >
                    <Grid style={{ display: 'flex', alignItems: 'center', marginRight: '10px'}}>
                        <Avatar alt="Eric Pereira" src="/static/images/avatar/1.jpg" style={{ marginRight: '10px' }} />
                        <Grid>
                            <p style={{ margin: 0 }}>{user?.name}</p>
                            <span style={{ color: '#868793', fontSize: '10pt' }}>{moment(created_at).format('DD/MM/YYYY HH:mm:ss')}</span>
                        </Grid>
                    </Grid>
                <Grid>
                    <IconButton color="inherit">
                        <EditIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <DeleteIcon />
                    </IconButton>
                </Grid>                    
                </Grid>
                
                <h3 style={{ marginBottom: 0 }}>{title}</h3>
                <p>{description}</p>
                <Grid container>
                    <Grid item style={{ display: 'flex', alignItems: 'center', padding: '5px', marginRight: '10px'}}>
                        <span style={{ marginRight: '10px' }}>{views}</span>
                        <VisibilityIcon />
                    </Grid>
                    <Grid item style={{ display: 'flex', alignItems: 'center', padding: '5px', marginRight: '10px'}}>
                        <span style={{ marginRight: '5px' }}>{likes}</span>
                        <IconButton color="inherit">
                        <ThumbUpOffAltIcon />  
                        </IconButton> 
                    </Grid>
                    <Grid item style={{ display: 'flex', alignItems: 'center', padding: '5px', marginRight: '10px'}}>
                        <span style={{ marginRight: '5px' }}>{unlikes}</span>
                        <IconButton color="inherit">
                        <ThumbDownOffAltIcon /> 
                        </IconButton>
                    </Grid>
                    <Grid item style={{ display: 'flex', alignItems: 'center', padding: '5px', marginRight: '10px'}}>
                        <span style={{ marginRight: '5px' }}>{comments}</span>
                        <IconButton color="inherit">
                        <ChatBubbleOutlineIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Post
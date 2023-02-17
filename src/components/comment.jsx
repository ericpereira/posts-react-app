import { Avatar, Grid, IconButton } from '@mui/material'
import React from 'react'
import { getCurrentUser, useGetUser } from '../utils/common'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

const Comment = (props) => {
    const { description, created_at, user_id, isPostOwner } = props
    const currentUser = getCurrentUser()
    const user = useGetUser(user_id)
    return(
        <Grid style={{ marginBottom: '30px' }}>
            <Grid container style={{ display: 'flex', justifyContent: 'space-between'}} >
                <Grid style={{ display: 'flex', alignItems: 'center', marginRight: '10px'}}>
                    <Avatar alt="Eric Pereira" src="/static/images/avatar/1.jpg" style={{ marginRight: '10px' }} />
                    <Grid>
                        <p style={{ margin: 0 }}>{user?.name}</p>
                        <span style={{ color: '#868793', fontSize: '10pt' }}>{moment(created_at).format('DD/MM/YYYY HH:mm:ss')}</span>
                    </Grid>
                </Grid>
                <Grid>
                    {currentUser?.id === user?.id && <>
                        <IconButton color="inherit">
                            <EditIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <DeleteIcon />
                        </IconButton>
                    </>}
                    {currentUser?.id !== user?.id && isPostOwner && <IconButton color="inherit">
                            <DeleteIcon />
                        </IconButton>}
                </Grid>                              
            </Grid>
            <Grid>
                <p>{description}</p>
            </Grid>
        </Grid>
    )
}

export default Comment
import { Avatar, Button, Grid, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import { getCurrentUser, useGetUser } from '../utils/common'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { removeComment, updateComment } from '../actions/post';
import SendIcon from '@mui/icons-material/Send'


const Comment = (props) => {
    const { description, created_at, user_id, isPostOwner, post_id, id, deleted_by } = props
    const [currentDescription, setCurrentDescription] = useState(description)
    const [edit, setEdit] = useState(false)

    const currentUser = getCurrentUser()
    const user = useGetUser(user_id)
    const dispatch = useDispatch()
    
    const handleRemoveComment = () => {
        dispatch(removeComment(id, post_id))
    }

    const handleChangeDescription = (event) => {
        setCurrentDescription(event.target.value)
    }

    const handleEditComment = () => {
        setEdit(!edit)
    }

    const handleSubmitComment = () => {
        dispatch(updateComment(id, post_id, { description: currentDescription }))
        setEdit(false)
    }

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
                    {currentUser?.id === user?.id && !deleted_by && <Grid>
                        <IconButton color="inherit" onClick={() => handleEditComment()} >
                            <EditIcon />
                        </IconButton>
                        <IconButton color="inherit" onClick={() => handleRemoveComment()} >
                            <DeleteIcon />
                        </IconButton>
                    </Grid>}
                    {currentUser?.id !== user?.id && isPostOwner && !deleted_by && <IconButton color="inherit" onClick={() => handleRemoveComment()}>
                            <DeleteIcon />
                        </IconButton>}
                </Grid>
            </Grid>
            { edit ?
            <Grid>
                <Grid item md={12} style={{ paddingTop: '30px' }} >                            
                    <TextField style={{ marginBottom: '15px' }}
                        id="outlined-multiline-static"
                        label="Escreva algo interessante..."
                        fullWidth
                        value={currentDescription}
                        onChange={handleChangeDescription}
                    />
                </Grid>
                <Grid container alignItems='flex-end' alignContent='flex-end' justifyItems='flex-end' justifyContent='flex-end'>
                    <Button onClick={() => handleSubmitComment()} variant="contained" size="medium" endIcon={<SendIcon />}>
                        Comentar
                    </Button>
                </Grid>
                </Grid> :
                <Grid>
                    <p>
                    { !deleted_by ? description : (
                        deleted_by === user?.id ? <i>Comentário removido pelo usuário.</i> : <i>Comentário removido pelo dono do post.</i>
                    )}
                    </p>
                </Grid>}
        </Grid>
    )
}

export default Comment
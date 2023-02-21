import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import { useDispatch } from 'react-redux'
import { registerComment } from '../actions/post'

const CommentInput = (props) => {
    const { post_id } = props
    const [description, setDescription] = React.useState()
    const dispatch = useDispatch()

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmitPost = () => {
        dispatch(registerComment(post_id, description))        
        setDescription('')
    }

    return (
        <Grid item xs={12}>
            <Grid direction='column' container>
                <Grid item md={12}>                            
                    <TextField style={{ marginBottom: '15px' }}
                        id="outlined-multiline-static"
                        label="Escreva algo interessante..."
                        fullWidth
                        value={description}
                        onChange={handleChangeDescription}
                    />
                </Grid>
                <Grid container alignItems='flex-end' alignContent='flex-end' justifyItems='flex-end' justifyContent='flex-end'>
                    <Button onClick={() => handleSubmitPost()} variant="contained" size="medium" endIcon={<SendIcon />}>
                        Comentar
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CommentInput
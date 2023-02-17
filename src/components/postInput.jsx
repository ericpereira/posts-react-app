import { Button, Grid, Paper, TextField } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import { useDispatch } from 'react-redux'
import { insertPost } from '../actions/post'

const PostInput = (props) => {
    const [title, setTitle] = React.useState()
    const [description, setDescription] = React.useState()
    const dispatch = useDispatch()

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSetTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmitPost = () => {
        dispatch(insertPost(title, description))
        setTitle('')
        setDescription('')
    }

    return (
        <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Grid direction='column' container>
                    <Grid md={12} style={{ marginBottom: '15px' }}>
                        <TextField id="outlined-basic" label="Título da Postagem" variant="outlined" fullWidth value={title} onChange={handleSetTitle} />
                    </Grid>
                    <Grid md={12}>                            
                        <TextField style={{ marginBottom: '15px' }}
                            id="outlined-multiline-static"
                            label="Escreva algo interessante..."
                            multiline
                            rows={4}
                            fullWidth
                            value={description}
                            onChange={handleChangeDescription}
                        />
                    </Grid>
                    <Grid container alignItems='flex-end' alignContent='flex-end' justifyItems='flex-end' justifyContent='flex-end'>
                        <Button onClick={() => handleSubmitPost()} variant="contained" size="medium" endIcon={<SendIcon />}>
                            Postar
                        </Button>
                    </Grid>

                    
                </Grid>
                
            </Paper>
        </Grid>
    )
}

export default PostInput
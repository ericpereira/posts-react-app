import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Avatar, CardContent, Collapse, Grid, IconButton, Paper, } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../utils/common';
import { getCommentsPost, likePost, removePost, unlikePost } from '../actions/post';
import CommentInput from './commentInput';
import Comment from './comment';

const Post = (props) => {
    const { id, title, description, user_id, created_at, likes, unlikes, views, comments } = props
    const [expanded, setExpanded] = React.useState(false);
    
    const users = useSelector(state => state.user.users)
    const user = users?.filter(s => s.id === user_id)[0]

    const commentsPosts = useSelector(state => state.post.commentsPosts)
    const commentsList = commentsPosts?.filter(c => c.post_id === id)

    const currentUser = getCurrentUser()
    const dispatch = useDispatch()

    React.useEffect(() => {
        if(comments > 0) dispatch(getCommentsPost(id))
    }, [comments, dispatch, id])

    const handleShowComments = () => {
        setExpanded(!expanded);
    }

    const handleLikePost = () => {
        dispatch(likePost(id))
    }

    const handleUnlikePost = () => {
        dispatch(unlikePost(id))
    }

    const handleRemovePost = () => {
        dispatch(removePost(id))
    }

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
                        {currentUser?.id === user?.id && <>
                            <IconButton color="inherit">
                                <EditIcon />
                            </IconButton>
                            <IconButton color="inherit">
                                <DeleteIcon onClick={() => handleRemovePost()} />
                            </IconButton>
                        </>}
                        
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
                        <IconButton color="inherit" onClick={() => handleLikePost()}>
                            <ThumbUpOffAltIcon />  
                        </IconButton> 
                    </Grid>
                    <Grid item style={{ display: 'flex', alignItems: 'center', padding: '5px', marginRight: '10px'}}>
                        <span style={{ marginRight: '5px' }}>{unlikes}</span>
                        <IconButton color="inherit" onClick={() => handleUnlikePost()}>
                            <ThumbDownOffAltIcon /> 
                        </IconButton>
                    </Grid>
                    <Grid item style={{ display: 'flex', alignItems: 'center', padding: '5px', marginRight: '10px'}}>
                        <span style={{ marginRight: '5px' }}>{comments}</span>
                        <IconButton color="inherit" onClick={() => handleShowComments()}>
                            <ChatBubbleOutlineIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <CommentInput post_id={id} />
                        {commentsList?.map(comment => <Comment {...comment} isPostOwner={currentUser?.id === user_id} key={comment.id} />)}
                    </CardContent>
                </Collapse>
            </Paper>
        </Grid>
    )
}

export default Post
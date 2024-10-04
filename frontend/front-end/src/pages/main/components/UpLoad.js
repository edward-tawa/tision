import { Stack, Card, CardActions, CardContent, CardMedia, IconButton, Box, CardHeader, Avatar, Typography, Checkbox, FormGroup, TextField, Button, Dialog } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import api_tision from '../../../api_tision'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import MakePost from './MakePost';


export default function Post() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [picture, setPicture] = useState(false)
  const [video, setVideo] = useState(false)
  const [fields, setFields] = useState({
      title:"",
      post_info:"",
      video_info:"",
      created_at:"",
      image:"",
      video: "",
      user:"",
  })

  const handlePicOpen = () => {
    setOpen(true)
    setPicture(true)
  };

  const handleVidOpen = () => {
    setOpen(true)
    setVideo(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = (e) =>{
      
  console.log("handled Post")
  }



  return (
     <Card sx={{ width: "100%", marginBottom: 3}}>
              <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  R
                </Avatar>
              }
        
              action={
                <MakePost />
              }
              title=""
            />
            <CardContent>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async (event) => {
            event.preventDefault();
            console.log("These are the fields", fields);
             try{
                console.log("I am in HnadlePost try")
                const res = await api_tision.post('http://127.0.0.1:8000/tision/posts/', fields,
                      {
                  headers: {
                  'Content-Type': 'multipart/form-data'
              }
            }
                )

                console.log(res)
              }
              catch(error){
                alert(error)
                console.log(error)
              }

            setFields({
                title:"",
                post_info:"",
                video_info:"",
                created_at:"",
                image:"",
                video: "",
                user:"",
            })
            handleClose();
          },
        }}
      >
        <DialogTitle>Post</DialogTitle>
        <DialogContent>
          <Box sx={{width: "30em", padding:"2em", border: "1px solid grey", borderRadius: "8px"}}>
            <FormGroup sx={{width:"30em", gap:3}}>
              <input type="file" name={video?"video":picture?"image":"video"} onChange={(e)=>{
                setFields({...fields, [e.target.name] : e.target.files[0]})
                }
              }/>
              <TextField type="text" variant="outlined" name="post_info" onChange={(e)=>{
                setFields({...fields, post_info : e.target.value})
                setPicture(false)
                setVideo(false)
              }
            } />
            </FormGroup>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handlePost}>Post</Button>
        </DialogActions>
      </Dialog>


              <Stack direction="row" spacing={1}> 
                <form>
                    <FormGroup>
                        <TextField  variant="outlined" sx={{width: "41em"}}  type="text" placeholder="Share your thoughts with the world"/>
                    </FormGroup>
                </form>
                 <Button variant="contained">Share</Button>
              </Stack>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="pics" onClick={handlePicOpen}>
                <CameraAltIcon /> <Typography>Pics</Typography>
              </IconButton>
              <IconButton aria-label="video" onClick={handleVidOpen}>
                <VideoCameraFrontIcon /><Typography>Video</Typography>
              </IconButton>
            </CardActions>
            </Card>
  )
}

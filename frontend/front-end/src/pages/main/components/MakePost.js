import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormGroup } from '@mui/material';
import { FilePicker } from 'evergreen-ui';
import { useState } from 'react';
import api_tision from '../../../api_tision'

export default function MakePost() {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState({
    title: "",
    post_info: "",
    image: "",
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = async () =>{
    console.log("form is working")
    try{
      console.log("I am in HnadlePost try")
      const res = await api_tision.post('http://127.0.0.1:8000/tision/posts/', fields)
      console.log(res)
    }
    catch(error){
      alert(error)
      console.log(error)
    }

  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Make A Post
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log("This is it", fields);
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

            handleClose();
          },
        }}
      >
        <DialogTitle>Post</DialogTitle>
        <DialogContent>
          <Box sx={{width: "30em", padding:"2em", border: "1px solid grey", borderRadius: "8px"}}>
            
            <FormGroup sx={{width:"30em", gap:3}}>
              <input type="file" onChange={e=>setFields({...fields, image: e.target.files[0]}) } name="pic_file"  accept="image/png, image/gif, image/jpeg" />
              <TextField  type="text" variant="outlined"  placeholder="Caption" name="title" onChange={(e) => setFields({...fields, [e.target.name]: e.target.value})} />
              <TextField  multiline rows={4} type="text" variant="outlined"  placeholder="Post Info"  name="post_info" onChange={(e) => setFields({...fields, [e.target.name]: e.target.value})}/>
            </FormGroup>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >Post</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
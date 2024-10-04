import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, ListItemAvatar, Divider, AvatarGroup, Avatar, ImageList, ImageListItem, Stack, Button } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArticleIcon from '@mui/icons-material/Article';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/css/slider.css'
import Slider from 'react-slick';
import {useNavigate} from 'react-router-dom'








export default function RightBar() {

  const navigate = useNavigate()
  const avatars = [    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />,
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            ]

    const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
  };
  const style={
    width:"19em",
    display:"flex",
    tawa:{backgroundColor:"red"},
    position: "fixed",
    height: "3em",
    marginTop: 3,
    marginBottom: 5,
  }
  const lis = avatars.map((avatar)=><div>{avatar}</div>)
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
        <Box position="fixed">
          
            <Stack direction="row" spacing={10}>
              <Button variant="contained" onClick={()=>navigate("/friends")}>Find Friends</Button>
            </Stack>
            <Stack direction="row" sx={{backgroundColor:"white", height:"4em", width:"20em" }} >
              <Slider {...settings} style={style}>
               {avatars.map((avatar)=><div style={{width:"2em", margin:"auto" }}>{avatar}</div>)}
             </Slider>
            </Stack>
            
            <Box sx={{overflow:"auto", height:"70vh"}}>
           {/* <Typography>My Latest Posts</Typography>
            <ImageList cols={3} rowHeight={100} gap={3}>
             
              <ImageListItem>
                <img src={require("../../../assets/images/kids.jpg")} alt="IMG" />
              </ImageListItem>
              <ImageListItem>
                <img src={require("../../../assets/images/kids.jpg")} alt="IMG" />
              </ImageListItem>
              <ImageListItem>
                <img src={require("../../../assets/images/kids.jpg")} alt="IMG" />
              </ImageListItem>
            </ImageList>
            */}

            <Typography>Latest Stories</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>

       <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
        </Box>
    </Box>
  )
}

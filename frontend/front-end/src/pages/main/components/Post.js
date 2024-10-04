import { Card, CardActions, CardContent, CardMedia, IconButton, Box, CardHeader, Avatar, Typography, Checkbox } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from 'react';
import { useEffect } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import api_tision from '../../../api_tision';
import getPostData from './GetPostData';
import rateLimit from 'axios-rate-limit';
import React from 'react';


export default function Post({props}) {
return(
      <Card sx={{ width: "100%", marginBottom: 3}}>
              <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  {props.user}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                </IconButton>
              }
              title={`Title ${props.title}`}
              subheader={`posted on ${props.created_at}`}
            />
            <CardMedia
              component="img"
              height="20%"
              image={props.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {props.post_info}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              </IconButton>
            </CardActions>
            </Card>
    
    )
  
}

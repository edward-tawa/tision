import { Box, Stack } from '@mui/material'
import SideBar from '../../main/components/SideBar'
import Top from  '../../../pages/TopRibbon/components/Top'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from 'react';
import api_tision from '../../../api_tision';

export const Friends = () => {
  const[isLoading, setLoading] = useState(true)
  const[friend, setFriend] = useState()
  useEffect(()=>{
    api_tision.get('http://localhost:8000/tision/users/')
    .then((res)=>res.data)
    .then((data)=>{
      setFriend(data)
      setLoading(false)
    })
       .catch((error)=>console.log(error))

  },[])

  if(isLoading){
    console.log("Loading........")
    //console.log("Hie friend", friend)
  }
  else{
    console.log("Hie friend", friend)
  return (
    <>    
    <Top />
 
    <Stack direction="row">
        <Box flex={0.195}>
            <SideBar />
        </Box>
        <Box flex={1}>
          <Box sx={{display:"flex", flexWrap:"wrap",gap:2}}>
               {friend.map((obj)=>{
                return(
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {obj.username}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>

                        <Button variant="contained">Add Friend</Button>
                      </CardActions>
                    </Card>
                     )
                 })}

            </Box>
        </Box>
    </Stack>
    </>

    )
  }
}
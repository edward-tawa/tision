import { AppBar, Grid, Stack, Toolbar } from '@mui/material'
import React from 'react'

export default function Test(){
  return (
    <>
    <Grid container gap={1}>
      <Grid item>
        <AppBar>
            <Toolbar>
              <Stack direction="row" sx={{flex:1 }}>
                <div style={{backgroundColor:"red"}}>Hie</div>
                <div style={{backgroundColor:"pink"}}>Hie</div>
                <div style={{backgroundColor:"yellow"}}>Hie</div>
                <div style={{backgroundColor:"green", position: "fixed", right:5}}>Hie</div>
              </Stack>
            </Toolbar>
        </AppBar>
        </Grid>   
    </Grid>
      
    </>
  )
}

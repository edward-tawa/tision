import { useState } from "react";
import { AppBar, IconButton, Toolbar, Tooltip, Grid, Typography, TextField, Avatar,Paper, Stack, Button, Menu, MenuItem} from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { borderRight, useMediaQuery } from "@mui/system";



export default function NavBar(){
const[open, setOpen] = useState(false)
const smallMatches = useMediaQuery('(max-width: 500px)');

const[inputStyle, setInputStyle] = useState({
    height: "2em",
    borderRadius: "10em",
    marginTop: "4px",
    width: "14em",
})
const handleFocus = ()=>{
    setInputStyle({
        height: "2em",
        borderRadius: "10em",
        marginTop: "4px",
        width: "18em", 
        outline: "none",
    })
}

const handleBlur = ()=>{
        setInputStyle({
        height: "2em",
        borderRadius: "10em",
        marginTop: "4px",
        width: "14em", 
        outline: "none",
    })
}
    return (
        <>
        <AppBar id="appbar" sx={{position: 'sticky', width:"100%", marginBottom:1}}>
            <Toolbar>
                <Grid container sx={{alignItems: 'center'}} flexGrow={2}>
                    <Grid item sx={{display: {xs:"block", sm:"none", md:"none", lg:"none", xl:"none"} }}>
                        <IconButton ><MenuIcon sx={{fontSize: {xs:30} }} /></IconButton>
                    </Grid>

                    <Grid xs={1} sm={1.4} md={1.4} lg={1} xl={1}>
                        <Typography sx={{fontSize: {xs:28, sm:28, md:35, lg:35, xl:35} }}>Tision</Typography>
                                
                    </Grid>

                    <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{display:{xs:"none", sm:"block", md:"block", lg:"block", xl:"block"} }}>
                        <input type="text" placeholder="search" id="input" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}/>
                    </Grid>

                    <Grid item xs={3} sm={4} md={6} lg={6} xl={6} sx={{}}>
                        <Stack direction="row" sx={{position:"absolute", right: {xs:"1em", sm:"1em", md:"1em", lg:"1em", xl:"1em"}, top:{xs:"0.6em", sm:"0.6em", md:"0.6em", lg:"0.6em", xl:"0.6em"}, display:{xs:"none", sm:"none", md:"none", lg:"none", xl:"none"} }} spacing={{xs:1, sm:2, md:3, lg:3, xl:3}}>
                            <Tooltip title="Chats" arrow="true" sx={{backgroundColor: 'green'}}><Avatar sx={{backgroundColor:'#3ea4f0'}}><IconButton><ChatIcon sx={{color:'#FFFFFF'}}/></IconButton></Avatar></Tooltip>
                            <Tooltip title="Notifications" arrow="true"><Avatar sx={{backgroundColor:'#3ea4f0'}}><IconButton><NotificationsIcon sx={{color:'#FFFFFF'}}/></IconButton></Avatar></Tooltip>
                            <Tooltip title="Account" arrow="true"><Avatar sx={{backgroundColor:'#3ea4f0'}} onClick={e=>setOpen(true)}><IconButton><AccountCircleIcon sx={{color:'#FFFFFF'}}/></IconButton></Avatar></Tooltip>
                        </Stack>
                    </Grid>   

                </Grid>
            </Toolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
    </>
    );
}
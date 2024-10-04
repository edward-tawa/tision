import React from 'react'
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText,Switch } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArticleIcon from '@mui/icons-material/Article';
import ModeNightIcon from '@mui/icons-material/ModeNight';


export default function SideBar() {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}} >
        <Box position="fixed">
            <List>
             <ListItem>
                <ListItemButton component="a" href="#">
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText  primary="Home"/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component="a" href="#">
                    <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                    <ListItemText  primary="Profile"/>
                </ListItemButton>
            </ListItem>
             <ListItem>
                <ListItemButton component="a" href="#">
                    <ListItemIcon><Diversity3Icon /></ListItemIcon>
                    <ListItemText  primary="Friends"/>
                </ListItemButton>
            </ListItem>
             <ListItem>
                <ListItemButton component="a" href="#">
                    <ListItemIcon><GroupsIcon /></ListItemIcon>
                    <ListItemText  primary="Groups"/>
                </ListItemButton>
            </ListItem>
             <ListItem>
                <ListItemButton component="a" href="#">
                    <ListItemIcon><StorefrontIcon /></ListItemIcon>
                    <ListItemText  primary="Market Place"/>
                </ListItemButton>
            </ListItem>
             <ListItem>
                <ListItemButton component="a" href="#">
                    <ListItemIcon><ArticleIcon /></ListItemIcon>
                    <ListItemText  primary="Pages"/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component="a" href="#">
                  <ListItemIcon><ModeNightIcon /></ListItemIcon>
                  <Switch defaultChecked />
                </ListItemButton>
            </ListItem>


        </List>
        </Box>
    </Box>
  );
}

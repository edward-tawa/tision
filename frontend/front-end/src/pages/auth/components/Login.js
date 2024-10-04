import { Box, Button, FormGroup, FormLabel, IconButton, Stack, TextField, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import Top from  '../../../pages/TopRibbon/components/Top';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react'
import bcrypt from 'bcryptjs-react';
import React from 'react';
import api_tision from '../../../api_tision';
import axios from 'axios'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../constants';

export default function login() {

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm();
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState(false)
  const [fields, setFields] = useState({
    username: "",
    password: "",
  })

  useEffect(()=>{
    if(buttonState){
      navigate("/signin")
    }
  },[buttonState])


  const handleSignIn = () =>{
    setButtonState(true)
  }

  const handleChange = (e)=>{
    const value = e.target.value
    setFields({...fields, [e.target.name]:value})
  }

  const onSubmit = async (data) => {
    //await new Promise((resolve)=>setTimeOut(resolve, 2000));
     const {password} = fields
    const hash = bcrypt.hashSync(password, 10)
    const postFields = {...fields, password: hash}
    console.log("before sending", postFields)
    try{
      const response = await api_tision.post(`http://127.0.0.1:8000/tision/token`,
        fields
      )
      console.log("This is the response", response)
      if(response.status === 200 || response.status === 201){

        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        console.log("Succcess!!!!!")
        navigate("/home")
      }
      else{
        navigate("/login")
      }
    }
    catch(error){
      console.log(error)
      alert(error)
    }

  }

  return (
    <>
    <Top />
    <Box>
        <Box sx={{border: "1px solid #2979ff",borderRadius:"8px", width: "25em", height:"25em", margin:"auto",
    padding:4, backgroundColor:"#2979ff"}}>
               
            <Stack direction="row" spacing={-1} justifyContent="center" alignItems="center">
              
                 <IconButton sx={{color: "white"}}> 
                  <LanguageIcon />
                </IconButton>
                 <Typography variant="h5" sx={{width:"5em", margin:"auto", display:"flex", color:"white"}}>
                  Tision
                </Typography>
            </Stack>
    
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup sx={{rowGap:1}}>
                    <FormLabel sx={{color:"white"}}>Username</FormLabel>
                    <TextField {...register("username", {

                      required: "Username is required"

                  })} variant="outlined" sx={{
                "& .MuiOutlinedInput-root": {
                color: "white",
                fontWeight: "light",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                  borderWidth: "1px",
                }

            }} name="username" onChange={handleChange} />

                {errors.email && (<div style={{color:"red"}}>{errors.email.message}</div>)}

                <FormLabel sx={{color:"white"}}>Password</FormLabel>
                <TextField {...register("password", {required: "password required",
                minLength:{
                  value: 8,
                  message: "password is too short",
                }
              })} variant="outlined"  type="password" sx={{
                "& .MuiOutlinedInput-root": {
                color: "white",
                fontWeight: "light",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                  borderWidth: "1px",
                }
            }} name="password" onChange={handleChange}/>
            {errors.password && (<div style={{color: "red"}}>
              {errors.password.message}
            </div>)}
                    
                </FormGroup>
                <Button type="submit" variant="contained" sx={{width:"maxContent", margin:"auto", backgroundColor: "#FFA500",
                    "&:hover":{backgroundColor:"#FFB800", },marginTop:"4em", marginLeft:"11em", }}>
                    {isSubmitting ? "LOGGING IN": "LOG IN" }
                </Button>

               
            </form>
             <Button variant="contained" sx={{width:"maxContent", margin:"auto", backgroundColor: "#FFA500",
                    "&:hover":{backgroundColor:"#FFB800", },marginTop:"4em", marginLeft:"8em", }} onClick={handleSignIn}>
                   Create Account
                </Button>
        </Box>
    </Box>
    
    </>
  )
}

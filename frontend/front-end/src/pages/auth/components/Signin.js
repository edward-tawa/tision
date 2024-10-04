import { Box, Button, Checkbox, FormGroup, FormLabel, IconButton, Stack, TextField,Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import LanguageIcon from '@mui/icons-material/Language';
import Top from  '../../../pages/TopRibbon/components/Top';
import axios from 'axios';
import bcrypt from 'bcryptjs-react'
import {useForm} from 'react-hook-form';
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import api_tision from '../../../api_tision';
import React from 'react';


export default function Signin() {
  const {register, handleSubmit, formState:{errors, isSubmitting} } = useForm()
  const[buttonState, setButtonState] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    if(buttonState){
      navigate("/login")
    }
  },[buttonState])
 const [fields, setFields] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  })
  
  const handleLogIn = ()=>{
    setButtonState(true)
  }

  const handleChange = (e)=>{
    const value = e.target.value
    setFields({...fields, [e.target.name]:value})
  
  }

  const onSubmit = async (data)=>{
    await new Promise((resolve)=>setTimeout(resolve, 2000))
    const pass1 = document.getElementById("pass1").value;
    const confirm = document.getElementById("confirm").value;
    if (pass1 === confirm){
      console.log("all good")
    }
    else{
      console.log("not good")
    }
    const {password} = fields
    const hash = bcrypt.hashSync(password, 10)
    const postFields = {...fields, password: hash}

    console.log("Before Post", fields)

    axios.post('http://127.0.0.1:8000/tision/user/register',
    
    postFields,  {
                  headers: {
                  'Content-Type': 'multipart/form-data'
              }
            }).
    then(response=>{
      console.log("Response status", response)
      if (response.status===201){
        console.log("Hie daddy")
        navigate("/login")
      }
    }).
    catch(error=>console.log("Paita error", error))
    console.log("Mafields", postFields)
  }
 return (
    <>
      <Top />
      <Box paddingTop={0}>
        <Box sx={{border:"1px solid #2979ff", borderRadius:"5px", width:"28em",height:"fit-content", margin:"auto",
        padding:4, backgroundColor:"#2979ff",}} >

            <Stack direction="row" spacing={-1} justifyContent="center" alignItems="center">         
              <IconButton sx={{color: "white"}}>
                  <LanguageIcon />
              </IconButton>
              <Typography variant="h5" sx={{width:"5em", margin:"auto", display:"flex", color:"white"}}>
                  Tision
              </Typography>
            </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup sx={{rowGap:1,}}>
              <FormLabel sx={{color:"white"}}>Username</FormLabel>
              <TextField {...register("username",
              {
                required: "Username is required"
              })}
               variant="outlined" sx={{
                "& .MuiOutlinedInput-root": {
                color: "white",
                fontWeight: "light",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                  borderWidth: "1px",
                }

              }} name="username" onChange={handleChange}/>
              {errors.username && (<div style={{color:"red"}}>{errors.username.message}</div>)}


              <FormLabel sx={{color:"white"}}>First Name</FormLabel>
              <TextField {...register("first_name",
              {
                required: "First name is required"
              })}
               variant="outlined" sx={{
                "& .MuiOutlinedInput-root": {
                color: "white",
                fontWeight: "light",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                  borderWidth: "1px",
                }

              }} name="first_name" onChange={handleChange}/>
              {errors.first_name && (<div style={{color:"red"}}>{errors.first_name.message}</div>)}

              <FormLabel  sx={{color:"white"}}>Last Name</FormLabel>
              <TextField {...register("last_name", 
              {
                required: "Last name is required"
              
              }
              )} variant="outlined" sx={{
                "& .MuiOutlinedInput-root": {
                color: "white",
                fontWeight: "light",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                  borderWidth: "1px",
                }

              }} name="last_name" onChange={handleChange}/>
              {errors.last_name && (<div style={{color:"red"}}>{errors.last_name.message}</div>)}

              <FormLabel sx={{color:"white" }}>Email</FormLabel>
              <TextField  {...register("email",
              {
                required: "Email required",
                validate: (data)=>{
                  if(!data.includes("@")){
                    return "Email must have @ symbol"
                  }
                }
              }
              )} variant="outlined"  sx={{
                "& .MuiOutlinedInput-root": {
                color: "black",
                fontWeight: "light",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                  borderWidth: "1px",
                }

              }}name="email" onChange={handleChange}/>
            {errors.email && (<div style={{color: "red"}}>{errors.email.message}</div>)}  

           {/*
            <FormLabel sx={{color:"white"}}>Date of Birth</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DatePicker']} >
              <DatePicker 
              label="DOB"  slotProps={{ textField: { fullWidth: true } }}
              
              
              sx={{
                "& .MuiOutlinedInput-root": {
                color: "white",
                fontWeight: "light",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                  borderWidth: "1px",
                }

              }} />
             

            </DemoContainer>
            </LocalizationProvider>
             {errors.dob && (<div style={{color:"red"}}>{errors.dob.message}</div>)}

            */}
             <FormLabel sx={{color:"white"}}>Password</FormLabel>
              <TextField  {...register("password",
              {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: <div style={{color:"red"}}>password lenght must at least 8 characters</div>
                }
              }
              )} variant="outlined" type="password" id="pass1" sx={{
                "& .MuiOutlinedInput-root": {
                color: "white",
                fontWeight: "light",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                  borderWidth: "1px",
                }

              }}name="password" onChange={handleChange}/>
              {errors.password && (<div>{errors.password.message}</div>)}

               <FormLabel sx={{color:"white"}}>Confirm Password</FormLabel>
              <TextField  {...register("confirm", 
              {
                required: "You need to confirm password",
                minLength: {
                  value: 8,
                  message: <div style={{color: "red"}}>Length must be at least 8 characters</div>
                }
              }
              )} variant="outlined" type="password" id="confirm" sx={{
                
                "& .MuiOutlinedInput-root": {
                color: "white",
                fontWeight: "light",
                },
                "&:hover .MuiOutlinedInput-notchedOutline":{
                  borderColor: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                  borderWidth: "1px",
                },

              }}name="confirm"/>
              {errors.confirm && (<div style={{color: "red"}}>{errors.confirm.message}</div>)}

           {/* <FormLabel sx={{color:"white"}}>
              Sex
            </FormLabel>
            <FormLabel sx={{color:"white"}}>
              Male <Checkbox label="Men"  sx={{color:"white"}}/>
              Female <Checkbox label="Men"  sx={{color:"white"}}/>
            </FormLabel>
            */}
            </FormGroup>    

            <Stack direction="row" gap={0} sx={{alignItems: "center", justifyContent: "center", width:"17em"}}>
                <Button disabled={isSubmitting} type="submit" variant="contained" sx={{width:"maxContent", margin:"auto", backgroundColor: "#FFA500",
                    "&:hover":{backgroundColor:"#FFB800", },marginTop:"4em", marginLeft:"11em", }}>
                    {isSubmitting ? "submitting" : "SIGN IN"}</Button>

                    <Button disabled={isSubmitting} variant="contained" sx={{width:"maxContent", margin:"auto", backgroundColor: "#FFA500",
                    "&:hover":{backgroundColor:"#FFB800", },marginTop:"4em", marginLeft:"11em", }} onClick={handleLogIn}>
                    LOG IN</Button>
            </Stack>
            
          </form> 
        </Box>
    </Box>
    </>

  );
}

import React from 'react'
import Post from './Post'
import UpLoad from './UpLoad'
import { Box } from '@mui/material'
import api_tision from '../../../api_tision';
import {useState, useEffect} from 'react';

export default function Feed() {
const [postData, setData] = useState()
const [isLoading, setLoading] = useState(true)
useEffect(()=>{
   api_tision.get('http://127.0.0.1:8000/tision/posts/')
   .then(res=>res.data)
   .then((data)=>{ setData(data)
    setLoading(false)
  })
   .catch((error)=>console.log(error))
},[])


if(isLoading){
  console.log("Loading")
}
else{
  console.log("All Posts", postData)
  console.log("The first post",postData[0])
  return (
    <>
        <Box flex={4} p={2}>
              <UpLoad />
      
              {postData.map((obj, index)=>{
                  return <Post props={obj} /> 
              })}                  
                  
               
        </Box>
    </>
    )
  }
}

import React from 'react'
import axios from "axios"
import { useState,useEffect } from 'react'
import {Box,Flex} from "@chakra-ui/react"
import { NavCard } from './NavCard'
export const NavList = () => {
    const[catagory,setCategory]=useState([])
    const getData=()=>{
        axios.get(`https://636f63f1bb9cf402c81694bd.mockapi.io/Navcard`)
        .then((res)=>{
            setCategory(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getData()
    })
  return (
    <Box width="95%" boxShadow="md" m="auto" mt="20px" >
     <Flex justify="space-around" >
{
catagory?.map((el)=>(
    <NavCard key={el.id} {...el}/>
    
))
}
       
  </Flex>
    </Box>
  )
}

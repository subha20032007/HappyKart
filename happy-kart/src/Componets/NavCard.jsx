import React from 'react'
import {Box,Image,Text} from "@chakra-ui/react"
export const NavCard = ({id,title,image}) => {
  return (
   
    <Box w="100px"   h="110px" key={id}>
       <Image m="auto" src={image} alt={title}/>
       <Text>{title}</Text> 
    </Box>
 
  )
}

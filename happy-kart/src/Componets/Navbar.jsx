import React from 'react'
import {Box,Flex,Spacer,Input} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <Box boxShadow="md" pb="25px"  pt="25px">
        <Flex>
      <Box>
      <Link to="/">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" alt="" />
     </Link>
      </Box>
      <Spacer/>
    
      <Input type="text" placeholder="Search For Products Brands And More" w="450px" size="sm" variant="filled"/>

      <Spacer/>
      <Link to="/admin">
        Become a Seller</Link>
      <Spacer/>
      <Link to="/login">Login</Link>
      <Spacer/>
      <Link to="/cart">Cart</Link>
      <Spacer/>
      </Flex>
    </Box>
  )
}

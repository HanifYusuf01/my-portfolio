"use client";
import React from "react";
import { Box, Text, InputGroup, Input, InputLeftElement, InputRightElement, Image, Button } from "@chakra-ui/react";
import Navbar from "./navbar";

export default function Discussion() {
  return (
    <Box bgColor="#11071F" display="flex" alignItems={"center"} justifyContent={"center"} mt="40" fontFamily={"Josefin Sans Variable"}>
        <Box color="gray" fontSize={{base:"2xl", md:"5xl", lg:"6xl"}} fontWeight="bold" mb="20">
        <Text>Have an Awesome Project</Text>
        <Text ml={{base:"8", md:"20"}}>Idea? <Text as="span" color="white">Lets Discuss</Text></Text>
        <InputGroup>
      <InputLeftElement pointerEvents="none" mx="2" mt='1'>
      <Image
          src="/Frame 325.png"
          alt="background left"
          width="full"
          objectFit="cover"
        />
      </InputLeftElement>
      <Input placeholder="Enter your email" borderRadius="3xl" pl="3rem" pr="4.5rem" width="full" height="12"/>
      <InputRightElement width="4.5rem" mr={2} mt="1">
        <Button size="sm" borderRadius="3xl" bgColor="#016ACE"  width="full" color="white">
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
      
        </Box>
 
    </Box>
  )
}
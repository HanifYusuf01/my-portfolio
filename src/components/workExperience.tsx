"use client";
import React from "react";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Steper from "./stepper";

export default function WorkExperience() {
  const [biggerScreen] = useMediaQuery('(min-width: 768px)')
  return (
    <Box bgColor="#11071F" height={{base:"none", md:"500px"}} fontFamily={"Josefin Sans Variable"} mt={{base:"12",sm:"32"}}>
        <Box display="flex" justifyContent={"center"} alignItems={"center"} gap="2" fontWeight={"bold"} fontSize={{base:"xl", md:"4xl", lg:"6xl"}}>
          <Text color="white">My</Text>
          <Text as="span" color="blue.200">
            Work Experience
          </Text>
        </Box>
        {biggerScreen ? 
          <Flex color="white" mx={{md: 8, lg: 16, xl:40}} mt="20" gap={{base:"2", md:"20"}}>
        <Box>
          <Box mb="12">
            <Text fontWeight={"bold"} fontSize={{md:"xl", lg:"3xl"}}>System Technologies, Ilorin</Text>
            <Text color="#98A2B3" fontSize={{md:"lg", lg:"xl"}}>Sep 2022 - </Text>
          </Box>
          <Box mb="12">
            <Text fontWeight={"bold"} fontSize={{md:"xl", lg:"3xl"}}>Async Technologies, Ilorin</Text>
            <Text color="#98A2B3" fontSize={{md:"lg", lg:"xl"}}>Sep 2023 - March 2024 </Text>
          </Box>
          <Box mb="12">
            <Text fontWeight={"bold"} fontSize={{md:"xl", lg:"3xl"}}>Sidmach Technologies, Ikeja</Text>
            <Text color="#98A2B3" fontSize={{md:"lg", lg:"xl"}}>Nov 2023 - </Text>
          </Box>
        </Box>
        <Steper/>
        <Box>
            <Box mb="6">
                <Text fontWeight={"bold"} fontSize={{md:"xl", lg:"3xl"}}>Frontend Developer</Text>
                <Text color="#98A2B3" fontSize={{md:"lg", lg:"xl"}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Suscipit ipsam eum fuga quidem </Text>
            </Box>
            <Box mb="6">
                <Text fontWeight={"bold"} fontSize={{md:"xl", lg:"3xl"}}>Frontend Developer</Text>
                <Text color="#98A2B3" fontSize={{md:"lg", lg:"xl"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Suscipit ipsam eum fuga quidem </Text>
            </Box>
            <Box mb="6">
                <Text fontWeight={"bold"} fontSize={{md:"xl", lg:"3xl"}}>Frontend and Backend Developer</Text>
                <Text color="#98A2B3" fontSize={{md:"lg", lg:"xl"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Suscipit ipsam eum fuga quidem </Text>
            </Box>
        </Box>
      </Flex>
        : 
       <Flex color="white" mx="2" gap="2" mt="8">
        <Box>
          <Box mb="4">
          <Text fontSize="xs">System Technologies, Ilorin</Text>
          <Text color="#98A2B3" fontSize="8px">Sep 2022 - </Text>
          </Box>
          <Box mb="4">
          <Text fontSize="xs">Async Technologies, Ilorin</Text>
          <Text color="#98A2B3" fontSize="8px">Sep 2023 - March 2024</Text>
          </Box>
          <Box>
          <Text fontSize="xs">Sidmach Technologies, Ikeja</Text>
          <Text color="#98A2B3" fontSize="8px">Sep 2022 - </Text>
          </Box>
        </Box>
        <Box>
        <Box mb="2">
          <Text fontSize="xs">Frontend Developer</Text>
          <Text color="#98A2B3" fontSize="8px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Suscipit ipsam eum fuga quidem </Text>
          </Box>
          <Box mb="3">
          <Text fontSize="xs">Frontend Developer</Text>
          <Text color="#98A2B3" fontSize="8px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Suscipit ipsam eum fuga quidem </Text>
          </Box>
          <Box>
          <Text fontSize="xs">Frontend and Backend Developer</Text>
          <Text color="#98A2B3" fontSize="8px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Suscipit ipsam eum fuga quidem </Text>
          </Box>
        </Box>
       </Flex>
        }
      
    </Box>
  );
}

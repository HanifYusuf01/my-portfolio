"use client";
import React from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <Box>
    <Box position="relative" height="100vh" width="100%">
  <Box
    position="absolute"
    as="image"
    top="0"
    left="0"
    width="50%" // Adjust width as needed
    height="100%"
    backgroundSize="cover"
    backgroundPosition="center"
    zIndex="0"
  >
    <Image alt="bgImage" src="/Gradient2.png"/>
  </Box>
  <Box
    position="absolute"
    top="0"
    right="0"
    width="50%" // Adjust width as needed
    height="100%"
    backgroundSize="cover"
    backgroundPosition="center"
    zIndex="0"
  >
     <Image alt="bgImage" src="/Gradient.png"/>
  </Box>
   <Flex
        direction="column"
        position="relative"
        zIndex="1"
        minHeight="100vh"
        minWidth="100vh"
      >
        {/* Main content */}
        <Flex
          flex="1"
          height="100%"
          justifyContent={{base:"none", md:"space-between"}}
          gap={2}
          mx={{ base: 2, md: 20, lg:40, xl: 60 }}
          flexDirection={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
          p={{ base: 4, md: 0 }}
          mt={{ base: 2, md: 12 }}
        >
          <Box
            order={{ base: 1, md: 2 }}
            transform={{ base: "none", md: "rotate(-5deg) skew(-5deg)"}}
            overflow="hidden"
            width={{ base: "150px", md:"240px", lg: "280px" }}
            height={{ base: "150px", md:"240px", lg: "280px" }}
            rounded="full"
            mb={{ base: 8, md: 0 }}
            ml={{ base: "16", md:"none"}}
          >
            <Image
              src="/profilePicture.jpeg"
              alt="avatar"
              width="100%"
              height="100%"
              transform={{ base: "none", md: "rotate(5deg) skew(5deg)" }}
              objectFit="cover"
            />
          </Box>

          <Box
            color="white"
            width="50%"
            order={{ base: 2, md: 1 }}
            fontFamily={"Josefin Sans Variable"}
          >
            <Box fontWeight={"bold"} fontSize={{ base: "xl", md: "4xl", lg:"5xl", xl: "6xl" }}>
              <Text>Hello, I am a</Text>
              <Text>
                Hanif{" "}
                <Text as="span" color="blue.200">
                  Yusuf
                </Text>
              </Text>
            </Box>
            <Text mt={4} fontSize={{ base: "sm", md:"lg", lg:"xl", xl: "2xl" }} mr={{base:"6", md:"none"}}>
              a passionate and dedicated software developer with over 3 years of
              experience in building high-quality web and mobile applications.
            </Text>
          </Box>
        </Flex>
      </Flex>
</Box>
    </Box>
  );
}

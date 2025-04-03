"use client";
import React from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <Box bg="#141625">
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
          <Image alt="bgImage" src="/Gradient2.png" />
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
          <Image alt="bgImage" src="/Gradient.png" />
        </Box>
        <Flex
          direction="column"
          position="relative"
          zIndex="1"
          
        >
          {/* Main content */}
          <Flex
            flex="1"
            height="100%"
            justifyContent={{ base: "none", md: "space-between" }}
            gap={2}
            mx={{ base: 0, md: 20, lg: 40, xl: 60 }}
            flexDirection={{ base: "column", md: "row" }}
            textAlign={{ base: "center", md: "left" }}
            p={{ base: 4, md: 0 }}
            mt={{ base: 2, md: 12 }}
          >
            <Box
              order={{ base: 1, md: 2 }}
              width={{ base: "200px", md: "240px", lg: "280px" }}
              height={{ base: "300px", md: "300px", lg: "360px" }}
              mb={{ base: 8, md: 0 }}
              ml={{ base: "16", md: "none" }}
              rounded={"full"}
            >
              <Image
                src="/profilePicture.jpeg"
                alt="avatar"
                width="100%"
                height="100%"
                rounded={"md"}
                objectFit="cover"
              />
            </Box>

            <Box
              color="white"
              width={{base:"50%", md:"50%"}}
              order={{ base: 2, md: 1 }}
              fontFamily={"Josefin Sans Variable"}
            >
              <Box
                fontWeight={"bold"}
                fontSize={{ base: "xl", md: "3xl", lg: "4xl"}}
              >
                <Text
                  bgGradient="linear(to-r,rgb(48, 40, 202),rgb(89, 139, 160))"
                  bgClip="text"
                  fontSize={{base:"3xl", md:"6xl"}}
                  fontWeight="extrabold"
                >
                  SOFTWARE DEVELOPER
                </Text>
              </Box>
              <Text
                mt={4}
                fontSize={{ base: "sm", md: "lg" }}
                mr={{ base: "6", md: "none" }}
                mb={4}
              >
                I am Hanif{" "}
                <Text as="span" color="blue.200">
                  {" "}
                  - web developer.
                </Text>{" "}
                I am passionate and dedicated software developer with over 3
                years of experience in building high-quality web and mobile
                applications.
              </Text>
              
              <Button
                bgGradient="linear(to-r, blue.300, rgb(10, 6, 90),  blue.800)"
                color="white"
                fontWeight="bold"
                fontSize={"sm"}
                _hover={{
                  bgGradient: "linear(to-r, blue.300, blue.900)",
                }}
              >
                VIEW MY WORK
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

"use client";
import React from "react";
import { Box, Text, InputGroup, Input, InputLeftElement, InputLeftAddon, Image, Button } from "@chakra-ui/react";

export default function Discussion() {
  return (
    <Box
      bgColor="#11071F"
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      mt="40"
      fontFamily={"Josefin Sans Variable"}
    >
      <Box
        color="gray"
        fontSize={{ base: "2xl", md: "5xl", lg: "6xl" }}
        fontWeight="bold"
        mb="20"
      >
        <Text>Have an Awesome Project</Text>
        <Text ml={{ base: "8", md: "20" }}>
          Idea?{" "}
          <Text as="span" color="white">
            Lets Discuss
          </Text>
        </Text>
        <a href="mailto:haniftaiwo1421@gmail.com">
          <InputGroup>
            <InputLeftElement pointerEvents="none" mx="2" mt="1">
              <Image
                src="/Frame 325.png"
                alt="background left"
                width="full"
                objectFit="cover"
              />
            </InputLeftElement>
            <Input
              placeholder="Sent an Email"
              borderRadius="3xl"
              pl="3rem"
              pr="4.5rem"
              width="full"
              height="12"
              cursor="pointer"
            />
          </InputGroup>
        </a>
      </Box>
    </Box>
  );
}

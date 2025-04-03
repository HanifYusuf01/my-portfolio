"use client";
import { Box, Heading, Text, Flex, Icon, Grid, GridItem } from "@chakra-ui/react";
import { FaLaptopCode, FaPalette, FaWordpress } from "react-icons/fa";


export default function Services() {
  return (
    <Box bg="#141625" py={16} px={4}>
      {/* MY SERVICES Heading with Gradient */}
      <Heading 
        fontSize={{ base: "3xl", md: "4xl" }}
        mb={12}
        textAlign="center"
        bgGradient="linear(to-r, blue.300, rgb(10, 6, 90),  blue.800)"
        bgClip="text"
      >
        MY SERVICES
      </Heading>
      
      {/* Staggered Grid Layout */}
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        gap={8}
        maxW="1200px"
        mx="auto"
      >
        {/* Website Development Card */}
        <GridItem colSpan={1}>
          <Box
            p={6}
            borderRadius="md"
            border="1px solid"
            borderColor="whiteAlpha.200"
            bg="rgba(30, 41, 59, 0.4)"
            backdropFilter="blur(10px)"
          >
            <Flex align="center" mb={4}>
              <Icon as={FaLaptopCode} color="#3182CE" boxSize={6} mr={3} />
              <Heading size="lg" color="white">Website Development</Heading>
            </Flex>
            <Text color="whiteAlpha.700" fontSize="sm">
              I deliver modern, beautiful, pixel-perfect design. Whether it's a landing page or a
              business card website, I will make it look great on both desktop and any device.
            </Text>
          </Box>
        </GridItem>

        {/* Empty Grid Item for Staggering */}
        <GridItem colSpan={1} display={{ base: "none", lg: "block" }} />

        {/* Web Design Card */}
        <GridItem colSpan={1} display={{ base: "none", lg: "block" }} />
        <GridItem colSpan={1}>
          <Box
            p={6}
            borderRadius="md"
            border="1px solid"
            borderColor="whiteAlpha.200"
            bg="rgba(30, 41, 59, 0.4)"
            backdropFilter="blur(10px)"
          >
            <Flex align="center" mb={4}>
              <Icon as={FaPalette} color="#3182CE" boxSize={6} mr={3} />
              <Heading size="lg" color="white">Web Design</Heading>
            </Flex>
            <Text color="whiteAlpha.700" fontSize="sm">
              I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.
            </Text>
          </Box>
        </GridItem>

        {/* WordPress Development Card */}
        <GridItem colSpan={1}>
          <Box
            p={6}
            borderRadius="md"
            border="1px solid"
            borderColor="whiteAlpha.200"
            bg="rgba(30, 41, 59, 0.4)"
            backdropFilter="blur(10px)"
          >
            <Flex align="center" mb={4}>
              <Icon as={FaWordpress} color="#3182CE" boxSize={6} mr={3} />
              <Heading size="lg" color="white">WordPress Development</Heading>
            </Flex>
            <Text color="whiteAlpha.700" fontSize="sm">
              I build websites on WordPress, making them easy to update and manage. The perfect choice for blogs, small businesses, or portfolios.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

"use client";
import React from "react";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Steper from "./stepper";

export default function WorkExperience() {
  const [biggerScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      bgColor="#11071F"
      height={{ base: "none", md: "500px" }}
      fontFamily={"Josefin Sans Variable"}
      mt={{ base: "12", sm: "32" }}
    >
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        gap="2"
        fontWeight={"bold"}
        fontSize={{ base: "xl", md: "4xl", xl: "6xl" }}
      >
        <Text color="white">My</Text>
        <Text as="span" color="blue.200">
          Work Experience
        </Text>
      </Box>
      {biggerScreen ? (
        <Flex
          color="white"
          mx={{ md: 8, lg: 16, xl: 40 }}
          mt="20"
          gap={{ base: "2", md: "20" }}
        >
          <Box>
            <Box mb={{base:"12", lg:"20", xl:"28"}}>
              <Text fontWeight={"bold"} fontSize={{ md: "xl",  xl: "3xl" }}>
                System Technologies, Ilorin
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg", xl: "xl" }}>
                Sep 2022 -{" "}
              </Text>
            </Box>
            <Box  mb={{base:"12", lg:"20", xl:"28"}}>
              <Text fontWeight={"bold"}  fontSize={{ md: "xl",  xl: "3xl" }}>
                Async Technologies, Ilorin
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg", xl: "xl" }}>
                Sep 2023 - March 2024{" "}
              </Text>
            </Box>
            <Box mb="12">
              <Text fontWeight={"bold"}  fontSize={{ md: "xl",  xl: "3xl" }}>
                Sidmach Technologies, Ikeja
              </Text>
              <Text color="#98A2B3"fontSize={{ md: "lg", xl: "xl" }}>
                Nov 2023 -{" "}
              </Text>
            </Box>
          </Box>
          <Steper />
          <Box>
            <Box mb="6">
              <Text fontWeight={"bold"} fontSize={{ md: "xl",  xl: "3xl" }}>
                Frontend Developer
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg", xl: "xl" }} w={{md:"350px", lg:"500px"}}>
                Supported Systems Technologies testing and development
                processes. <br />
                Worked closely with product team on scope of future projects and
                innovations. <br />
              </Text>
            </Box>
            <Box mb="6">
              <Text fontWeight={"bold"} fontSize={{ md: "xl",  xl: "3xl" }}>
                Frontend Developer
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg", xl: "xl" }} w={{md:"350px", lg:"500px"}}>
                Consumed APIs and integrated them into the frontend. <br />
                Developed and maintained user interfaces using React. <br />
                Participated in code reviews and provided constructive feedback.
              </Text>
            </Box>
            <Box mb="6">
              <Text fontWeight={"bold"} fontSize={{ md: "xl",  xl: "3xl" }}>
                Frontend and Backend Developer
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg", xl: "xl" }} w={{md:"350px", lg:"500px"}}>
                Triaged multiple tasks and competing priorities in servicing
                requests from senior managers.
                <br />
                Reviewed and made refinements in existing programs to improve
                techniques.
              </Text>
            </Box>
          </Box>
        </Flex>
      ) : (
        <Flex color="white" mx="4" gap="2" mt="8">
          <Box>
            <Box mb="4">
              <Text fontSize="xs">System Technologies, Ilorin</Text>
              <Text color="#98A2B3" fontSize="8px">
                Sep 2022 -{" "}
              </Text>
            </Box>
            <Box mb="4">
              <Text fontSize="xs">Async Technologies, Ilorin</Text>
              <Text color="#98A2B3" fontSize="8px">
                Sep 2023 - March 2024
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs">Sidmach Technologies, Ikeja</Text>
              <Text color="#98A2B3" fontSize="8px">
                Sep 2022 -{" "}
              </Text>
            </Box>
          </Box>
          <Box>
            <Box mb="2">
              <Text fontSize="xs">Frontend Developer</Text>
              <Text color="#98A2B3" fontSize="8px"  >
              Supported Systems Technologies testing and development
                processes. <br />
                Worked closely with product team on scope of future projects and
                innovations. <br />
              </Text>
            </Box>
            <Box mb="3">
              <Text fontSize="xs">Frontend Developer</Text>
              <Text color="#98A2B3" fontSize="8px">
              Consumed APIs and integrated them into the frontend. <br />
                Developed and maintained user interfaces using React. <br />
                Participated in code reviews and provided constructive feedback.
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs">Frontend and Backend Developer</Text>
              <Text color="#98A2B3" fontSize="8px">
              Triaged multiple tasks and competing priorities in servicing
                requests from senior managers.
                <br />
                Reviewed and made refinements in existing programs to improve
                techniques.
              </Text>
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
}

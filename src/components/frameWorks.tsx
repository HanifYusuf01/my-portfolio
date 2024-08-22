"use client";
import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Stacks=[
  "ReactJS",
  "NextJS",
  "TailwindCss",
  "C#",
  "Asp.net",
  "Chakra Ui",
  "Javascipt",
  "CSS",
  "Typescript",
  "Bootstrap",
]
export default function FrameWork() {
  return (
    <Box bgColor="#11071F">
      <Box
        bgColor={"#006CCF"}
        borderTopLeftRadius={"xl"}
        borderBottomRightRadius={"xl"}
        borderTopRightRadius={0}
        borderBottomLeftRadius={0}
        height={{ base: "16", md: "24" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={{ base: 2, md: 4 }}

      >
        <Box overflow="hidden" whiteSpace="nowrap" width="100%">
          <Box
            as="span"
            display="inline-block"
            animation="marquee 15s linear infinite"
          >
            <Box
              bgColor={"white"}
              display="flex"
              fontWeight="bold"
              gap={{ base: 2, md: 4 }}
              fontSize={{ base: "lg", md: "3xl" }}
              alignItems="center"
              justifyContent="center"
              transform={{ base: "rotate(-1deg)", md: "rotate(-1deg)" }}
              paddingY={{ base: 1, md: 2 }}
              width={{base:"1200px", md:"1900px"}}
            >
              {Stacks.map((stack) => (
                <Flex key={stack} gap={{ base: 1, md: 2 }} alignItems={"center"} mx="4">
                  <Text>{stack}</Text>
                  <Image src="/star 3.png" alt="star" height={{ base: 4, md: 8 }} />
                </Flex>
              ))}
            </Box>
          </Box>
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          `}</style>
        </Box>
      </Box>
    </Box>
  );
}

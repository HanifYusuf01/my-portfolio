"use client";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
const Placeholder = ["PlaceHolder1.png", "PlaceHolder.png"];
export default function Project() {
  return (
    <Box bgColor="#11071F" width="100%">
      <Box mx={{base: "2", md:"12", lg:"36", xl:"56"}} mt={{base:"8", md:"52"}}>
        <Text color="blue.200" fontWeight={"bold"} fontSize={{base:"xl", md:"5xl", lg:"6xl"}} ml="4" fontFamily={"Josefin Sans Variable"} >
          Projects.
        </Text>
        <Box>
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            gap={{md:"6", lg:"12"}}
            fontFamily={"Josefin Sans Variable"}
          >
            <Box
              p="4"
              borderRadius="xl"
              bgGradient="linear(to-r, rgba(0, 0, 139, 0.3), rgba(0, 0, 0, 0.3))"
              backdropFilter="blur(30px)"
              border="1px solid white"
              width={{base:"300px", md:"90%"}}
              height={{base: "300px", md:"450px"}}
            >
              <Image
                src={"/PlaceHolder1.png"}
                alt="star"
                height={{ base: 40, md:72, lg:"300px", xl: 80 }}
                width="100%"
                borderRadius="lg"
              />
              <Box mt="4">
                <Text  color="white" fontSize="xl">
                  Project Title
                </Text>
                <Text color="rgba(255, 255, 255, 0.8)">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Text>
              </Box>
            </Box>
            <Box
              p="4"
              borderRadius="xl"
              bgGradient="linear(to-r, rgba(0, 0, 139, 0.3), rgba(0, 0, 0, 0.3))"
              backdropFilter="blur(30px)"
              border="1px solid white"
              width={{base:"300px", md:"90%"}}
              height={{base: "300px", md:"450px"}}
            >
              <Image
                src={"/PlaceHolder.png"}
                alt="star"
                height={{ base: 40, md:72, lg:"300px", xl: 80 }}
                width="100%"
                borderRadius="lg"
              />
              <Box mt="4">
                <Text  color="white" fontSize="xl">
                  Project Title
                </Text>
                <Text color="rgba(255, 255, 255, 0.8)">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          border="1px"
          borderColor="white"
          bg="black"
          borderRadius="xl"
          mt={{base:"10", md:"20"}}
          p={{base:"2", md:"4"}}
          width={{base:"300px", md: "100%"}}
          fontFamily={"Work Sans Variable"}
        >
          <Box display={"flex"} flexDirection={{base:"column", md:"row"}}>
            {" "}
            <Box width={{base:"100%", md:"50%"}}>
              <Box p={{base: "2", md:"8"}}>
              <Text fontWeight="bold" color="white" fontSize={{base:"lg", md:"3xl"}}>
                HoneyBunny
              </Text>
              <Text color="gray" fontSize={{base: "md",  lg:"xl"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam eos saepe voluptatum quaerat vel esse cumque. Omnis
                quasi incidunt architecto id adipisci natus quo nulla.
              </Text>
              <Text color="blue.200" mt="4" fontSize={{base: "lg", lg:"xl"}}>
                View Website
              </Text>
              </Box>
            </Box>
            <Box height="100%" width={{base:"100%", md:"50%"}}>
              <Image
                src="/Home 1.png"
                alt="avatar"
                width={{base:"90%", md:"100%"}}
                height={{base: "20%", md:"100%"}}
                objectFit="cover"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

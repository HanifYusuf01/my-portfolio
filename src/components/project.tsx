"use client";
import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";


export default function Project() {
  const clickpayUrl = "https://clickpay.com.ng/";
  const systemsTechUrl = "https://systemstech.com.ng/";
  return (
    <Box bgColor="#11071F" width="100%">
      <Box mx={{base: "2", md:"12", lg:"36", xl:"56"}} mt={{base:"8", md:"60"}} mb="4">
        <Text color="blue.200" fontWeight={"bold"} fontSize={{base:"xl", md:"5xl", lg:"6xl"}} ml="4" fontFamily={"Josefin Sans Variable"} >
          Projects.
        </Text>
        <Box>
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base:"6", md:"6", lg:"12"}}
            fontFamily={"Josefin Sans Variable"}
          >
            <Box
              p="4"
              borderRadius="xl"
              bgGradient="linear(to-r, rgba(0, 0, 139, 0.3), rgba(0, 0, 0, 0.3))"
              backdropFilter="blur(30px)"
              border="1px solid white"
              width={{base:"300px", md:"90%"}}
              height={{base: "430px", md:"550px", lg:"570px", xl:"550px"}}
            >
              <Image
                src={"/systemTech.png"}
                alt="star"
                height={{ base: 40, md:72, lg:"300px", xl: 80 }}
                width="100%"
                borderRadius="lg"
              />
              <Box mt="4">
                <Text  color="white" fontSize={{base:"md", lg:"xl"}}>
                  Systems Technology Website
                </Text>
                <Text color="rgba(255, 255, 255, 0.8)" fontSize={{base:"sm"}}>
                The website for Systems Technologies Limited provides information on their services, which include IT infrastructure, 
                cybersecurity solutions, network management, and cloud services. 
                They cater to various sectors by delivering tailored technological solutions to enhance business operations. 
                </Text>
                <Text color="blue.200" mt="8" fontSize={{base: "md", lg:"xl"}} as={Link}  href={systemsTechUrl}>
                View Website
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
              height={{base: "430px", md:"550px", lg:"570px", xl:"550px"}}
            >
              <Image
                src={"/clickpay.jpeg"}
                alt="star"
                height={{ base: 40, md:72, lg:"300px", xl: 80 }}
                width="100%"
                borderRadius="lg"
                objectFit={"cover"}
              />
              <Box mt="4">
                <Text  color="white" fontSize={{base:"md", lg:"xl"}}>
                  Clickpay
                </Text>
                <Text color="rgba(255, 255, 255, 0.8)" fontSize={{base:"sm"}} height={{lg:"36", xl:"24"}}>
                Clickpay a user-centric fintech application designed specifically for managing and paying bills seamlessly. 
                Unlike traditional payment gateways, this
                 app focuses exclusively on simplifying the bill payment process for users without directly handling the transaction itself.
                </Text>
                <Text color="blue.200" mt="8" fontSize={{base: "md", lg:"xl"}} as={Link}  href={clickpayUrl}>
                View Website
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
              <Text fontWeight="bold" color="white" fontSize={{base:"lg", md:"6xl", lg:"3xl", xl:"6xl"}}>
                Luminate
              </Text>
              <Text color="gray" fontSize={{base: "md", lg:"lg", xl:"2xl"}}>
              Luminate is a learning Management System (LMS) using modern web technologies. 
              The system was designed to provide an intuitive and user-friendly interface for both instructors and students. 
              It has components for managing course content, including lessons, quizzes, and assignments, 
              allowing instructors to easily create, update, and organize their courses.
              </Text>
              </Box>
            </Box>
            <Box height="100%" width={{base:"100%", md:"50%"}}>
              <Image
                src="luminate.svg"
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

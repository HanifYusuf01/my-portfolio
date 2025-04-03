"use client";
import { Box, Flex, Text, Image, Link, Heading, Icon } from "@chakra-ui/react";
import { CiShare1 } from "react-icons/ci";

export default function Project() {
  const clickpayUrl = "https://clickpay.com.ng/";
  const systemsTechUrl = "https://systemstech.com.ng/";
  const ideasUrl = "https://nextgentech.ng/";
  const hrisUrl = "http://staff.systemstech.com.ng/";
  return (
    <Box bg="#141625" width="100%">
      <Box
        mx={{ base: "2", md: "12", lg: "36", xl: "56" }}
        mt={{ base: "8", md: "60" }}
        mb="20"
      >
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          mb={12}
          textAlign="start"
          bgGradient="linear(to-r, blue.300, rgb(10, 6, 90),  blue.800)"
          bgClip="text"
        >
          PORTFOLIO
        </Heading>
        <Box>
          <Box
            display="flex"
            alignItems={"center"}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "6", md: "6", lg: "12" }}
            fontFamily={"Josefin Sans Variable"}
          >
            <Box
              p="4"
              borderRadius="xl"
              bgGradient="linear(to-r, rgba(0, 0, 139, 0.3), rgba(0, 0, 0, 0.3))"
              backdropFilter="blur(30px)"
              border="1px solid white"
              width={{ base: "300px", md: "90%" }}
              height={{ base: "430px", md: "550px", lg: "570px", xl: "550px" }}
            >
              <Image
                src={"/systemTech.png"}
                alt="star"
                height={{ base: 40, md: 72, lg: "300px", xl: 80 }}
                width="100%"
                borderRadius="lg"
              />
              <Box mt="4">
                <Flex justifyContent="space-between">
                  <Text color="white" fontSize={{ base: "md", lg: "xl" }}>
                    Systems Technology Website
                  </Text>
                  <Box as={Link} href={systemsTechUrl}>
                    <CiShare1 color="white" size={20} />
                  </Box>
                </Flex>

                <Text
                  color="rgba(255, 255, 255, 0.8)"
                  fontSize={{ base: "sm" }}
                >
                  The website for Systems Technologies Limited provides
                  information on their services, which include IT
                  infrastructure, cybersecurity solutions, network management,
                  and cloud services. They cater to various sectors by
                  delivering tailored technological solutions to enhance
                  business operations.
                </Text>
              </Box>
            </Box>
            <Box
              p="4"
              borderRadius="xl"
              bgGradient="linear(to-r, rgba(0, 0, 139, 0.3), rgba(0, 0, 0, 0.3))"
              backdropFilter="blur(30px)"
              border="1px solid white"
              width={{ base: "300px", md: "90%" }}
              height={{ base: "430px", md: "550px", lg: "570px", xl: "550px" }}
            >
              <Image
                src={"/clickpay.jpeg"}
                alt="star"
                height={{ base: 40, md: 72, lg: "300px", xl: 80 }}
                width="100%"
                borderRadius="lg"
                objectFit={"cover"}
              />
              <Box mt="4">
                <Flex justifyContent="space-between">
                  <Text color="white" fontSize={{ base: "md", lg: "xl" }}>
                    Clickpay
                  </Text>
                  <Box as={Link} href={clickpayUrl}>
                    <CiShare1 color="white" size={20} />
                  </Box>
                </Flex>

                <Text
                  color="rgba(255, 255, 255, 0.8)"
                  fontSize={{ base: "sm" }}
                  height={{ lg: "36", xl: "24" }}
                >
                  Clickpay a user-centric fintech application designed
                  specifically for managing and paying bills seamlessly. Unlike
                  traditional payment gateways, this app focuses exclusively on
                  simplifying the bill payment process for users without
                  directly handling the transaction itself.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems={"center"}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "6", md: "6", lg: "12" }}
            mt="6"
          >
            <Box
              p="4"
              borderRadius="xl"
              bgGradient="linear(to-r, rgba(0, 0, 139, 0.3), rgba(0, 0, 0, 0.3))"
              backdropFilter="blur(30px)"
              border="1px solid white"
              width={{ base: "300px", md: "90%" }}
              height={{ base: "430px", md: "550px", lg: "570px", xl: "550px" }}
            >
              <Image
                src={"/Ideas.PNG"}
                alt="star"
                height={{ base: 40, md: 72, lg: "300px", xl: 80 }}
                width="100%"
                borderRadius="lg"
              />
              <Box mt="4">
                <Flex justifyContent="space-between">
                  <Text color="white" fontSize={{ base: "md", lg: "xl" }}>
                    IDEAS
                  </Text>
                  <Box as={Link} href={ideasUrl}>
                    <CiShare1 color="white" size={20} />
                  </Box>
                </Flex>
                <Text
                  color="rgba(255, 255, 255, 0.8)"
                  fontSize={{ base: "sm" }}
                >
                  A World Bank sponsored program aimed at helping young people
                  learn tech skills for free. The platform facilitates learning
                  through curated courses and mentorship program empowering the
                  next generation of tech entrepenerurs.
                </Text>
              </Box>
            </Box>
            <Box
              p="4"
              borderRadius="xl"
              bgGradient="linear(to-r, rgba(0, 0, 139, 0.3), rgba(0, 0, 0, 0.3))"
              backdropFilter="blur(30px)"
              border="1px solid white"
              width={{ base: "300px", md: "90%" }}
              height={{ base: "430px", md: "550px", lg: "570px", xl: "550px" }}
            >
              <Image
                src={"/hris.png"}
                alt="star"
                height={{ base: 40, md: 72, lg: "300px", xl: 80 }}
                width="100%"
                borderRadius="lg"
              />
              <Box mt="4">
                <Flex justifyContent="space-between">
                  <Text color="white" fontSize={{ base: "md", lg: "xl" }}>
                    SYSTEMSTECHHRIS
                  </Text>
                  <Box as={Link} href={hrisUrl}>
                    <CiShare1 color="white" size={20} />
                  </Box>
                </Flex>

                <Text
                  color="rgba(255, 255, 255, 0.8)"
                  fontSize={{ base: "sm" }}
                >
                  A comprehensive digital solution designed to centralize and automate HR processes and employee data management. 
                  The system integrates core HR functionalities including employee records management, 
                  attendance tracking, payroll processing, benefits administration, and performance evaluation.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

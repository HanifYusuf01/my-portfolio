"use client";
import {
  Box,
  Flex,
  Text,
  Button,
  InputGroup,
  Input,
  Icon,
  Link,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const githubUrl = "https://github.com/HanifYusuf01";
  const email = "https://mail.google.com/mail/u/0/?hl=en/#inbox";
  const whatsappUrl = "https://wa.link/wikakd";
  const igUrl =
    "https://www.instagram.com/haniftaiwo?igsh=NXRxMDBjcXpxM252&utm_source=qr";
  const twitterUrl = "https://x.com/Haneefowoshe";
const linkedInUrl = "https://www.linkedin.com/in/hanif-yusuf-925164236?trk=contact-info"


  return (
    <Box
      bg="#1E1E1E"
      minHeight="80vh"
      color="white"
      fontFamily={"Josefin Sans Variable"}
    >
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Flex justify="space-between" align="center" width="90%" mt="12">
          <Text fontWeight="bold" fontSize={{ base: "md", md: "32px" }}>
            Lets Connect there
          </Text>
          <Button
            bg="#016ACE"
            borderRadius="3xl"
            color="white"
            display="flex"
            alignItems="center"
            as={Link}
            href={email}
          >
            Hire me{" "}
            <Box ml="2">
              <GoArrowUpRight fontSize="24px" />
            </Box>
          </Button>
        </Flex>
      </Flex>
      <Box
        border={"1px"}
        color="#475467"
        mt={{ base: "12", lg: "24" }}
        mx={{ base: "4", lg: "16" }}
      ></Box>
      <Flex
        mx={{ base: "4", lg: "12" }}
        mt={{ base: "12", lg: "32" }}
        flexDirection={{ base: "column", lg: "row" }}
        gap="4"
      >
        <Box
          color="white"
          width={{ base: "", lg: "40%" }}
          mt={{ base: "", lg: "28" }}
        >
          <Text mb="4">
          I am Hanif Yusuf, a dedicated software developer passionate about crafting impactful web experiences. Whether you have a project in mind or just want to connect, feel free to reach out!

          </Text>
          <Box display="flex" gap="2" mb="4">
            <Link href={linkedInUrl}>
            <Icon as={FaLinkedin} boxSize={{ base: "6", sm: "8" }} />
            </Link>
            <Link href={whatsappUrl}>
              <Icon as={IoLogoWhatsapp} boxSize={{ base: "6", sm: "8" }} />
            </Link>
            <Link href={igUrl}>
              <Icon as={AiFillInstagram} boxSize={{ base: "6", sm: "8" }} />
            </Link>
            <Link href={twitterUrl}>
              <Icon as={FaTwitter} boxSize={{ base: "6", sm: "8" }} />
            </Link>

          </Box>
        </Box>
        <Box>
          <Flex
            gap={{ base: "4", lg: "16" }}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box>
            <Flex justifyContent={{md:"center", lg:"none"}} flexDir={{base:"row", lg:"column"}} gap="4">
        {/* Home Link */}
        <Link href="/">
          <Text mb="4" cursor="pointer">
            Home
          </Text>
        </Link>

        {/* Service Link */}
        <Link href="/service">
          <Text mb="4" cursor="pointer">
            Service
          </Text>
        </Link>

        {/* Experience Link */}
        <Link href="/experience">
          <Text mb="4" cursor="pointer">
            Experience
          </Text>
        </Link>

        {/* Project Link */}
        <Link href="/project">
          <Text mb="4" cursor="pointer">
            Project
          </Text>
        </Link>
      </Flex>
            </Box>
            <VStack>
              <Text color={"#71B9FE"} mb="4">
                Contact
              </Text>
              <Text mb="4">+234 916 415 9751</Text>
              <Text mb="4" as={Link} href={githubUrl}>
                https://github.com/HanifYusuf01
              </Text>
              <Text mb="4" as={Link} href={email}>
                haniftaiwo1421@gmail.com
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Flex>
      <Box
        border={"1px"}
        mt="16"
        color="#475467"
        mx={{ base: "8", lg: "16" }}
      ></Box>
      <Box
        mt={{ base: "8", lg: "24" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        pb="4"
      >
        <Text fontSize={{ base: "sm", md: "xl" }}>
          Copyright © 2024 Hanif. All Right Reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

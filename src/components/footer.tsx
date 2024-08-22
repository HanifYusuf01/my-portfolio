import {
  Box,
  Flex,
  Text,
  Button,
  InputGroup,
  Input,
  Icon,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bg="#1E1E1E" minHeight="80vh" color="white"  fontFamily={"Josefin Sans Variable"}>
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
      >
        <Box
          color="white"
          width={{ base: "", lg: "40%" }}
          mt={{ base: "", lg: "28" }}
        >
          <Text mb="4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            architecto, adipisci officiis similique enim aspernatur facere velit
            recusandae iure dignissimos sunt minus saepe voluptatum dicta,
            perspiciatis facilis rerum modi provident.
          </Text>
          <Box display="flex" gap="2" mb="4">
            <Icon as={BiLogoFacebookSquare} boxSize={{ base: "6", sm: "8" }} />
            <Icon as={FaYoutube} boxSize={{ base: "6", sm: "8" }} />
            <Icon as={IoLogoWhatsapp} boxSize={{ base: "6", sm: "8" }} />
            <Icon as={AiFillInstagram} boxSize={{ base: "6", sm: "8" }} />
            <Icon as={FaTwitter} boxSize={{ base: "6", sm: "8" }} />
          </Box>
        </Box>
        <Box>
          <Flex gap={{base:"4", lg:"16"}} flexDirection={{ base: "column", lg: "row" }}>
            <Box>
              <Text color={"#71B9FE"} mb="4">
                Navigation
              </Text>
              <Text mb="4">Home</Text>
              <Text mb="4">Service</Text>
              <Text mb="4">Experience</Text>
              <Text mb="4">Project</Text>
            </Box>
            <Box>
              <Text color={"#71B9FE"} mb="4">
                Contact
              </Text>
              <Text mb="4">+234 916 415 9751</Text>
              <Text mb="4">haniftaiwo1421@gmail.com</Text>
              <Text mb="4">https://github.com/HanifYusuf01</Text>
            </Box>
            <Box>
              <Text color={"#71B9FE"} mb="4">
                Get the latest information
              </Text>
              <InputGroup>
                <Input
                  placeholder="Enter your email"
                  borderRadius="xl"
                  width="full"
                  height="10"
                />
                <InputRightElement>
                  <Button size="sm" bgColor="#71B9FE" width="full">
                    <BiSolidSend />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
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
        mt={{base:"8", lg:"24"}}
        display="flex"
        alignItems="center"
        justifyContent="center"
        pb="4"
      >
        <Text fontSize={{base:"sm", md:"xl"}}>Copyright © 2024 Hanif. All Right Reserved</Text>
      </Box>
    </Box>
  );
};

export default Footer;

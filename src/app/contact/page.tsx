import Navbar from "@/components/navbar";
import { Box, Text } from "@chakra-ui/react";

export default function page() {
  return (
    <Box bgColor="#11071F" width="100vw" overflowX="hidden" h="100vh">
      <Box position="sticky" top="0" zIndex="sticky">
        <Navbar />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt="28" color="white" >
        <Text color={"#71B9FE"} mb="4" fontSize={{base:"50px", md:"100px"}}>
          Contact
        </Text>
        <Text mb="4" fontSize={{base:"xl", md:"3xl"}}>+234 916 415 9751</Text>
        <Text mb="4"  fontSize={{base:"xl", md:"3xl"}}>haniftaiwo1421@gmail.com</Text>
        <Text mb="4"  fontSize={{base:"xl", md:"3xl"}}>https://github.com/HanifYusuf01</Text>
      </Box>
    </Box>
  );
}

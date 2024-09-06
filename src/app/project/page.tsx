import { Box } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
export default function page () {
    return(
      <Box bgColor="#11071F" width="100vw" overflowX="hidden" h="100vh">
        <Box>
        <Project />
        </Box>
        </Box>
  ) ;
};
"use client"
import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";
import PDFViewer from "@/components/pdfViewer";

export default function page () {
  return(
    <Box bgColor="#11071F" width="100vw" overflowX="hidden" h="100vh" color="white">
       <Box position="sticky" top="0" zIndex="sticky">
        <Navbar />
      </Box>
      <Box display='flex' alignItems="center" justifyContent={"center"}>
        <Box>
        <PDFViewer pdfName="HanifYusuf.pdf"/>
        </Box>
        </Box>
      </Box>
  ) ;
};
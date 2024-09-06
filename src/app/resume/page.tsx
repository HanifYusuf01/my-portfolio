"use client"
import Navbar from "@/components/navbar";
import { Box, VStack } from "@chakra-ui/react";
import PDFViewer from "@/components/pdfViewer";

export default function page () {
  return (
    <Box bgColor="#11071F" minHeight="100vh" width="100%" overflowX="hidden" color="white">
      
        <Box flex={1} overflow="hidden" px={4} py={8}>
          <Box 
            maxWidth="600px" 
            mx="auto" 
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <PDFViewer pdfName="HanifYusuf.pdf" />
          </Box>
        </Box>
    </Box>
  );
};
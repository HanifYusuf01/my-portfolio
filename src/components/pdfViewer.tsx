'use client'
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFViewer = ({ pdfName }: { pdfName: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Use Chakra UI's useBreakpointValue to adjust the PDF width
  const pdfWidth = useBreakpointValue({ base: 300, sm: 400, md: 500, lg: 600 });

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('PDF load error:', error);
    setError(error.message);
  }

  return (
    <Box width="100%" height={{ base: "70vh", md: "80vh" }} border="1px solid #ddd" overflowY="auto">
      {error ? (
        <Text color="red.500">Error loading PDF: {error}</Text>
      ) : (
        <Document
          file={`/${pdfName}`}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          {numPages &&
            Array.from(new Array(numPages), (el, index) => (
              <Page 
                key={`page_${index + 1}`} 
                pageNumber={index + 1} 
                width={pdfWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))
          }
        </Document>
      )}
    </Box>
  );
};

export default PDFViewer;
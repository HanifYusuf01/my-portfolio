'use client'
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, Text } from '@chakra-ui/react';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFViewer = ({ pdfName }: { pdfName: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('PDF load error:', error);
    setError(error.message);
  }

  return (
    <Box mt={8} width="100%" height="600px" border="1px solid #ddd" overflowY="auto">
      {error ? (
        <Text color="red.500">Error loading PDF: {error}</Text>
      ) : (
        <Document
          file={`/${pdfName}`}  // Note the leading slash
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          {numPages &&
            Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} width={600} />
            ))
          }
        </Document>
      )}
    </Box>
  );
};

export default PDFViewer;
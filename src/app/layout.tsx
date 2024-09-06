import { Providers } from "../theme";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box  minHeight="100vh" display="flex" flexDirection="column">
          <Box position="sticky" top="0" zIndex="sticky">
            <Navbar />
          </Box>
          <Box as="main">{children}</Box>
          <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}

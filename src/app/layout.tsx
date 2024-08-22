import { Providers } from "../theme";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

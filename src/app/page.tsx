"use client";
import Hero from "@/components/hero";
import FrameWork from "@/components/Service";
import Stack from "@/components/stack";
import { Box, Divider } from "@chakra-ui/react";
import Project from "@/components/project";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Services from "@/components/Service";

export default function Page() {
  return (
    <Box bg="#141625" width="100vw" overflowX="hidden">
      <Hero />
      <Divider/>
      <Services />
      <Divider/>
      <Stack />
      <Divider/>
      <Divider/>
      <Project />
      <Divider/>
    </Box>
  );
}

"use client";
import Hero from "@/components/hero";
import FrameWork from "@/components/frameWorks";
import Stack from "@/components/stack";
import { Box } from "@chakra-ui/react";
import WorkExperience from "@/components/workExperience";
import Project from "@/components/project";
import Discussion from "@/components/discussion";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <Box bgColor="#11071F" width="100vw" overflowX="hidden">
      <Hero />
      <FrameWork />
      <Stack />
      <WorkExperience />
      <Project />
      <Discussion />
    </Box>
  );
}

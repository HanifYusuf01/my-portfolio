"use client";
import {
  Box,
  Flex,
  Image,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Certificate", path: "/certificate" },
  { name: "Project", path: "/project" },
  { name: "Resume", path: "/resume" },
  // { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(pathname);

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const handleItemClick = (path: any) => {
    router.push(path);
    setActiveItem(path);
    if (isOpen) onClose();
  };

  return (
    <Box bg="#141625">
      <IconButton
        size={"md"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
        ml="2"
        mt="2"
      />
      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        py={2}
        px={{ md: 2, lg: 4 }}
        mx={{ md: "20", lg: "36" }}
        border={{ base: "none", md: "1px solid white" }}
        borderRadius={"500px"}
        bg="#141625"
        color="white"
        justifyContent="space-between"
      >
        {/* First three nav items */}
        <HStack spacing={{ md: 2, lg: 4}}>
          {navItems.slice(0, 2).map((item, index) => (
            <Text
              key={index}
              cursor="pointer"
              bg={activeItem === item.path ? "#006CCF" : "transparent"}
              py={{ md: 2, lg: 3, xl: 4 }}
              px={{ md: 2, lg: 4, xl: 8 }}
              borderRadius="40px"
              onClick={() => handleItemClick(item.path)}
            >
              {item.name}
            </Text>
          ))}
        </HStack>
        <Image
          src="/Avatar_v3.png"
          alt="avatar"
          w={{ base: "8", md: "10", lg: "14" }}
          rounded={"3xl"}
          objectFit="cover"
        />
        <HStack spacing={{ md: 2, lg: 4 }}>
          {navItems.slice(2, 4).map((item, index) => (
            <Text
              key={index}
              cursor="pointer"
              bg={activeItem === item.path ? "#006CCF" : "transparent"}
              py={{ md: 2, lg: 3, xl: 4 }}
              px={{ md: 2, lg: 4, xl: 8 }}
              borderRadius="40px"
              onClick={() => handleItemClick(item.path)}
            >
              {item.name}
            </Text>
          ))}
        </HStack>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color="black" />
            <DrawerHeader borderBottomWidth="1px" color={"black"}>
              Menu
            </DrawerHeader>
            <DrawerBody>
              <Flex direction="column" as={"nav"}>
                {navItems.map((item, index) => (
                  <Text
                    key={index}
                    cursor="pointer"
                    fontWeight={activeItem === item.path ? "bold" : "normal"}
                    bg={activeItem === item.path ? "#006CCF" : "transparent"}
                    py={4}
                    px={8}
                    borderRadius="40px"
                    onClick={() => handleItemClick(item.path)}
                  >
                    {item.name}
                  </Text>
                ))}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navbar;

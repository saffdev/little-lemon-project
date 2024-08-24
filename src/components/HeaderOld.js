import React, { useEffect, useRef } from "react";
import { Text } from '@chakra-ui/react'
import logo from "../images/icons_assets/Logo.svg";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: logo,
    url: "./",
  },
];
const optionsHeader = [
  {
    label: 'Home',
    url: "./",
  },
  {
    label: 'About',
    url: "./about",
  },
  {
    label: 'Menu',
    url: "./menu",
  },
  {
    label: 'Reservation',
    url: "./reservation",
  },
  {
    label: 'Order Online',
    url: "./orderOnline",
  },
  {
    label: 'Login',
    url: "./login",
  },
];

const HeaderOld = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    // Handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement)
        return;
      if (prevScrollPos > currentScrollPos)
        currHeaderElement.style.transform = "translateY(0)";
      else
        currHeaderElement.style.transform = "translateY(-200px)";
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      height={100}
      alignContent='center'
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#ffffff"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={14}
          py={2}
          spacing={40}
          justifyContent="center"
          alignItems="center"
        >
          <nav>
            <HStack spacing={5}>
              {/* Add social media links based on the `socials` data */
                socials.map((social, index) => (
                  <a key={index} href={social.url} >
                    <img src={social.icon} alt="Logo" />
                  </a>
                ))
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>

              {
                optionsHeader.map((option, index) => (
                  <a style={{ cursor: "pointer", textDecoration: 'none' }} key={index} href={option.url} >
                    <Text fontSize='20px' fontFamily='Karla' color='black'>
                      {option.label}

                    </Text>
                  </a>
                ))
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default HeaderOld;

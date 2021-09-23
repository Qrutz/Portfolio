import { IconButton } from "@chakra-ui/button";
import { Flex, Heading, Spacer, VStack } from "@chakra-ui/layout";
import React from "react";
import Header from "./components/Header";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import { useColorMode } from "@chakra-ui/color-mode";
import Social from "./components/social";
import Profile from "./components/profile";



function App() {

  const { colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark"; 

  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
            QRZ
        </Heading>
      
      <Spacer></Spacer>
     
      <IconButton  ml={2} isRound={true} icon={<FaInstagram />}   > </IconButton>
      <IconButton  ml={2} isRound={true} icon={<FaLinkedin />}></IconButton>
      <IconButton  ml={2} isRound={true} icon={<FaGithub />} onClick={() => window.open("https://github.com/Qrutz")}></IconButton>
      <IconButton onClick={toggleColorMode} ml={8} isRound={true} icon={isDark ? <FaSun /> : <FaMoon />}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
      </VStack>
  );
}

export default App;

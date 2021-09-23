import { Box, Circle, Flex, Stack } from '@chakra-ui/layout';
import { Image, Button } from "@chakra-ui/react"
import { Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from "@chakra-ui/color-mode";
import React from 'react'

function Header() {

    const { colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark"; 

    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Stack>

            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px"alignSelf="flex-end" ></Circle>
            <Flex  direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text> 
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.500)" bgClip="text">Qrutz</Text> 
                <Text color={isDark ? "gray.200" : "gray.500"}>CEO and Founder of nothing.ever</Text>

                <Button mt={8} colorScheme="blue">Hire Me</Button>
            </Box>
 
            <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize="300px" src="https://avatars.githubusercontent.com/u/40356149?v=4"    />


            </Flex>
             </Stack>
    )
}

export default Header

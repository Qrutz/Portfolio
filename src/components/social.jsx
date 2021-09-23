import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaAmazon, FaFacebookF, FaFedexF, FaGoogleF, FaShopify, FaSpotify } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="24"> 
            <Icon as={FaAmazon} boxSize="50" />
            <Icon as={FaFacebookF} boxSize="50" />
            <Icon as={FaSpotify} boxSize="50" />
            <Icon as={FaShopify} boxSize="50" />
        </HStack>
    )
}

export default Social

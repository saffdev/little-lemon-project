import {Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box bg='white' borderRadius='20px'>
      <Image
        borderRadius='20px'
        src={imageSrc}
        alt={title}
      />
      <Box color='black' p='5'>
        <VStack spacing={3} align='start'>
          <Heading >{title}</Heading>
          <Text color='gray.500'>{description}</Text>
          <HStack>
            <Box>show more</Box>
            <FontAwesomeIcon size="1x" icon={faArrowRight}></FontAwesomeIcon>
          </HStack>
        </VStack>

      </Box>
    </Box>
  );
};

export default Card;

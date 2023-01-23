import { Box, Heading, HStack, Image, Text, VStack, Stack, } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const MyCard = ({ title, description, imageSrc }) => {
  return( 
     <Card backgroundColor={'white'} textAlign={'left'}>
      <Image src={imageSrc} alt={title} borderRadius={'lg'}/>
       <CardBody>      
        <Stack>
          <Heading size={'md'}>{title}</Heading>
          <Text fontSize={'sm'}>{description}</Text>
          <HStack>
            <Text fontSize={'sm'} fontWeight={'bold'}>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Stack>
       </CardBody>
    </Card>
    )
};

export default MyCard;
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ReactCountryFlag from "react-country-flag";

interface CardProps {
  imageCard: string;
  cityName: string;
  countryName: string;
  flagName: string;
}

export default function Card(props: CardProps) {
  const { cityName, countryName, flagName, imageCard } = props;
  return (
    <Flex
      flexDir={"column"}
      maxW="256px"
      maxH="279px"
      justifyContent={"space-between"}
    >
      <Image h="173px" alt="cityname" src={imageCard} />
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg="white"
        ml="24px"
      >
        <Text
          fontFamily="Barlow"
          fontStyle="normal"
          fontWeight="600"
          fontSize="20px"
          lineHeight="25px"
        >
          {cityName}
        </Text>
        <Text
          fontFamily="Barlow"
          fontStyle="normal"
          fontWeight="500"
          fontSize="16px"
          lineHeight="26px"
        >
          {countryName}
        </Text>
      </Flex>
      <Flex>
        <ReactCountryFlag countryCode={flagName} />
      </Flex>
    </Flex>
  );
}

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
      w="100%"
      justifyContent={"space-between"}
    >
      <Image h="173px" w="256px" alt="cityname" src={imageCard} />
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        bg="white"
        maxW="256px"
        w="100%"
        backgroundColor={"#FFFFF"}
        p="18px 24px 25px 24px"
      >
        <Flex flexDir={"column"} textAlign={"left"}>
          <Text
            fontFamily="Barlow"
            fontStyle="normal"
            fontWeight="600"
            fontSize="20px"
            lineHeight="25px"
            color="#47585B"
          >
            {cityName}
          </Text>
          <Text
            fontFamily="Barlow"
            fontStyle="normal"
            fontWeight="500"
            fontSize="16px"
            color="#999999"
            lineHeight="26px"
          >
            {countryName}
          </Text>
        </Flex>
        <Flex>
          <ReactCountryFlag
            countryCode={flagName}
            svg
            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
            cdnSuffix="svg"
            title={flagName}
            style={{ borderRadius: "100%", height: "30px", width: "30px" }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

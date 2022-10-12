import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface TextContinentSectionProps {
  leftText: string;
  countryNumber: number;
  languageNumber: number;
  cityNumber: number;
}

export default function TextContinentSection(props: TextContinentSectionProps) {
  const { leftText, cityNumber, languageNumber, countryNumber } = props;

  return (
    <Flex
      maxW={"1160px"}
      px={{ base: "16px", xl: "0" }}
      w="100%"
      m="0 auto"
      mt="80px"
      /* p={{ base: "1rem", md: "" }} */
      flexDir={{ base: "column", md: "row" }}
      gap="70px"
    >
      <Flex maxW={"600px"} h="auto">
        <Text
          fontStyle="normal"
          fontWeight="400"
          fontSize={{ base: "14px", md: "24px" }}
          lineHeight={{ base: "21px", md: "36px" }}
          textAlign="justify"
          color="#47585B"
          w="100%"
          h="auto"
        >
          {" "}
          {leftText}
        </Text>
      </Flex>
      <Flex maxW={"490px"} w="100%" justifyContent={"space-between"}>
        <Flex flexDir={"column"}>
          <Text
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ base: "24px", md: "48px" }}
            textAlign="center"
            color="#FFBA08"
          >
            {countryNumber}
          </Text>
          <Text
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ base: "18px", md: "24px" }}
            textAlign="center"
            color="#47585B"
          >
            países
          </Text>
        </Flex>

        <Flex flexDir={"column"}>
          <Text
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ base: "24px", md: "48px" }}
            textAlign="center"
            color="#FFBA08"
          >
            {languageNumber}
          </Text>
          <Text
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ base: "18px", md: "24px" }}
            textAlign="center"
            color="#47585B"
          >
            línguas
          </Text>
        </Flex>

        <Flex flexDir={"column"}>
          <Text
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ base: "24px", md: "48px" }}
            textAlign="center"
            color="#FFBA08"
          >
            {cityNumber}
          </Text>
          <Text
            fontStyle="normal"
            fontWeight="600"
            fontSize={{ base: "18px", md: "24px" }}
            textAlign="center"
            color="#47585B"
          >
            cidades + 100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

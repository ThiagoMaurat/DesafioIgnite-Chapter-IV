import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface IconSectionProps {
  title: string;
  iconSrc: string;
}

export default function IconSection({
  title,
  iconSrc,
}: IconSectionProps): JSX.Element {
  const [isBiggerThan375, isSmallerThan375] = useMediaQuery([
    "(min-width: 375px)",
    "(max-width: 375px)",
  ]);
  if (isBiggerThan375)
    return (
      <Box>
        <Image src={iconSrc} alt="iconSrc" />
        <Text
          fontStyle="normal"
          fontWeight="600"
          fontSize="24px"
          lineHeight="36px"
          textAlign="center"
          color="#47585B"
        >
          {title}
        </Text>
      </Box>
    );
  return (
    <HStack>
      <Box background={"#FFBA08"} w="8px" h="8px" borderRadius={"100%"}></Box>
      <Text
        fontStyle="normal"
        fontWeight="500"
        fontSize="18px"
        lineHeight="27px"
        textAlign="center"
        color="#47585B"
      >
        {title}
      </Text>
    </HStack>
  );
}

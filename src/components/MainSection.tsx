import React, { useMemo } from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Img,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import IconSection from "./IconSection";
export default function MainSection() {
  const [isBiggerThan375, isSmallerThan375] = useMediaQuery([
    "(min-width:375px)",
    "(max-width:375px)",
  ]);
  const teste = useBreakpointValue({
    base: false,
    sm: true,
  });
  const data = useMemo(
    () => [
      {
        title: "vida noturna",
        iconSrc: "./IconSection/cocktail 1.png",
      },
      {
        title: "praia",
        iconSrc: "./IconSection/surf 1.png",
      },
      {
        title: "moderno",
        iconSrc: "./IconSection/museum 1.png",
      },
      {
        title: "clássico",
        iconSrc: "./IconSection/building 1.png",
      },
      {
        title: "e mais...",
        iconSrc: "./IconSection/earth 1.png",
      },
    ],
    []
  );

  return (
    <>
      <Image
        src={useBreakpointValue({
          base: "./BannerMobile.png",
          sm: "./Banner.png",
        })}
        alt="Banner"
      />
      {teste ? (
        <HStack pt={"80px"} maxW={"1160px"} m="0 auto" justify="space-between">
          {data?.map((item, index: number) => {
            return (
              <IconSection
                key={`asd-${index}`}
                title={item.title}
                iconSrc={item.iconSrc}
              />
            );
          })}
        </HStack>
      ) : (
        <Flex
          flexWrap="wrap"
          pt={"80px"}
          maxW={"275px"}
          m="0 auto"
          justify="space-between"
        >
          {data?.map((item, index: number) => {
            return (
              <IconSection
                key={`asd-${index}`}
                title={item.title}
                iconSrc={item.iconSrc}
              />
            );
          })}
        </Flex>
      )}
      <Center mt="80px" mb="52px">
        <Box
          border="2px solid #47585B"
          h="5px"
          w="90px"
          background="#47585B"
          m="0 auto"
        />
      </Center>

      <HStack m="0 auto" maxW={"839px"} w="100%" justify="center">
        <Text
          fontStyle="normal"
          fontWeight="500"
          fontSize={{ base: "20px", sm: "36px" }}
          lineHeight="54px"
          textAlign="center"
          color="#47585B"
          whiteSpace={"break-spaces"}
          mb="20px"
        >
          {`Vamos nessa?
Então escolha seu continente`}
        </Text>
      </HStack>
    </>
  );
}

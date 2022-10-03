import React, { useMemo } from "react";
import { HStack, Image } from "@chakra-ui/react";
export default function Header() {
  return (
    <>
      <HStack w="100%" h="100px" justifyContent={"center"}>
        <Image src="/Logo.png" alt="Logo" />
      </HStack>
    </>
  );
}
